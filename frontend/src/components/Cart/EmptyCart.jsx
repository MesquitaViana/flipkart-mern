import { Link } from 'react-router-dom';

const EmptyCart = () => {
    return (
        <div className="flex items-center flex-col gap-2 m-6">
            <div className="w-52 h-44">
                <img draggable="false" className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png" alt="Empty Cart" />
            </div>
            <span className="text-lg">Seu carrinho esta vazio!</span>
            <p className="text-xs">Adicione itens a ele.</p>
            <Link to="/products" className="bg-primary-blue text-sm text-white px-12 py-2 rounded-sm shadow mt-3">Compre agora</Link>
        </div>
    );
};

export default EmptyCart;
