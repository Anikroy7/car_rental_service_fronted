import Calendar from "react-calendar";
import { isBefore, addDays, startOfToday, isAfter } from "date-fns";
import "react-calendar/dist/Calendar.css";
import { useGetMyBookingsQuery } from "../redux/api/bookingApi";

export default function BookingCalendar({onChange, value}) {

const {data:bookings, isLoading, isError, error} = useGetMyBookingsQuery();
console.log(bookings, 'bookings')

  const fiveDaysLater = addDays(new Date(), 5);

  const isDateDisabled = (date) => {
    return isBefore(date, startOfToday()) || isAfter(date, fiveDaysLater);
  };
  // console.log(date)
// console.log(value)
  return (
    <div>
      <Calendar
        onChange={onChange} 
        value={value}
        tileDisabled={({ date }) => isDateDisabled(date)}
        minDetail="year"
      />
    </div>
  );
}
