import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiGet } from '../../services/api/client';

export const fetchBackendHealth = createAsyncThunk(
  'system/fetchBackendHealth',
  async (_, { rejectWithValue }) => {
    try {
      return await apiGet('/health');
    } catch (error) {
      return rejectWithValue({
        status: error.status || 500,
        message: error.message || 'Unable to reach backend',
      });
    }
  },
);

const systemSlice = createSlice({
  name: 'system',
  initialState: {
    backend: {
      status: 'checking',
      timestamp: null,
      lastSuccessfulSync: null,
      error: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBackendHealth.pending, (state) => {
        state.backend.status = state.backend.lastSuccessfulSync ? state.backend.status : 'checking';
        state.backend.error = null;
      })
      .addCase(fetchBackendHealth.fulfilled, (state, action) => {
        state.backend.status = action.payload.status || 'active';
        state.backend.timestamp = action.payload.timestamp || null;
        state.backend.lastSuccessfulSync = new Date().toISOString();
        state.backend.error = null;
      })
      .addCase(fetchBackendHealth.rejected, (state, action) => {
        state.backend.status = 'offline';
        state.backend.error = action.payload?.message || 'Backend request failed';
      });
  },
});

export default systemSlice.reducer;
