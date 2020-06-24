import * as actionTypes from "./actionTypes";
import axios from "axios";

const teamsAPI =
	"https://contrabanda-famicom-league-app.firebaseio.com/data/teams.json";
const scheduleAPI =
	"https://contrabanda-famicom-league-app.firebaseio.com/data/schedule.json";
const standingsAPI =
	"https://contrabanda-famicom-league-app.firebaseio.com/data/standings.json";

const gamesAPI =
	"https://contrabanda-famicom-league-app.firebaseio.com/data/games.json";

export const fetchAppDataSuccess = () => {
	return {
		type: actionTypes.FETCH_APP_DATA_SUCCESS,
		loading: false,
	};
};

export const fetchAppDataFail = (error) => {
	return {
		type: actionTypes.FETCH_APP_DATA_FAIL,
		error: error,
	};
};

export const fetchAppDataStart = () => {
	return {
		type: actionTypes.FETCH_APP_DATA_START,
		loading: true,
	};
};

export const fetchAppData = () => {
	return async (dispatch) => {
		try {
			dispatch(fetchAppDataStart());

			const teams = await axios
				.get(teamsAPI)

			if (teams.data === null) {
				await dispatch(fetchAppDataFail("Fail loading teams data."))
			} else {
				dispatch(setTeamsData(teams.data))
			}

			const standings = await axios
				.get(standingsAPI)
			if (standings.data === null) {
				await dispatch(fetchAppDataFail("Fail loading standings data."))
			} else {
				dispatch(setStandingsData(standings.data))
			}

			const schedule = await axios
				.get(scheduleAPI)
			if (schedule.data === null) {
				await dispatch(fetchAppDataFail("Fail loading schedule data."))
			} else {
				dispatch(setScheduleData(schedule.data))
			}

			const games = await axios
				.get(gamesAPI)
			if (games.data === null) {
				await dispatch(fetchAppDataFail("Fail loading games data."))
			} else {
				dispatch(setGamesData(games.data))
			}

			if (teams.data && standings.data && schedule.data && games.data) {
				dispatch(fetchAppDataSuccess())
			}
		} catch (error) {
			dispatch(fetchAppDataFail(error.message))
		}

	};
};

export const fetchTeamsData = () => {
	return (dispatch) => {
		axios
			.get(teamsAPI)
			.then((response) => dispatch(setTeamsData(response.data)));
	};
};

export const setTeamsData = (data) => {
	return {
		type: actionTypes.SET_TEAMS_DATA,
		teamsData: data,
	};
};


export const setScheduleData = (data) => {
	return {
		type: actionTypes.SET_SCHEDULE_DATA,
		scheduleData: data,
	};
};

export const fetchScheduleData = () => {
	return (dispatch) => {
		axios
			.get(scheduleAPI)
			.then((response) => dispatch(setScheduleData(response.data)));
	};
};

export const setStandingsData = (data) => {
	return {
		type: actionTypes.SET_STANDINGS_DATA,
		standingsData: data,
	};
};

export const fetchStandingsData = () => {
	return (dispatch) => {
		axios
			.get(standingsAPI)
			.then((response) => dispatch(setStandingsData(response.data)));
	};
};


export const setGamesData = (data) => {
	return {
		type: actionTypes.SET_GAMES_DATA,
		gamesData: data,
	};
};


export const changeTeamWins = (changedTeam) => {
	return {
		type: actionTypes.CHANGE_TEAM_WINS,
		changedTeam: changedTeam
	};
};

export const setCurrentWinner = (winner) => {
	return {
		type: actionTypes.SET_CURRENT_WINNER,
		winner: winner,
	};
};

export const matchReset = () => {
	return {
		type: actionTypes.MATCH_RESET,
	};
};

export const appReset = () => {
	return {
		type: actionTypes.APP_RESET,

	};
};



export const deleteTeamWins = (team) => {
	return {
		type: actionTypes.DELETE_TEAM_WINS,
		team: team,
	};
};


export const startUpdateSchedule = (data, currentGame) => {
	return {
		type: actionTypes.START_UPDATE_SCHEDULE,
		updateData: data,
		currentGame: currentGame,
	};
};

export const updateSchedule = (currentGame, updateData) => {
	return (dispatch) => {
		axios
			.patch(
				`https://contrabanda-famicom-league-app.firebaseio.com/data/schedule/${
				currentGame - 1
				}.json`,
				updateData
			)
			.then((response) =>
				dispatch(startUpdateSchedule(response.data, currentGame))
			);
	};
};

export const successUpdateStandings = () => {
	return {
		type: actionTypes.SUCCESS_UPDATE_STANDINGS,
	};
};

export const updateStandings = (updateStandings) => {
	return () => {
		axios.put(standingsAPI, updateStandings).then()
	};
};

export const showStats = (payload) => {
	return {
		type: actionTypes.SHOW_STATS,
		show: payload,
	};
};

export const changeSaveStatus = (payload) => {
	return {
		type: actionTypes.CHANGE_SAVE_STATUS,
		saveStatus: payload,
	};
};

export const setInfoText = (infoText) => {
	return {
		type: actionTypes.SET_INFO_TEXT,
		infoText,
	};
};

export const failUpdateStats = (err) => {
	return {
		type: actionTypes.FAIL_UPDATE_STATS,
		error: err,
	};
};

export const updateStats = (teamIndex, updatedStats) => {
	return async (dispatch) => {
		try {
			await axios
				.patch(
					`https://contrabanda-famicom-league-app.firebaseio.com/data/teams/${teamIndex}/stats.json`,
					updatedStats
				)

		} catch (err) {
			return dispatch(failUpdateStats(err));
		}
	};
};



