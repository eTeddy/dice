import React, { useState } from 'react';
import './Dice_a.css';
import d1 from './assets/dice1.jpg';
import d2 from './assets/dice2.jpg';
import d3 from './assets/dice3.jpg';
import d4 from './assets/dice4.jpg';
import d5 from './assets/dice5.jpg';
import d6 from './assets/dice6.jpg';

export default function DiceA() {

  var diceimg = [ d1, d2, d3, d4, d5, d6 ]

  const [catImage, setCatImage] = useState(d1);
  const [dogImage, setDogImage] = useState(d2);
  const [result, setResult] = useState('😼 vs 🐶');

  const rollDice = () => {
    // Generate random number
    var randomNum1 = Math.floor(Math.random() * 6);
    var randomNum2 = Math.floor(Math.random() * 6);
    setCatImage(diceimg[randomNum1]);
    setDogImage(diceimg[randomNum2]);

    randomNum1 > randomNum2
    ? setResult('🎊 😺 🎊')
    : (
        randomNum1 > randomNum2
        ? setResult('🎊 😺 🎊')
        :setResult('😺 Tie 🐶')
      )
  }

  return (
    <div className="wrapper">

      <h2>Dice Roll Game</h2>
      <h5>by Code League</h5>
      <h1 id='Dice_a_result'>{result}</h1>  

      <button className='btn' onClick={rollDice}>Roll 🎲 Dice</button>        

      <div className="dice-area">
        <h1>😺</h1>
        <img id="cat" src={catImage} alt="cat dice" />
      </div>
      <div className="dice-area">
        <h1>🐶</h1>
        <img id="dog" src={dogImage} alt="dog dice" />
      </div>

    </div>
  );
}

/*
    const firstRandomNum = Math.floor(Math.random() * 6) + 1;
    const firstDiceImage = 'src/pages/dice_a/assets/dice' + firstRandomNum + '.jpg';
    setCatImage(firstDiceImage);

    const secondRandomNum = Math.floor(Math.random() * 6) + 1;
    const secondDiceImage = 'src/pages/dice_a/assets/dice' + secondRandomNum + '.jpg';
    setDogImage(secondDiceImage);

    if (firstRandomNum > secondRandomNum) {
      setResult('🎊 😺 🎊');
    } else if (firstRandomNum < secondRandomNum) {
      setResult('🎉 🐶 🎉');
    } else {
      setResult('😺 Tie 🐶');
    }
*/