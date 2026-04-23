import { useState, useEffect } from 'react';
import './StockCard.css';

function StockCard(props) {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_FINNHUB_KEY;
    fetch(`https://finnhub.io/api/v1/quote?symbol=${props.symbol}&token=${apiKey}`)
      .then(response => response.json())
      .then(data => setPrice(data.c));
  }, [props.symbol]);

  return (
    <div className="stock-card">
      <h2>{props.name}</h2>
      <p className="price">${price}</p>
    </div>
  );
}

export default StockCard;