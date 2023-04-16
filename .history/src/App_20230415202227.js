import "./App.css";

function App() {
  const drumPads = [
    {
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      text: "A",
      
  ];

  function playSound(selector) {
    const audio = document.getElementById(selector);
    audio.play();
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display"></div>
        <div className="drum-pads">
        {drumPads.map((drumPad) => (
          <div onClick={() => {
            playSound(drumPad.text)
          }} className="drum-pad" id={drumPad.src}>
            {drumPad.text}
            <audio className="clip" id={drumPad.text} src={drumPad.src}></audio>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
