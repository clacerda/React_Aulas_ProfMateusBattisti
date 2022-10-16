// CSS
import './App.css';
// REACT
import {useCallback, useEffect, useState} from 'react';
//Dados
import {wordList, wordsList} from "./data/word"
//Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]

function App() {

    const [gameStage, setGameStage] = useState(stages[0].name)
    const [words] = useState(wordsList);

    const [pickedWord, setPickdWord] = useState("");
    const [pickedCategory, setPickedCategory] = useState("");
    const [letters, setLetters] = useState([]);

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [guesses, setGuesses] = useState(3)
    const [score, setScore] = useState(0);

    const pickWordAndPickCategory = () => {
    // pick a rendom category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //  console.log(category);

    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category}

    // console.log(word)
    // console.log(words[category])

  }


  // starts the secret word game
  const startGame = () =>{
    //pick word and pick category
   const {word, category } =  pickWordAndPickCategory();

   // create an array of letters
   let wordLetters = word.split("")

   wordLetters = wordLetters.map((letra) => letra.toLowerCase());

   console.log(word, category, wordLetters);


   //fill states
   setPickdWord(word);
   setPickedCategory(category);
   setLetters(wordLetters);

   setGameStage(stages[1].name);
  }

  // process the letter input
  const verifyLetter = (letter) => {
    console.log(letter)
  }

  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
       {gameStage === 'start' && <StartScreen startGame={startGame} />}
       {gameStage === 'game' && <Game verifyLetter={verifyLetter} 
                                      pickedWord = {pickedWord} 
                                      pickedCategory = {pickedCategory} 
                                      letters = {letters}  
                                      guessedLetters = {guessedLetters} 
                                      wrongLetters = {wrongLetters}
                                      guesses = {guesses}
                                      score = {score} />}
       {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
