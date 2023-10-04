import { setAllFalse } from "./MainSlice";
import { useSelector, useDispatch } from "react-redux";

const Overlay = () => {
  const open = useSelector((state) => state.main.overlay);
  const dispatch = useDispatch();

  if (open) {
    return (
      <div className="overlay" onClick={() => dispatch(setAllFalse())}></div>
    );
  }
};

export default Overlay;
