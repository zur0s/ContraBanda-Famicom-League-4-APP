import React, { useState } from 'react';
import {
  PieChart, Pie, Sector
} from 'recharts';
import PropTypes from "prop-types"

const StatsPieChart = (props) => {
  const { statsData, firstParameter, isFull } = props
  const [activeIndex, setActiveIndex] = useState(0)


  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    let textLabel = ""

    switch (firstParameter) {
      case "allMatches":
        textLabel = "Matches"
        break;
      case "allWins":
        textLabel = "Won Matches"
        break;
      case "allLoses":
        textLabel = "Lost Matches"
        break;
      case "allGames":
        textLabel = "All Games"
        break;
      case "wonGames":
        textLabel = "Won Games"
        break;
      case "lostGames":
        textLabel = "Lost Games"
        break;
      default:
        break;
    }
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#67e8fe"> {textLabel} : {payload[`${firstParameter}`]}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  const onPieEnter = (data, index) => {
    setActiveIndex(index)
  };

  return (
    <PieChart width={600} height={!isFull ? 360 : 260}>
      <Pie
        fill="purple"
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={statsData}
        cx={300}
        cy={!isFull ? 180 : 130}
        innerRadius={90}
        outerRadius={100}
        paddingAngle={1}
        dataKey={firstParameter}
        onMouseEnter={onPieEnter}
      />
    </PieChart>
  );
}

StatsPieChart.propTypes = {
  statsData: PropTypes.array.isRequired,
  firstParameter: PropTypes.string.isRequired,
  isFull: PropTypes.bool.isRequired
}

export default StatsPieChart;


