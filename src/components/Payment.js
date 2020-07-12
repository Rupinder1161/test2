import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import "./footer.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@material-ui/core/Button";
//cardsection

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

function CardSection() {
  return (
    <label style={{display:"flex",justifyContent:"center",flexFlow:"row wrap",alignItems:"center",width:"100%",margin:"10px 0px 10px 0px"}}>
      Card details
      <CardElement style={CARD_ELEMENT_OPTIONS} />
    </label>
  );
}

//cardsection

//cardcheckoutform

const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    const user = {
      amount: props.totalPrice,
    };

    await axios.post("https://glacial-tundra-03384.herokuapp.com/secret", { user }).then((res) => {
      if (!stripe || !elements) {
        // Stripe.js has not yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        return;
      }
      // stripe.setMaxNetworkRetries(2);
      const result = stripe.confirmCardPayment(`${res.data.client_secret}`, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: "Jenny Rosen",
          },
        },
      });

      if (result.error) {
        alert(result.error.message)
        console.log(result.error.message);
      } else {
        console.log(result);
      }
      
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style ={{width:"100%",padding:" 0px 10px 0px 10px"}}style={{ width: "100%" }}>
  
       <CardSection />
       <button style={{width:"100%",backgroundColor:"green",paddingBottom:"20px"}} type="submit" disabled={!stripe}>
        Pay
      </button>  
      </form>
    </div>
  );
};
//cardcheckoutform

toast.configure();
const stripePromise = loadStripe("pk_test_3RZG86fifhLVwVt7VSqTRyhs00UTox2080");

export class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullData: "",
    };
    
  }

  render() {
    const h = this.props.TotalPrice;
    return (
      <Elements stripe={stripePromise}>
        <CheckoutForm
          totalPrice={h}
          dataProp={this.state.fullData}
          style={{ width: "100%" }}
        />
      </Elements>
    );
  }
}

export default Payment;
