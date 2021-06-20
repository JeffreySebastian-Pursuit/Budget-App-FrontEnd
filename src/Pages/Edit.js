import TransactionEdit from "../Components/TransactionEdit";

const Edit = ({ updateTransaction }) => {
  return (
    <div>
      <TransactionEdit updateTransaction={updateTransaction} />
    </div>
  );
};

export default Edit;
