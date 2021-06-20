import NewTransaction from "../Components/NewTransaction";

const New = ({ addNewTransaction }) => {
  return (
    <div>
      <NewTransaction addNewTransaction={addNewTransaction} />
    </div>
  );
};

export default New;
