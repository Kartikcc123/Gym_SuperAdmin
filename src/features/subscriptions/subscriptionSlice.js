import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from '../../api/axiosClient';

export const fetchPlans = createAsyncThunk('subscriptions/fetchPlans', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosClient.get('/superadmin/plans');
    return response.data.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.error || 'Failed to fetch plans');
  }
});

export const fetchSubscriptions = createAsyncThunk('subscriptions/fetchSubscriptions', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosClient.get('/superadmin/subscriptions');
    return response.data.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.error || 'Failed to fetch subscriptions');
  }
});

const initialState = {
  plans: [],
  summary: {
    activePlans: 0,
    expiredPlans: 0,
    upcomingRenewals: 0,
    records: [],
  },
  loading: false,
  error: null,
};

const subscriptionSlice = createSlice({
  name: 'subscriptions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlans.pending, (state) => { state.loading = true; })
      .addCase(fetchPlans.fulfilled, (state, action) => {
        state.loading = false;
        // Map backend plans to frontend expected structure
        state.plans = action.payload.map((plan, index) => ({
          _id: plan._id,
          name: plan.name,
          price: `$${plan.priceMonthly / 100}/mo`, // Assuming priceMonthly is in cents or just map directly
          description: `Includes: ${plan.features.join(', ')}`,
          features: plan.features,
          accent: index === 0 ? 'from-white/15 to-white/5' : index === 1 ? 'from-neon/25 to-neon/10' : 'from-emerald-400/20 to-white/10'
        }));
      })
      .addCase(fetchPlans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchSubscriptions.fulfilled, (state, action) => {
        const subs = action.payload;
        state.summary.activePlans = subs.filter(s => s.status === 'active').length;
        state.summary.expiredPlans = subs.filter(s => s.status === 'expired').length;
        state.summary.records = subs.map(s => ({
          _id: s._id,
          gym: s.tenantId?.name || 'Unknown',
          plan: s.planId?.name || 'Unknown',
          renewal: new Date(s.endDate).toLocaleDateString(),
          value: `$${(s.price || 0).toLocaleString()}`,
          status: s.status === 'active' ? 'Active' : s.status === 'expired' ? 'Expired' : 'Upcoming'
        }));
      });
  },
});

export default subscriptionSlice.reducer;
