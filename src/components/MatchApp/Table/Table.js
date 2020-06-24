import React from "react";
import classes from "./Table.module.css";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/app";
import PropTypes from "prop-types"

const Table = (props) => {

	const {
		green,
		red,
		currentGame,
		currentTeam1,
		currentTeam2,
		currentTeam1ID,
		currentTeam2ID,
		currentScoreTeam1,
		currentScoreTeam2,
		teamsData,
	} = props;

	const updateStats = async (team1, team2, score1, score2) => {
		const stats = teamsData.map((item) => item.stats);
		const currentTeamStats = [stats[team1], stats[team2]];
		const games = currentScoreTeam1 + currentScoreTeam2;

		await props.onUpdateStats(team1, {
			averageAge: currentTeamStats[0].averageAge,
			galagaRatio: currentTeamStats[0].galagaRatio,
			allMatches: currentTeamStats[0].allMatches + 1,
			allWins: currentTeamStats[0].allWins + 1,
			allLoses: currentTeamStats[0].allLoses,
			allGames: currentTeamStats[0].allGames + games,
			wonGames: currentTeamStats[0].wonGames + score1,
			lostGames: currentTeamStats[0].lostGames + score2,
			winsInRow: currentTeamStats[0].winsInRow,
			awards: currentTeamStats[0].awards,
		});

		await props.onUpdateStats(team2, {
			averageAge: currentTeamStats[1].averageAge,
			galagaRatio: currentTeamStats[1].galagaRatio,
			allMatches: currentTeamStats[1].allMatches + 1,
			allWins: currentTeamStats[1].allWins,
			allLoses: currentTeamStats[1].allLoses + 1,
			allGames: currentTeamStats[1].allGames + games,
			wonGames: currentTeamStats[1].wonGames + score2,
			lostGames: currentTeamStats[1].lostGames + score1,
			winsInRow: currentTeamStats[1].winsInRow,
			awards: currentTeamStats[1].awards,
		});
	};

	// STATS UPDATING
	if (currentGame < 17 && currentScoreTeam1 === 3) {
		updateStats(
			currentTeam1ID,
			currentTeam2ID,
			currentScoreTeam1,
			currentScoreTeam2
		)
	} else if (currentGame < 17 && currentScoreTeam2 === 3) {
		updateStats(
			currentTeam2ID,
			currentTeam1ID,
			currentScoreTeam2,
			currentScoreTeam1
		)
	}

	if (green && red) {
		const greenTable = [...green];
		const redTable = [...red];

		//---GREEN TABLE ----
		if (
			(green[0].name === currentTeam1 ||
				green[1].name === currentTeam1 ||
				green[2].name === currentTeam1 ||
				green[3].name === currentTeam1) &&
			currentGame % 2 !== 0 &&
			currentGame < 13
		) {

			//FIRST TEAM
			const firstGreenTeam = green.filter((item) => item.name === currentTeam1);

			//---UPDATING TABLE---
			if (props.saveStatus && currentScoreTeam1 === 3) {
				firstGreenTeam[0].points += 3;
			} else {
				firstGreenTeam[0].points += 0;
			}

			if (props.saveStatus && (currentScoreTeam1 === 3 || currentScoreTeam2 === 3)) {
				firstGreenTeam[0].matches += 1;
				firstGreenTeam[0].gamesFor += currentScoreTeam1;
				firstGreenTeam[0].gamesAgainst += currentScoreTeam2;
			}

			//SECOND TEAM
			const secondGreenTeam = green.filter(
				(item) => item.name === currentTeam2
			);

			//---UPDATING TABLE---
			if (props.saveStatus && currentScoreTeam2 === 3) {
				secondGreenTeam[0].points += 3;
			} else {
				secondGreenTeam[0].points += 0;
			}

			if (props.saveStatus && (currentScoreTeam1 === 3 || currentScoreTeam2 === 3)) {
				secondGreenTeam[0].matches += 1;
				secondGreenTeam[0].gamesFor += currentScoreTeam2;
				secondGreenTeam[0].gamesAgainst += currentScoreTeam1;
			}
		}

		//---RED TABLE---
		if (
			(red[0].name === currentTeam1 ||
				red[1].name === currentTeam1 ||
				red[2].name === currentTeam1 ||
				red[3].name === currentTeam1) &&
			currentGame % 2 === 0 &&
			currentGame < 13
		) {
			const firstRedTeam = redTable.filter(
				(item) => item.name === currentTeam1
			);

			if (props.saveStatus && currentScoreTeam1 === 3) {
				firstRedTeam[0].points += 3;
			} else {
				firstRedTeam[0].points += 0;
			}

			if (props.saveStatus && (currentScoreTeam1 === 3 || currentScoreTeam2 === 3)) {
				firstRedTeam[0].matches += 1;
				firstRedTeam[0].gamesFor += currentScoreTeam1;
				firstRedTeam[0].gamesAgainst += currentScoreTeam2;
			}

			const secondRedTeam = redTable.filter(
				(item) => item.name === currentTeam2
			);

			if (props.saveStatus && currentScoreTeam2 === 3) {
				secondRedTeam[0].points += 3;
			} else {
				secondRedTeam[0].points += 0;
			}

			if (props.saveStatus && (currentScoreTeam1 === 3 || currentScoreTeam2 === 3)) {
				secondRedTeam[0].matches += 1;
				secondRedTeam[0].gamesFor += currentScoreTeam2;
				secondRedTeam[0].gamesAgainst += currentScoreTeam1;
			}
		}

		//SORTING TABLE
		const sortTable = (table) =>
			table.sort((a, b) => {
				return (
					b.points - a.points ||
					b.gamesFor - b.gamesAgainst - (a.gamesFor - a.gamesAgainst)
				);
			});

		const greenSortTable = sortTable(greenTable);
		const redSortTable = sortTable(redTable);
		const standings = [greenSortTable, redSortTable];

		//SENDING TABLE TO SERVER
		if (props.saveStatus === true && (currentScoreTeam1 === 3 || currentScoreTeam2 === 3)) {
			props.onUpdateStandings(standings);
		}

		//MAKE SEMI-FINALS
		const sendSemiFinal = async () => {
			await props.onUpdateSchedule(currentGame + 1, {
				team1: greenSortTable[0].name,
				team2: redSortTable[1].name,
				team1ID: greenSortTable[0].id,
				team2ID: redSortTable[1].id,
			});

			await props.onUpdateSchedule(currentGame + 2, {
				team1: redSortTable[0].name,
				team2: greenSortTable[1].name,
				team1ID: redSortTable[0].id,
				team2ID: greenSortTable[1].id,
			});
		};

		if (currentGame === 12 && (currentScoreTeam1 === 3 || currentScoreTeam2 === 3)) {
			sendSemiFinal();
		}


		//MAKE FINAL AND 3RD PLACE MATCH
		if (currentGame === 13 && (currentScoreTeam1 === 3 || currentScoreTeam2 === 3)) {
			(async () => {
				if (currentGame === 13) {
					if (currentScoreTeam1 === 3) {
						await props.onUpdateSchedule(currentGame + 2, {
							team1: redSortTable[1].name,
							team1ID: redSortTable[1].id,
						});

						await props.onUpdateSchedule(currentGame + 3, {
							team1: greenSortTable[0].name,
							team1ID: greenSortTable[0].id,
						});
					} else if (currentScoreTeam2 === 3) {
						await props.onUpdateSchedule(currentGame + 2, {
							team1: greenSortTable[0].name,
							team1ID: greenSortTable[0].id,
						});

						await props.onUpdateSchedule(currentGame + 3, {
							team1: redSortTable[1].name,
							team1ID: redSortTable[1].id,
						});
					}
				}
			})()
		}

		if (currentGame === 14 && (currentScoreTeam1 === 3 || currentScoreTeam2 === 3)) {
			(async () => {
				if (currentGame === 14) {
					if (currentScoreTeam1 === 3) {
						await props.onUpdateSchedule(currentGame + 1, {
							team2: greenSortTable[1].name,
							team2ID: greenSortTable[1].id,
						});

						await props.onUpdateSchedule(currentGame + 2, {
							team2: redSortTable[0].name,
							team2ID: redSortTable[0].id,
						});
					} else if (currentScoreTeam2 === 3) {
						await props.onUpdateSchedule(currentGame + 1, {
							team2: redSortTable[0].name,
							team2ID: redSortTable[0].id,
						});

						await props.onUpdateSchedule(currentGame + 2, {
							team2: greenSortTable[1].name,
							team2ID: greenSortTable[1].id,
						});
					}
				}
			})();
		}

		//TABLE VIEW
		const greenRender = greenSortTable.map((item) => (
			<tr key={item.id}>
				<td>{item.name}</td>
				<td>{item.matches}</td>
				<td>{item.points}</td>
				<td>{item.gamesFor}</td>
				<td>{item.gamesAgainst}</td>
			</tr>
		));
		const redRender = redSortTable.map((item) => (
			<tr key={item.id}>
				<td>{item.name}</td>
				<td>{item.matches}</td>
				<td>{item.points}</td>
				<td>{item.gamesFor}</td>
				<td>{item.gamesAgainst}</td>
			</tr>
		));

		return (
			<>
				{currentGame % 2 === 0 ? (
					<div className={classes.Tab}>
						<table style={{ backgroundColor: "#FF220C", width: "30vw" }}>
							<tbody>
								<tr>
									<td>Team</td>
									<td>M</td>
									<td>P</td>
									<td>GF</td>
									<td>GA</td>
								</tr>
								{redRender}
							</tbody>
						</table>
					</div>
				) : (
						<table style={{ backgroundColor: "#29BF12", width: "30vw" }}>
							<tbody>
								<tr>
									<td>Team</td>
									<td>M</td>
									<td>P</td>
									<td>GF</td>
									<td>GA</td>
								</tr>
								{greenRender}
							</tbody>
						</table>
					)}
			</>
		);
	}
	return <div>Loading...</div>;
};

