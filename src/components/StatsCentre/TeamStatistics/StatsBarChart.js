import React from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, Tooltip, Legend, CartesianGrid
} from 'recharts';
import PropTypes from "prop-types"


const StatsBarChart = (props) => {
  const { statsData, selectedTeam, firstParameter, isFull } = props

  let payload = [{ value: firstParameter, type: 'square' }]

  switch (payload[0].value) {
    case "allMatches":
      payload = [{ ...payload[0], value: "Matches" }];
      break;
    case "allWins":
      payload = [{ ...payload[0], value: "Won Matches" }];
      break;
    case "allLoses":
      payload = [{ ...payload[0], value: "Lost Matches" }];
      break;
    case "allGames":
      payload = [{ ...payload[0], value: "All Games" }];
      break;
    case "wonGames":
      payload = [{ ...payload[0], value: "Won Games" }];
      break;
    case "lostGames":
      payload = [{ ...payload[0], value: "Lost Games" }];
      break;
    case "winMatchesRatio":
      payload = [{ ...payload[0], value: "Win Matches Ratio [%]" }];
      break;
    case "winGamesRatio":
      payload = [{ ...payload[0], value: "Win Games Ratio [%]" }];
      break;
    case "gamesPerMatch":
      payload = [{ ...payload[0], value: "Games per Match" }];
      break;
    case "averageAge":
      payload = [{ ...payload[0], value: "Average Age [years old]" }];
      break;
    case "galagaRatio":
      payload = [{ ...payload, value: "Galaga Ratio" }];
      break;
    default:
      break;
  }

  return (
    <BarChart
      width={1200}
      height={(!isFull ? 400 : 260)}
      data={statsData}
      margin={{
        top: 25, right: 25, left: 25, bottom: 25,
      }}
      barSize={15}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 35, right: 35 }} />
      <YAxis />
      <Tooltip itemStyle={{ color: "#67e8fe" }} contentStyle={{ color: "#67e8fe", backgroundColor: "black", border: "2px solid #67e8fe", borderRadius: "5px" }} />
      <Legend wrapperStyle={{ color: "#666656" }} payload={payload} />
      <CartesianGrid strokeDasharray="1 1" />
      <Bar dataKey={firstParameter} fill="#e60062" label={{ position: 'right', fill: "#666656" }}>
        {
          statsData.map((entry, index) => (
            <Cell key={`cell - ${index}`} stroke={entry.name === selectedTeam ? "#67e8fe" : entry.fill} strokeWidth={0.7} />
          ))
        }
      </Bar>
    </BarChart >

  );
}

StatsBarChart.propTypes = {
  statsData: PropTypes.array.isRequired,
  selectedTeam: PropTypes.string,
  firstParameter: PropTypes.string.isRequired,
  isFull: PropTypes.bool.isRequired
}

export default StatsBarChart;