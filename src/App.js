import React  from 'react';
import {Route, Routes} from 'react-router-dom';
//In react-router-dom v6 Switch is replaced by Routes 

import Home from './pages/Home'
import Start from './pages/Start'
import Final from './pages/Final'

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path='/' exact element={<Start />}/>
          <Route path='/home' exact element={<Home />}/>
          <Route path='/final' exact element={<Final />}/>
        </Routes>
      </> 
    </div>
  );
}

export default App;
