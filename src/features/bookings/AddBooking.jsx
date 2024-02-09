import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateBookingForm from "./CreateBookingForm";

export default function AddBooking() {
  return (
    <Modal>
      <Modal.Open opens="booking-form">
        <Button>Add new Booking</Button>
      </Modal.Open>
      <Modal.Window name="booking-form">
        <CreateBookingForm />
      </Modal.Window>
    </Modal>
  );
}
