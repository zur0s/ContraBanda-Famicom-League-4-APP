import React, { useState } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classes from "./ErrorModal.module.css"

const ErrorModal = (props) => {
  const [showModal, setShowModal] = useState(true)

  return (
    <div onClick={() => setShowModal(!showModal)} className={showModal ? classes.ErrorModal : classes.HideErrorModal}  >
      <div className={classes.ErrorModalMain}>
        <p>Whoops, something went wrong...</p>
        {props.error}
      </div></div>
  );
};

const mapStateToProps = state => {
  return {
    error: state.error
  }
}

ErrorModal.propTypes = {
  error: PropTypes.string
}

export default connect(mapStateToProps)(ErrorModal)