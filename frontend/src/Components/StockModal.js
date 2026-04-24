import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './StockModal.css';

const FILTERS = ['24H', '3D', '1W', '1M', '1Y', 'YTD', '5Y', 'ALL'];
const FREE_TIER_DISABLED = ['24H', '3D'];

function StockModal({ stock, onClose }) {
  const [chartData, setChartData] = useState([]);
  const [activeFilter, setActiveFilter] = useState('1M');

  useEffect(() => {
    const apiKey = process.env.REACT_APP_FINNHUB_KEY;
    const now = Math.floor(Date.now() / 1000);

    const ranges = {
      '24H': { from: now - 86400, resolution: '15' },
      '3D': { from: now - 259200, resolution: '30' },
      '1W': { from: now - 604800, resolution: '60' },
      '1M': { from: now - 2592000, resolution: 'D' },
      '1Y': { from: now - 31536000, resolution: 'W' },
      'YTD': { from: Math.floor(new Date(new Date().getFullYear(), 0, 1).getTime() / 1000), resolution: 'W' },
      '5Y': { from: now - 157680000, resolution: 'M' },
      'ALL': { from: now - 315360000, resolution: 'M' },
    };

    const { from, resolution } = ranges[activeFilter];

    fetch(`https://finnhub.io/api/v1/stock/candle?symbol=${stock.symbol}&resolution=${resolution}&from=${from}&to=${now}&token=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        if (data.s === 'ok') {
          const formatted = data.t.map((time, i) => ({
            time: new Date(time * 1000).toLocaleDateString(),
            price: data.c[i]
          }));
          setChartData(formatted);
        } else {
          setChartData([]);
        }
      });
  }, [activeFilter, stock.symbol]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{stock.name}</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="filter-buttons">
          {FILTERS.map(f => (
            <button
              key={f}
              className={
                activeFilter === f ? 'filter-btn active' :
                FREE_TIER_DISABLED.includes(f) ? 'filter-btn disabled' :
                'filter-btn'
              }
              onClick={() => !FREE_TIER_DISABLED.includes(f) && setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData}>
              <XAxis dataKey="time" tick={{ fill: '#8892b0', fontSize: 11 }} />
              <YAxis tick={{ fill: '#8892b0', fontSize: 11 }} domain={['auto', 'auto']} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1e2130', border: '1px solid #2e3250', color: 'white' }}
              />
              <Line type="monotone" dataKey="price" stroke="#00c896" dot={false} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="no-data">
            <p>No data available for this period</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default StockModal;