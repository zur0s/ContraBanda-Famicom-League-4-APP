import React from "react";
import classes from "./Score.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types"

const Score = (props) => {
	const {
		scoreTeam1,
		scoreTeam2,
		changeTeam1WinsNumber,
		changeTeam2WinsNumber,
		scheduleData,
		saveStatus,
		currentGame,
	} = props;

	const data = scheduleData.map((item) => (
		<>
			<div className={classes.Score1}>
				<h2>{scoreTeam1}</h2>
				<button
					className={saveStatus && scoreTeam1 === 3 ? [`${classes.Score1} ${classes.Apply}`] : null}
					onClick={changeTeam1WinsNumber}
				>
					{item.team1}
				</button>
			</div>
			<div className={classes.Score2}>
				<h2>{scoreTeam2} </h2>
				<button
					className={saveStatus && scoreTeam2 === 3 ? [`${classes.Score2} ${classes.Apply}`] : null}
					onClick={changeTeam2WinsNumber}
				>
					{item.team2}
				</button>
			</div>
		</>
	));

	return <>{data[currentGame - 1]}</>;
};

const mapStateToProps = (state) => {
	return {
		scheduleData: state.scheduleData,
		currentGame: state.currentGame,
		scoreTeam1: state.currentScoreTeam1,
		scoreTeam2: state.currentScoreTeam2,
		saveStatus: state.saveStatus,
	};
};

Score.propTypes = {
	scoreTeam1: PropTypes.number.isRequired,
	scoreTeam2: PropTypes.number.isRequired,
	changeTeam1WinsNumber: PropTypes.func.isRequired,
	changeTeam2WinsNumber: PropTypes.func.isRequired,
	scheduleData: PropTypes.array.isRequired,
	saveStatus: PropTypes.bool.isRequired,
	currentGame: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(React.memo(Score));
