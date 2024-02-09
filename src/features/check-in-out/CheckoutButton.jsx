/* eslint-disable react/prop-types */
import Button from "../../ui/Button";
import { useCheckOut } from "./useCheckOut";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckOut();

  return (
    <Button
      style={{
        backgroundColor: "white",
        border: "1px #4f46e5 solid",
        color: "black",
      }}
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
