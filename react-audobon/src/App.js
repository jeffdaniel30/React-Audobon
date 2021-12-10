import React from 'react';
import Birds from './components/Birds';
import BirdDetails from './components/BirdDetails';
import { Route, Routes } from 'react-router-dom';
// import {useState} from 'react'
function App() {

  // const [birds, setBirds] = useState([])
  return (
    <div>
      <header>
        <h1>
          <a href="/">Audubon Society</a>
        </h1>
      </header>
      <Routes>
        <Route path="/" exact element={Birds} />
        <Route path="/details/:id" element={BirdDetails} />
      </Routes>
    </div>
  );
}

export default App;