import './DiceB.css';
import { useState } from 'react';

import d1 from "./assets/dice1.jpg";
import d2 from "./assets/dice2.jpg";
import d3 from "./assets/dice3.jpg";
import d4 from "./assets/dice4.jpg";
import d5 from "./assets/dice5.jpg";
import d6 from  "./assets/dice6.jpg";

export default function DiceB() {

  var diceImages = [ d1, d2, d3, d4, d5, d6 ]

  const [image1, setNewImage] = useState(diceImages[0])
  const [image2, setNewImage2] = useState(diceImages[1])
  const [ num1, setNum1 ] = useState(0)
  const [ num2, setNum2 ] = useState(0)

  const roll = () => {
    // Generate random number
    var randomNum1 = Math.floor(Math.random() * 6);
    setNum1(randomNum1)
    var randomNum2 = Math.floor(Math.random() * 6);
    setNum2(randomNum2)
    setNewImage(diceImages[randomNum1]);
    setNewImage2(diceImages[randomNum2]);

    /* Shake Dice */ 
    document.querySelector('#die-1').classList.add("shake");
    document.querySelector('#die-2').classList.add("shake");
    setTimeout(()=> {
      document.querySelector('#die-1').classList.remove("shake");
      document.querySelector('#die-2').classList.remove("shake");
    }, 100); 

  }

  return ( 
    <div className="white_background">
      <div className="dice_b">    
        <h2 id='kc'>Roll The Dice</h2> 
        <h5 id='kc2'>by Coding Artist</h5>

        <div className="db_container">
          <div className="dice-wrapper">
            <img id="die-1" src={image1} />
            <img id="die-2" src={image2} />
          </div>
          <p id="total">Your roll is {num1 + num2}</p>
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