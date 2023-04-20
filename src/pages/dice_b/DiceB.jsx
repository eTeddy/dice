import React, { useState } from 'react';
import './Dice_b.css';

export default function DiceB() {
  const [dieOneValue, setDieOneValue] = useState(1);
  const [dieTwoValue, setDieTwoValue] = useState(1);

  const images = [
    "src/pages/dice_b/assets/dice-01.svg",
    "src/pages/dice_b/assets/dice-02.svg",
    "src/pages/dice_b/assets/dice-03.svg",
    "src/pages/dice_b/assets/dice-04.svg",
    "src/pages/dice_b/assets/dice-05.svg",
    "src/pages/dice_b/assets/dice-06.svg",
  ];
    
  function roll() {
    const newDieOneValue = Math.floor(Math.random()*6) + 1;
    const newDieTwoValue = Math.floor(Math.random()*6) + 1;
    setDieOneValue(newDieOneValue);
    setDieTwoValue(newDieTwoValue);
    console.log(newDieOneValue, newDieTwoValue);
    document.querySelector("#total").innerHTML = "Your roll is " + (newDieOneValue + newDieTwoValue);
    /* Shake Dice */ 
    document.querySelector('#die-1').classList.add("shake");
    document.querySelector('#die-2').classList.add("shake");
    setTimeout(()=> {
      document.querySelector('#die-1').classList.remove("shake");
      document.querySelector('#die-2').classList.remove("shake");
    }
   ,100);    
  }

  return ( 
    <div className="white_background">
      <div className="dice_b">    
        <h2 id='kc'>Roll The Dice</h2> 
        <h5 id='kc2'>by Coding Artist</h5>

        <div className="db_container">
          <div className="dice-wrapper">
            <img id="die-1" src={images[dieOneValue - 1]} alt={`Die 1: ${dieOneValue}`} />
            <img id="die-2" src={images[dieTwoValue - 1]} alt={`Die 2: ${dieTwoValue}`} />
          </div>
          <p id="total">Your roll is {dieOneValue + dieTwoValue}</p>
          <button onClick={roll}>ROLL THE DICE</button>
        </div>    
      </div>
    </div>
  );
}



/*
import './Dice_b.css'

export default function Dice_b() {
  
  let images = [
    "src/pages/dice_b/assets/dice-01.svg",
    "src/pages/dice_b/assets/dice-02.svg",
    "src/pages/dice_b/assets/dice-03.svg",
    "src/pages/dice_b/assets/dice-04.svg",
    "src/pages/dice_b/assets/dice-05.svg",
    "src/pages/dice_b/assets/dice-06.svg",
  ];
    
    let dice = document.querySelectorAll("img");
    
    function roll(){
      dice.forEach(function(die){
          die.classList.add("shake");
      });

      setTimeout(function(){
          dice.forEach(function(die){
              die.classList.remove("shake");
          });
          let dieOneValue = Math.floor(Math.random()*6);
          let dieTwoValue = Math.floor(Math.random()*6);
          console.log(dieOneValue,dieTwoValue);
          document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
          document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
          document.querySelector("#total").innerHTML = "Your roll is " + ( (dieOneValue +1) + (dieTwoValue + 1) );
      },
      1000
      );
    }
    roll();

  return ( 
    <div className="white_background">
      <div className="dice_b">    
        <h1>Roll The Dice</h1> 
        <h3>by Coding Artist</h3>

        <div class="container">
          <div class="dice-wrapper">
            <img  id="die-1" />
            <img  id="die-2" />
          </div>
          <p id="total"></p>
          <button onClick={roll}>ROLL THE DICE</button>
        </div>    

      </div>
    </div>
  );
}
*/