import { Dropdown } from 'bootstrap';
import './App.css';
import Navbar from './component/navbar/navbar';
import LoginPage from './component/loginPage/LoginPage';
import SignupPage from './component/signupPage/SignupPage';

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <SignupPage  />
      <LoginPage />
    </>
  );
}

export default App;
