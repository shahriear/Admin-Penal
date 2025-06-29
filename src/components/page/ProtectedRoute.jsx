// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('loggedIn');
  return isLoggedIn ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
