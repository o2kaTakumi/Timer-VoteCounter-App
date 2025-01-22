import {React, useEffect, useState} from "react";
import "../styles/Digit.css";

const weekday = ["日", "月", "火", "水", "木", "金", "土"];

function Digit() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      let d = new Date();
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();
      let dayofweek = d.getDay();
      setDate(year + "-" + month + "-" + day  + " (" + weekday[dayofweek] + ") "); //括弧の横の空白はただの位置調整
      let hour = d.getHours().toString().padStart(2, "0");
      let minute = d.getMinutes().toString().padStart(2, "0");
      let seconds = d.getSeconds().toString().padStart(2, "0");
      setTime(hour + ":" + minute + ":" + seconds);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="digitText">
    {loading ? (
      <h3>~~ Loading Digit Time ~~</h3>
    ) : (
      <h3>{date}<span>{time}</span></h3>
    )}
    </div>
  );
}

export default Digit;