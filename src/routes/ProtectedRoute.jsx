import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppState';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
