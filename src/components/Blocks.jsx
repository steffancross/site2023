/* eslint-disable react/no-unescaped-entities */
import image from "../assets/blocks.png";
import { motion } from "framer-motion";

const Blocks = () => {
  return (
    <motion.div
      className="popup"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="projects">
        <img src={image}></img>
        <div className="title-and-links">
          <h3>Blocks</h3>
          <div className="links">
            <a
              href="https://github.com/steffancross/blocks"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://blocks-production-845f.up.railway.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a>
          </div>
        </div>
        <div className="centering-div">
          <p>
            Blocks is a CRUD Lorem Ipsum ecommerce site. The products are
            placeholders, while the underlying infrastructure is the important
            part. Users have the option to browse the site both logged in or
            not, and they can create a new account if they don't already have
            one. Product data is stored and retrieved from the backend, then
            presented to the user. The site also features a fully functional
            cart, allowing users to add, remove, and adjust the quantity of
            their selected products.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Blocks;
