import Transaction from "./Transaction";

const Transactions = ({ myTransactions }) => {
  let total = 0;
  myTransactions.forEach((transaction) => {
    (total += Number(transaction.amount));
  });
  return (
    <div>
      <h1>Bank Account Total: {total || 0}</h1>
      {myTransactions.map((transaction, id) => {
        return <Transaction transaction={transaction} key={id} id={id} />;
      })}
    </div>
  );
};

export default Transactions;
