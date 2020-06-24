import React from 'react';
import {
  ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend
} from 'recharts';
import PropTypes from "prop-types";

const StatsLineChart = (props) => {
  const { statsData, firstParameter, secondParameter, isFull } = props

  return (
    <ComposedChart
      width={1200}
      height={!isFull ? 400 : 260}
      data={statsData}
      margin={{
        top: 20, right: 20, bottom: 20, left: 20,
      }}
      barSize={15}
    >
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip itemStyle={{ color: "#67e8fe" }} contentStyle={{ color: "#67e8fe", backgroundColor: "black", border: "2px solid #67e8fe", borderRadius: "5px" }} />
      <Legend wrapperStyle={{ color: "#666656" }} />
      <Bar dataKey={firstParameter} barSize={20} fill="#413ea0" />
      <Line type="linear" dataKey={secondParameter} stroke="#67e8fe" />
    </ComposedChart>

  );
}
StatsLineChart.propTypes = {
  statsData: PropTypes.array.isRequired,
  firstParameter: PropTypes.string.isRequired,
  secondParameter: PropTypes.string.isRequired,
  isFull: PropTypes.bool.isRequired
}

export default StatsLineChart;