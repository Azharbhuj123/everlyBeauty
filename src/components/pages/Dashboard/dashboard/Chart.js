import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  // { time: '1st', progress: 50 },
  // { time: '2nd', progress: 30 },
  // { time: '3rd', progress: 50 },
  // { time: '4th', progress: 70 },
  // { time: '5th', progress: 90 },
  // { time: '7th', progress: 30 },
  // { time: '8th', progress: 30 },
  // { time: '9th', progress: 30 },
  // { time: '10th', progress: 30 },
];

const yAxisFormatter = (value) => `${value}%`;

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis domain={[0, 100]} tickFormatter={yAxisFormatter} />
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend />
        <Line
          type="monotone"
          dataKey="progress"
          stroke="#E1AD9D"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
