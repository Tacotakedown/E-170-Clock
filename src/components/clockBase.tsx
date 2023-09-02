import React, { useState } from 'react';
import { ReactComponent as ClockSVG } from '../svg/clock.svg';
import './clockBase.css';

interface clockBaseProps {
	CHRMin: string;
	CHRSec: string;
	UTCHr: string;
	UTCMin: string;
	UTCSec: string;
	ETMin: string;
	ETSec: string;
	handleStartClick: any;
	handlePauseClick: any;
	handleResetClick: any;
}

export const ClockBase: React.FC<clockBaseProps> = (props) => {
	let chrMin = props.CHRMin;
	let chrSec = props.CHRSec;
	let utcHr = props.UTCHr;
	let utcMin = props.UTCMin;
	let utcSec = props.UTCSec;
	let ETMin = props.ETMin;
	let ETSec = props.ETSec;

	const [chrButtonState, setChrButtonState] = useState(0);

	const startHandler = () => {
		switch (chrButtonState) {
			case 0:
				props.handleStartClick();
				break;
			case 1:
				props.handlePauseClick();
				break;
			case 2:
				props.handleResetClick();
				break;
		}
		if (chrButtonState === 1) {
			setChrButtonState(0);
		} else {
			setChrButtonState(chrButtonState + 1);
		}
	};

	return (
		<div className="wrapper">
			<svg
				id="Layer_1"
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 472.01 476.29"
			>
				<rect
					x="67.67"
					y="27.84"
					width="340.09"
					height="417.61"
					fill="#231f20"
				/>
				<path
					d="m42.4,0h364.07l65.53,66.82v346.51l-60.82,62.96H56.11L0,423.18V44.97L42.4,0Zm49.26,66.39v338.8c0,12.06,9.78,21.84,21.84,21.84h251c12.06,0,21.84-9.78,21.84-21.84V66.39c0-12.06-9.78-21.84-21.84-21.84H113.51c-12.06,0-21.84,9.78-21.84,21.84Z"
					fill="#939598"
					stroke="#231f20"
					strokeMiterlimit={10}
				/>
				<text
					className="regularSpacing"
					transform="translate(211.74 66.19)"
					fill="#fff"
					fontSize={30}
				>
					CHR
				</text>
				<text
					transform="translate(209.87 194.26)"
					fill="#fff"
					fontSize={30}
					className="regularSpacing"
				>
					UTC
				</text>
				<text
					transform="translate(220.53 425.98)"
					fill="#fff"
					fontSize={30}
					className="regularSpacing"
				>
					ET
				</text>
				<text
					transform="translate(177.29 162.91)"
					fill="#939598"
					fontSize={15.9}
					className="regularSpacing"
				>
					MIN
				</text>
				<text
					transform="translate(268.75 162.91)"
					fill="#939598"
					fontSize={15.9}
					className="regularSpacing"
				>
					SEC
				</text>
				<text
					transform="translate(124.57 291.09)"
					fill="#939598"
					fontSize={15.9}
					className="regularSpacing"
				>
					HR/MO
				</text>
				<text
					transform="translate(216.82 291.09)"
					fill="#939598"
					fontSize={15.9}
					className="regularSpacing"
				>
					MIN/DY
				</text>
				<text
					transform="translate(307.34 291.78)"
					fill="#939598"
					fontSize={15.9}
					className="regularSpacing"
				>
					SEC/Y
				</text>
				<text
					transform="translate(181.83 416.51)"
					fill="#939598"
					fontSize={15.9}
					className="regularSpacing"
				>
					HR
				</text>
				<text
					transform="translate(267.67 416.51)"
					fill="#939598"
					fontSize={15.9}
					className="regularSpacing"
				>
					MIN
				</text>
				<text
					className="regularSpacing"
					transform="translate(25.53 100.98)"
					fill="white"
					fontSize={30}
				>
					RST
				</text>
				<text
					className="regularSpacing"
					transform="translate(15.53 300.98)"
					fill="white"
					fontSize={30}
				>
					DATE
				</text>
				<text
					className="regularSpacing"
					transform="translate(400 100.98)"
					fill="white"
					fontSize={30}
				>
					CHR
				</text>

				<text
					className="regularSpacing"
					transform="translate(435 225.98)"
					fill="white"
					fontSize={20}
				>
					INT
				</text>
				<text
					className="regularSpacing"
					transform="translate(425 260.98)"
					fill="white"
					fontSize={20}
				>
					SET
				</text>
				<text
					className="regularSpacing"
					transform="translate(400 200.98)"
					fill="white"
					fontSize={20}
				>
					GPS
				</text>

				<text
					className="regularSpacing"
					transform="translate(400 320.98)"
					fill="white"
					fontSize={20}
				>
					AUTO
				</text>
				<text
					className="regularSpacing"
					transform="translate(435 360.98)"
					fill="white"
					fontSize={20}
				>
					RST
				</text>
				<text
					className="clock"
					transform="translate(236 135.98)"
					fill="white"
					textAnchor="middle"
					fontSize={84}
				>
					{chrMin}
					<tspan className="RegularFont">:</tspan>
					{chrSec}
				</text>
				<text
					className="clock"
					transform="translate(236 265.98)"
					fill="white"
					textAnchor="middle"
					fontSize={84}
				>
					{utcHr}
					<tspan className="RegularFont">:</tspan>
					{utcMin}
					<tspan className="RegularFont">:</tspan>
					{utcSec}
				</text>
				<text
					className="clock"
					transform="translate(236 390.98)"
					fill="white"
					textAnchor="middle"
					fontSize={84}
				>
					{ETMin}
					<tspan className="RegularFont">:</tspan>
					{ETSec}
				</text>
				<circle
					cx={428}
					className="chrButton"
					cy={140}
					textAnchor="middle"
					r={20}
					fill="white"
					onClick={startHandler}
					stroke="black"
				/>
				<circle
					cx={43}
					className="chrButton"
					cy={140}
					textAnchor="middle"
					r={20}
					fill="white"
					onClick={props.handleResetClick}
					stroke="black"
				/>
			</svg>
		</div>
	);
};
