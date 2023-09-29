import { useState } from "react";
import { DvdScreensaver } from "stffn-react-dvd-screensaver";

function App() {
  const speed = 2;
  const [freeze, setFreeze] = useState(true);

  const toggleFreeze = () => {
    setFreeze((prev) => !prev);
  };

  return (
    <>
      <button className="freeze" onClick={toggleFreeze}>
        click
      </button>
      <div className="container">
        <DvdScreensaver className="parent" speed={speed} freezeOnBool={freeze}>
          <div className="child">ABOUT</div>
        </DvdScreensaver>
        <DvdScreensaver className="parent" speed={speed} freezeOnBool={freeze}>
          <div className="child">BLOCKS</div>
        </DvdScreensaver>
      </div>
    </>
  );
}

export default App;

// <DvdScreensaver className="parent" speed={speed} freezeOnBool={freeze}>
//   <div className="child">INFINITE DUNGEON CRAWLER</div>
// </DvdScreensaver>
// <DvdScreensaver className="parent" speed={speed} freezeOnBool={freeze}>
//   <div className="child">AD.HOC</div>
// </DvdScreensaver>
// <DvdScreensaver className="parent" speed={speed} freezeOnBool={freeze}>
//   <div className="child">LINKEDIN</div>
// </DvdScreensaver>
// <DvdScreensaver className="parent" speed={speed} freezeOnBool={freeze}>
//   <div className="child">RESUME</div>
// </DvdScreensaver>
// <DvdScreensaver className="parent" speed={speed} freezeOnBool={freeze}>
//   <div className="child">LEGACY SITE</div>
// </DvdScreensaver>
