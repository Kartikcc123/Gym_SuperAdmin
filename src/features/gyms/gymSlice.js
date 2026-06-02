import { createSlice } from '@reduxjs/toolkit';
import { gymDetailMap, gyms } from '../../constants/mockData';

const gymSlice = createSlice({
  name: 'gyms',
  initialState: {
    list: gyms,
    details: gymDetailMap,
    filters: {
      search: '',
      status: 'All',
    },
  },
  reducers: {
    setGymSearch(state, action) {
      state.filters.search = action.payload;
    },
    setGymStatusFilter(state, action) {
      state.filters.status = action.payload;
    },
    toggleGymStatus(state, action) {
      const gym = state.list.find((item) => item.id === action.payload);
      if (gym) {
        gym.status = gym.status === 'Active' ? 'Suspended' : 'Active';
      }
    },
  },
});

export const { setGymSearch, setGymStatusFilter, toggleGymStatus } = gymSlice.actions;
export default gymSlice.reducer;
