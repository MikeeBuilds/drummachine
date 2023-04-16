import "./App.css";

function App() {
  const drumPads = [
    {
      text: "Q",
      
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
