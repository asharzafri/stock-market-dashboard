import Navbar from './Components/Navbar';
import StockCard from './Components/StockCard';

function App() {
  return (
    <div>
      <Navbar />
      <p>Built by Ashar — Full Stack Developer in Progress</p>
      <StockCard name="Apple" symbol="AAPL" />
      <StockCard name="Google" symbol="GOOGL" />
      <StockCard name="Tesla" symbol="TSLA" />
      <StockCard name="Hyperscale Data" symbol="GPUS" />
    </div>
  );
}

export default App;