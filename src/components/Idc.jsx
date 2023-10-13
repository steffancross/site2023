/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { useEffect } from "react";

const Idc = () => {
  const handlePopupClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const image = new Image();
    image.src = "/idc.png";
  }, []);

  return (
    <motion.div
      className="popup"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={handlePopupClick}
    >
      <div className="projects">
        <img src="/idc.png" loading="eager"></img>
        <div className="title-and-links">
          <h3>Infinite Dungeon Crawler</h3>
          <div className="links">
            <a
              href="https://github.com/steffancross/Infinite-Dungeon-Crawler"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://infinite-dungeon-crawler-production.up.railway.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a>
          </div>
        </div>
        <div className="centering-div">
          <p>
            Infinite Dungeon Crawler is an AI-powered, text-based adventure
            game. Inspired by the game Zork and choose-your-own-adventure books,
            it departs from them due to its unconstrained nature. There are no
            set paths or predetermined story moments; each adventure is unique,
            engaging, and directed by the players themselves. This game was
            developed during my bootcamp, as AI was gaining popularity in
            popular culture, and we were curious about how we could harness it
            based on our own interests. Of course, it's powered by the biggest
            name at the time: ChatGPT.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Idc;
