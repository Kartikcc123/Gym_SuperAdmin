import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from '../../api/axiosClient';
import { analyticsSummary, revenueSummary as mockRevenueSummary } from '../../constants/mockData';

export const fetchTotalRevenue = createAsyncThunk('revenue/fetchTotal', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosClient.get('/superadmin/revenue');
    return response.data.totalRevenue;
  } catch (error) {
    return rejectWithValue(error.response?.data?.error || 'Failed to fetch total revenue');
  }
});

export const fetchMonthlyRevenue = createAsyncThunk('revenue/fetchMonthly', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosClient.get('/superadmin/revenue/monthly');
    return response.data.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.error || 'Failed to fetch monthly revenue');
  }
});

export const fetchYearlyRevenue = createAsyncThunk('revenue/fetchYearly', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosClient.get('/superadmin/revenue/yearly');
    return response.data.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.error || 'Failed to fetch yearly revenue');
  }
});

const initialState = {
  summary: {
    ...mockRevenueSummary,
    total: '$0',
    monthly: '$0',
    yearly: '$0',
    monthlyRevenue: [],
  },
  analytics: analyticsSummary,
  loading: false,
  error: null,
};

const revenueSlice = createSlice({
  name: 'revenue',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTotalRevenue.pending, (state) => { state.loading = true; })
      .addCase(fetchTotalRevenue.fulfilled, (state, action) => {
        state.loading = false;
        state.summary.total = `$${action.payload.toLocaleString()}`;
      })
      .addCase(fetchTotalRevenue.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchMonthlyRevenue.fulfilled, (state, action) => {
        const data = action.payload;
        if (data.length > 0) {
          state.summary.monthly = `$${data[0].revenue.toLocaleString()}`;
          state.summary.monthlyRevenue = data.map(item => ({
            label: `${item._id.month}/${item._id.year}`,
            value: item.revenue
          })).reverse(); // Chart typically shows chronological
        }
      })
      .addCase(fetchYearlyRevenue.fulfilled, (state, action) => {
        const data = action.payload;
        if (data.length > 0) {
          state.summary.yearly = `$${data[0].revenue.toLocaleString()}`;
        }
      });
  },
});

export default revenueSlice.reducer;
