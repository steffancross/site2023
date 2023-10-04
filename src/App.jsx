import { useState } from "react";
import { DvdScreensaver } from "stffn-react-dvd-screensaver";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import {
  setAbout,
  setIdc,
  setAdhoc,
  setBlocks,
  setOverlay,
} from "./components/MainSlice";
import resume from "./assets/SteffanCross_Resume.pdf";
import About from "./components/About";
import Idc from "./components/Idc";
import Blocks from "./components/Blocks";
import Adhoc from "./components/Adhoc";
import Overlay from "./components/Overlay";

function App() {
  const dispatch = useDispatch();
  const speed = 3;
  const [freeze, setFreeze] = useState(true);

  const toggleFreeze = () => {
    setFreeze((prev) => !prev);
  };

  setTimeout(() => {
    toggleFreeze();
  }, 1000);

  const handlePopup = (name) => {
    dispatch(setOverlay(true));

    switch (name) {
      case "about":
        dispatch(setAbout(true));
        break;
      case "blocks":
        dispatch(setBlocks(true));
        break;
      case "adhoc":
        dispatch(setAdhoc(true));
        break;
      case "idc":
        dispatch(setIdc(true));
    }
  };

  const moversVariant = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 1,
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
        <button onClick={toggleFreeze}>UN / FREEZE</button>
      </motion.div>
      <div className="container">
        <DvdScreensaver className="parent" speed={speed} freezeOnBool={freeze}>
          <motion.div
            className="child"
            onClick={() => handlePopup("about")}
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
            onClick={() => handlePopup("idc")}
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
            onClick={() => handlePopup("adhoc")}
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
            onClick={() => handlePopup("blocks")}
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
            rel="noreferrer"
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
            rel="noreferrer"
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
            rel="noreferrer"
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
      <Overlay />
    </>
  );
}

export default App;
