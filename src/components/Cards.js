import {useState} from 'react'
import Card from './Card'
import './Cards.css'

function Cards(){
  const [items, setItems] = useState ([
    {id: 1, img:'/img/chocolateF2.png', stat: ""},
    {id: 1, img:'/img/chocolateF2.png', stat: ""},
    {id: 2, img:'/img/CinemaF.png', stat: ""},
    {id: 2, img:'/img/CinemaF.png', stat: ""},
    {id: 3, img:'/img/controleF.png', stat: ""},
    {id: 3, img:'/img/controleF.png', stat: ""},
    {id: 4, img:'/img/dogF.png', stat: ""},
    {id: 4, img:'/img/dogF.png', stat: ""},
    {id: 5, img:'/img/igraja.png', stat: ""},
    {id: 5, img:'/img/igraja.png', stat: ""},
    {id: 6, img:'/img/Torre.png', stat: ""},
    {id: 6, img:'/img/Torre.png', stat: ""},
  ].sort(() => Math.random() - 0.5))

  const [prev, setPrev] = useState(-1)

  function handleClick(id){
    if(prev === -1){
      items[id].stat = "active"
      setItems([...items])
      setPrev(id)
      
    } else {
      check(id) 
    }
  }

  function check(current){
    if(items[current].id === items[prev].id){
      items[current].stat = "correct"
      items[prev].stat = "correct"
      setPrev(-1)
    }else{
      items[current].stat = "wrong"
      items[prev].stat = "wrong"
      setItems([...items])

      setTimeout(() => {
        items[current].stat = ""
        items[prev].stat = ""
        setItems([...items])
        setPrev(-1)
      }, 1000);
    }
  } 

  return (
    <div className='game-container'>
      <div className="container">
        { items.map((item, index) =>(
          <Card key={index} item={item} id={index} handleClick={handleClick}/>
        )) }      
      </div>
    </div>
  )
}

export default Cards