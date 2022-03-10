import Amor from './img/Amor.PNG'
import Eu from './img/Eu.PNG'
import './Navbar.css'

function Navbar(){
  return(
    <div className='container-navbar'>
      <div className='navbar'>
        <div className='navbar1'>
          <h1>❤️</h1>
            <img src={Amor} alt="" className='Amor'/>
          <h1>❤️</h1>
        </div>
        <div className='navbar2'>
          <h1>Jogo❤️das❤️Nossas Memórias</h1>  
        </div>
        <div className='navbar3'>
          <h1>❤️</h1>
            <img src={Eu} alt="" className='eu'/> 
          <h1>❤️</h1>
        </div>
      </div>
    </div>
  )
}

export default Navbar