// import { ToastContainer } from 'react-toastify';
// import Dashboard from './components/Dashboard';

// const App = () => {
//   return (
//     <>
//       <Dashboard />
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         closeOnClick
//         pauseOnHover
//         draggable
//         toastClassName="!rounded-md !shadow-md !text-[11px] md:!text-[15px] !p-3 !pr-4 !w-[60%] md:!w-[320px] !ml-auto !mr-2"
//         bodyClassName="font-dm text-[13px] md:text-[20px]"
//       />
//     </>
//   );
// };

// export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/page/Login';
import ProtectedRoute from './components/page/ProtectedRoute';
import Dashboard from './components/Dashboard';
import { ToastContainer } from 'react-toastify';
import ForgotPassword from './components/page/ForgotPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover
        draggable
        toastClassName="!rounded-md !shadow-md !text-[11px] md:!text-[15px] !p-3 !pr-4 !w-[60%] md:!w-[320px] !ml-auto !mr-2"
        bodyClassName="font-dm text-[13px] md:text-[20px]"
      />
    </Router>
  );
}

export default App;
