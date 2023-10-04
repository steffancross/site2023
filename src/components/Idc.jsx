/* eslint-disable react/no-unescaped-entities */
import { useSelector } from "react-redux";
import image from "../assets/idc.png";

const Idc = () => {
  const open = useSelector((state) => state.main.idc);

  if (open) {
    return (
      <div className="popup">
        <div className="projects">
          <img src={image}></img>
          <div className="title-and-links">
            <h3>Infinite Dungeon Crawler</h3>
            <div className="links">
              <a href="https://github.com/steffancross/Infinite-Dungeon-Crawler">
                Github
              </a>
              <a href="https://infinite-dungeon-crawler-production.up.railway.app/">
                Live Site
              </a>
            </div>
          </div>
          <div className="centering-div">
            <p>
              Infinite Dungeon Crawler is an AI-powered, text-based adventure
              game. Inspired by the game Zork and choose-your-own-adventure
              books, it departs from them due to its unconstrained nature. There
              are no set paths or predetermined story moments; each adventure is
              unique, engaging, and directed by the players themselves. This
              game was developed during my bootcamp, as AI was gaining
              popularity in popular culture, and we were curious about how we
              could harness it based on our own interests. Of course, it's
              powered by the biggest name at the time: ChatGPT.
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Idc;
