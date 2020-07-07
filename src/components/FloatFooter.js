import React, { Component } from 'react'
import './footer.css'
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Button from '@material-ui/core/Button';

import Popover from 'react-tiny-popover';



const isPopoverOpen = false;

export class FloatFooter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.change = this.change.bind(this)
    }

     
    change(){
           isPopoverOpen = !isPopoverOpen
           console.log(isPopoverOpen)
        return isPopoverOpen;
    }
    
    
    render() {
         

        
         const data = this.props.badgeData
        return (
            <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div className="floatfooter" >
          
          <div className="floatfooter" {...bindTrigger(popupState)}>
                {console.log(data)}
                <Badge className="cool" badgeContent={data.length} color="secondary" showZero>
                            <ShoppingCartIcon/>  
                          </Badge>
                          
            </div>
    
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
          >
            <Box  >     
            <Table propData={data}/>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
            
        )
    }
}

export default FloatFooter
