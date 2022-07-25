import React from 'react'

const QuoteBox = ({randomQuote, randomColors, getRandomElements} ) => {
    const objectStyle = {
        color:randomColors
      }
      
      const objectBgStyle = {
        backgroundColor: randomColors,
        color: '#ffff'
      }
   return (
    <article className='box' style = {objectStyle} >
        <header>
          <h1 ><span>"</span>{`${randomQuote.quote}`}</h1>
        </header>
        <div className='reference'>
          <h2>{`${randomQuote.author}`}</h2>
          <button onClick={getRandomElements} style ={objectBgStyle} className = 'box_btn' >&#8634;</button>
        </div>
        
      </article> 

  )
}

export default QuoteBox
