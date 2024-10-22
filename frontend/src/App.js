import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import router from './Router';


function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;