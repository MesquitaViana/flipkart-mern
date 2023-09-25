const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Por favor entre com o nome do produto"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Por favor entre com a descrição do produto"]
    },
    highlights: [
        {
            type: String,
            required: true
        }
    ],
    specifications: [
        {
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        }
    ],
    price: {
        type: Number,
        required: [true, "Por favor, insira o preço do produto"]
    },
    cuttedPrice: {
        type: Number,
        required: [true, "Por favor, insira o preço reduzido"]
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    brand: {
        name: {
            type: String,
            required: true
        },
        logo: {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            }
        }
    },
    category: {
        type: String,
        required: [true, "Por favor, insira a categoria do produto"]
    },
    stock: {
        type: Number,
        required: [true, "Por favor, insira o estoque do produto"],
        maxlength: [4, "Estoque não pode exceder o limite"],
        default: 1
    },
    warranty: {
        type: Number,
        default: 1
    },
    ratings: {
        type: Number,
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "Usuario",
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],

    user: {
        type: mongoose.Schema.ObjectId,
        ref: "Usuario",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Produto', productSchema);