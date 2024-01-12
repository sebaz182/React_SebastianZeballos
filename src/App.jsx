import './App.css';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart'
import Error from './Components/Error';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './Context/CartContext';
import { CheckOut } from './Components/Checkout/Checkout';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>

        <CartProvider>
            <NavBar />
            <Routes>
            
              <Route path={'/'} element={ <ItemListContainer /> } />
              <Route path={'/category/:id'} element={ <ItemListContainer /> } />
              <Route path={'/item/:id'} element={ <ItemDetailContainer /> } />

              <Route path={'/cart'} element={ <Cart /> } />
              <Route path={'/checkout'} element={<CheckOut />} />

              <Route path={'*'} element={ <Error /> } />

            <Route />
          </Routes>
        
          <Footer />
        </CartProvider>      
      </BrowserRouter>
    </div>
    )
}

export default App
