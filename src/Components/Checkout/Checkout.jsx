import { useState } from "react"
import { useCartContext } from "../../Context/CartContext"
import { getFirestore, collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import './Checkout.css'


export const CheckOut = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmacion, setEmailConfirmacion] = useState('');
    const [error, setError] = useState('');
    const [orderId, setOrderId] = useState('');
    const [mensaje, setMensaje] = useState('');
    const { clearCart } = useCartContext();

    const { cart, totalPrice, removeProduct } = useCartContext();


    const manejadorFormulario = (event) => {
        event.preventDefault();


        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError('Por favor complete todos los campos requeridos');
            return;
        }

        if (email !== emailConfirmacion) {
            setError('Los email no coinciden');
            return;
        }


        const total = totalPrice();
        const order = {
            items: cart.map((producto) => ({
                id: producto.id,
                nombre: producto.name,
                cantidad: producto.quantity,
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,
        };
        Promise.all(
            order.items.map(async (productoOrder) => {
                const db = getFirestore();
                const productoRef = doc(db, 'products', productoOrder.id);

                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrder.cantidad,
                });
            })
        )
            .then(() => {
                const db = getFirestore();
                addDoc(collection(db, 'orders'), order)
                    .then((docRef) => {
                        setOrderId(docRef.id);
                        removeProduct();
                        clearCart();
                    })
                    .catch((error) => {
                        console.log('No se pudo crear la orden', error);
                        setError('Error en la orden');
                    });
            })
            .catch((error) => {
                console.log('No se puede actualizar el stock', error);
                setError('No se actualizo el stock');
            });

        setNombre('');
        setApellido('');
        setTelefono('');
        setEmail('');
        setEmailConfirmacion('');
        setMensaje('');

    };
    return (
        <div className="checkout">
            <div>
                <h2 className="titulo"> Complete el formulario para confirmar la compra </h2>
                <form className="formulario" onSubmit={manejadorFormulario}>

                    {cart.map((producto) => (
                        <div key={producto.id}>
                            <p>{''} {producto.nombre} {producto.cantidad}</p>
                            <p>{producto.precio}</p>
                        </div>
                    ))}

                    <div   >
                        <label className="lab-check">Nombre:</label>
                        <input className="input-check" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="lab-check">Apellido:</label>
                        <input className="input-check" type="text" value={apellido} onChange={(e) => setApellido(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="lab-check">Telefono:</label>
                        <input className="input-check" type="number" value={telefono} onChange={(e) => setTelefono(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="lab-check">Email:</label>
                        <input className="input-check" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="lab-check">Confirmar email:</label>
                        <input className="input-check" type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit"> Enviar </button>
                    </div>
                </form>
            </div>
            <div>
                <h2 className="titulo">Detalle de la Compra</h2>
                <h3>Precio Total: ${totalPrice()} </h3>
                {error && <p>{error}</p>}
                {orderId && (
                    
                    <h3><br/> Gracias por tu compra ❤❤❤! <br/><br/><br/> Tu numero de seguimiento es: <br /> {''} {orderId} {''} <br /></h3>

                )}
            </div>
        </div>
    );
}