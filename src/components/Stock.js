import React from "react";

function Stock({ stock, onHandleStock }) {
  const { ticker, name, type, price } = stock;

  const handleStockClick = () => {
    onHandleStock(stock);
  };

  return (
    <div>
      <div className="card" onClick={handleStockClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{`$${price}`}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
