import { useAudio } from 'react-use'
import PropTypes from "prop-types"

const TimerBGM = (props) => {
  const [audio, , controls] = useAudio({
    src: "static/timecfl.mp3",
    autoPlay: false,
  })

  if (props.time === 11 || props.time === 60) {
    controls.play()
  } else if (!props.time || props.time === 59) {
    controls.pause()
    controls.seek(0)
  }
  return (audio);
}




TimerBGM.propTypes = {
  time: PropTypes.number.isRequired
}


export default TimerBGM;