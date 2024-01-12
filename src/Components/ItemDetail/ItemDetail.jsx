import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';


const ItemDetail = ({ item }) => {

    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext()
    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(item, quantity);
    }

    return (
        <div>
            <div className='col-md-4 offset-md-4'>
                <img src={item.img} className='img-fluid' alt={item.title} />
                <h2>{item.name}</h2>
                <p>{item.desc}</p>
                <p> $ {item.price}</p>
                <p> Cantidad: {item.stock}</p>
            </div>
            <div>
                {goToCart ? <Link to='/cart'>Terminar compra</Link> : <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />}
            </div>
        </div>
    )
}

export default ItemDetail
