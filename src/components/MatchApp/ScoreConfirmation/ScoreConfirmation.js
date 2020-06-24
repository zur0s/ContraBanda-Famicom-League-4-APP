import React from "react";
import { connect } from "react-redux";
import classes from "./ScoreConfirmation.module.css";
import MenuWindow from "../../UI/MenuWindow/MenuWindow"
import PropTypes from "prop-types"

const ScoreConfirmation = props => {
	const {
		handleSave,
		handleScoreSave,
		deleteScore1,
		deleteScore2,
		team1,
		team2,
		scoreTeam1,
		scoreTeam2,
	} = props;
	return (
		<MenuWindow menuType="ScoreConfirmationPanel" handleMenuWindow={handleSave}>
			<div className={classes.ScoreConfirmation}>
				<div className={classes.ScoreBoard}>
					<div>
						<i className="fas fa-minus-circle" onClick={deleteScore1}></i>
						{team1[1]} : {team2[1]}
						<i className="fas fa-minus-circle" onClick={deleteScore2}></i>
						{scoreTeam1} : {scoreTeam2}
						{scoreTeam1 === 3 || scoreTeam2 === 3 ? <button onClick={handleScoreSave}>Send</button> : null}
					</div>
				</div>
				<div><i className="fas fa-file-export" onClick={props.download}></i></div>
			</div>
		</MenuWindow >
	);
};

const mapStateToProps = state => {
	return {
		team1: state.currentTeam1,
		team2: state.currentTeam2,
		scoreTeam1: state.currentScoreTeam1,
		scoreTeam2: state.currentScoreTeam2,
		confirmation: state.confirmation
	};
};

ScoreConfirmation.propTypes = {
	handleSave: PropTypes.func.isRequired,
	handleScoreSave: PropTypes.func.isRequired,
	deleteScore1: PropTypes.func.isRequired,
	deleteScore2: PropTypes.func.isRequired,
	team1: PropTypes.array.isRequired,
	team2: PropTypes.array.isRequired,
	scoreTeam1: PropTypes.number.isRequired,
	scoreTeam2: PropTypes.number.isRequired,
}

export default connect(mapStateToProps)(React.memo(ScoreConfirmation));
