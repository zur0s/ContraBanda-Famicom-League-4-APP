import React from 'react';
import Draggable from 'react-draggable';
import PropTypes from "prop-types";
import classes from "./MenuWindow.module.css"

const MenuWindow = (props) => {
  let barTitle = null

  switch (props.menuType) {
    case "MessagePanel":
      barTitle = (<div className={classes.MenuBar}> <i className="fas fa-keyboard"></i>CFL Message Panel</div>)
      break;
    case "ScoreConfirmationPanel":
      barTitle = (<div className={classes.MenuBar}> <i className="fas fa-save"></i>Score Confirmation</div>)
      break;
    case "DrawStatsPanel":
      barTitle = (<div className={classes.MenuBar}><i className="fas fa-poll-h"></i>Draw Stats</div>)
      break;
    case "ResetConfirmationPanel":
      barTitle = (<div className={classes.MenuBar}><i className="fa fa-retweet"></i>Reset Confirmation</div>)
      break;
    default: return barTitle
  }

  return (<Draggable bounds={'parent'}><div className={classes.MenuWindow}>
    {barTitle}
    <div className={classes.Exit} onClick={props.handleMenuWindow}>X</div>
    {props.children}
  </div>
  </Draggable>);
}

MenuWindow.propTypes = {
  menuType: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}
export default MenuWindow;