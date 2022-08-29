import React, { useState } from 'react'
import quotesList from './quotes.json'

const QuoteBox = () => {
    
    let colors = ['120B02','2E3830', '916827', 'F0D02D', '251704', '44CFCB', '4EA5D9', '2A4494', '224870', '122C34'];
    
    //Generating random indexes inside our colors array:
    const randomColorIndex = () => { return Math.floor( Math.random() * colors.length ) }

    //Setting 'colorIndex' as a random index in first place, before rendering
    const [colorIndex, setColorIndex] = useState(randomColorIndex)
    
    //Apliyng that colour to the body
    document.body.style.backgroundColor = '#' + colors[colorIndex]


    //Function to change the background, button and text colours:
    const changeColor = ()=> { 
        setColorIndex(randomColorIndex)
    }
    
    //Generating random indexes for the quotes array (quotes.json)
    const randomIndex = () => {  return Math.floor( Math.random() * quotesList.length ) } 
    const [index, setIndex] = useState(randomIndex)

    const changeQuote = () => {  setIndex(randomIndex) }

    //This will execute the button downside
    function changeValues() {
        changeColor();
        changeQuote();
    }
    
    return (
        <div className="quoteBox" style={{color: `#${colors[colorIndex]}`}}>

            <div className='quote_Desc'>
            <box-icon name='quote-left' type='solid' color='rgba(181,7,7,0.91)' id="quote_icon" ></box-icon>
                <p>{quotesList[index].quote}</p>
            </div>

            <div className='quote_Author'>
                <h3><em>{quotesList[index].author}</em></h3>
                
                <button onClick={changeValues} style={{backgroundColor: `#${colors[colorIndex]}`}}>
                    <img src="/src/assets/right-arrow.png" alt="" />
                </button>
            
            </div>
        </div>
    )
}

export default QuoteBox