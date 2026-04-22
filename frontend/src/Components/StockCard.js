import { useState, useEffect } from 'react';

function StockCard(props) {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_FINNHUB_KEY;
    fetch(`https://finnhub.io/api/v1/quote?symbol=${props.symbol}&token=${apiKey}`)
      .then(response => response.json())
      .then(data => setPrice(data.c));
  }, [props.symbol]);

  return (
    <div>
      <h2>{props.name}</h2>
      <p>Price: ${price}</p>
    </div>
  );
}

export default StockCard;