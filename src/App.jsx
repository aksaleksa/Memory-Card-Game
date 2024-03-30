import { useState } from 'react'
import { Card } from './components/Card.jsx'
import Apple from './images/Apple.jpg'
import Banana from './images/Banana.jpg'
import Cherry from './images/Cherry.jpg'
import Grape from './images/Grape.jpg'
import Lemon from './images/Lemon.jpg'
import Mango from './images/Mango.jpg'
import Orange from './images/Orange.jpg'
import Pear from './images/Pear.jpg'
import Pineapple from './images/Pineapple.jpg'
import Raspberry from './images/Raspberry.jpg'
import Strawberry from './images/Strawberry.jpg'
import Watermelon from './images/Watermelon.jpg'
import './App.css'

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selections, setSelections] = useState([]);
  const fruits = [
    Apple, Banana, Cherry, Grape,
    Lemon, Mango, Orange, Pear,
    Pineapple, Raspberry, Strawberry, Watermelon
  ];

  const fruitNames = [
    'Apple', 'Banana', 'Cherry', 'Grape',
    'Lemon', 'Mango', 'Orange', 'Pear',
    'Pineapple', 'Raspberry', 'Strawbery', 'Watermelon'
  ];

  let indices = [];

  const chooseIndices = () => {
    let index = Math.floor(Math.random() * 12);
    while (indices.length < 12) {
        while (indices.includes(index)) {
            index = Math.floor(Math.random() * 12);
        }
        indices.push(index);
    }
}

chooseIndices();

const playRound = (selection) => {
  if (!selections.includes(selection)) {
    setSelections([...selections, selection]);
    setScore(score + 1);
  }
  else {
    if (score === 12) {
      alert("Congratulations, you've achieved the maximum score!");
      setHighScore(score)
      setScore(0);
      setSelections([]);
      chooseIndices();
    }
    else {
      alert(`Hard luck, you've already chosen that fruit. Final score: ${score}`)
      if (score > highScore) setHighScore(score);
      setScore(0);
      setSelections([])
      chooseIndices();
    }
  }
}

  return (
    <div>
        <div id="scores">
            <p>Current Score: {score}</p>
            <p>High Score: {highScore}</p>
        </div>
        <div id="card-grid">
          <Card image={fruits[indices[0]]} name={fruitNames[indices[0]]} playRound={playRound}/>
          <Card image={fruits[indices[1]]} name={fruitNames[indices[1]]} playRound={playRound}/>
          <Card image={fruits[indices[2]]} name={fruitNames[indices[2]]} playRound={playRound}/>
          <Card image={fruits[indices[3]]} name={fruitNames[indices[3]]} playRound={playRound}/>
          <Card image={fruits[indices[4]]} name={fruitNames[indices[4]]} playRound={playRound}/>
          <Card image={fruits[indices[5]]} name={fruitNames[indices[5]]} playRound={playRound}/>
          <Card image={fruits[indices[6]]} name={fruitNames[indices[6]]} playRound={playRound}/>
          <Card image={fruits[indices[7]]} name={fruitNames[indices[7]]} playRound={playRound}/>
          <Card image={fruits[indices[8]]} name={fruitNames[indices[8]]} playRound={playRound}/>
          <Card image={fruits[indices[9]]} name={fruitNames[indices[9]]} playRound={playRound}/>
          <Card image={fruits[indices[10]]} name={fruitNames[indices[10]]} playRound={playRound}/>
          <Card image={fruits[indices[11]]} name={fruitNames[indices[11]]} playRound={playRound}/>
        </div>
    </div>
    
  )
}

export default App