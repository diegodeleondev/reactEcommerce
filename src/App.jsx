import './App.css'
import ItemCount from './components/ItemCount/ItemCount'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartWidget from './components/CartWidget/CartWidget'

function App() {

  return (
    <>
    <Navbar />
    <ItemListContainer saludos={"Bienvenido a Motorbikecommerce"} />
    </>
  )
}

export default App
