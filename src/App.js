import './App.css';
import React from 'react';
import Card from './componets/card'
import Title from './componets/title'

function App() {
  let [number, setNumber] = React.useState(Math.floor(Math.random() * 10) + 1);


  function rotateCard() {
    const card = document.querySelector('.card-inner');
    card.style.transform = card.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
    setNumber(Math.floor(Math.random() * 10) + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Title/>
        <Card number = {number}/>
        <button class="rotate-button" onClick={rotateCard}>Mostrar Carta</button>
      </header>
    </div>
  );
}

export default App;
