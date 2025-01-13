import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm/CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
//TODO:add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk);

const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading={"Payment"}
        subHeading={"Please pay to eat"}
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
