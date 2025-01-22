import React from "react";

import '../styles/Counter.css';

function VoteResult(props) {
  const Result = props.ID;
  return (
    <>
      <h1 className={Result === '可決' ? "Approved" : (Result === '否決' ? "Rejected" : "Same")}>{Result}</h1>
    </>
  );
}

export default VoteResult;