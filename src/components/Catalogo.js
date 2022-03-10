import { useState } from 'react'
import './Catalogo.css'
import SingleCard from './SingleCard'

const cardImage = [
  {id: 1, "src": "/img/tiketTorre.png"},
  {id: 2, "src": "/img/tiketC.png"},
  {id: 3, "src": "/img/tiketCinema.png"},
  {id: 4, "src": "/img/tiketIgreja.png"},
  {id: 5, "src": "/img/tiketControle.png"},
  {id: 6, "src": "/img/tiketDog.png",}
]

function Catalogo(){
    const [cards, setCards] = useState([])
    const [disable, setDisable] = useState(false)
    //shuffle cards
    const shuffleCards = () => {
      const shuffleCards = [...cardImage]
        setCards(shuffleCards)
        setDisable(true)
    }

    return(
      <div className='catalogo'>
        <div className='card-grid'>
          {cards.map(card => (
            <SingleCard card={card}/>
          ))}
        </div>
        <div className='button-container'>
          <button disabled={disable} onClick={shuffleCards} className='button'>🎟️  Adiquirir Ticket  🎟️</button>
        </div>
      </div>
    )
}

export default Catalogo