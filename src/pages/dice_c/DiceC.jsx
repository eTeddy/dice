import './DiceC.css';
import { useState } from 'react';

import DiceImage1 from "./images/Dice1.png";
import DiceImage2 from "./images/Dice2.png";
import DiceImage3 from "./images/Dice3.png";
import DiceImage4 from "./images/Dice4.png";
import DiceImage5 from "./images/Dice5.png";
import DiceImage6 from "./images/Dice6.png";

export default function DiceC() {

  var diceImages = [
    DiceImage1,
    DiceImage2,
    DiceImage3,
    DiceImage4,
    DiceImage5,
    DiceImage6
  ]

  const [image, setNewImage] = useState(diceImages[0])
  const [image2, setNewImage2] = useState(diceImages[1])

  const rollDice = () => {
    // Generate random number
    var randomNum1 = Math.floor(Math.random() * 6);
    var randomNum2 = Math.floor(Math.random() * 6);
    setNewImage(diceImages[randomNum1]);
    setNewImage2(diceImages[randomNum2]);
  }


  return (
    <div className="dc">
      <center>
        <h2>Dice Roller</h2>
        <h5>by Shaun Halverson</h5>
        <div className='dc_wrapper'>
          <img className='square' src={image}></img>
          <img className='square' src={image2}></img>
        </div>
        <button type="button" onClick={rollDice}>Roll 🎲 Dice</button>
      </center>
    </div>
  );
}