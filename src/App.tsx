import React from 'react';
import './App.css';
import Card from './components/card/Card';

const cards = [
  {
    img : 'image-equilibrium.jpg',
    title : 'equilibrium #3429',
    context : 'Our Equilibrium collection promotes balance and calm',
    value : {
      value : '0.041',
      tipeValue : 'eth',
    },
    expireData : '3 days left',
    creator : {
      creatorAvatar : 'image-avatar.png',
      creatorName : 'Jules Wyvern'
    }
  },
  {
    img : 'image-equilibrium.jpg',
    title : 'Pippo #3429',
    context : 'Our Equilibrium collection promotes balance and calm',
    value : {
      value : '0.041',
      tipeValue : 'btc',
    },
    expireData : '3 days left',
    creator : {
      creatorAvatar : 'image-avatar.png',
      creatorName : 'Alessandro Cristalli'
    }
  }
]

function App() {
  return (
    <div className="App" style={{display : 'flex'}}>
      {
        cards.map(el => {

          return (
            
            <Card data={el} />

          )
        })
      }
    </div>
  );
}

export default App;
