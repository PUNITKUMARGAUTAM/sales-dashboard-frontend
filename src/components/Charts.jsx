import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrends, fetchFilterData } from '../features/salesSlice';
import { LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { Box } from '@mui/material';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

const Charts = () => {
  const dispatch = useDispatch();
  const { trendData, filteredData } = useSelector((state) => state.sales);

  useEffect(() => {
    dispatch(fetchTrends('monthly'));
    dispatch(fetchFilterData({}));
  }, [dispatch]);


const pieData = Object.entries(
  filteredData.reduce((acc, curr) => {
    const rev = parseFloat(curr.revenue);
    if (!isNaN(rev)) acc[curr.region] = (acc[curr.region] || 0) + rev;
    return acc;
  }, {})
).map(([key, value]) => ({ name: key, value }));

const barData = Object.entries(
  filteredData.reduce((acc, curr) => {
    const units = parseInt(curr.units);
    if (!isNaN(units)) acc[curr.product] = (acc[curr.product] || 0) + units;
    return acc;
  }, {})
).map(([key, value]) => ({ name: key, units: value }));


  return (
    <Box>
      <h3>Revenue Trend</h3>
      <LineChart width={600} height={300} data={trendData}>
        <XAxis dataKey="_id" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="totalRevenue" stroke="#8884d8" />
      </LineChart>

      <h3>Product-wise Sales</h3>
      <BarChart width={600} height={300} data={barData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="units" fill="#82ca9d" />
      </BarChart>

      <h3>Revenue by Region</h3>
      <PieChart width={400} height={400}>
        <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </Box>
  );
};

export default Charts;

