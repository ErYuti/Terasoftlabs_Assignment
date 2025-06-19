export function formatTransactions(transactions) {
  let balance = 0;

  return transactions.map(tx => {
    const amount = Number(tx.amount);
    const isDeposit = amount > 0;
    balance += amount;

    return {
      date: tx.date,
      amountIn: isDeposit ? amount : "",
      amountOut: !isDeposit ? Math.abs(amount) : "",
      balance: balance
    };
  });
}
