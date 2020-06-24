import React, { useState } from 'react';
import { useAudio } from 'react-use'
import classes from "./Jingle.module.css"

const Jingle = (props) => {

  const [musicStatus, setMusicStatus] = useState(false)
  const [audio, state, controls] = useAudio({
    src: "static/CFL_Intro.mp3",
    autoPlay: false,
  })

  const play = (musicStatus) => {
    if (!musicStatus) {
      setMusicStatus(!musicStatus)
      controls.play()
    } else {
      setMusicStatus(musicStatus)
      controls.seek(0)
      controls.play()
    }
  }

  return (
    <i className={
      musicStatus && state.time < state.duration ? `fas fa-bell ${classes.Active}` : "fas fa-bell"
    } title="Play Jingle!" onClick={() => play(musicStatus)} >{audio}</i>
  );
}

export default Jingle;