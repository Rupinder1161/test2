import React, { Component } from 'react'

import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import axios from 'axios'
import '../App.css'
import Middle from'./Middle'
import Navbar from './navbar'
import Footer from './Footer'

export class Foodlist extends Component {

           constructor(props) {
             super(props)
         
             this.state = {
                  fullData:[],
                  Price:0
             }
              this.getFood = this.getFood.bind(this)
             }

               getFood(){
                   axios.get('https://glacial-tundra-03384.herokuapp.com/food/')
                   .then(response => {
                       
                     this.setState({ fullData: response.data })
                    // console.log(response.data )
                    
                   })
                   .catch((error) => {
                    // console.log(error);
                   })
                 }
               
                 componentDidMount() {
                  
                   this.getFood()
                  //  setInterval(this.getFood,5000)
                  
                 }

                   componentWillUnmount(){
                     this.getFood()
                   }
                 
                 
                   getPrice = (e) =>{
                     this.setState({
                         Price:e.target.value
                     })
                     //console.log(this.state.Price)
                      }
                      
                 
    render() {
   
      
        return (
                    <div >
                               <div className="center">
                                    <Navbar/> 
                                   <div className="centeralData"> <h1 >Enter Your Amount to Find the Best Food Around you</h1></div> 
                                         <FormControl style={stylej.inputbox} size="small" variant="outlined" >
                                            
                                               <OutlinedInput
                                                          id="outlined-adornment-amount"
                                                          // defaultValue={0}
                                                          value={this.state.Price}
                                                          onChange={this.getPrice}
                                                          startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                                          variant="outlined"
                                                          type="number"
                                                          style={{background:"white",}}
                                                           />
                                          </FormControl>
                                  
                                 </div>
                                 <Middle data={this.state.fullData} Price={this.state.Price}/>
                                 {/* <Footer/> */}
            </div>
        )

    }
}

const stylej = {
    background:{
        display:"flex",
        flexFlow:"row wrap",
        justifyContent:"center",
        color:"white",
        width:"80%",
        backgroundImage:"white",
        marginTop:"10vh",
        marginBottom:"10vh",
        borderRadius:'20px',
    },
    inline: {
        display: 'inline',
      },
    inputbox:{
        marginTop:"60px",
        marginBottom:"60px",
        boxShadow:"0 5px 15px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
    }
}
export default Foodlist
