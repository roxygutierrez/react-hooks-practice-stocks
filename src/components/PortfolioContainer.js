import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, onHandleStock }) {
  const renderEachPortfolio = portfolio.map((stock, index) => {
    return <Stock key={index} stock={stock} onHandleStock={onHandleStock} />;
  });
  return (
    <div>
      <h2>My Portfolio</h2>
      {renderEachPortfolio}
    </div>
  );
}

export default PortfolioContainer;
