import React from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, ElementsConsumer} from '@stripe/react-stripe-js';
import { Button } from '@material-ui/core';



class CheckoutForm extends React.Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    const {stripe, elements} = this.props;
    console.log({stripe,elements})
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
  };
 
  render() {
    const {stripe} = this.props;
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




    return (
      <form onSubmit={this.handleSubmit}>
        <CardElement style={{marginTop:"20px",marginBottom:"20px"}} options={CARD_ELEMENT_OPTIONS}/>
        <Button variant="contained" style={{width:"100%",marginTop:"20px",marginBottom:"20px"}} color="primary" type="submit" disabled={!stripe}>
        Proceed to Checkout
        </Button>
      </form>
    );
  }
}
 

const InjectedCheckoutForm = () => (
  <ElementsConsumer>
    {({stripe, elements}) => (
      <CheckoutForm stripe={stripe} elements={elements} />
    )}
  </ElementsConsumer>
);
 
const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
 
const Payment = () => (
  <Elements stripe={stripePromise}>
    <InjectedCheckoutForm />
  </Elements>
);

export default Payment
