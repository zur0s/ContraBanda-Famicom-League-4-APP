import React, { useState } from 'react';
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import TeamSelector from "../../components/StatsCentre/TeamSelector/TeamSelector"
import Navbar from "../../components/UI/NavigationBar/NavBar"
import Fullscreen from "react-full-screen";
import PropTypes from "prop-types"
import classes from "./MatchHistory.module.css"

const MatchHistory = props => {

  const { scheduleData, teamsData, currentTeam1 } = props

  const [selectedTeam, setSelectedTeam] = useState(null)
  const [teamIndex, setTeamIndex] = useState(currentTeam1[0])
  const [isFull, goFull] = useState(false)

  const selectTeam = (team, index) => {
    setSelectedTeam(team)
    setTeamIndex(index)
  }

  const filterData = scheduleData.filter(selectedTeam ? item => item.team1 === selectedTeam || item.team2 === selectedTeam : item => item)

  const drawnGamesList = filterData.map((item) => {
    if (item.drawnGames) {
      return item.drawnGames.map(item =>
        <div key={item[0]} className={classes.DrawTile}>
          <div className={classes.TeamCircle}>
            <img src={`static/${item[0]}.png`} alt={`${item[0]}`} />
          </div>
          {selectedTeam !== null ? (<div className={selectedTeam === item[2] ? `${classes.Stamp} ${classes.WinStamp}` : `${classes.Stamp} ${classes.LossStamp}`}></div>) : null}
          <div className={classes.GameMode}>{item[1]}</div>
        </div>)
    } else { return null }
  })

  const matchListRender = filterData.map((item, index) => {
    let stage = null
    if (item.id <= 12) {
      stage = "Group Stage"
    } else if (item.id === 13 || item.id === 14) {
      stage = "Semi Final"
    } else if (item.id === 15) {
      stage = "3rd Place Match"
    } else if (item.id === 16) {
      stage = "Final"
    }

    let scoreStatus = null
    if (selectedTeam === item.winner) {
      scoreStatus = <div className={classes.Winner}>WIN</div>
    } else if ((item.scoreTeam1 === 0 && item.scoreTeam2 === 0) || (item.scoreTeam1 === undefined && item.scoreTeam2 === undefined)) {
      scoreStatus = null
    } else {
      scoreStatus = <div className={classes.Loser}>LOSS</div>
    }
    return (
      <div key={item.time} className={classes.MatchTile}>
        <div className={classes.Stage} style={{ backgroundColor: item.group }} >{stage} </div>
        <div className={classes.Time} >{item.time} </div>
        {selectedTeam ? scoreStatus : null}
        <div className={classes.Team}> {item.team1} - {item.team2} {item.scoreTeam1 !== undefined ? `[${item.scoreTeam1} : ${item.scoreTeam2}]` : <span>LIVE NOW!</span>}</div>
        <div className={classes.GamesList}>{drawnGamesList[index]}</div>
      </div>
    )
  })
  return (
    <Fullscreen enabled={isFull} onChange={goFull}>
      <div className={classes.MatchHistory}>
        <div>
          <div className={classes.Nav}>
            <TeamSelector teamsData={teamsData} selectTeam={selectTeam} teamIndex={teamIndex} />
          </div>
          <div className={classes.MatchList}>
            {matchListRender}
          </div>
        </div>
        <Navbar handleFullscreen={() => goFull(!isFull)} />
      </div>
    </Fullscreen >
  );
}

const mapStateToProps = state => {
  return {
    scheduleData: state.scheduleData,
    teamsData: state.teamsData,
    currentTeam1: state.currentTeam1
  }
}

MatchHistory.propTypes = {
  scheduleData: PropTypes.array,
  teamsData: PropTypes.array,
  currentTeam1: PropTypes.array,
}

export default withRouter(connect(mapStateToProps)(MatchHistory));