import { useState, useEffect } from "react";
import { DvdScreensaver } from "stffn-react-dvd-screensaver";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  setAbout,
  setIdc,
  setAdhoc,
  setBlocks,
  setOverlay,
} from "./components/MainSlice";
import Overlay from "./components/Overlay";

function App() {
  const dispatch = useDispatch();
  const speed = 2;
  const [freeze, setFreeze] = useState(true);
  const [freezeSwitch, setFreezeSwitch] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const overlay = useSelector((state) => state.main.overlay);

  const movers = [
    { text: "ABOUT", action: () => handlePopup("about") },
    {
      text: "INFINITE DUNGEON CRAWLER",
      action: () => handlePopup("idc"),
    },
    { text: "AD.HOC", action: () => handlePopup("adhoc") },
    { text: "BLOCKS", action: () => handlePopup("blocks") },
    {
      text: "LINKEDIN",
      href: "https://www.linkedin.com/in/steffancross/",
    },
    { text: "LEGACY SITE", href: "https://steffancross.github.io/" },
    { text: "RESUME", href: "/SteffanCross_Resume.pdf" },
    { text: "GITHUB", href: "https://github.com/steffancross" },
  ];

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

  const toggleFreeze = () => {
    setFreeze((prev) => !prev);
    setFreezeSwitch((prev) => !prev);
  };

  useEffect(() => {
    if (!hasLoaded) {
      setTimeout(() => {
        setFreeze(false);
      }, 1000);

      setHasLoaded(true);
    }
  }, [hasLoaded]);

  return (
    <>
      <motion.div
        className="freeze"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <p>STEFFAN CROSS</p>
        <div
          className="freeze-switch"
          onClick={toggleFreeze}
          data-ison={freezeSwitch}
        >
          <motion.div
            className="freeze-handle"
            data-ison={freezeSwitch}
            layout
          ></motion.div>
          <motion.p id="freeze-text" data-ison={freezeSwitch} layout>
            {freezeSwitch ? "UNFREEZE" : " FREEZE "}
          </motion.p>
          <div className="freeze-spacer"></div>
        </div>
      </motion.div>
      <div className="container">
        {movers.map((item, index) => (
          <DvdScreensaver
            className="parent"
            key={index}
            speed={speed}
            freezeOnBool={freeze}
          >
            {item.href ? (
              <motion.a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="child"
                variants={moversVariant}
                initial="initial"
                animate="visible"
              >
                {item.text}
              </motion.a>
            ) : (
              <motion.div
                className="child"
                onClick={item.action}
                variants={moversVariant}
                initial="initial"
                animate="visible"
              >
                {item.text}
              </motion.div>
            )}
          </DvdScreensaver>
        ))}
      </div>
      <AnimatePresence>{overlay && <Overlay />}</AnimatePresence>
    </>
  );
}

export default App;
