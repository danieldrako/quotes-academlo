import { useState } from 'react'
import './App.css'
import quotes from './json/quotes.json'
import QuoteBox from './components/QuoteBox'
function App() {

/* Función para obtener citas aleatorias  */
  const getRandomQuote = arr => {
  const indexRandom = Math.floor(Math.random()*arr.length)
  return arr[indexRandom]
   }

/* Función para obtener colores aleatorios*/   
const getRandomColor = () => {
     let myRandomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
      return myRandomColor;
   }


 /* variables para ejecutar las funciones aleatorias  */
 let quoteRandom = getRandomQuote(quotes)
 let colorRandom = getRandomColor()

  /*useState que actualiza el estado de del color y la cita */
  const [randomQuote, setRandomQuote] = useState(quoteRandom)
  const [randomColors, setRandomColors] = useState(colorRandom)
  
   

/* Función que ejecuta la actualización del estado en de color y cita  */
  const getRandomElements = () => {
    quoteRandom = getRandomQuote(quotes)
    colorRandom = getRandomColor()

    setRandomQuote(quoteRandom)
    setRandomColors(colorRandom)
    
  }

/* Objeto con el estilo de color para el fondo  */
  const objectStyle = {
    backgroundColor: randomColors
  }



  return (
    <div className="App" style = {objectStyle}>
      <QuoteBox
        randomQuote = {randomQuote}
        randomColors = {randomColors}
        getRandomElements = {getRandomElements}
      />
    </div>
  )
}

export default App
