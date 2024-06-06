import React from 'react';

const TotalBalance = ({ expenses }) => {
  const total = expenses.reduce((acc, curr) => acc + curr.amount, 0).toFixed(2);
  return (
    <div>
      <h2>Total Balance  </h2>
      <p>Rs {total}</p>
    </div>
  );
};

export default TotalBalance;
