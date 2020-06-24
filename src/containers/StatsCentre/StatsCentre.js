import React, { useState } from 'react';
import { connect } from "react-redux"
import *as actions from "../../store/actions/app"
import { withRouter } from "react-router-dom"
import classes from "./StatsCentre.module.css"
import Fullscreen from "react-full-screen";
import PropTypes from "prop-types";
import TeamSelector from "../../components/StatsCentre/TeamSelector/TeamSelector"
import TeamReview from "../../components/StatsCentre/TeamReview/TeamReview"
import StatsLineChart from "../../components/StatsCentre/TeamStatistics/StatsLineChart"
import StatsBarChart from "../../components/StatsCentre/TeamStatistics/StatsBarChart"
import StatsPieChart from "../../components/StatsCentre/TeamStatistics/StatsPieChart"
import NavBar from "../../components/UI/NavigationBar/NavBar"

const StatsCentre = (props) => {

  const { teamsData, currentTeam1 } = props

  const [selectedTeam, setSelectedTeam] = useState(currentTeam1[1])
  const [selectedChart, setSelectedChart] = useState("barChart")
  const [firstParameter, setFirstParameter] = useState("allMatches")
  const [secondParameter, setSecondParameter] = useState("allWins")
  const [teamIndex, setTeamIndex] = useState(currentTeam1[0])
  const [isFull, goFull] = useState(false)

  const selectTeam = (team, index) => {
    setSelectedTeam(team)
    setTeamIndex(index)
  }

  const statsData = []
  teamsData.map((item, index) => {
    return statsData.push({
      name: item.name,
      allMatches: item.stats.allMatches,
      allWins: item.stats.allWins,
      allLoses: item.stats.allLoses,
      allGames: item.stats.allGames,
      wonGames: item.stats.wonGames,
      lostGames: item.stats.lostGames,
      winMatchesRatio: ((item.stats.allWins / item.stats.allMatches) * 100).toFixed(2),
      winGamesRatio: (item.stats.wonGames / item.stats.allGames).toFixed(2) * 100,
      averageAge: item.stats.averageAge,
      galagaRatio: item.stats.galagaRatio,
      gamesPerMatch: (item.stats.allGames / item.stats.allMatches).toFixed(1),
      fill: item.teamColor
    })
  })

  const selectChart = (
    <form>
      <label>Show statistics as:</label>
      <select value={selectedChart} onChange={e => setSelectedChart(e.target.value)}>
        <option value="barChart">Bar Chart</option>
        <option value="lineChart">Line Chart</option>
        <option value="pieChart">Pie Chart</option>
      </select>
    </form>
  )

  let selectStats = (
    <form>
      <label>Choose parameter:</label>
      <select value={firstParameter} onChange={e => setFirstParameter(e.target.value)}>

        <optgroup label="Matches">
          <option value="allMatches">All Matches</option>
          <option value="allWins">Won Matches</option>
          <option value="allLoses">Lost Matches</option>
        </optgroup>
        <optgroup label="Games">
          <option value="allGames">All Games</option>
          <option value="wonGames">Won Games</option>
          <option value="lostGames">Lost Games</option>
        </optgroup>
        <optgroup label="Ratios">
          <option value="winMatchesRatio">Wins Matches</option>
          <option value="winGamesRatio">Wins Games</option>
          <option value="gamesPerMatch">Games / Match</option>
        </optgroup>
        <optgroup label="Other">
          <option value="averageAge">Average Age</option>
          <option value="galagaRatio">Galaga Ratio</option>
        </optgroup>
      </select>
    </form >
  )

  if (selectedChart === "lineChart") {
    selectStats = (
      <>
        <form>
          <label>Choose parameter:</label>
          <select value={firstParameter} onChange={e => setFirstParameter(e.target.value)}>

            <optgroup label="Matches">
              <option value="allMatches">Matches</option>
              <option value="allWins">Won Matches</option>
              <option value="allLoses">Lost Matches</option>
            </optgroup>
            <optgroup label="Games">
              <option value="allGames">Games</option>
              <option value="wonGames">Won Games</option>
              <option value="lostGames">Lost Games</option>
            </optgroup>
            <optgroup label="Ratios">
              <option value="winMatchesRatio">Wins Matches</option>
              <option value="winGamesRatio">Wins Games</option>
              <option value="gamesPerMatch">Games / Match</option>
            </optgroup>
            <optgroup label="Other">
              <option value="averageAge">Average Age</option>
              <option value="galagaRatio">Galaga Ratio</option>
            </optgroup>
          </select>
        </form >
        <form>
          <label>Choose parameter:</label>
          <select value={secondParameter} onChange={e => setSecondParameter(e.target.value)}>
            <optgroup label="Matches">
              <option value="allMatches">Matches</option>
              <option value="allWins">Won Matches</option>
              <option value="allLoses">Lost Matches</option>
            </optgroup>
            <optgroup label="Games">
              <option value="allGames">Games</option>
              <option value="wonGames">Won Games</option>
              <option value="lostGames">Lost Games</option>
            </optgroup>
            <optgroup label="Ratios">
              <option value="winMatchesRatio">Wins Matches</option>
              <option value="winGamesRatio">Wins Games</option>
              <option value="gamesPerMatch">Games / Match</option>
            </optgroup>
            <optgroup label="Other">
              <option value="averageAge">Average Age</option>
              <option value="galagaRatio">Galaga Ratio</option>
            </optgroup>
          </select>
        </form >
      </>
    )
  } else if (selectedChart === "pieChart") {
    selectStats = (
      <form>
        <label>Choose parameter:</label>
        <select value={firstParameter} onChange={e => setFirstParameter(e.target.value)}>
          <optgroup label="Matches">
            <option value="allMatches">All Matches</option>
            <option value="allWins">Won Matches</option>
            <option value="allLoses">Lost Matches</option>
          </optgroup>
          <optgroup label="Games">
            <option value="allGames">All Games</option>
            <option value="wonGames">Won Games</option>
            <option value="lostGames">Lost Games</option>
          </optgroup>
        </select>
      </form >
    )
  }

  return (
    <Fullscreen enabled={isFull} onChange={goFull}>
      <div className={classes.StatsCentre}>
        <TeamSelector teamsData={teamsData} selectTeam={selectTeam} teamIndex={teamIndex} />
        <TeamReview teamsData={teamsData} name={selectedTeam} />
        <div className={classes.SelectBar}>
          {selectChart}
          {selectStats}
        </div>
        <div className={classes.StatsContainer}>
          {selectedChart === "barChart" ? < StatsBarChart statsData={statsData} selectedTeam={selectedTeam} firstParameter={firstParameter} isFull={isFull} /> : null}
          {selectedChart === "lineChart" ? <StatsLineChart statsData={statsData} firstParameter={firstParameter} secondParameter={secondParameter} isFull={isFull} /> : null}
          {selectedChart === "pieChart" ? <StatsPieChart statsData={statsData} selectedTeam={selectedTeam} firstParameter={firstParameter} isFull={isFull} /> : null}
        </div>
        <NavBar handleFullscreen={() => goFull(!isFull)} />
      </div>
    </Fullscreen>
  )
}

const mapStateToProps = (state) => {
  return {
    teamsData: state.teamsData,
    currentTeam1: state.currentTeam1
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchAppData: () => dispatch(actions.fetchAppData()),
  };
};

StatsCentre.propTypes = {
  teamsData: PropTypes.array,
  currentTeam1: PropTypes.array,
  onFetchAppData: PropTypes.func
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StatsCentre));

