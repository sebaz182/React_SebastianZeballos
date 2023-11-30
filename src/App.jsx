import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import Footer from './Components/Footer';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Celulares from './Components/Celulares';
import Computadoras from './Components/Computadoras';
import Notebooks from './Components/Notebooks';
import CartWidget from './Components/CartWidget';
import Error from './Components/Error';


function App() {
  return (
    <div className='App'>
      <BrowserRouter className='App'>
        <NavBar />
          <Routes>
            
            <Route path='/' element={ <ItemListContainer greeting={"Bienvenido Humano al proyecto React 👽"} /> }/>
            <Route path='celulares' element={ <Celulares /> } />
            <Route path='computadoras' element={ <Computadoras /> } />
            <Route path='notebooks' element={ <Notebooks /> } />
            <Route path='cart' element={ <CartWidget /> } />

            <Route path='*' element={ <Error /> } />

            <Route />
          </Routes>
        
        <Footer />      
      </BrowserRouter>
    </div>
    )
}

export default App
