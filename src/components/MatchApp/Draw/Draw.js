import React, { useState, useEffect, useRef } from "react";
import classes from "./Draw.module.css";
import * as actions from "../../../store/actions/app";
import { connect } from "react-redux"
import { useAudio } from "react-use"
import PropTypes from "prop-types"

const Draw = props => {

	const { scheduleData, currentGame, currentScoreTeam1, currentScoreTeam2, currentTeam1, currentTeam2, saveStatus } = props

	const [gamesData, setGamesData] = useState(props.gamesData);
	const [gameName, setGameName] = useState("");
	const [gameMode, setGameMode] = useState("");
	const [gameMatchCounter, setGameMatchCounter] = useState(currentScoreTeam1 + currentScoreTeam2 + 1);
	const [drawnGames, setDrawnGames] = useState([])

	const ref = useRef(null);

	const [audio, , controls] = useAudio({
		src: `static/drawMusic/${gameName}.mp3`,
		autoPlay: true,
	})

	useEffect(() => {
		let arr = drawnGames[gameMatchCounter - 1]
		if (arr) {
			arr.push(currentTeam1)
			setDrawnGames(drawnGames)
		}
	}, [currentScoreTeam1])

	useEffect(() => {
		let arr = drawnGames[gameMatchCounter - 1]
		if (arr) {
			arr.push(currentTeam2)
			setDrawnGames(drawnGames)
		}
	}, [currentScoreTeam2])

	useEffect(() => {
		ref.current.focus();
	})

	useEffect(() => {
		props.onUpdateSchedule(currentGame, {
			drawnGames: drawnGames
		})
	}, [saveStatus])

	useEffect(() => {
		handleReset()
	}, [currentGame])

	useEffect(() => {
		setGameMatchCounter(currentScoreTeam1 + currentScoreTeam2)
	}, [currentScoreTeam1, currentScoreTeam2])


	let drawGames = []
	scheduleData.sort(item => item.drawnGames).map(item => drawGames.push(item.drawnGames))
	const flatDrawnGames = drawGames.flat(3)

	let statsData = {
		"DeathMatch": flatDrawnGames.filter(item => item === "DeathMatch").length,
		"TagTeam": flatDrawnGames.filter(item => item === "TagTeam").length,
		"Contra Team Speed": flatDrawnGames.filter(item => item === "Contra Team Speed").length,
		"Power Climbing": flatDrawnGames.filter(item => item === "Power Climbing").length,
		"Low Pressing Game": flatDrawnGames.filter(item => item === "Low Pressing Game").length
	}

	let statsDataEntries = Object.entries(statsData)

	const gamesTitleArr = []
	if (gamesData) {
		gamesData.forEach(item => gamesTitleArr.push(item.name))
	}

	let gamesDataEntries = []
	let gameStats = {}
	gamesTitleArr.forEach(game => {
		gameStats[game] = flatDrawnGames.filter(item => item === game).length
		gamesDataEntries = Object.entries(gameStats)
	})

	let infoTimeoutId = null;
	const setText = (mode, name) => {
		clearTimeout(infoTimeoutId)
		const filterModes = statsDataEntries.filter(item => item[0] === mode).flat()
		const filterGames = gamesDataEntries.filter(item => item[0] === name).flat()

		let gameInfoText = `${filterGames[0]} was played ${filterGames[1]} times during the tournament.`
		let modeInfoText = `Teams have played ${filterModes[1]} games in ${filterModes[0]} mode before this match.`

		if (filterGames[1] === 0) {
			gameInfoText = `${filterGames[0]} was not played in the tournament.`
		} else if (filterGames[1] === 1) {
			gameInfoText = `${filterGames[0]} was played ${filterGames[1]} time during the tournament.`
		}

		if (filterModes[1] === 0) {
			modeInfoText = `There was no game in ${filterModes[0]} mode in the tournament.`
		} else if (filterModes[1] === 1) {
			modeInfoText = `Teams have played ${filterModes[1]} game in ${filterModes[0]} mode before this match.`
		}

		infoTimeoutId = setTimeout(() => props.onSetInfoText(`${gameInfoText} ${modeInfoText}`), 5000)
	}

	const handleDrawGame = () => {
		if (gamesData.length) {
			const gameIndex = Math.floor(Math.random() * gamesData.length);
			let data = [...gamesData];
			const game = data.splice(gameIndex, 1);
			const drawGameMode = Math.floor(Math.random() * game[0].gameMode.length);
			const { name, gameMode } = game[0];
			setGameName(name);
			controls.play()
			setGameMode(gameMode[drawGameMode]);
			setText(gameMode[drawGameMode], name)
			setDrawnGames([...drawnGames, [name, gameMode[drawGameMode]]])
			setGameMatchCounter(gameMatchCounter + 1);
			setGamesData(data);
		} else {
			return null;
		}
	};

	const handleReset = () => {
		setGamesData(props.gamesData)
		setDrawnGames([])
		setGameName("");
		setGameMode("");
		setGameMatchCounter(0);
		props.onSetInfoText("")
	};

	const handleKey = event => {
		if (event.keyCode === 13 && gameMatchCounter <= (currentScoreTeam1 + currentScoreTeam2)) {
			handleDrawGame();
		} else if (event.keyCode === 32) {
			handleReset();
		}
	};

	return (
		<>
			{audio}
			<div onKeyDown={handleKey} className={classes.Draw} tabIndex="1" ref={ref}>
				<div className={classes.DrawGame}>
					<img src={`static/${gameName}.png`} alt={`${gameName}`} />

					{gameMatchCounter === 1 && gameName ? <h1>{gameMode}</h1> : null}
					{gameMatchCounter === 2 && gameName ? <h1>{gameMode}</h1> : null}
					{gameMatchCounter === 3 && gameName ? <h1>{gameMode}</h1> : null}
					{gameMatchCounter === 4 && gameName ? <h1>{gameMode}</h1> : null}
					{gameMatchCounter === 5 && gameName ? <h1>{gameMode}</h1> : null}
				</div>

				<div className={classes.DrawPanel}>
					<button onClick={handleReset}>Reset</button>
					<button disabled={gameMatchCounter > (currentScoreTeam1 + currentScoreTeam2) ? true : false} onClick={handleDrawGame}>Draw Game!</button>
				</div>

				{gameMatchCounter === 1 && gameName ? (
					<div className={classes.GameCounter}>{`${gameMatchCounter}st game in the match`}</div>
				) : null}
				{gameMatchCounter === 2 && gameName ? (
					<div className={classes.GameCounter}>{`${gameMatchCounter}nd game in the match`}</div>
				) : null}
				{gameMatchCounter === 3 && gameName ? (
					<div className={classes.GameCounter}>{`${gameMatchCounter}rd game in the match`}</div>
				) : null}
				{gameMatchCounter > 3 && gameName ? (
					<div className={classes.GameCounter}>{`${gameMatchCounter}th game in the match`}</div>
				) : null}
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		scheduleData: state.scheduleData,
		gamesData: state.gamesData,
		currentGame: state.currentGame,
		currentScoreTeam1: state.currentScoreTeam1,
		currentScoreTeam2: state.currentScoreTeam2,
		currentTeam1: state.currentTeam1[1],
		currentTeam2: state.currentTeam2[1],
		saveStatus: state.saveStatus,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onUpdateSchedule: (currentGame, updatedData) =>
			dispatch(actions.updateSchedule(currentGame, updatedData)),
		onSetInfoText: (infoTxt) => dispatch(actions.setInfoText(infoTxt))
	}
}

Draw.propTypes = {
	scheduleData: PropTypes.array.isRequired,
	gamesData: PropTypes.array,
	currentGame: PropTypes.number.isRequired,
	currentScoreTeam1: PropTypes.number.isRequired,
	currentScoreTeam2: PropTypes.number.isRequired,
	currentTeam1: PropTypes.string,
	currentTeam2: PropTypes.string,
	saveStatus: PropTypes.bool.isRequired,
	onUpdateSchedule: PropTypes.func.isRequired,
	onSetInfoText: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Draw));
