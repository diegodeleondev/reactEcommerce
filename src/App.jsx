import './App.css'
import ItemCount from './components/ItemCount/ItemCount'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartWidget from './components/CartWidget/CartWidget'
import Button from './components/Button/Button'
import { useState, useEffect } from 'react'
import MercadoLibre from './components/MercadoLibre/MercadoLibre'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

/* const Layout = (props) => {
  return (
    <div>
      <h2>{props.titulo}</h2>
      {props.children}
    </div>
  )
} */
const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer saludos={"Bienvenido a Motorbikecommerce"} />
{/*       <ItemCount />
 */}{      <ItemDetailContainer />     
}      <MercadoLibre />
   {/*    <Layout titulo={"Compra segura"}>
        <h3>Paga con VISA, MasterCard y Dinner's Club</h3>
      </Layout> */}
      {/* <App1 /> */}
      {/* <Count /> */}
      {/*       <App2 /> */}
   {/*    <ContadorDeVueltas /> */}
    </>
  )
}

/* const App1 = () => {
  fetch ('')

  return (
   <>
   <h1>Hola boluro</h1> 
   </>
     )
} */

/* const Count = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('accion')
    document.title = "El valor de contador es: " + count

    return () => {
      console.log("limpieza")
      document.title = "Motorbikecommerce"
    }
  }, [count])

  const increment = () => {
    setCount(count => count + 1)
  }

  console.log('render')
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>IncrementarWey</button>
    </div>
  )
}

const App2 = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <h1>Que pasa</h1>
      <button onClick={() => setShow(prev => !prev)}>Mostrar/nomostrarcontador</button>
      {show ? <ContadordeVueltas /> : null}
    </>
  )
}

const ContadorDeVueltas = () => {
  
  const [vuelta, setVuelta] = useState(0)
  const [tiempoEnSegundos, setTeimpoEnSegundos] = useState(0)
  const [ultimaVuelta, setUltimaVuelta] = useState ({vuelta: 0, tiempo: 0})
  
  useEffect (()=> {
    document.title="Vuelta: " + vuelta

return () => {
  document.title="Motorbikecommerce"
}

  }, [vuelta])

  useEffect(()=> {
    setTeimpoEnSegundos(0)
    const intervalId = setInterval(()=>setTeimpoEnSegundos(prev=>prev+1), 1000)
    return () => clearInterval (intervalId)
}, [vuelta])

const finalizarVuelta = () => {
  setUltimaVuelta ({vuelta: vuelta, tiempo: tiempoEnSegundos})
  setVuelta(prev => prev + 1)

}
  return (
    <>
      <h1>Contador de vueltas</h1>
      <h2> Tiempo en seg: {tiempoEnSegundos} </h2>
      <h2>Vuelta: {vuelta}</h2>
      <button onClick={finalizarVuelta}>Finalizar Vuelta</button>
      <div>
        <h2>Datos ultima vuelta</h2>
        <h3>Vuelta: {ultimaVuelta.vuelta}</h3>
        <h3>Tiempo: {ultimaVuelta.tiempo}</h3>
      </div>
    </>
  )
} */
export default App
