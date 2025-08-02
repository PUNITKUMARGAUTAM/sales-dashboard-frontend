import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/sales';

export const fetchSummary = createAsyncThunk('sales/fetchSummary', async (filters) => {
  const { startDate, endDate } = filters;
  const res = await axios.get(`${BASE_URL}/summary?startDate=${startDate}&endDate=${endDate}`);
  return res.data;
});

export const fetchTrends = createAsyncThunk('sales/fetchTrends', async (range) => {
  const res = await axios.get(`${BASE_URL}/trend?range=${range}`);
  return res.data;
});

export const fetchFilterData = createAsyncThunk('sales/fetchFilterData', async (params) => {
  const query = new URLSearchParams(params).toString();
  const res = await axios.get(`${BASE_URL}/filter?${query}`);
  return res.data;
});

const salesSlice = createSlice({
  name: 'sales',
  initialState: {
    summary: {},
    trendData: [],
    filteredData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSummary.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSummary.fulfilled, (state, action) => {
        state.loading = false;
        state.summary = action.payload;
      })
      .addCase(fetchSummary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchTrends.fulfilled, (state, action) => {
        state.trendData = action.payload;
      })
      .addCase(fetchFilterData.fulfilled, (state, action) => {
        state.filteredData = action.payload;
      });
  },
});

export default salesSlice.reducer;
