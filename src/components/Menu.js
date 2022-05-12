import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Menu() {
  const { gameState, setGameState, userName, setUserName } = useContext(
    GameStateContext
  );
  return (
    <div className="Menu">
      <button
        onClick={() => {
          setGameState("");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Menu;