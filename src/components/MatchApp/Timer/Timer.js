import React, { Component } from "react";
import classes from "./Timer.module.css";
import TimerBGM from "./TimerBGM/TimerBGM"

class Timer extends Component {
	state = {
		seconds: 180,
		value: "",
		isActive: false
	};

	handleTimerOption = e => {
		if (e.target.value === "short") {
			this.setState({
				seconds: 120,
				value: e.target.value,
				isActive: false
			});
			clearInterval(this.idInterval);
		} else if (e.target.value === "medium") {
			this.setState({
				seconds: 150,
				value: e.target.value,
				isActive: false
			});
			clearInterval(this.idInterval);
		} else if (e.target.value === "long")
			this.setState({
				seconds: 180,
				value: e.target.value,
				isActive: false
			});
		clearInterval(this.idInterval);
	};


	timerStart = () => {
		if (this.state.seconds > 0) {
			this.setState(prevState => ({
				seconds: prevState.seconds - 1
			}));
		} else return null;
	};

	handleTimerStart = () => {
		if (!this.state.isActive) {
			this.idInterval = setInterval(this.timerStart, 1000);
			this.setState({
				isActive: true
			});

			return this.idInterval;
		}
	};

	handleTimerReset = () => {
		if (this.state.isActive) {
			clearInterval(this.idInterval);
			if (this.state.value === "short") {
				this.setState({
					seconds: 120,
					isActive: false
				});
			} else if (this.state.value === "medium") {
				this.setState({
					seconds: 150,
					isActive: false
				});
			} else
				this.setState({
					seconds: 180,
					isActive: false
				});
		}
	};

	componentDidUpdate(prevProps, prevState) {
		const sendTime = this.props.statsCapture;
		if (prevState !== this.state) {
			sendTime(this.state.seconds);
		}
	}
	render() {
		return (
			<>
				<div className={classes.Timer}>
					<div className={classes.Counter}>
						{`0${Math.floor(this.state.seconds / 60)}`}:
						{this.state.seconds % 60 >= 10
							? this.state.seconds % 60
							: `0${this.state.seconds % 60}`}
					</div>
					<div className={classes.RadioGroup}>
						<input
							type="radio"
							name="time"
							id="short"
							value="short"
							onChange={this.handleTimerOption}
						/>
						<label htmlFor="short">Short</label>
						<input
							type="radio"
							name="time"
							id="medium"
							value="medium"
							onChange={this.handleTimerOption}
						/>
						<label htmlFor="medium">Medium</label>
						<input
							type="radio"
							name="time"
							id="long"
							value="long"
							onChange={this.handleTimerOption}
						/>
						<label htmlFor="long">Long</label>
					</div>
					<button
						onClick={
							!this.state.isActive
								? this.handleTimerStart
								: this.handleTimerReset
						}
					>
						{this.state.isActive ? "Reset" : "Start"}
					</button>
					{this.state.seconds < 60 && this.state.seconds !== 0 ? (
						<div className={classes.InfoTimer}></div>
					) : null}
					<TimerBGM time={this.state.seconds} />
				</div>
			</>
		);
	}
}

export default Timer;
