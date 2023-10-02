import { useState } from "react";
import { DvdScreensaver } from "stffn-react-dvd-screensaver";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { setAbout, setIdc, setAdhoc, setBlocks } from "./components/MainSlice";
import resume from "./assets/SteffanCross_Resume.pdf";
import About from "./components/About";
import Idc from "./components/Idc";
import Blocks from "./components/Blocks";
import Adhoc from "./components/Adhoc";

function App() {
  const dispatch = useDispatch();
  const speed = 3;
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
        <DvdScreensaver className="parent" speed={speed} freezeOnBool={freeze}>
          <motion.div
            className="child"
            onClick={() => dispatch(setAdhoc(true))}
            variants={moversVariant}
            initial="initial"
            animate="visible"
          >
            AD.HOC
          </motion.div>
        </DvdScreensaver>
        <DvdScreensaver className="parent" speed={speed} freezeOnBool={freeze}>
          <motion.div
            className="child"
            onClick={() => dispatch(setBlocks(true))}
            variants={moversVariant}
            initial="initial"
            animate="visible"
          >
            BLOCKS
          </motion.div>
        </DvdScreensaver>
        <DvdScreensaver className="parent" speed={speed} freezeOnBool={freeze}>
          <motion.a
            href="https://www.linkedin.com/in/steffancross/"
            target="_blank"
            className="child"
            variants={moversVariant}
            initial="initial"
            animate="visible"
          >
            LINKEDIN
          </motion.a>
        </DvdScreensaver>
        <DvdScreensaver className="parent" speed={speed} freezeOnBool={freeze}>
          <motion.a
            href="https://steffancross.github.io/"
            target="_blank"
            className="child"
            variants={moversVariant}
            initial="initial"
            animate="visible"
          >
            LEGACY SITE
          </motion.a>
        </DvdScreensaver>
        <DvdScreensaver className="parent" speed={speed} freezeOnBool={freeze}>
          <motion.a
            href={resume}
            target="_blank"
            className="child"
            variants={moversVariant}
            initial="initial"
            animate="visible"
          >
            RESUME
          </motion.a>
        </DvdScreensaver>
        <DvdScreensaver className="parent" speed={speed} freezeOnBool={freeze}>
          <motion.a
            href="https://github.com/steffancross"
            target="_blank"
            className="child"
            variants={moversVariant}
            initial="initial"
            animate="visible"
          >
            GITHUB
          </motion.a>
        </DvdScreensaver>
      </div>
      <About />
      <Idc />
      <Blocks />
      <Adhoc />
    </>
  );
}

export default App;
