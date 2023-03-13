import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("Alphabetically");
  const [filterBy, setFilterBy] = useState("Tech");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((resp) => resp.json())
      .then((stockArr) => setStocks(stockArr));
  }, []);

  const handleBoughtStock = (purchasedStock) => {
    setPortfolio([...portfolio, purchasedStock]);
  };

  const handleSoldStock = (soldStock) => {
    const newPortfolio = portfolio.filter((stock) => {
      return stock.id !== soldStock.id;
    });
    setPortfolio(newPortfolio);
  };

  const sortedStocks = [...stocks]
    .sort((stock1, stock2) => {
      if (sortBy === "Alphabetically") {
        return stock1.ticker.localeCompare(stock2.ticker);
      } else {
        return stock1.price - stock2.price;
      }
    })
    .filter((stock) => stock.type === filterBy);
  return (
    <div>
      <SearchBar
        onHandleSorter={setSortBy}
        sortBy={sortBy}
        filteredStocks={filterBy}
        setFilterBy={setFilterBy}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={sortedStocks}
            onHandleStock={handleBoughtStock}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolio={portfolio}
            onHandleStock={handleSoldStock}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
