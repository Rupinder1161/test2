import React, { Component } from 'react'

import './cart.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";






const ListItem = props => {

   return  <li className="items odd" >
        
    <div className="infoWrap"> 
          <div className="cartSection">
          <img src="" alt="PIC" className="itemImg" />
<p className="itemNumber">#QUE-007544-002  {props.id}</p>
         <h3>{props.name}</h3>

           <p> <input type="text"  className="qty" placeholder="3"/> x $5.00</p>

           <p className="stockStatus"> In Stock</p>
          </div>  


        <div className="prodTotal cartSection">
          <p>$15.00</p>
        </div>
      <div className="cartSection removeWrap">
           <a href="#" className="remove">x</a>
          </div>
       </div>
       </li>


}



const list = [
    { name:"helllo",Description :"hello dgshsdghj" ,Price:15,id:1},
    { name:"helsllo",Description :"hello dgshsdghj" ,Price:15,id:2},
    { name:"helsllo",Description :"hello dgshsdghj" ,Price:15,id:3},
    { name:"heslllo",Description :"hello dgshsdghj" ,Price:15,id:4},
    { name:"heslllo",Description :"hello dgshsdghj" ,Price:15,id:5},
    { name:"hselllo",Description :"hello dgshsdghj" ,Price:15,id:6},

]


export class Cart extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             h:[]
        }
    }
     


    render() {

      
        console.log(this.props.hh) 
         const h = [{
           name:"gurpreet"
         }]
        return (

            <div>
            
             <div className="wrap cf">
        <h1 className="projTitle"> {this.props.hh}</h1>
              <div className="heading cf">
                 <h1>My Cart</h1>
              <Link to="/" className="continue">Continue Shopping</Link>
             </div>
               <div className="cart">
              <ul className="tableHead">
               <li className="prodHeader">Product</li>
                <li>Quantity</li>
                <li>Total</li>
                <li>Remove</li>
               </ul>
              <ul className="cartWrap">
                {h === undefined ?<h1 style={{marginTop:"100px", marginBottom:"100px"}}>Please add some Items for checkout</h1>:list.map(e => <ListItem key={e.id} name={e.name} />) }
                
    
               </ul>
  </div>
  
          <div className="promoCode">
            <label forhtml="promo">Have A Promo Code?</label>
            <input type="text" name="promo" placholder="Enter Code" />
             <a href="#" className="btn"></a></div>
  
                  <div className="subtotal cf">
                     <ul>
                        <li className="totalRow"><span className="label">Subtotal</span><span className="value">$35.00</span></li>
      
                     <li className="totalRow"><span className="label">Shipping</span><span className="value">$5.00</span></li>
      
                         <li className="totalRow"><span className="label">Tax</span><span className="value">$4.00</span></li>
                     <li className="totalRow final"><span className="label">Total</span><span className="value">$44.00</span></li>
                    <li className="totalRow"><a href="#" className="btn continue">Checkout</a></li>
                   </ul>
              </div>
</div>
            </div>
        )
    }
}

export default Cart
