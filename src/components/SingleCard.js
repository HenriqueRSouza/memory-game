export default function SingleCard({card}){
  return(
    <div className='card-catalogo'>
      <img  className='front' src={card.src} alt='card-front' /> 
    </div>
  )
}