import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import './Cart.css'


const Cart = () => {
    const { cart, totalPrice } = useCartContext();
    const { clearCart } = useCartContext();


    if (cart.length === 0) {
        return (
            <div className='cart-empti'>
                <h2 className='info'>No hay elementos en el carrito</h2>
                <Link to="/">
                    <button className="btn-total">Realizar compra</button>
                </Link>
            </div>
        );
    }

    return (
        <>
            {cart.map((product) => (
                <ItemCart key={product.id} product={product} />
            ))}
            <h2 className='total'>Total: $ {totalPrice()}</h2>

            <Link to="/checkout">
                {' '}
                <button className="btn-final btn-total">Finalizar Compra</button>
            </Link>
            
            <Link to="/">
                {' '}
                <button className="btn btn-danger" onClick={() => clearCart()}>Vaciar Carrito</button>
            </Link>
            
        </>
    );
};

export default Cart;
