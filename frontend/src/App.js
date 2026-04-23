import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import StockCard from './Components/StockCard';

function App() {
  const [apiStatus, setApiStatus] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/stocks/hello')
      .then(response => response.text())
      .then(data => setApiStatus(data));
  }, []);

  return (
    <div className="dashboard">
      <Navbar />
      <p>{apiStatus}</p>
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