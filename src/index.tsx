import React, { useState, useEffect } from 'react';
import { Render } from './hooks/render';
import './index.css';
import { ClockBase } from './components/clockBase';

const Clock = () => {
	const [timeDisplayMin, setTimeDisplayMin] = useState('00');
	const [timeDisplaySec, setTimeDisplaySec] = useState('00');
	const [g_intervalId, setG_intervalId] = useState();
	const [currentTime, setCurrentTime] = useState(0);
	const [paused, setPaused] = useState(true);
	let startTime = 0;
	let elapsedTime = 0;
	const [ElapsedTime, setElapsedTime] = useState('');
	let intervalId: any;
	let mins = 0;
	let secs = 0;

	const [utcTime, setUtcTime] = useState(new Date());

	const [aircraftOnGround, setAircraftOnGround] = useState(true);

	const [ETDisplayMin, setETDisplayMin] = useState('00');
	const [ETDisplayHr, setETDisplayHr] = useState('00');

	const handleAircarftToggle = () => {
		setAircraftOnGround(!aircraftOnGround);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setUtcTime(new Date());
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	const padNumber = (number: any) => {
		return ('0' + number).length > 2 ? number : '0' + number;
	};
	const updateTime = () => {
		elapsedTime = Date.now() - startTime;

		secs = Math.floor((elapsedTime / 1000) % 60);
		mins = Math.floor((elapsedTime / (1000 * 60)) % 60);

		secs = padNumber(secs);
		mins = padNumber(mins);
		setTimeDisplayMin(`${mins}`);
		setTimeDisplaySec(`${secs}`);
		setElapsedTime(elapsedTime.toString());
	};

	const startClick = () => {
		if (paused) {
			setPaused(false);
			startTime = Date.now() - Number(ElapsedTime);
			intervalId = setInterval(updateTime, 1000);
			setG_intervalId(intervalId);
		}
	};

	const pauseTimer = () => {
		if (!paused) {
			setPaused(true);
			elapsedTime = Date.now() - startTime;
			clearInterval(g_intervalId);
		}
	};
	const resetTimer = () => {
		setPaused(true);
		clearInterval(g_intervalId);
		startTime = 0;
		elapsedTime = 0;
		setElapsedTime('0');
		setCurrentTime(0);
		mins = 0;
		secs = 0;
		setTimeDisplayMin('00');
		setTimeDisplaySec('00');
	};
	return (
		<div>
			<ClockBase
				handleStartClick={startClick}
				handleResetClick={resetTimer}
				handlePauseClick={pauseTimer}
				CHRMin={timeDisplayMin}
				CHRSec={timeDisplaySec}
				UTCHr={padNumber(utcTime.getUTCHours())}
				UTCMin={padNumber(utcTime.getUTCMinutes())}
				UTCSec={padNumber(utcTime.getUTCSeconds())}
				ETMin="00"
				ETSec="00"
			/>
			<label style={{ color: 'white' }}>
				<input
					type="checkbox"
					checked={aircraftOnGround}
					onChange={handleAircarftToggle}
				/>
				On Ground
			</label>
		</div>
	);
};

Render(<Clock />);
