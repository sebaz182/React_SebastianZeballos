import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import Footer from './Components/Footer';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import CartWidget from './Components/CartWidget';
import Error from './Components/Error';
import ItemDetailContainer from './Components/ItemDetailContainer';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <NavBar />
          <Routes>
            
            <Route path={'/'} element={ <ItemListContainer /> } />
            <Route path={'/category/:category'} element={ <ItemListContainer /> } />
            <Route path={'/item/:id'} element={ <ItemDetailContainer /> } />

            <Route path={'cart'} element={ <CartWidget /> } />

            <Route path={'*'} element={ <Error /> } />

            <Route />
          </Routes>
        
        <Footer />      
      </BrowserRouter>
    </div>
    )
}

export default App
