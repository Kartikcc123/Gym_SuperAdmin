import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from '../../api/axiosClient';
import { gymGrowthTrend, revenueTrend, subscriptionGrowthTrend } from '../../constants/mockData';

// Fetch Dashboard Stats Thunk
export const fetchDashboardStats = createAsyncThunk(
  'dashboard/fetchStats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosClient.get('/superadmin/dashboard');
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Failed to fetch dashboard stats');
    }
  }
);

const initialState = {
  stats: [],
  revenueTrend,
  gymGrowthTrend,
  subscriptionGrowthTrend,
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardStats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboardStats.fulfilled, (state, action) => {
        state.loading = false;
        const { gyms, revenue } = action.payload;

        state.stats = [
          { id: 'totalGyms', label: 'Total Gyms', value: gyms.total, delta: 'From database' },
          { id: 'activeGyms', label: 'Active Gyms', value: gyms.active, delta: 'Fully operational' },
          { id: 'pendingGyms', label: 'Pending Requests', value: gyms.pendingRequests, delta: 'Awaiting approval' },
          { id: 'totalRevenue', label: 'Total Revenue', value: `$${revenue.total.toLocaleString()}`, delta: 'All-time collected' },
          { id: 'monthlyRevenue', label: 'Monthly Recurring (MRR)', value: `$${revenue.mrr.toLocaleString()}`, delta: 'Active MRR' },
          { id: 'yearlyRevenue', label: 'Annual Recurring (ARR)', value: `$${revenue.arr.toLocaleString()}`, delta: 'Active ARR' },
        ];
      })
      .addCase(fetchDashboardStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default dashboardSlice.reducer;
