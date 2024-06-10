import './App.css'
import Login from "./Component/Auth/Login.jsx";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <ToastContainer/>
    <Login/>
    </>
  )
}

export default App
