import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TBooking } from "../../../types";

const initialState: TBooking = {
    paymentDetails: {
        cardHolderName: '',
        cardNo: '',
    },
    personalDetails: {
        nidOrPassport: '',
        drivingLicense: '',
        additionalOptions: [''],
    },
    date: '',
    startTime: '',
    endTime: '',
    totalCost: 0,
};
const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        setBooking: (state, action: PayloadAction<TBooking>) => {
            state.paymentDetails = action.payload.paymentDetails;
            state.personalDetails = action.payload.personalDetails;
            state.date = action.payload.date;
            state.startTime = action.payload.startTime;
            state.endTime = action.payload.endTime;
            state.totalCost = action.payload.totalCost;
        }
    },
});

export const { setBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
