/* eslint-disable react/no-unescaped-entities */
import image from "../assets/inprogress.png";
import { motion } from "framer-motion";

const Adhoc = () => {
  return (
    <motion.div
      className="popup"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
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
            Pinterest, Are.na, and Instagram are all platforms I utilize to save
            visually intriguing and inspiring content for future reference. Ad
            Hoc is a hybrid user interface web application designed to fulfill a
            similar purpose, but with a focus on strictly literary content.
            Whether it's a single word or a passage that evokes a certain
            feeling, this application serves as a space to store and categorize
            such, ensuring they are not lost or forgotten.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Adhoc;
