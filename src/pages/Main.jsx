import React from "react";

// import PdfViewer from '../modules/PdfViewer';
import Timer from "./Timer";
import Counter from "./Counter";

import "../styles/Main.css";

function Main(props) {
  return (
    <div className="Main">
      { props.clickedButton ? <Timer /> : <Counter /> }
      {/* <PdfViewer /> */}
      {/* <PdfViewer /> */}
    </div>
  );
}

export default Main;