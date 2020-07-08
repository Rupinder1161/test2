import React , { Component }from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


toast.configure();


const [product] = [{
    name: "Tesla Roadster",
    price: 100,
    description: "Cool car"
  }]

 

export class Payment extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    this.handleToken = this.handleToken.bind(this)
  }
  

   handleToken(token, addresses) {
    console.log({token,addresses})
   }

    render() {
        return (
            <div >          
      <StripeCheckout
        stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
        token={this.handleToken}
        amount={product.price * 100}
        name="Pay By Card"
        style={{width:"100%"}} 
      />
    </div>
        )
    }
}

export default Payment
