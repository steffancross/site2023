/* eslint-disable react/no-unescaped-entities */
import Popup from "reactjs-popup";
import { useSelector, useDispatch } from "react-redux";
import { setBlocks } from "./MainSlice";
import image from "../img/blocks.png";

const Blocks = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.main.blocks);

  if (open) {
    return (
      <Popup open={open} onClose={() => dispatch(setBlocks(false))} modal>
        <div className="projects">
          <h1>BLOCKS</h1>
          <img src={image}></img>
          <p>
            Blocks is a CRUD Lorem Ipsum ecommerce site. By that, I mean the
            products are placeholders, while the underlying infrastructure is
            the important part. Users have the option to browse the site both
            logged in or not, and they can create a new account if they don't
            already have one. Product data is stored and retrieved from the
            backend, then presented to the user. The site also features a fully
            functional cart, allowing users to add, remove, and adjust the
            quantity of their selected products.
          </p>
          <a href="https://github.com/steffancross/blocks">Github</a>
          <a href="https://blocks-production-845f.up.railway.app/">Live Site</a>
        </div>
      </Popup>
    );
  }
};

export default Blocks;
