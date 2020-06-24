import React from "react";
import { connect } from "react-redux"
import { useAudio } from 'react-use'
import PropTypes from "prop-types"
import classes from "./WinnerBoard.module.css";

const WinnerBoard = props => {
    const [audio] = useAudio({
        src: "static/We Are The Champions.flac",
        autoPlay: true,
    })

    const { winner } = props;
    const winnerPathLogo = winner.toString().toLowerCase().replace(/ /g, "_")
    return (<>
        <div className={classes.Winner}>
            <p>THE WINNERS OF CONTRABANDA FAMICOM LEAGUE#4</p>
            <div className={classes.WinnerLogo}>
                <img src={`static/${winnerPathLogo}.png`} alt="winners" />
            </div>
            <p className={classes.TeamName}>{winner}</p>
        </div>
        {audio}
    </>);
}

const mapStateToProps = state => {
    return {
        winner: state.currentWinner
    }
}

WinnerBoard.propTypes = {
    winner: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(React.memo(WinnerBoard));

