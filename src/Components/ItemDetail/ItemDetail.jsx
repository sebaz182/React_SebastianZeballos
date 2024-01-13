import React, { useState } from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import './ItemDetail.css'

const ItemDetail = ({ item }) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(item, quantity);
    };

    return (
        <Row className="justify-content-center detail">
            <Col md={6}>
                <Image src={item.img} alt={item.title} className='img-detail'/>
            </Col>
            <Col md={6}>
                <h2>{item.name}</h2>
                <p>{item.desc}</p>
                <p> $ {item.price}</p>
                <p> Cantidad: {item.stock}</p>
                <div className='itemCount'>
                    {goToCart ? (
                        <Link to='/cart'>
                            <Button variant='danger'>Terminar compra</Button>
                        </Link>
                    ) : (
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                    )}
                </div>
            </Col>
        </Row>
    );
};

export default ItemDetail;

