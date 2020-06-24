import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import MatchApp from "./containers/MatchApp/MatchApp"
import { connect } from "react-redux"
import PropTypes from "prop-types";
import StatsCentre from "./containers/StatsCentre/StatsCentre"
import *as actions from "./store/actions/app"
import Spinner from "./components/UI/Spinner/Spinner"
import MatchHistory from "./containers/MatchHistory/MatchHistory"
import Themer from "../src/utils/themer"
import axios from "axios"
import database from "../src/components/MatchApp/db"


class App extends Component {
  resetApp = () => {
    axios.patch("https://contrabanda-famicom-league-app.firebaseio.com/data.json", JSON.stringify(database))
      .then(res => res.status === 200 ? this.props.onAppReset() : null)
  }

  componentDidMount() {
    this.resetApp()
    this.props.onFetchAppData()
  }
  render() {
    return (
      !this.props.loading ?
        (
          <Switch>
            <Themer>
              <Route path="/" exact render={() => <MatchApp resetApp={this.resetApp} />} />
              <Route path="/StatsCentre" component={StatsCentre} />
              <Route path="/MatchHistory" component={MatchHistory} />
            </Themer>
          </Switch>) : <Spinner />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    currentGame: state.currentGame
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchAppData: () => dispatch(actions.fetchAppData()),
    onAppReset: () => dispatch(actions.appReset()),

  };
};

App.propTypes = {
  loading: PropTypes.bool,
  onFetchAppData: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(App);