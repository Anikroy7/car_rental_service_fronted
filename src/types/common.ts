
export type TPaymentDetails = {
  cardHolderName: string;
  cardNo: string;
}

export type TPersonalDetails = {
  nidOrPassport: string;
  drivingLicense: string;
  additionalOptions: [string]
}

export type TBooking = {
  paymentDetails: TPaymentDetails;
  personalDetails: TPersonalDetails;
  date: string;
  startTime: string;
  endTime: string;
  totalCost: number;
};