import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/app";
import Fullscreen from "react-full-screen";
import PropTypes from "prop-types";
import axios from "axios";
import "./MatchApp.css";
import Schedule from "../../components/MatchApp/Schedule/Schedule";
import Table from "../../components/MatchApp/Table/Table";
import Score from "../../components/MatchApp/Score/Score";
import Teams from "../../components/MatchApp/Teams/Teams";
import Draw from "../../components/MatchApp/Draw/Draw";
import Timer from "../../components/MatchApp/Timer/Timer";
import Stats from "../../components/MatchApp/Stats/Stats";
import NavBar from "../../components/UI/NavigationBar/NavBar";
import MessagePanel from "../../components/MatchApp/MessagePanel/MessagePanel";
import ScoreConfirmation from "../../components/MatchApp/ScoreConfirmation/ScoreConfirmation"
import ResetConfirmation from "../../components/MatchApp/ResetConfirmation/ResetConfirmation"
import WinnerBoard from "../../components/MatchApp/WinnerBoard/WinnerBoard";
import ErrorModal from "../../components/UI/ErrorModal/ErrorModal"
import DrawStatsPanel from "../../components/MatchApp/DrawStats/DrawStatsPanel"


class MatchApp extends Component {
	state = {
		saveIsVisible: false,
		setupIsVisible: false,
		drawIsVisible: false,
		resetIsVisible: false,
		isFull: false,
		isReset: false,

	};

	componentDidUpdate(prevProps, prevState) {
		if (
			prevProps.currentGame !== this.props.currentGame &&
			this.props.currentGame < 17
		) {
			this.props.onFetchScheduleData();
			this.props.onFetchTeamsData();
			this.props.onFetchStandingsData();
		}
	}

	//CHANGING TEAMS SCORE
	changeTeam1WinsNumber = () => {
		const {
			currentScoreTeam1,
			currentScoreTeam2,
			currentTeam1,
			currentGame,
			saveStatus
		} = this.props;

		if (currentScoreTeam2 < 3 && currentGame < 17) {
			if (!saveStatus && currentScoreTeam1 < 3) {
				this.props.onChangeTeamWins({ currentScoreTeam1: currentScoreTeam1 + 1 });
			}

			if (currentScoreTeam1 === 2) {
				this.props.onSetCurrentWinner(currentTeam1[1]);
				this.setState((prevState) => ({
					saveIsVisible: true,
				}));
			}

			if (currentScoreTeam1 === 3 && saveStatus) {
				this.props.onMatchReset();
				this.setState((prevState) => ({
					saveIsVisible: false,
				}));
			}
		}
	};

	changeTeam2WinsNumber = () => {
		const {
			currentScoreTeam1,
			currentScoreTeam2,
			currentTeam2,
			currentGame,
			saveStatus
		} = this.props;

		if (currentScoreTeam1 < 3 && currentGame < 17) {
			if (!saveStatus && currentScoreTeam2 < 3) {
				this.props.onChangeTeamWins({ currentScoreTeam2: currentScoreTeam2 + 1 });
			}

			if (currentScoreTeam2 === 2) {
				this.props.onSetCurrentWinner(currentTeam2[1]);
				this.setState({
					saveIsVisible: true,
				});
			}

			if (currentScoreTeam2 === 3 && saveStatus) {
				this.props.onMatchReset();
				this.setState((prevState) => ({
					saveIsVisible: false,
				}));
			}
		}
	};

	//DELETE SCORE POINTS

	deleteTeam1WinsNumber = () => {
		const { currentScoreTeam1, currentScoreTeam2 } = this.props
		if (
			currentScoreTeam1 &&
			currentScoreTeam1 <= 3 &&
			currentScoreTeam2 <= 3
		) {
			this.props.onDeleteTeamWins({
				currentScoreTeam1: currentScoreTeam1 - 1,
			});
		}
	};

	deleteTeam2WinsNumber = () => {
		const { currentScoreTeam1, currentScoreTeam2 } = this.props
		if (
			currentScoreTeam2 &&
			currentScoreTeam2 <= 3 &&
			currentScoreTeam1 <= 3
		) {
			this.props.onDeleteTeamWins({
				currentScoreTeam2: currentScoreTeam2 - 1,
			});
		}
	};

	handleScoreSave = () => {
		if (!this.props.saveStatus) {
			this.props.onUpdateSchedule(this.props.currentGame, {
				scoreTeam1: this.props.currentScoreTeam1,
				scoreTeam2: this.props.currentScoreTeam2,
				winner: this.props.currentWinner,
			});
			this.props.onChangeSaveStatus(!this.props.saveStatus);
			this.handleSave()
		}
	};

	// SHOW STATISTICS

	statsCapture = (data) => {
		if (
			data === 160 ||
			data === 130 ||
			data === 100 ||
			data === 70 ||
			data === 40
		) {
			this.props.onShowStats(true);
		} else if (data === 140 || data === 110 || data === 80 || data === 50) {
			this.props.onShowStats(false);
		}
	};

	handleSetupPanel = () => {
		!this.state.setupIsVisible
			? this.setState({ setupIsVisible: true })
			: this.setState({ setupIsVisible: false });
	};

	handleSave = () => {
		!this.state.saveIsVisible
			? this.setState({ saveIsVisible: true })
			: this.setState({ saveIsVisible: false });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const info = e.target.elements.infobar.value;
		this.props.onSetInfoText(info);
		e.target.elements.infobar.value = "";
		this.handleSetupPanel()
	};

	handleDrawStatsPanel = () => {
		!this.state.drawIsVisible
			? this.setState({ drawIsVisible: true })
			: this.setState({ drawIsVisible: false });
	};


	handleReset = () => {
		!this.state.resetIsVisible
			? this.setState({ resetIsVisible: true })
			: this.setState({ resetIsVisible: false });
	};

