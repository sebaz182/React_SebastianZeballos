import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import arrayProducts from './Json/products.json'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const promise = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(arrayProducts.find(item=> item.id === parseInt(id)))
            },1000)
        });
        promise.then((data)=>{
            setItem(data)
        })
    }, [id])

    return (
        <div className='container'>
            <div className='row'>
                <ItemDetail item={item} />
            </div>
        </div>
    )
}

export default ItemDetailContainer
