import './App.css';
import {Router} from '@reach/router';
import NavBar from './navBar/NavBar';
import LandingPage from './landingPage/LandingPage';
import Dashboard from './dashboard/Dashboard';
import ProfilePage from './profilePage/ProfilePage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <LandingPage path="/" />
        <Dashboard path="dashboard" />
        <ProfilePage path="profile/:username" />
      </Router>
    </div>
  );
}

export default App;
