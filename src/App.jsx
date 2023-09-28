import { DvdScreensaver } from "react-dvd-screensaver";

function App() {
  const speed = 3;

  return (
    <>
      <div className="container">
        <DvdScreensaver className="parent" speed={speed} freezeOnHover={true}>
          <div className="child">ABOUT</div>
        </DvdScreensaver>
        {/* <DvdScreensaver className="parent" speed={speed} freezeOnHover={true}>
          <div className="child">BLOCKS</div>
        </DvdScreensaver>
        <DvdScreensaver className="parent" speed={speed} freezeOnHover={true}>
          <div className="child">INFINITE DUNGEON CRAWLER</div>
        </DvdScreensaver>
        <DvdScreensaver className="parent" speed={speed} freezeOnHover={true}>
          <div className="child">AD.HOC</div>
        </DvdScreensaver>
        <DvdScreensaver className="parent" speed={speed} freezeOnHover={true}>
          <div className="child">LINKEDIN</div>
        </DvdScreensaver>
        <DvdScreensaver className="parent" speed={speed} freezeOnHover={true}>
          <div className="child">RESUME</div>
        </DvdScreensaver>
        <DvdScreensaver className="parent" speed={speed} freezeOnHover={true}>
          <div className="child">LEGACY SITE</div>
        </DvdScreensaver> */}
      </div>
    </>
  );
}

export default App;
