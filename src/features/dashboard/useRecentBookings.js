import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBooking() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  const queryDay = subDays(new Date(), numDays).toISOString();

  const { data: bookings, isLoading: loadingBookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDay),
    queryKey: ["bookings", `last-${numDays}`],
  });

  return { bookings, loadingBookings };
}
