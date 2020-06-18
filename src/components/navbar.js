import React, { Component } from 'react'


import './header.css'


export class Navbar extends Component {
    
      
    render() {
        return ( 
            <div className="nav">
                     <input type="checkbox" id="nav-check"/>
                       <div className="nav-header">
                           <div className="nav-title">Jagtari</div>
                         </div>
                     <div className="nav-btn">
                                  <label for="nav-check">
                                <span></span>
                                   <span></span>
                              <span></span>
                                   </label>
                            </div>
  
                         <div className="nav-links">
                           <a href="#" >ADD YOUR MENU</a>
                           <a href="#">LOGIN</a>
                           
                         </div>
               </div>
           
        )
    }
}

export default Navbar