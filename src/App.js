import './App.css';
import HomePage from './HomePage';
import LandingPage from './LandingPage';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <HomePage/>
    </div>
  );
}

export default App;
