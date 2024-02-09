import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabintableOperations from "../features/cabins/CabintableOperations";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabintableOperations />
      </Row>

      <CabinTable />
      <AddCabin />
    </>
  );
}

export default Cabins;
