import React, { useState } from 'react';
import './Dice_a.css';

export default function DiceA() {
  const [catImage, setCatImage] = useState('src/pages/dice_a/assets/dice1.jpg');
  const [dogImage, setDogImage] = useState('src/pages/dice_a/assets/dice2.jpg');
  const [result, setResult] = useState('');

  function rollDice() {
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
  }

  return (
    <div className="wrapper">

      <h2>Dice Roll Game</h2>
      <h5>by Code League</h5>
      <h1>{result}</h1>  

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

import './Dice.css'
import React, { useState } from 'react';

export default function Dice() {

  const firstRandomNum = Math.floor(Math.random() * 6) + 1
  const firstDiceImage = 'assets/dice' + firstRandomNum + '.png'
  document.getElementById('cat').setAttribute('src', firstDiceImage)
  
  const secondRandomNum = Math.floor(Math.random() * 6) + 1
  const secondDiceImage = 'assets/dice' + secondRandomNum + '.png'
  document.getElementById('dog').setAttribute('src', secondDiceImage)
  
  if (firstRandomNum > secondRandomNum) {  
    document.getElementById('result').innerHTML = 'The Winner is Cat'; 
  } 
  else if (firstRandomNum < secondRandomNum) {
    document.getElementById('result').innerHTML = 'The Winner is Dog'; 
  } 
  else { document.getElementById('result').innerHTML = 'Tie';
  }  

  return (
    <div className="container">
      <h2>Dice Roll Game</h2>
      <div className="dice-container">

        <div class="wrapper">
          <h1 id='result'></h1>

          <div class="dice-area">
            <h1 id='catHead'>Cat</h1>
            <img id='cat' src='./assets/dice1.png' />
          </div>

          <div class="dice-area">
            <h1 id='dogHead'>Dog</h1>
            <img id='dog' src='./assets/dice2.png' />
          </div>

        </div>

      </div>      
    </div>
  )
}





  return (
    <div className="container">
      <div className="dice-container">
        <h2>🎲</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.</p>
      </div>      
    </div>
  )
*/