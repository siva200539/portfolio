import React from 'react';
//import StarBackground from './components/StartBackground';
import Home  from '../src/pages/Home';
import {Routes,Route} from "react-router-dom";
import NavBar from './components/NavBar';
const App = () => {
  return (
    <div>
      
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App
