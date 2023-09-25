const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Por favor, insira seu nome"],
    },
    email: {
        type: String,
        required: [true, "Por favor, insira seu email"],
        unique: true,
    },
    gender: {
        type: String,
        required: [true, "Por favor, insira o gênero"]
    },
    password: {
        type: String,
        required: [true, "Por favor, insira sua senha"],
        minLength: [8, "A senha devera ter 8 ou mais caracteres"],
        select: false,
    },
    avatar: {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        }
    },
    role: {
        type: String,
        default: "Usuario",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

userSchema.pre("salvar", async function (next) {

    if (!this.isModified("Senha")) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
}

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.methods.getResetPasswordToken = async function () {

    // generate token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // generate hash token and add to db
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    return resetToken;
}

module.exports = mongoose.model('Usuario', userSchema);