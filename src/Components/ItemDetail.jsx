import React from 'react'

const ItemDetail = ({item}) => {
    return (
        <div className='row'>
            <div className='col-md-4 iifset-md-4'>
                <img src={item.img} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <p>$ {item.price}</p>
                <p>Stock: {item.stock}</p>
            </div>         
        </div>
    )
}

export default ItemDetail
