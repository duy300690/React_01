import "./App.css";
import Toggle from "./components/toggle/Toggle";
import YoutubeList from "./components/Youtube/YoutubeList";
import Game from "./components/Tictactoe/Game";

function App() {
  return (
    <div>
      <YoutubeList>
        <h2>Lorem Ipsum</h2>
      </YoutubeList>
      <Toggle></Toggle>
      <Game></Game>
    </div>
  );
}

export default App;
