import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import dashboardReducer from '../features/dashboard/dashboardSlice';
import gymReducer from '../features/gyms/gymSlice';
import subscriptionReducer from '../features/subscriptions/subscriptionSlice';
import revenueReducer from '../features/revenue/revenueSlice';
import notificationReducer from '../features/notifications/notificationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    gyms: gymReducer,
    subscriptions: subscriptionReducer,
    revenue: revenueReducer,
    notifications: notificationReducer,
  },
});
