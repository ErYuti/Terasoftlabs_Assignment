import React, { useEffect, useState } from "react";
import { formatTransactions } from "../utils/formatTransactions";
import "../App.css";

const BankStatement = () => {
  const [statement, setStatement] = useState([]);

  useEffect(() => {
    fetch("transactions.json") 
      .then(res => res.json())
      .then(data => {
        const formatted = formatTransactions(data);
        setStatement(formatted);
      })
      .catch(err => console.error("Failed to fetch transactions:", err));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Bank Statement</h1>
      <table className="statement-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount In</th>
            <th>Amount Out</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {statement.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td className="in">{row.amountIn || "-"}</td>
              <td className="out">{row.amountOut || "-"}</td>
              <td className="balance">{row.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BankStatement;
