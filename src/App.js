import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link"
           href="https://www.andremesquita.com"          
           rel="noopener noreferrer">
             <img src={logo} className="App-logo" alt="logo" />        
        </a>
        <p>
          Andre Mesquita<br></br>
          <span style={{fontSize:12}}>Arquiteto de Soluções</span>
        </p>
        
      </header>
    </div>
  );
}

export default App;
