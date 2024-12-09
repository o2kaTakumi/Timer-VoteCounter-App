import React from "react";

// import PdfViewer from '../modules/PdfViewer';
import Timer from "./Timer";
import Counter from "./Counter";

import "../styles/Main.css";

const Main = ({clickedButton}) => {
  return (
    <div className="Main">
      { clickedButton ? <Timer /> : <Counter /> }
      {/* <PdfViewer /> */}
      {/* <PdfViewer /> */}
    </div>
  );
}

export default Main;