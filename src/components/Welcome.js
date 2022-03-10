import { Link } from 'react-router-dom'
import Presente from './img/presente2.png'
import './Welcome.css'

function Welcome(){
  return(
    <div>
      <div className='container-welcome'>
        <div className="container-start">
          <h1>Essa é sua surpresa !</h1>
          <Link to="/home">
            <img src={Presente} alt="" className='presente'></img>
          </Link>
          <h1>Ficou bem Simples mais foi de coração</h1>
          <h2>Clique na sua surpresa! </h2>
        </div>
      </div>
    </div>
  )
}

export default Welcome