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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            minus est voluptatibus recusandae, animi distinctio ipsum voluptas
            ullam illo! Laborum nostrum, quod porro asperiores qui aspernatur
            perferendis cum blanditiis rem.
          </p>
        </div>
      </Popup>
    );
  }
};

export default About;
