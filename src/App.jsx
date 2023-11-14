import './App.css'
import NavBar from './Components/Navbar'
import ItemListContainer from './Components/ItemListContainer'
import Footer from './Components/Footer'


function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido Humano al proyecto React"} />
      <Footer />
    </div>
    )
}

export default App
