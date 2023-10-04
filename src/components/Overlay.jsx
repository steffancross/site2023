import { setAllFalse } from "./MainSlice";
import { useDispatch } from "react-redux";

const Overlay = () => {
  const dispatch = useDispatch();

  return (
    <div className="overlay" onClick={() => dispatch(setAllFalse())}></div>
  );
};

export default Overlay;
