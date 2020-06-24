import React, { Component } from 'react'
import './footer.css'
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Popover from '@material-ui/core/Popover';

export class FloatFooter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
         const data = this.props.badgeData
        return (
            <div className="floatfooter">
                <div>{data._id}</div>
                <Badge className="cool" badgeContent={data.length} color="secondary" showZero>
                            <ShoppingCartIcon/>  
                          </Badge>
                          
            </div>
        )
    }
}

export default FloatFooter
