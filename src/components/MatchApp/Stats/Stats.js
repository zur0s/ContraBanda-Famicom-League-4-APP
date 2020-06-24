import React from "react";
import classes from "./Stats.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types"

const Stats = (props) => {
	const { currentTeam1, currentTeam2, teamsData } = props;
	const team1 = currentTeam1[0];
	const team2 = currentTeam2[0];

	const averageAge = teamsData.map((item) => (
		<div>Team Average Age: {item.stats.averageAge}</div>
	));
	const galagaRatio = teamsData.map((item) => (
		<div>
			Galaga Ratio: {item.stats.galagaRatio}
		</div>
	));
	const allMatches = teamsData.map((item) => (
		<div>Matches: {item.stats.allMatches}</div>
	));
	const allWins = teamsData.map((item) => (
		<div>Matches Won: {item.stats.allWins}</div>
	));
	const allLosses = teamsData.map((item) => (
		<div>Lost Matches: {item.stats.allLoses}</div>
	));
	const allGames = teamsData.map((item) => (
		<div>All Games: {item.stats.allGames}</div>
	));
	const wonGames = teamsData.map((item) => (
		<div>Games Won: {item.stats.wonGames}</div>
	));
	const lostGames = teamsData.map((item) => (
		<div>Lost Games: {item.stats.lostGames}</div>
	));
	const gamesWinningPercentage = teamsData.map((item) => (
		<div>
			Winning Games Ratio: {Math.floor((item.stats.wonGames / item.stats.allGames) * 100)}%
		</div>
	));
	const awards = teamsData.map((item) => (
		<div>Current Awards: {item.stats.awards}</div>
	));

	const stats = [
		averageAge,
		galagaRatio,
		allMatches,
		allWins,
		allLosses,
		allGames,
		wonGames,
		lostGames,
		gamesWinningPercentage,
		awards,
	];

	const draw = Math.floor(Math.random() * stats.length);
	return (
		<>
			<div className={classes.Stats1}>
				<header>CFL#4 STATS CENTER</header>
				<div className={classes.Stats}> {stats[draw][team1]}</div>
			</div>
			<div className={classes.Stats2}>
				<header>CFL#4 STATS CENTER</header>
				<div className={classes.Stats}>{stats[draw][team2]}</div>
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		teamsData: state.teamsData,
		currentTeam1: state.currentTeam1,
		currentTeam2: state.currentTeam2,
	};
};

Stats.propTypes = {
	teamsData: PropTypes.array.isRequired,
	currentTeam1: PropTypes.array.isRequired,
	currentTeam2: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(Stats);
