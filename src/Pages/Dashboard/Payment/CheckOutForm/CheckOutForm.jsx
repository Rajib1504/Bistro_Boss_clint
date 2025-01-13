import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/AxiosSecure/useAxiosSecure";
import UseCart from "../../../../hooks/UseCart/UseCart";
import UseAuth from "../../../../hooks/useAuth/UseAuth";

const CheckOutForm = () => {
  // error handeling
  const [error, setError] = useState("");
  const [clintSecret, setClintSecret] = useState("");
  const [transationId, setTransationId] = useState("");
  const { user } = UseAuth();
  //useing hook for get some strip data
  const stripe = useStripe(); //from strip it will import
  //   for geting some element data
  const elements = useElements(); //from strip it will import
  const axiosSecure = useAxiosSecure();
  const [cart] = UseCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", {
        price: totalPrice,
      })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClintSecret(res.data.clientSecret);
      });
  }, [axiosSecure, totalPrice]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[payment error]", error.message);
      set(error.message);
    } else {
      console.log("[payment method]", paymentMethod);
      setError("");
    }
    //confirm payment :
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clintSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confim error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transation id :", paymentIntent.id);
        setTransationId(paymentIntent.id);
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        ></CardElement>{" "}
        <button
          type="submit"
          className="btn btn-sm btn-primary my-4"
          disabled={!stripe || !clintSecret}
        >
          Pay
        </button>
        <p className="text-red-500">{error}</p>
        {transationId && (
          <p className="text-green-600">Payment Id: {transationId}</p>
        )}
      </form>
    </div>
  );
};

export default CheckOutForm;
