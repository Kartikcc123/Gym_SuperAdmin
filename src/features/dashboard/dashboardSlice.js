import { createSlice } from '@reduxjs/toolkit';
import { gymGrowthTrend, overviewStats, revenueTrend, subscriptionGrowthTrend } from '../../constants/mockData';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    stats: overviewStats,
    revenueTrend,
    gymGrowthTrend,
    subscriptionGrowthTrend,
  },
  reducers: {},
});

export default dashboardSlice.reducer;
