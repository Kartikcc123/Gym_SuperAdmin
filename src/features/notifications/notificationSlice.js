import { createSlice } from '@reduxjs/toolkit';
import { notifications, tickets, users } from '../../constants/mockData';

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: {
    items: notifications,
    tickets,
    users,
  },
  reducers: {},
});

export default notificationSlice.reducer;
