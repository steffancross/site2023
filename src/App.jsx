import { useState } from "react";
import { DvdScreensaver } from "stffn-react-dvd-screensaver";
import { useDispatch } from "react-redux";
import About from "./components/About";
import Idc from "./components/Idc";
import { setAbout, setIdc } from "./components/MainSlice";
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
      <motion.div
        className="freeze"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <p>STEFFAN CROSS</p>
        <button onClick={toggleFreeze}>click</button>
      </motion.div>
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
        <DvdScreensaver className="parent" speed={speed} freezeOnBool={freeze}>
          <motion.div
            className="child"
            onClick={() => dispatch(setIdc(true))}
            variants={moversVariant}
            initial="initial"
            animate="visible"
          >
            INFINITE DUNGEON CRAWLER
          </motion.div>
        </DvdScreensaver>
      </div>
      <About />
      <Idc />
    </>
  );
}

export default App;

{
  /* <DvdScreensaver className="parent" speed={speed} freezeOnBool={freeze}>
          <div className="child">BLOCKS</div>
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
