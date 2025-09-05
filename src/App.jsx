import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Headerbar from "./components/Headerbar";
import Musicplayer from "./components/Musicplayer";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <Headerbar />
      <div className="h-[80%] flex">
        <Sidebar />
        <Display />
      </div>
      <Musicplayer />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
