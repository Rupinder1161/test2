import React, { Component } from 'react'

import './header.css'
import Foodlist from './Foodlist'

export class Front extends Component {
    
      
    render() {
        return ( 
            <div >   
             
               <Foodlist/>
               
            </div>
           
        )
    }
}

export default Front