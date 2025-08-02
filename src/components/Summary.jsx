import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSummary } from '../features/salesSlice';
import { Box, Typography } from '@mui/material';

const Summary = () => {
  const dispatch = useDispatch();
  const { summary } = useSelector((state) => state.sales);

  useEffect(() => {
    dispatch(fetchSummary({ startDate: '2024-01-01', endDate: '2025-01-01' }));
  }, [dispatch]);

  return (
    <Box>
      <Typography variant="h6">Total Revenue: ₹{summary.totalRevenue}</Typography>
      <Typography variant="h6">Total Units Sold: {summary.totalUnits}</Typography>
    </Box>
  );
};

export default Summary;