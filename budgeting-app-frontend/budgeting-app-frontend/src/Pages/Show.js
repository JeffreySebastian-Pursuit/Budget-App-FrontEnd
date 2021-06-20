import TransactionDetails from "../Components/TransactionDetails";

const Show = ({deleteTransaction}) => {
  return (
    <div>
      <TransactionDetails  deleteTransaction={deleteTransaction}/>
    </div>
  );
};

export default Show;
