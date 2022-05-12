import './App.css';
import React, { useState, useContext } from "react";
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz'
import EndScreen from './components/EndScreen';

import { QuizContext } from './Helpers/Contexts'

function App() {

  const [gameState, setGameState] = useState("menu");
  const [score, setSroce] = useState(0)

  return (
    <div className="App">
      <h1>Quiz App </h1>
      <QuizContext.Provider value={{ gameState, setGameState,score,setSroce }}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endscreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
