import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../pages/CheckoutForm/CheckoutForm";

const stripePromise = loadStripe("pk_test_public");

export default function Stripe() {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    )
}
