import React from "react";
import classes from "./Schedule.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";


const Schedule = (props) => {
	const { scheduleData, currentGame } = props;
	const matches = scheduleData.map((item) => (
		<div
			className={currentGame === item.id ? classes.Active : null}
			key={item.id}
			style={{ backgroundColor: `${item.group}` }}
		>
			{item.time} {item.team1} vs. {item.team2}
			{currentGame > item.id ? item.scoreTeam1 !== undefined ? (` ${item.scoreTeam1}:${item.scoreTeam2}`) : <div className={classes.Loader}></div> : null}
			{currentGame === item.id ? <span>LIVE</span> : null}
		</div>
	));

	return (
		<div className={classes.Schedule}>
			<div>{matches}</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		scheduleData: state.scheduleData,
		currentGame: state.currentGame,
	};
};

Schedule.propTypes = {
	scheduleData: PropTypes.array.isRequired,
	currentGame: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(Schedule);
