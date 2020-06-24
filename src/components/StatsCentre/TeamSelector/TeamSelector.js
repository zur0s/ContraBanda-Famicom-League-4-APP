import React from 'react';
import PropTypes from "prop-types"
import classes from "./TeamSelector.module.css"


const TeamSelector = (props) => {
  const { teamsData, selectTeam, teamIndex } = props

  const teamSelector = teamsData.map((item, index) => {
    return <div className={index === teamIndex ? `${classes.TeamTile} ${classes.Active}` : classes.TeamTile} key={item.name} onClick={() => selectTeam(item.name, index)} >
      <img src={item.logo} alt={item.name}></img>
    </div>
  })

  return (
    <div className={classes.TeamSelector} >
      {teamSelector}
    </div>
  )
}

TeamSelector.propTypes = {
  teamsData: PropTypes.array.isRequired,
  selectTeam: PropTypes.func.isRequired,
  teamIndex: PropTypes.number
}
export default TeamSelector;