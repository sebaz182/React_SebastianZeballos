import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import arrayProducts from './Json/products.json'
import ItemList from './ItemList'



const ItemListContainer = () => {

    const [item, setItem] = useState([])
    const { category } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await new Promise((resolve) => {
                    setTimeout(function () {
                        resolve(category ? arrayProducts.filter(item => item.category === category) : arrayProducts)
                    }, 1500);
                });
                setItem(data);
            }
            catch (error) {
                console.log('Error: ', error);
            }
        };
        fetchData();
    }, [category])


    return (
        <div className='container'>
            <div className='row'>
                <ItemList  item={item}/>
            </div>
        </div>
    )
}

export default ItemListContainer
