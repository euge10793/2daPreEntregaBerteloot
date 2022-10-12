import React, { useState } from 'react'
import './App.css';
import Counter from './components/Counter/Counter'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <Counter />
    </div>
  );
}

export default App;
