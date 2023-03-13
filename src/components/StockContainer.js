import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onHandleStock }) {
  const renderEachStock = stocks.map((stock, index) => {
    return <Stock key={index} stock={stock} onHandleStock={onHandleStock} />;
  });
  return (
    <div>
      <h2>Stocks</h2>
      {renderEachStock}
    </div>
  );
}

export default StockContainer;
