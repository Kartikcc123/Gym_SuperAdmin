import { createSlice } from '@reduxjs/toolkit';
import { analyticsSummary, revenueSummary } from '../../constants/mockData';

const revenueSlice = createSlice({
  name: 'revenue',
  initialState: {
    summary: revenueSummary,
    analytics: analyticsSummary,
  },
  reducers: {},
});

export default revenueSlice.reducer;
