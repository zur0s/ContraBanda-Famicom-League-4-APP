import React from "react";
import classes from "./Teams.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Teams = (props) => {
	const { teamsData, team1, team2 } = props;

	const team1ID = team1[0]
	const team2ID = team2[0]

	let data = teamsData.map((item, index) => (
		<div className={classes.ShowTeam} key={item.id}>
			<div className={classes.Logo} key={item.logo}>
				<img src={item.logo} alt={item.name}></img>
			</div>
			<h4 className={classes.TeamName} key={item.name}>
				{item.name}
			</h4>
			<ul className={classes.TeamInfo} key={index}>
				<li>
					<p>Founded:</p> {item.estDate}
				</li>
				<li>
					<p>Favorite genre:</p> {item.genre}
				</li>
				<li style={{ backgroundColor: "#96031A" }}>Team Line Up:</li>
				{item.players.map((item, index) =>
					!index ? (
						<li key={index}>
							{item}
							<span className={classes.Captain}>(C)</span>
						</li>
					) : (
							<li key={index}>{item}</li>
						)
				)}
			</ul>
		</div>
	));
	return (
		<>
			<div className={classes.Team1}>{data[team1ID]}</div>
			<div className={classes.Team2}>{data[team2ID]}</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		teamsData: state.teamsData,
		team1: state.currentTeam1,
		team2: state.currentTeam2,
	};
};

Teams.propTypes = {
	teamsData: PropTypes.array.isRequired,
	team1: PropTypes.array,
	team2: PropTypes.array,
}

export default connect(mapStateToProps)(Teams);
