import React, { Component } from 'react'
import Cart from './Cart'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './header.css'

// import { Link } from '@material-ui/core';
export class Navbar extends Component {
    
      
    render() {


      const h = this.props.data === undefined?0: h.length;
      console.log(h)
        return ( 
        
            
            <div className="nav">
            
                     
                     <input type="checkbox" id="nav-check"/>
                       <div className="nav-header">
                           <div className="nav-title">Jagtari</div>
                         </div>
                     <div className="nav-btn">
                                  <label htmlFor="nav-check">
                                <span></span>
                                   <span></span>
                              <span></span>
                                   </label>
                            </div>
                          
                         <div className="nav-links">
                         <Link to={"/Cart/"} >ADD YOUR MENU</Link>
                         <Link to={"/Cart/"} >LOGIN</Link>  
                             
                         </div>
                         
               </div>
           
        )
    }
}

export default Navbar