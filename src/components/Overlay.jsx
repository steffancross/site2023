import { setAllFalse } from "./MainSlice";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import About from "./About";
import Adhoc from "./Adhoc";
import Blocks from "./Blocks";
import Idc from "./Idc";

const Overlay = () => {
  const dispatch = useDispatch();
  const about = useSelector((state) => state.main.about);
  const blocks = useSelector((state) => state.main.blocks);
  const idc = useSelector((state) => state.main.idc);
  const adhoc = useSelector((state) => state.main.adhoc);

  return (
    <motion.div
      className="overlay"
      onClick={() => dispatch(setAllFalse())}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {about && <About />}
        {idc && <Idc />}
        {blocks && <Blocks />}
        {adhoc && <Adhoc />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Overlay;
