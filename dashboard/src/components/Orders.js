import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3002/deleteOrder/${id}`).then(() => {
      fetchOrders();
    }).catch((err) => {
      console.error(err);
    });
  };

  return (
    <div className="orders-page">
      {allOrders.length === 0 ? (
        <div className="metrics-card text-center">
          <p className="subtext mb-4">You haven't placed any orders today</p>
          <Link to={"/"} className="buy" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Get started
          </Link>
        </div>
      ) : (
        <div className="metrics-card">
          <div className="d-flex align-items-center mb-4">
            <h3 className="section-title">Orders</h3>
            <span className="holdings-badge">{allOrders.length}</span>
          </div>
          <table className="table-container">
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order, index) => {
                return (
                  <tr key={index}>
                    <td style={{ fontWeight: 500 }}>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>{order.price.toFixed(2)}</td>
                    <td>
                      <span className={order.mode === "BUY" ? "text-success" : "text-error"} style={{ fontWeight: 600 }}>
                        {order.mode}
                      </span>
                    </td>
                    <td>
                      <button className="btn-outline-error" onClick={() => handleDelete(order._id)}>
                        Cancel
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
