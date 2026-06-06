import { useEffect } from 'react';
import { REALTIME_POLL_INTERVAL } from '../constants/config';
import { fetchBackendHealth } from '../features/system/systemSlice';
import { useAppDispatch } from '../hooks/useAppState';

const RealtimeBootstrap = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBackendHealth());
    const intervalId = window.setInterval(() => {
      dispatch(fetchBackendHealth());
    }, REALTIME_POLL_INTERVAL);

    return () => window.clearInterval(intervalId);
  }, [dispatch]);

  return null;
};

export default RealtimeBootstrap;
