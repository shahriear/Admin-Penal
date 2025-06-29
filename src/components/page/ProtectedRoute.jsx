// // src/components/ProtectedRoute.jsx
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   const isLoggedIn = localStorage.getItem('loggedIn');
//   return isLoggedIn ? children : <Navigate to="/" />;
// };

// export default ProtectedRoute;

// ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = JSON.parse(localStorage.getItem('loggedIn')); // string → boolean
  return isLoggedIn ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
