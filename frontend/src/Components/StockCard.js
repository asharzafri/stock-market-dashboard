function StockCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Price: ${props.price}</p>
      <p>Change: {props.change}%</p>
    </div>
  );
}

export default StockCard;