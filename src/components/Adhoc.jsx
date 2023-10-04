/* eslint-disable react/no-unescaped-entities */
import { useSelector } from "react-redux";
import image from "../assets/inprogress.png";

const Adhoc = () => {
  const open = useSelector((state) => state.main.adhoc);

  if (open) {
    return (
      <div className="popup">
        <div className="projects">
          <img src={image}></img>
          <div className="title-and-links">
            <h3>Ad.Hoc</h3>
            <div className="links">
              <a href="https://github.com/steffancross/strings">Github</a>
            </div>
          </div>
          <div className="centering-div">
            <p>
              Pinterest, Are.na, and Instagram are all platforms I utilize to
              save visually intriguing and inspiring content for future
              reference. Ad Hoc is a hybrid user interface web application
              designed to fulfill a similar purpose, but with a focus on
              strictly literary content. Whether it's a single word or a passage
              that evokes a certain feeling, this application serves as a space
              to store and categorize such, ensuring they are not lost or
              forgotten.
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Adhoc;