const mapStateToProps = (state) => {
	return {
		green: state.standingsData[0],
		red: state.standingsData[1],
		teamsData: state.teamsData,
		currentGame: state.currentGame,
		currentScoreTeam1: state.currentScoreTeam1,
		currentScoreTeam2: state.currentScoreTeam2,
		currentTeam1: state.currentTeam1[1],
		currentTeam2: state.currentTeam2[1],
		currentTeam1ID: state.currentTeam1[0],
		currentTeam2ID: state.currentTeam2[0],
		saveStatus: state.saveStatus
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onUpdateStandings: (updatedStandings) =>
			dispatch(actions.updateStandings(updatedStandings)),
		onUpdateStats: (teamIndex, updatedStats) =>
			dispatch(actions.updateStats(teamIndex, updatedStats)),
		onUpdateSchedule: (currentGame, updateData) =>
			dispatch(actions.updateSchedule(currentGame, updateData)),
	};
};

Table.propTypes = {
	green: PropTypes.array,
	red: PropTypes.array,
	teamsData: PropTypes.array.isRequired,
	currentGame: PropTypes.number.isRequired,
	currentScoreTeam1: PropTypes.number.isRequired,
	currentScoreTeam2: PropTypes.number.isRequired,
	currentTeam1: PropTypes.string,
	currentTeam2: PropTypes.string,
	currentTeam1ID: PropTypes.number,
	currentTeam2ID: PropTypes.number,
	saveStatus: PropTypes.bool.isRequired,
	onUpdateSchedule: PropTypes.func.isRequired,
	onUpdateStandings: PropTypes.func.isRequired,
	onUpdateStats: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Table));
