/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handlePopupClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const image = new Image();
    image.src = "/about2.jpg";
    image.addEventListener("load", () => {
      setImageLoaded(true);
    });
  }, []);

  return (
    <>
      {imageLoaded && (
        <motion.div
          className="popup"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handlePopupClick}
        >
          <div className="about">
            <div className="about-image">
              <img src="/about2.jpg" loading="eager" />
            </div>
            <div className="about-text">
              <p>Hello, I'm Steffan</p>
              <p>
                Currently, I'm looking for work as a software engineer,
                fullstack developer, frontend/backend dev... and the other
                titles.
              </p>
              <p>
                I received my B.A. in Design and Fabrication with a minor in
                Architecture from UC Berkeley and am currently living in Los
                Angeles.
              </p>
              <p>
                I'm at my computer most of the time, for better or for worse.
                When I'm not, I may be honing in on that final fix for my golf
                swing, reading something in the sci-fi vein, or playing games
                with my friends.
              </p>
              <p>
                If you'd like to get in contact feel free to reach out to me on
              </p>
              <a
                href="https://www.linkedin.com/in/steffancross/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
              <p>or by</p>
              <a href="mailto: steffancross@berkeley.edu">Email</a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default About;
