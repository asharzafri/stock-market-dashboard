import { useState, useEffect } from 'react';
import './StockCard.css';
import StockModal from './StockModal';

function StockCard(props) {
  const [price, setPrice] = useState(0);
  const [change, setChange] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchPrice = () => {
      const apiKey = process.env.REACT_APP_FINNHUB_KEY;
      fetch(`https://finnhub.io/api/v1/quote?symbol=${props.symbol}&token=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          setPrice(data.c);
          setChange(data.dp);
        });
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 30000);
    return () => clearInterval(interval);
  }, [props.symbol]);

  return (
    <>
      <div className="stock-card" onClick={() => setShowModal(true)}>
        <h2>{props.name}</h2>
        <p className="price">${price}</p>
        <p className={change >= 0 ? 'change positive' : 'change negative'}>
          {change >= 0 ? '▲' : '▼'} {change?.toFixed(2)}%
        </p>
      </div>
      {showModal && (
        <StockModal
          stock={{ name: props.name, symbol: props.symbol }}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default StockCard;