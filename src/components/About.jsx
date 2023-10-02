/* eslint-disable react/no-unescaped-entities */
import Popup from "reactjs-popup";
import { useSelector, useDispatch } from "react-redux";
import { setAbout } from "./MainSlice";

const About = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.main.about);

  if (open) {
    return (
      <Popup open={open} onClose={() => dispatch(setAbout(false))} modal>
        <div>
          <h1>ABOUT</h1>
          <p>Hello, I'm Steffan</p>
          <p>
            Currently, I'm looking for work as a software engineer, fullstack
            developer, frontend/backend dev... and the other titles.
          </p>
          <p>
            I received my B.A. in Design and Fabrication with a minor in
            Architecture from UC Berkeley and am currently living in Los
            Angeles.
          </p>
          <p>
            I'm at my computer most of the time, for better or for worse. When
            I'm not, I may be honing in on that final fix for my golf swing,
            reading something in the sci-fi vein, or playing games with my
            friends.
          </p>
        </div>
      </Popup>
    );
  }
};

export default About;
