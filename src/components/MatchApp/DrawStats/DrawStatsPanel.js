import React from 'react';
import MenuWindow from "../../UI/MenuWindow/MenuWindow"
import DrawnGames from "./DrawnStats/DrawnStats"
import PropTypes from "prop-types"

const DrawStatsPanel = (props) => {
  return (
    <MenuWindow menuType="DrawStatsPanel" handleMenuWindow={props.handleDrawStatsPanel}>
      <DrawnGames handleDrawStatsPanel={props.handleDrawStatsPanel} />
    </MenuWindow>
  )
}

DrawStatsPanel.propTypes = {
  handleDrawStatsPanel: PropTypes.func.isRequired
}

export default DrawStatsPanel;
