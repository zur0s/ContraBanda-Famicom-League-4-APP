import React, { useState } from 'react';
import { connect } from "react-redux"
import { withRouter } from "react-router"
import * as actions from "../../../../store/actions/app"
import classes from "./DrawnStats.module.css"
import PropTypes from "prop-types"

const DrawnStats = (props) => {
  const { scheduleData, gamesData, handleDrawStatsPanel } = props
  const [statsMode, setStatsMode] = useState("Game Mode Stats")

  let drawnGames = []
  scheduleData.sort(item => item.drawnGames).map(item => drawnGames.push(item.drawnGames))
  const flatDrawnGames = drawnGames.flat(3)

  let statsData = {
    "Death Match": flatDrawnGames.filter(item => item === "DeathMatch").length,
    "Tag Team": flatDrawnGames.filter(item => item === "TagTeam").length,
    "Contra Team Speed": flatDrawnGames.filter(item => item === "Contra Team Speed").length,
    "Power Climbing": flatDrawnGames.filter(item => item === "Power Climbing").length,
    "Low Pressing Game": flatDrawnGames.filter(item => item === "Low Pressing Game").length
  }

  let statsDataEntries = Object.entries(statsData)
  statsData = statsDataEntries.sort((a, b) => b[1] - a[1])
  statsData = Object.fromEntries(statsDataEntries)

  let gameModeStats = []
  for (const name in statsData) {
    gameModeStats.push(
      <React.Fragment key={name}>
        <div className={classes.StatsModeKey}>
          <div className={classes.Key}>{name}</div>
          <i className="fas fa-share-square" onClick={() => setText(name, statsDataEntries)}></i>
        </div>
        <div className={classes.StatsModeValue}> {statsData[name]}</div >
      </React.Fragment>)
  }

  const gamesTitleArr = []
  if (gamesData) {
    gamesData.forEach(item => gamesTitleArr.push(item.name))
  }

  let gameEntries = []
  let gameStats = {}
  gamesTitleArr.forEach(game => {
    gameStats[game] = flatDrawnGames.filter(item => item === game).length
    gameEntries = Object.entries(gameStats)
    gameStats = gameEntries.sort((a, b) => b[1] - a[1]);
    gameStats = Object.fromEntries(gameStats)
    return gameStats
  })

  let gameDrawnStats = []
  for (const name in gameStats) {
    gameDrawnStats.push(
      <React.Fragment key={name}>
        <div className={classes.StatsGamesKey}>
          <div className={classes.Key}>
            {name}
          </div>
          <i className="fas fa-share-square" onClick={() => setText(name, gameEntries)}></i>
        </div>
        <div className={classes.StatsGamesValue}> {gameStats[name]}</div >
      </React.Fragment>)
  }

  const setText = (name, mode) => {
    const filterOption = mode.filter(item => item[0] === name).flat()
    if (mode === statsDataEntries) {
      filterOption[1] === 0 ? props.onSetInfoText(`There was no game played in ${filterOption[0]} mode in the tournament.`) :
        props.onSetInfoText(`Teams have played ${filterOption[1]} games in ${filterOption[0]} mode in the tournament.`)
      handleDrawStatsPanel()

    } else {
      filterOption[1] === 0 ? props.onSetInfoText(`There was no match played in ${filterOption[0]}.`) : props.onSetInfoText(`Teams played ${filterOption[0]} ${filterOption[1]} times during the tournament.`)
      handleDrawStatsPanel()
    }
  }

  return (
    <>
      <div className={classes.DrawnStats}>
        <div className={classes.DrawnStatsToggle}>
          <div className={statsMode === "Game Mode Stats" ? `${classes.DrawnStatsOption} ${classes.Active}` : classes.DrawnStatsOption} onClick={() => setStatsMode("Game Mode Stats")}>Modes</div>
          <div className={statsMode === "Drawn Games Stats" ? `${classes.DrawnStatsOption} ${classes.Active}` : classes.DrawnStatsOption} onClick={() => setStatsMode("Drawn Games Stats")}> Games</div>
        </div>
        <div className={statsMode === "Game Mode Stats" ? classes.DisplayModeStats : classes.DisplayGamesStats}>
          {statsMode === "Game Mode Stats" ? gameModeStats : gameDrawnStats}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    scheduleData: state.scheduleData,
    gamesData: state.gamesData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSetInfoText: (infoTxt) => dispatch(actions.setInfoText(infoTxt))
  }
}

DrawnStats.propTypes = {
  scheduleData: PropTypes.array,
  gamesData: PropTypes.array,
  handleDrawStatsPanel: PropTypes.func,
  onSetInfoText: PropTypes.func

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(React.memo(DrawnStats)));