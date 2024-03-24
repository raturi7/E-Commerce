import { Dropdown } from 'bootstrap';
import Navbar from './component/navbar/navbar';
import LoginPage from './component/loginPage/LoginPage';
import SignupPage from './component/signupPage/SignupPage';
import Homepage from './component/home/Homepage.jsx';
import Card from './component/cards/card.jsx';
import Trending from './component/trending/trending.jsx';

function App() {
  return (
    <>
      {/* <Navbar/> */}
      {/* <SignupPage  />
      <LoginPage /> */}
      <Navbar/>
      <Homepage/>
      {/* <Card/> */}
      <Trending/>
    </>
  );
}

export default App;
