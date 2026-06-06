import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from '../../api/axiosClient';

export const fetchGyms = createAsyncThunk('gyms/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosClient.get('/superadmin/gyms');
    return response.data.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.error || 'Failed to fetch gyms');
  }
});

export const fetchGymRequests = createAsyncThunk('gyms/fetchRequests', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosClient.get('/superadmin/gym-requests?status=Pending');
    return response.data.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.error || 'Failed to fetch gym requests');
  }
});

export const updateGymStatus = createAsyncThunk('gyms/updateStatus', async ({ id, status }, { rejectWithValue }) => {
  try {
    const response = await axiosClient.put(`/superadmin/gyms/${id}/status`, { status });
    return response.data.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.error || 'Failed to update gym status');
  }
});

export const approveGymRequest = createAsyncThunk('gyms/approveRequest', async (id, { rejectWithValue }) => {
  try {
    const response = await axiosClient.put(`/superadmin/gym-requests/${id}/approve`);
    return response.data; // Note: returns tenantData and message
  } catch (error) {
    return rejectWithValue(error.response?.data?.error || 'Failed to approve request');
  }
});

export const rejectGymRequest = createAsyncThunk('gyms/rejectRequest', async (id, { rejectWithValue }) => {
  try {
    const response = await axiosClient.put(`/superadmin/gym-requests/${id}/reject`);
    return response.data.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.error || 'Failed to reject request');
  }
});

const initialState = {
  list: [],
  requests: [],
  details: {},
  filters: {
    search: '',
    status: 'All',
  },
  loading: false,
  error: null,
};

const gymSlice = createSlice({
  name: 'gyms',
  initialState,
  reducers: {
    setGymSearch(state, action) {
      state.filters.search = action.payload;
    },
    setGymStatusFilter(state, action) {
      state.filters.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Gyms
      .addCase(fetchGyms.pending, (state) => { state.loading = true; })
      .addCase(fetchGyms.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchGyms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch Requests
      .addCase(fetchGymRequests.fulfilled, (state, action) => {
        state.requests = action.payload;
      })
      // Update Status
      .addCase(updateGymStatus.fulfilled, (state, action) => {
        const updated = action.payload;
        const index = state.list.findIndex(g => g._id === updated._id);
        if (index !== -1) {
          state.list[index] = updated;
        }
      })
      // Approve Request
      .addCase(approveGymRequest.fulfilled, (state, action) => {
        // Remove from requests, add to list
        state.requests = state.requests.filter(r => r._id !== action.meta.arg);
        if (action.payload.tenantData) {
          state.list.unshift(action.payload.tenantData);
        }
      })
      // Reject Request
      .addCase(rejectGymRequest.fulfilled, (state, action) => {
        state.requests = state.requests.filter(r => r._id !== action.meta.arg);
      });
  },
});

export const { setGymSearch, setGymStatusFilter } = gymSlice.actions;
export default gymSlice.reducer;
