export function bankStatements(bankdata) {
  let balance = 0;

  return bankdata.map(data => {
    const amount = Number(data.amount);
    const Deposit = amount > 0;
    balance += amount;

    return {
      date: data.date,
      amountIn: Deposit ? amount : "",
      amountOut: Deposit ? Math.abs(amount) : "",
      balance: balance
    };
  });
}
