import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import StockCard from "./Components/StockCard";
import Login from "./Components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="dashboard">
      <Navbar onLogout={handleLogout} />

      <div className="stocks-container">
        <StockCard name="Apple" symbol="AAPL" />
        <StockCard name="Google" symbol="GOOGL" />
        <StockCard name="Tesla" symbol="TSLA" />
        <StockCard name="Hyperscale Data" symbol="GPUS" />
        <StockCard name="Intel" symbol="INTC" />
        <StockCard name="Lumen Tech" symbol="LUMN" />
        <StockCard name="P&G" symbol="PG" />
        <StockCard name="TSMC" symbol="TSM" />
        <StockCard name="Sandisk" symbol="SNDK" />
        <StockCard name="Unilever" symbol="UL" />
        <StockCard name="Verizon" symbol="VZ" />
        <StockCard name="Palantir" symbol="PLTR" />
        <StockCard name="Amazon" symbol="AMZN" />
        <StockCard name="Netflix" symbol="NFLX" />
        <StockCard name="Microsoft" symbol="MSFT" />
        <StockCard name="Meta" symbol="META" />
        <StockCard name="Nvidia" symbol="NVDA" />
        <StockCard name="IonQ" symbol="IONQ" />
        <StockCard name="AstraZeneca" symbol="AZN" />
        <StockCard name="Rheinmetall" symbol="RNMBF" />
      </div>
    </div>
  );
}

export default App;
