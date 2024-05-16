import "./App.css";
import { Curtain } from "./components/Curtain/Curtain";

const mainSong = new Audio(require("./assets/sounds/lover.mp3"));
mainSong.loop = true;

function App() {
  return (
    <>
      <Curtain mainSong={mainSong} />
    </>
  );
}

export default App;
