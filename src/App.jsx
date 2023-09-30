import { useState } from "react";
import { DvdScreensaver } from "stffn-react-dvd-screensaver";
import { useDispatch } from "react-redux";
import About from "./components/About";
import { setAbout } from "./components/MainSlice";

function App() {
  const dispatch = useDispatch();
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
          <div className="child" onClick={() => dispatch(setAbout(true))}>
            ABOUT
          </div>
        </DvdScreensaver>
      </div>
      <About />
    </>
  );
}

export default App;

// <DvdScreensaver className="parent" speed={speed} freezeOnBool={freeze}>
//   <div className="child">BLOCKS</div>
// </DvdScreensaver>
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
