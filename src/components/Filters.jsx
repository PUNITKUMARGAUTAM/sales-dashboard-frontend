import React from 'react';
import { TextField, Box, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchFilterData } from '../features/salesSlice';

const Filters = () => {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    e.preventDefault();
    const form = e.target;
    const product = form.product.value;
    const category = form.category.value;
    const region = form.region.value;
    dispatch(fetchFilterData({ product, category, region }));
  };

  return (
    <Box component="form" onSubmit={handleFilter}>
      <TextField label="Product" name="product" variant="outlined" size="small" />
      <TextField label="Category" name="category" variant="outlined" size="small" />
      <TextField label="Region" name="region" variant="outlined" size="small" />
      <Button variant="contained" type="submit">Filter</Button>
    </Box>
  );
};

export default Filters;
