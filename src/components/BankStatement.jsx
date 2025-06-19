import React, { useEffect, useState } from "react";
import { bankStatements } from "../utils/bankStatements";
import "../App.css";

const BankStatement = () => {
  const [statement, setStatement] = useState([]);

  useEffect(() => {
    fetch("bankdata.json") 
      .then(res => res.json())
      .then(data => {
        const formatted = bankStatements(data);
        setStatement(formatted);
      })
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
          {statement.map((data, index) => (
            <tr key={index}>
              <td>{data.date}</td>
              <td className="in">{data.amountIn || "-"}</td>
              <td className="out">{data.amountOut || "-"}</td>
              <td className="balance">{data.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BankStatement;
