import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import StockCard from './Components/StockCard';
import Login from './Components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem('token')
  );

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="dashboard">
      <Navbar onLogout={handleLogout}/>

      <div className="stocks-container">
        <StockCard name="Apple" symbol="AAPL" />
        <StockCard name="Google" symbol="GOOGL" />
        <StockCard name="Tesla" symbol="TSLA" />
        <StockCard name="Hyperscale Data" symbol="GPUS" />
      </div>
    </div>
  );
}

export default App;