import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import './ItemCart.css'

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();

    return (
        <div className="itemCart row border p-3 mb-3">
            <div className="col-md-4">
                <img src={product.img} alt={product.name} className="img-fluid" />
            </div>
            <div className="col-md-8">
                <p><strong>Nombre:</strong> {product.name}</p>
                <p><strong>Cantidad:</strong> {product.quantity}</p>
                <p><strong>Precio unitario:</strong> ${product.price}</p>
                <p><strong>Subtotal:</strong> ${product.quantity * product.price}</p>
                <button className="btn btn-danger" onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    );
};

export default ItemCart;