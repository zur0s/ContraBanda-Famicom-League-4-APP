import React from 'react';
import PropTypes from "prop-types"
import classes from "./TeamReview.module.css"

const TeamReview = (props) => {
  const { teamsData } = props
  const selectedTeam = teamsData.filter(item => item.name === props.name)
  const teamReview = selectedTeam.map(item => {

    return (
      <div key={item.name} className={classes.TeamReview}>
        <div className={classes.TeamMiniature}><img src={item.logo} alt={item.name} /></div>
        <ul className={classes.TeamInfo}>
          <li>Team Info:</li>
          <li>{item.name}</li>
          <li>Founded: {item.estDate}</li>
          <li>Favorite genre: {item.genre} </li>
          <li>Galaga Ratio: {item.stats.galagaRatio}</li>
          <li>Average Age: {item.stats.averageAge} yo</li>
          <li><i className="fas fa-trophy"></i> {item.stats.awards}</li>
        </ul>

        <ul className={classes.TeamLineup}>
          <li>Team Line-Up:</li>
          <li>{item.players[0]} (C)</li>
          <li>{item.players[1]}</li>
          <li>{item.players[2]}</li>
        </ul>

        <ul className={classes.TeamStats}>
          <li>Team Stats:</li>
          <li>Matches: {item.stats.allMatches} </li>
          <li>Win Matches: {item.stats.allWins}</li>
          <li>Lost Matches: {item.stats.allLoses}</li>
          <li>Games: {item.stats.allGames}</li>
          <li>Win Games: {item.stats.wonGames}</li>
          <li>Lost Games: {item.stats.lostGames}</li>
          <li>Winining Matches Ratio: {((item.stats.allWins / item.stats.allMatches) * 100).toFixed(2)}% </li>
          <li>Winining Games Ratio: {((item.stats.wonGames / item.stats.allGames) * 100).toFixed(2)}% </li>
          <li>Games per Match: {(item.stats.allGames / item.stats.allMatches).toFixed(1)} </li>
        </ul>
      </div>
    )
  })
  return (
    <div>{teamReview}</div>
  );
}

TeamReview.propTypes = {
  teamsData: PropTypes.array.isRequired
}

export default TeamReview;