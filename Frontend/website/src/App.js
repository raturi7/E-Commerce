import { Dropdown } from 'bootstrap';
import './App.css';
import Navbar from './component/navbar/navbar';
import LoginPage from './component/loginPage/LoginPage';
import SignupPage from './component/signupPage/SignupPage';
import Homepage from './component/home/Homepage.jsx';
import Card from './component/cards/card.jsx';

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <SignupPage  />
      <LoginPage />
      <Navbar/>
      <Homepage/>
      <Card/>
    </>
  );
}

export default App;
