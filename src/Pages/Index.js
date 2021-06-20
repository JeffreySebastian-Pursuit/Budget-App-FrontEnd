import Transactions from "../Components/Transactions";

const Index = ({ myTransactions }) => {
  return (
    <div>
      <Transactions myTransactions={myTransactions} />
    </div>
  );
};

export default Index;
