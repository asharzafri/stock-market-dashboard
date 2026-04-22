import Navbar from './Components/Navbar';
import StockCard from './Components/StockCard';

function App() {
  return (
    <div>
      <Navbar />
      <p>Built by Ashar — Full Stack Developer in Progress</p>
      <StockCard name="Apple" price="189.50" change="+2.3" />
      <StockCard name="Google" price="141.80" change="-1.2" />
      <StockCard name="Tesla" price="175.30" change="+0.8" />
    </div>
  );
}

export default App;