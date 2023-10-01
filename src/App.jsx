import { useState } from "react";
import { DvdScreensaver } from "stffn-react-dvd-screensaver";
import { useDispatch } from "react-redux";
import About from "./components/About";
import { setAbout } from "./components/MainSlice";
import { motion } from "framer-motion";

function App() {
  const dispatch = useDispatch();
  const speed = 2.5;
  const [freeze, setFreeze] = useState(true);
  const [firstVisit, setFirstVisit] = useState(true);

  const toggleFreeze = () => {
    setFreeze((prev) => !prev);
  };

  if (firstVisit) {
    setTimeout(() => {
      toggleFreeze();
    }, 1000);
    setFirstVisit(false);
  }

  const moversVariant = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 1.5,
      },
    },
  };

  return (
    <>
      <button className="freeze" onClick={toggleFreeze}>
        click
      </button>
      <div className="container">
        <DvdScreensaver className="parent" speed={speed} freezeOnBool={freeze}>
          <motion.div
            className="child"
            onClick={() => dispatch(setAbout(true))}
            variants={moversVariant}
            initial="initial"
            animate="visible"
          >
            ABOUT
          </motion.div>
        </DvdScreensaver>
      </div>
      <About />
    </>
  );
}

export default App;

{
  /* <DvdScreensaver className="parent" speed={speed} freezeOnBool={freeze}>
          <div className="child">BLOCKS</div>
        </DvdScreensaver>
        <DvdScreensaver className="parent" speed={speed} freezeOnBool={freeze}>
          <div className="child">INFINITE DUNGEON CRAWLER</div>
        </DvdScreensaver>
        <DvdScreensaver className="parent" speed={speed} freezeOnBool={freeze}>
          <div className="child">AD.HOC</div>
        </DvdScreensaver>
        <DvdScreensaver className="parent" speed={speed} freezeOnBool={freeze}>
          <div className="child">LINKEDIN</div>
        </DvdScreensaver>
        <DvdScreensaver className="parent" speed={speed} freezeOnBool={freeze}>
          <div className="child">RESUME</div>
        </DvdScreensaver>
        <DvdScreensaver className="parent" speed={speed} freezeOnBool={freeze}>
          <div className="child">LEGACY SITE</div>
        </DvdScreensaver> */
}
