import { createSlice } from '@reduxjs/toolkit';
import { subscriptionPlans, subscriptionSummary } from '../../constants/mockData';

const subscriptionSlice = createSlice({
  name: 'subscriptions',
  initialState: {
    plans: subscriptionPlans,
    summary: subscriptionSummary,
  },
  reducers: {},
});

export default subscriptionSlice.reducer;
