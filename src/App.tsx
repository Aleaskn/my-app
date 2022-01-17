import React from 'react';
import './App.css';
import Card from './components/card/Card';
import { ReactComponent as IconEth } from '../../assets/icon/icon-ethereum.svg';

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
    img : 'polpo.png',
    title : 'Polpo con patate #1603',
    context : 'Ciao, sono Polpo!',
    value : {
      value : '15K',
      tipeValue : '$',
    },
    expireData : '5 days left',
    creator : {
      creatorAvatar : 'polpo.png',
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
