import { ToastContainer } from 'react-toastify';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <>
      <Dashboard />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover
        draggable
        toastClassName="!rounded-md !shadow-md !text-[11px] md:!text-[15px] !p-3 !pr-4 !w-[60%] md:!w-[320px] !ml-auto !mr-2"
        bodyClassName="font-dm text-[13px] md:text-[20px]"
      />
    </>
  );
};

export default App;
