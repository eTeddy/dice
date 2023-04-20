import './DiceD.css';

export default function DiceD() {
  const randomDice = () => {
    const random = Math.floor(Math.random() * 10);
    if (random >= 1 && random <= 6) {
      rollDice(document.querySelector('.dice'), random);
    } else {
      randomDice();
    }
  };

  const rollDice = (dice, random) => {
    dice.style.animation = 'rolling 4s';
    setTimeout(() => {
      switch (random) {
        case 1:
          dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
          break;
        case 6:
          dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
          break;
        case 2:
          dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
          break;
        case 5:
          dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
          break;
        case 3:
          dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
          break;
        case 4:
          dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
          break;
        default:
          break;
      }
      dice.style.animation = 'none';
    }, 4050);
  };

  return (
    <div className="DiceD">
      <h2>Roll Dice</h2>
      <h5>by Code With Hossein</h5>
      <div className="DiceD_container">
        <div className="dice">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
          <div className="face right"></div>
          <div className="face left"></div>
        </div>
        <button className="roll" onClick={randomDice}>
          Roll 🎲 Dice
        </button>
      </div>
    </div>
  );
}



/*
import './DiceD.css'

export default function DiceD() {

  const dice = document.querySelector('.dice');
  const rollBtn = document.querySelector('.roll');
  
  const randomDice = () => {
  
      const random = Math.floor(Math.random() * 10);
  
      if (random >= 1 && random <= 6) {
          rollDice(random);
      }
      else {
          randomDice();
      }
  }
  
  const rollDice = random => {
  
    dice.style.animation = 'rolling 4s';
  
      setTimeout(() => {
  
          switch (random) {
              case 1:
                  dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                  break;
              case 6:
                  dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                  break;
              case 2:
                  dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                  break;
  
              case 5:
                  dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                  break;
              case 3:
                  dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                  break; 
              case 4:
                  dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                  break;
              default:
                  break;
          }
  
          dice.style.animation = 'none';
  
      }, 4050);
  
  }
  
  //rollBtn.addEventListener('click', randomDice);

  return (
    <div className="DiceD">
      <div className="DiceD_container">
        
        <div className="dice">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
            <div className="face right"></div>
            <div className="face left"></div>
        </div>

        <button className="roll" onClick={randomDice}>
            Roll Dice
        </button>

      </div>
    </div>
  )
}
*/