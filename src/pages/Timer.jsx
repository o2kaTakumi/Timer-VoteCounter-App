import React, { useEffect, useState } from "react";

import { Button, ButtonGroup, TextField } from "@mui/material";

// import SecondsTimer from "../components/SecondsTimer";

import '../styles/Timer.css';

function Timer() {
	const [seconds, setSeconds] = useState(0); //タイマーにセットする秒数を管理する変数
	const [timerCount, setTimerCount] = useState(0); //タイマーをセットした回数

	const [min, setMin] = useState(''); //テキスト入力した分数の管理
	const [sec, setSec] = useState(''); //テキスト入力した秒数の管理
	
	// localStorage.setItem('setTimerSeconds', seconds); //セットした秒数の値の初期化
	// localStorage.setItem('TimerCount', timerCount); //タイマーをセットした回数の初期化

	//20秒セットする関数
	const set20Timer = () => {
		setTimerCount(timerCount + 1);
		// localStorage.setItem('TimerCount', timerCount + 1);
		setSeconds(20);
		// localStorage.setItem('setTimerSeconds', seconds);
	}

	//30秒セットする関数
	const set30Timer = () => {
		setTimerCount(timerCount + 1);
		// localStorage.setItem('TimerCount', timerCount + 1);
		setSeconds(30);
		// localStorage.setItem('setTimerSeconds', seconds);
	}

	//40秒セットする関数
	const set40Timer = () => {
		setTimerCount(timerCount + 1);
		// localStorage.setItem('TimerCount', timerCount + 1);
		setSeconds(40);
		// localStorage.setItem('setTimerSeconds', seconds);
	}

	//3分セットする関数
	const set3Min = () => {
		setTimerCount(timerCount + 1);
		// localStorage.setItem('TimerCount', timerCount + 1);
		setSeconds(180);
		// localStorage.setItem('setTimerSeconds', seconds);
	}

	//5分セットする関数
	const set5Min = () => {
		setTimerCount(timerCount + 1);
		// localStorage.setItem('TimerCount', timerCount + 1);
		setSeconds(300);
		// localStorage.setItem('setTimerSeconds', seconds);
	}

	//7分セットする関数
	const set7Min = () => {
		setTimerCount(timerCount + 1);
		// localStorage.setItem('TimerCount', timerCount + 1);
		setSeconds(420);
		// localStorage.setItem('setTimerSeconds', seconds);
	}

	//テキスト入力した時間だけ計測する関数
	const Start = () => {
		const pattern = /^([1-9]\d*|)$/;
		if(!pattern.test(min) || !pattern.test(sec)) {
			alert('入力は以下の要件を満たしてください\n ・半角\n ・1以上の整数');
			setMin('');
			setSec('');
		} else {
			if(min !== '' || sec !== '') {
				setTimerCount(timerCount + 1);
				// localStorage.setItem('TimerCount', timerCount + 1);
				setSeconds(Number(min) * 60 + Number(sec));
				// localStorage.setItem('setTimerSeconds', seconds);
			}
		}
	}

	//リセットする関数
	const Reset = () => {
		setTimerCount(0);
		// localStorage.setItem('TimerCount', timerCount);
		setSeconds(0);
		// localStorage.setItem('setTimerSeconds', seconds);
		setMin('');
		setSec('');
	}

	useEffect(() => {
		const intervalId = setInterval(() => {
			if(seconds === 0) {
				clearInterval(intervalId);
			} else {
				setSeconds(seconds - 1);
			}
		}, 1000);
		return () => {
			clearInterval(intervalId);
		}
	}, [seconds]);

	return (
		<div className="TimerModules">
			<div className="Timer">
				{/* <SecondsTimer /> */}
				{/* 残り時間を表示する部分 */}
				<div>
					<div className="TimerCounter">
						<p className="TimerCount">{timerCount}回</p>
					</div>
					<p className={0 < seconds && seconds <= 3 ? "Caution" : (seconds === 0 && timerCount > 0 ? "Alert" : "Normal")}>{seconds}秒</p>
				</div>
				{/* ボタン */}
				<ButtonGroup size="large" variant="contained" className="SecondsButtonGroup">
					<Button onClick={set20Timer}>20秒</Button>
					<Button onClick={set30Timer}>30秒</Button>
					<Button onClick={set40Timer}>40秒</Button>
				</ButtonGroup>
				<ButtonGroup size="large" variant="contained" className="MinutesButtonGroup">
					<Button onClick={set3Min}>3分</Button>
					<Button onClick={set5Min}>5分</Button>
					<Button onClick={set7Min}>7分</Button>
				</ButtonGroup>
			</div>
			<div className="TextFieldTimer">
				<div className="TextGroup">
					<TextField variant="filled" label="分" className="MinutesText" value={min} onKeyDown={ e => { if(e.code === 'Enter') { e.target.blur(); } } } onChange={(e) => setMin(e.target.value)} />
					<TextField variant="filled" label="秒" className="SecondsText" value={sec} onKeyDown={ e => { if(e.code === 'Enter') { e.target.blur(); } } } onChange={(e) => setSec(e.target.value)} />
				</div>
				<Button variant="contained" onClick={Start}>スタート</Button>
			</div>
			<Button className="Reset" variant="outlined" onClick={Reset}>リセット</Button>
		</div>
	);
}

export default Timer;