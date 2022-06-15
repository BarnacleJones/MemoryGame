import './App.css';
import React from "react";

import Header from './components/Header';
import CardContainer from './components/CardContainer';
function App() {

  return (
    <div className="App">
      <Header></Header>      
      <CardContainer />      
    </div>
  );
}

export default App;
