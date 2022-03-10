import { Link } from 'react-router-dom'
import Cards from '../components/Cards'
import Navbar from '../components/Navbar'

import '../index.css'

function Home(){
  return(
    <div className='home'>
        <Navbar />
        <Cards /> 
        <div className='botton'>
          <h2>Se você conseguiu acertar todos, aperte o botão!</h2>

          <div className='button-home'>
            <Link to="/final">
              <button className='button-ini'>Próximo passo</button>   
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Home