import React, { Component } from 'react'

import Divider from '@material-ui/core/Divider';
import './middle.css'
import Skeleton from '@material-ui/lab/Skeleton';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

class CardA extends React.Component {
    constructor(props) {
      super(props);
  
    }
 


    render() {
        const F = this.props.foodName
    const V = this.props.venueName
    const p = this.props.data
        return (
        <Card style={{backgroundColor:"#F5F5DC"}} >
                
        <CardHeader avatar={  <Avatar aria-label="recipe" variant="rounded" style={{backgroundColor:"green",padding:"2px",color: '#fff',color: '#fff'}} >${p}</Avatar>}  action={<IconButton aria-label="settings"> </IconButton> }
              title={ F + " from " + V  }
             subheader="September 14, 2016" />
        <CardMedia  title="Paella dish"><img className="img-responsive" src="https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg"/></CardMedia>
         <CardContent> <Typography variant="body2" color="textSecondary" component="p">This impressive paella is a perfect party dish and a fun meal to cook together with your
         guests. Add 1 cup of frozen peas along with the mussels, if you like.
         </Typography>
       </CardContent>
       </Card>
      );
    }
  };



const loadingdata =[{name:"Loading..."},{name:"loading..."},{name:"loading..."},{name:"loading..."},{name:"loading..."},{name:"loading..."},{name:"loading..."}]
export class Slidera extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        
    }

    render() {
      


     const Price = this.props.Price
     const fullData = this.props.data
   console.log(Price)
     console.log(typeof(fullData))
      
        return (
                 <div className="mainDivMiddle">
                    
        {fullData.length == 0 ? loadingdata.map(e =><div className="middleDataDiv" >{e.name}<Skeleton width="100%" /> <Skeleton width="80%" height ="20vh"/> <Skeleton width="100%"/> <Skeleton width="100%"/> <Skeleton width="100%"/> <Skeleton width="100%"variant="text"/></div>): fullData.map(e => e.Price <= Price ?<div className="middleDataDiv"><CardA data={e.Price} venueName={e.VenueName} foodName={e.FoodName} price={Price} >e.Price</CardA></div>:Price == 0 || Price == null ? <div className="middleDataDiv"><CardA data={e.Price} venueName={e.VenueName} foodName={e.FoodName} price={Price} /></div>: "")}  
        
                 </div>
        )
    }
}


export default Slidera

