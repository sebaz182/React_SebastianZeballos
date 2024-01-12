import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from '../../Context/CartContext';
import './CartWidget.css';

const CartWidget = () => {
    const { totalProducts, cart } = useCartContext();
    return (
        <div className="container">
            <button>
                <FiShoppingCart />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalProducts() || cart}</span>
            </button>
        </div>
    );
};

export default CartWidget;