	resetApp = () => {
		this.props.resetApp()
		if (this.props.currentGame > 1) {
			this.handleReset()
		}
	}


	goFull = () => {
		!this.state.isFull
			? this.setState({ isFull: true })
			: this.setState({ isFull: false });
	};


	download = async (data, filename, type) => {


		const tournamentData = await axios.get("https://contrabanda-famicom-league-app.firebaseio.com/data.json")
		const exportData = JSON.stringify(tournamentData.data)
		const exportTime = new Date().toString()

		const file = new Blob([exportData], { type: 'application/json' });
		if (window.navigator.msSaveOrOpenBlob) // IE10+
			window.navigator.msSaveOrOpenBlob(file, filename);
		else { // Others
			const a = document.createElement("a"),
				url = URL.createObjectURL(file);
			a.href = url;
			a.download = `Tournament Export ${exportTime}`;
			document.body.appendChild(a);
			a.click();
			setTimeout(function () {
				document.body.removeChild(a);
				window.URL.revokeObjectURL(url);
			}, 0);
		}
	}

	render() {
		const {
			isFull,
			saveIsVisible,
			setupIsVisible,
			drawIsVisible,
			resetIsVisible
		} = this.state;

		const { currentGame, showStats, error } = this.props
		return (
			<>
				<Fullscreen
					enabled={isFull}
					onChange={(isFull) => this.setState({ isFull })}
				>
					{!error ? null : <ErrorModal />}
					<div className="App">
						{currentGame < 17 ? (
							<>
								<Table />
								<Timer statsCapture={this.statsCapture} />
								<Schedule />
								<Draw />
								<Teams />
								<Score
									changeTeam1WinsNumber={this.changeTeam1WinsNumber}
									changeTeam2WinsNumber={this.changeTeam2WinsNumber}
								/>{" "}

								<NavBar
									handleFullscreen={this.goFull}
									handleSave={this.handleSave}
									handleSetupPanel={this.handleSetupPanel}
									handleDrawStatsPanel={this.handleDrawStatsPanel}
									handleReset={this.handleReset}
								/>

							</>
						) : null}

						{showStats ? (
							<Stats />
						) : null}

						{setupIsVisible ? (
							<MessagePanel
								submit={this.handleSubmit}
								handleSetup={this.handleSetupPanel}
							/>
						) : null}

						{drawIsVisible ? <DrawStatsPanel handleDrawStatsPanel={this.handleDrawStatsPanel} /> : null}

						{resetIsVisible ? <ResetConfirmation
							handleReset={this.handleReset}
							resetApp={this.resetApp}

						/> : null}

						{saveIsVisible ? (
							<ScoreConfirmation
								handleSave={this.handleSave}
								handleScoreSave={this.handleScoreSave}
								deleteScore1={this.deleteTeam1WinsNumber}
								deleteScore2={this.deleteTeam2WinsNumber}
								download={this.download}
							/>
						) : null}

						{currentGame === 17 ? <WinnerBoard /> : null}
					</div>
				</Fullscreen>
			</>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.loading,
		saveStatus: state.saveStatus,
		currentTeam1: state.currentTeam1,
		currentTeam2: state.currentTeam2,
		currentScoreTeam1: state.currentScoreTeam1,
		currentScoreTeam2: state.currentScoreTeam2,
		currentWinner: state.currentWinner,
		currentGame: state.currentGame,
		showStats: state.showStats,
		isFull: state.isFull,
		error: state.error
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFetchAppData: () => dispatch(actions.fetchAppData()),
		onChangeTeamWins: (changedTeam) => dispatch(actions.changeTeamWins(changedTeam)),
		onSetCurrentWinner: (winner) => dispatch(actions.setCurrentWinner(winner)),
		onMatchReset: () => dispatch(actions.matchReset()),
		onDeleteTeamWins: (team) => dispatch(actions.deleteTeamWins(team)),
		onFetchTeamsData: () => dispatch(actions.fetchTeamsData()),
		onFetchScheduleData: () => dispatch(actions.fetchScheduleData()),
		onFetchStandingsData: () => dispatch(actions.fetchStandingsData()),
		onUpdateSchedule: (currentGame, updatedData) =>
			dispatch(actions.updateSchedule(currentGame, updatedData)),
		onShowStats: (payload) => dispatch(actions.showStats(payload)),
		onChangeSaveStatus: (payload) =>
			dispatch(actions.changeSaveStatus(payload)),
		onSetInfoText: (infoTxt) => dispatch(actions.setInfoText(infoTxt)),
	};
};

MatchApp.propTypes = {
	loading: PropTypes.bool,
	saveStatus: PropTypes.bool,
	currentTeam1: PropTypes.array,
	currentTeam2: PropTypes.array,
	currentScoreTeam1: PropTypes.number,
	currentScoreTeam2: PropTypes.number,
	currentWinner: PropTypes.string,
	currentGame: PropTypes.number,
	showStats: PropTypes.bool,
	isFull: PropTypes.bool,
	error: PropTypes.string,
	resetApp: PropTypes.func,
	onFetchAppData: PropTypes.func,
	onChangeTeamWins: PropTypes.func,
	onSetCurrentWinner: PropTypes.func,
	onMatchReset: PropTypes.func,
	onDeleteTeamWins: PropTypes.func,
	onFetchTeamsData: PropTypes.func,
	onFetchScheduleData: PropTypes.func,
	onFetchStandingsData: PropTypes.func,
	onUpdateSchedule: PropTypes.func,
	onShowStats: PropTypes.func,
	onChangeSaveStatus: PropTypes.func,
	onSetInfoText: PropTypes.func,
}
export default connect(mapStateToProps, mapDispatchToProps)(MatchApp);
