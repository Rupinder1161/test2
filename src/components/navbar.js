import React, { Component } from 'react'


import './header.css'


export class Navbar extends Component {
    
      
    render() {
        return ( 
            <div className="Navbar">   
                    <div className="sec">
                             <a href="/">Home</a>
                             <a href="/">Breakfast</a>
                             <a href="/">Lunch</a>
                     </div>
              <div className="img">Jagtari</div>
              <div  className="sec">
              <a href="/">Dinner</a>
              <a href="/">About</a>
              <a href="/">Contact US</a>
              </div>
            </div>
           
        )
    }
}

export default Navbar