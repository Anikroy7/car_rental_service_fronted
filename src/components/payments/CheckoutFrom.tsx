import React, { FormEvent, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import toast from "react-hot-toast";
import useGetOrderInfo from "../../hooks/useGetOrderInfo";
import { useAppSelector } from "../../redux/hook";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeProductFromCart } from "../../redux/features/cart/cartSlice";
import { StripePaymentElementOptions } from "@stripe/stripe-js";

type CheckoutFormProps = {
  clientSecret: string;
  email: string;
  address: string;
  contactNo: string;
  name: string;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CheckoutForm: React.FC<CheckoutFormProps> = ({
  clientSecret,
  email,
  address,
  contactNo,
  name,
  setError,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const [message, setMessage] = useState(null || '');
  const [isLoading, setIsLoading] = useState(false);
  const userInfo = { name, email, address, contactNo };
  const orderData = useGetOrderInfo(userInfo, clientSecret, cartItems);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    if (!email || !address || !contactNo || !name) {
      setError(true);
      toast.error("All fields are required!!!");
      return;
    } else {
      setError(false);
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        payment_method_data: {
          billing_details: {
            name: name,
            email: email,
          },
        },
      },
      redirect: "if_required",
    });

    if (error) {
      setMessage(error?.message as string);
      toast.error(error?.message as string);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      console.log(paymentIntent);
      fetch("http://localhost:3000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...orderData,
          paymentIntent: paymentIntent.id,
          paymentMethod: paymentIntent.payment_method,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success(data?.message);
          toast.success("Payment succeeded!");
          for (const item of cartItems) {
            dispatch(removeProductFromCart(item._id));
          }
          navigate(`/checkout/success?transaction_id=${paymentIntent.id}`);
        });
    }
    setIsLoading(false);
  };

  const paymentElementOptions:StripePaymentElementOptions  = {
    layout: "tabs",

  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Place Order"
          )}
        </span>
      </button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};
