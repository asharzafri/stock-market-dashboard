import './App.css';
import Navbar from './Components/Navbar';
import StockCard from './Components/StockCard';

function App() {
 return (
  <div className="dashboard">
    <Navbar />
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