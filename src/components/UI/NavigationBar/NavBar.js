import React from "react";
import classes from "./NavBar.module.css";
import { connect } from "react-redux"
import ThemeToggle from "../Toggle/ThemeToggle"
import Jingle from "./Jingle/Jingle"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const NavBar = (props) => {

	let navBar = (<div className={classes.NavBar}>
		<div className={classes.Info}>
			<h3>{props.info}</h3>
		</div>
		<div className={classes.Menu}>
			<i className={props.scoreTeam1 === 3 || props.scoreTeam2 === 3 ? `far fa-save ${classes.Active}` : "far fa-save"}
				onClick={props.handleSave}></i>
			<i className="far fa-edit" title="Message" onClick={props.handleSetupPanel}></i>
			<i className="fas fa-poll-h" title="Draw Stats" onClick={props.handleDrawStatsPanel}></i>
			<i className="fas fa-sync-alt" aria-hidden="true" title="Reset App" onClick={props.handleReset}></i>
			<ThemeToggle />
			<Jingle />
			{(!props.scoreTeam1 && !props.scoreTeam2) ?
				<>
					<Link to="/MatchHistory" className={classes.Link} ><i className={(!props.scoreTeam1 && !props.scoreTeam2) ?
						"fas fa-history" : `fas fa-history ${classes.Disabled}`} title="Match History"></i></Link>
					<Link to="/StatsCentre" className={classes.Link} ><i className={(!props.scoreTeam1 && !props.scoreTeam2) ? "fas fa-chart-bar" : `fas fa-chart-bar ${classes.Disabled}`} title="Stats Centre"></i></Link>
				</>
				:
				<>
					<i className={`fas fa-history  ${classes.Disabled}`} title="Match History"></i>
					<i className={`fas fa-chart-bar  ${classes.Disabled}`} title="Stats Centre"></i>
				</>
			}

			<i className="fas fa-arrows-alt" title="Fullscreen" onClick={props.handleFullscreen}></i>
		</div>
	</div >)

	if (props.match.path === "/StatsCentre") {
		navBar = (<div className={classes.NavBar}>
			<div className={classes.Info}>
				<h3>{props.info}</h3>
			</div>
			<div className={classes.Menu}>
				<ThemeToggle />
				<Jingle />
				<Link to="/MatchHistory" className={classes.Link}><i className="fas fa-history" title="Match History"></i></Link>
				<Link to="/" className={classes.Link} ><i className="fas fa-trophy" title="Match App"></i></Link>
				<i className="fas fa-arrows-alt" title="Fullscreen" onClick={props.handleFullscreen}></i>
			</div>
		</div >)
	}

	if (props.match.path === "/MatchHistory") {
		navBar = (<div className={classes.NavBar}>
			<div className={classes.Info}>
				<h3>{props.info}</h3>
			</div>
			<div className={classes.Menu}>
				<ThemeToggle />
				<Jingle />
				<Link to="/StatsCentre" className={classes.Link} ><i className="fas fa-chart-bar" title="Stats Centre"></i></Link>
				<Link to="/" className={classes.Link} ><i className="fas fa-trophy" title="Match App"></i></Link>
				<i className="fas fa-arrows-alt" title="Fullscreen" onClick={props.handleFullscreen}></i>
			</div>
		</div >)
	}
	return navBar
};

const mapStateToProps = (state) => {
	return {
		scoreTeam1: state.currentScoreTeam1,
		scoreTeam2: state.currentScoreTeam2,
		info: state.infoText
	}
}

NavBar.propTypes = {
	scoreTeam1: PropTypes.number.isRequired,
	scoreTeam2: PropTypes.number.isRequired,
	info: PropTypes.string,
	handleDrawStatsPanel: PropTypes.func,
	handleFullscreen: PropTypes.func,
	handleSave: PropTypes.func,
	handleSetupPanel: PropTypes.func,
	handleReset: PropTypes.func
}


export default withRouter(connect(mapStateToProps)(NavBar));
