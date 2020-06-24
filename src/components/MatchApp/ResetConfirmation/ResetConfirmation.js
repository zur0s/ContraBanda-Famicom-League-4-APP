import React from "react";
import { connect } from "react-redux";
import classes from "./ResetConfirmation.module.css";
import MenuWindow from "../../UI/MenuWindow/MenuWindow"
import PropTypes from "prop-types"

const ResetConfirmation = props => {
  const {
    handleReset,
    resetApp,
    currentGame
  } = props;

  return (
    <MenuWindow menuType="ResetConfirmationPanel" handleMenuWindow={handleReset}>
      <div className={classes.ResetConfirmation}>
        <div className={classes.AlertText}>
          <p>You started the tournament and played <span>{currentGame}</span> {currentGame > 1 ? "matches" : "match"}.</p>
          <p> The operation will delete all results and statistics. </p>
          <p>Do you want to reset all data?</p></div>
        <div className={classes.ResetButtons}> <button onClick={resetApp}>YES</button> <button onClick={handleReset}>NO</button></div>
      </div>
    </MenuWindow>
  );
};

const mapStateToProps = state => {
  return {
    currentGame: state.currentGame
  };
};

ResetConfirmation.propTypes = {
  currentGame: PropTypes.number,
  resetApp: PropTypes.func,
  handleReset: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(React.memo(ResetConfirmation));
