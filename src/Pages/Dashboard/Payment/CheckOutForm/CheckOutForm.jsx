import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckOutForm = () => {
  //useing hook for get some strip data
  const stripe = useStripe(); //from strip it will import
  //   for geting some element data
  const elements = useElements(); //from strip it will import
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
    } else {
      console.log("[payment method]", paymentMethod);
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
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckOutForm;
