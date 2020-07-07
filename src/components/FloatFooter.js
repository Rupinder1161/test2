import React, { Component } from 'react'
import './footer.css'
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Button from '@material-ui/core/Button';



const Table= props => (
    
    <table>
    <caption>Order Summary</caption>
    <thead>
      <tr>
        <th scope="col">Food Name</th>
        <th scope="col">Venue Name</th>
        <th scope="col">Amount</th>
        <th scope="col">Quantity</th>
      </tr>
    </thead>
    <tbody>
        {props.propData.map(e =><tr key={e._id}>
                   <td data-label="Food Name"><span style={{marginLeft:"10px"}}>{e.FoodName}</span></td>
                   <td data-label="Venue Name">{e.VenueName}</td>
                    <td data-label="Amount">{e.Price}</td>
                   <td data-label="Quantity">1</td>
      </tr>      
            )}
    
    </tbody>
  </table>
  )
  
  
  





export class FloatFooter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
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