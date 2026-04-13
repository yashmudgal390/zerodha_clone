import React, { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";

// Ensure SENSEX is in the list
const enrichedWatchlist = [...watchlist];
if (!enrichedWatchlist.find(s => s.name === "SENSEX")) {
  enrichedWatchlist.push({
    name: "SENSEX",
    price: 74248.12,
    percent: "+0.82%",
    isDown: false,
  });
}

const labels = enrichedWatchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: enrichedWatchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-wrapper">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search eg:infy, bse, nifty fut weekly"
            className="search"
          />
          <span className="watchlist-count">{enrichedWatchlist.length} / 50</span>
        </div>
      </div>

      <ul className="list">
        {enrichedWatchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      <div className="portfolio-section">
        <h5 className="portfolio-header">Portfolio Allocation</h5>
        <DoughnutChart data={data} />
      </div>
    </div>
  );
};

const WatchListItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <li 
      onMouseEnter={() => setShowActions(true)} 
      onMouseLeave={() => setShowActions(false)}
      className="watchlist-item"
    >
      <div className="item">
        <p className="ticker-name">{stock.name}</p>
        <div className="itemInfo">
          <span className={`percent ${stock.isDown ? "text-error" : "text-success"}`}>
            {stock.percent} {stock.isDown ? "▼" : "▲"}
          </span>
          <span className="price">{stock.price.toLocaleString()}</span>
        </div>
      </div>
      {showActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);
  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy" onClick={() => generalContext.openBuyWindow(uid)}>Buy</button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell" onClick={() => generalContext.openBuyWindow(uid, "SELL")}>Sell</button>
        </Tooltip>
        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
          <button className="action"><BarChartOutlined className="icon" /></button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action"><MoreHoriz className="icon" /></button>
        </Tooltip>
      </span>
    </span>
  );
};

export default WatchList;
