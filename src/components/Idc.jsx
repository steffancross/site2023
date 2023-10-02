/* eslint-disable react/no-unescaped-entities */
import Popup from "reactjs-popup";
import { useSelector, useDispatch } from "react-redux";
import { setIdc } from "./MainSlice";
import image from "../img/idc.png";

const Idc = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.main.idc);

  if (open) {
    return (
      <Popup open={open} onClose={() => dispatch(setIdc(false))} modal>
        <div className="projects">
          <h1>INFINITE DUNGEON CRAWLER</h1>
          <img src={image}></img>
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
          <a href="https://github.com/steffancross/Infinite-Dungeon-Crawler">
            Github
          </a>
          <a href="https://infinite-dungeon-crawler-production.up.railway.app/">
            Live Site
          </a>
        </div>
      </Popup>
    );
  }
};

export default Idc;
