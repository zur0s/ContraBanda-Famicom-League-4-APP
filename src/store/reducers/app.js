import * as actionTypes from "../actions/actionTypes";

const initialState = {
	loading: false,
	statsIsUpdated: false,
	currentGame: 1,
	currentTeam1: [],
	currentTeam2: [],
	currentScoreTeam1: 0,
	currentScoreTeam2: 0,
	teamsData: [],
	scheduleData: [],
	standingsData: [],
	currentWinner: "",
	teamsStats: "",
	showStats: false,
	saveStatus: false,
	infoText: "",
	error: "",
};

export const fetchAppDataStart = (state, action) => {
	return { ...state, loading: action.loading };
};

export const fetchAppDataFail = (state, action) => {
	return {
		...state,
		loading: action.loading,
		error: action.error,
		errorMessage: action.errorMessage
	};
};

export const fetchAppDataSuccess = (state, action) => {
	return {
		...state,
		loading: action.loading,
	};
};

export const setTeamsData = (state, action) => {
	return {
		...state,
		teamsData: action.teamsData,
	};
};

export const setGamesData = (state, action) => {
	return {
		...state,
		gamesData: action.gamesData,
	};
};

export const setScheduleData = (state, action) => {
	return {
		...state,
		scheduleData: action.scheduleData,
		currentTeam1: [
			action.scheduleData[state.currentGame - 1].team1ID - 1,
			action.scheduleData[state.currentGame - 1].team1,
		],
		currentTeam2: [
			action.scheduleData[state.currentGame - 1].team2ID - 1,
			action.scheduleData[state.currentGame - 1].team2,
		],
	};
};

export const setStandingsData = (state, action) => {
	return {
		...state,
		standingsData: action.standingsData,
	};
};

export const changeTeamWins = (state, action) => {
	return { ...state, ...action.changedTeam };
};

export const setCurrentWinner = (state, action) => {
	return {
		...state,
		currentWinner: action.winner,
		saveIsVisible: true,
	};
};

export const matchReset = (state, action) => {
	return {
		...state,
		currentGame: state.currentGame + 1,
		saveStatus: !state.saveStatus,
		currentScoreTeam1: 0,
		currentScoreTeam2: 0,
		saveIsVisible: false,

	};
};

export const appReset = (state, action) => {
	return {
		...state,
		currentGame: 1,
		currentScoreTeam1: 0,
		currentScoreTeam2: 0,
		saveIsVisible: false,
		saveStatus: false,
	};
};

export const deleteTeamWins = (state, action) => {
	return {
		...state,
		...action.team,
	};
};

export const startUpdateSchedule = (state, action) => {
	const newScheduleData = state.scheduleData.map((item, index) => {
		if (item.id === action.currentGame) {
			return {
				...item,
				scoreTeam1: action.updateData.scoreTeam1,
				scoreTeam2: action.updateData.scoreTeam2,
				currentWinner: action.updateData.currentWinner,
			};
		}
		return item;
	});

	return { ...state, scheduleData: newScheduleData };
};

export const startUpdateStandings = (state, action) => {
	return {
		...state,
		standingsData: action.updateStandings,
	};
};

export const showStats = (state, action) => {
	return {
		...state,
		showStats: action.show,
	};
};

export const changeSaveStatus = (state, action) => {
	return {
		...state,
		saveStatus: action.saveStatus,
	};
};

export const setInfoText = (state, action) => {
	return {
		...state,
		infoText: action.infoText,
	};
};


export const failUpdateStats = (state, action) => {
	return {
		...state,
		error: action.error,
	};
};


const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_APP_DATA_START:
			return fetchAppDataStart(state, action);
		case actionTypes.FETCH_APP_DATA_FAIL:
			return fetchAppDataFail(state, action);
		case actionTypes.FETCH_APP_DATA_SUCCESS:
			return fetchAppDataSuccess(state, action);

		case actionTypes.SET_TEAMS_DATA:
			return setTeamsData(state, action);
		case actionTypes.SET_SCHEDULE_DATA:
			return setScheduleData(state, action);
		case actionTypes.SET_GAMES_DATA:
			return setGamesData(state, action);
		case actionTypes.SET_STANDINGS_DATA:
			return setStandingsData(state, action);
		case actionTypes.CHANGE_TEAM_WINS:
			return changeTeamWins(state, action);
		case actionTypes.SET_CURRENT_WINNER:
			return setCurrentWinner(state, action);
		case actionTypes.MATCH_RESET:
			return matchReset(state, action);
		case actionTypes.APP_RESET:
			return appReset(state, action);
		case actionTypes.DELETE_TEAM_WINS:
			return deleteTeamWins(state, action);
		case actionTypes.START_UPDATE_SCHEDULE:
			return startUpdateSchedule(state, action);
		case actionTypes.SUCCESS_UPDATE_STANDINGS:
			return startUpdateStandings(state, action);
		case actionTypes.FAIL_UPDATE_STATS:
			return failUpdateStats(state, action);
		case actionTypes.SHOW_STATS:
			return showStats(state, action);
		case actionTypes.CHANGE_SAVE_STATUS:
			return changeSaveStatus(state, action);
		case actionTypes.SET_INFO_TEXT:
			return setInfoText(state, action);
		default:
			return state;
	}
};

export default appReducer;
