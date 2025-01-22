import React from "react";

import '../styles/Counter.css';

const VoteResult = ({ID}) => {
  const Result = localStorage.getItem(ID);
  return (
    <>
      <h1 className={Result === '可決' ? "Approved" : (Result === '否決' ? "Rejected" : "Same")}>{Result}</h1>
    </>
  );
}

export default VoteResult;