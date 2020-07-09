import React , { Component }from "react";
import ReactDOM from "react-dom";
import {Elements,useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import axios from "axios";
import './footer.css'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from '@material-ui/core/Button';
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
    <label>
      Card details
      <CardElement options={CARD_ELEMENT_OPTIONS} style={{width:"100%"}}/>
    </label>
  );
};


 //cardsection

//cardcheckoutform

const CheckoutForm = props => {
  const stripe = useStripe();
  const elements = useElements();
  const stripePK = props.client_secret;
  console.log(stripePK)
  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmCardPayment(`${props.dataProp}`, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Jenny Rosen',
        },
      }
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{width:"100%"}}>
      <CardSection />
      <button disabled={!stripe}>Confirm order</button>
    </form>
  );
}
//cardcheckoutform



toast.configure();
const stripePromise = loadStripe("pk_test_3RZG86fifhLVwVt7VSqTRyhs00UTox2080"); 

export class Payment extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       fullData:"",
    }
    this.data = this.data.bind(this)
  }

  data(){
    axios.get('https://glacial-tundra-03384.herokuapp.com/secret/')
                   .then(response => {
                       
                     this.setState({ fullData:response.data.client_secret })
                    console.log(response.data.client_secret )
                    
                   })
                   .catch((error) => {
                    console.log(error);
                   })
                 
  }
  componentDidMount(){
    this.data()
}


    render() {
      console.log(this.state.fullData)
        return (
          <Elements stripe={stripePromise}>
          <CheckoutForm dataProp={this.state.fullData} style={{width:"100%"}}/>
        </Elements>
        )
    }
}

export default Payment