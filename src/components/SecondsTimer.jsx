// import React from "react";

// import '../styles/Timer.css';

// function SecondsTimer() {
//   const seconds = localStorage.getItem('setTimerSeconds');
//   const numSeconds = parseInt(seconds);

//   const timerCount = localStorage.getItem('TimerCount');
//   const numTimer = parseInt(timerCount);

//   return (
//     <div>
//       <div className="TimerCounter">
//         <p className="TimerCount">{numTimer}回</p>
//       </div>
//       {
//         (0 < numSeconds && numSeconds <= 3) ? (<p className="Caution">{seconds}秒</p>) : ((numSeconds === 0 && numTimer > 0) ? (<p className="Alert">{seconds}秒</p>) : (<p className="Normal">{seconds}秒</p>))
//       }
//     </div>
//   );
// }

// export default SecondsTimer;