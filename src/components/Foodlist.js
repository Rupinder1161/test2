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
                   axios.get('/food/')
                   .then(response => {
                       
                     this.setState({ fullData: response.data })
                     console.log(response.data )
                    
                   })
                   .catch((error) => {
                     console.log(error);
                   })
                 }
               
                 componentDidMount() {
                  
                   this.getFood()
                   // setInterval(this.getFood,5000)
                  
                 }

                   componentWillUnmount(){
                     this.getFood()
                   }
                 
                 
                   getPrice = (e) =>{
                     this.setState({
                         Price:e.target.value
                     })
                     console.log(this.state.Price)
                      }
                      
                 
    render() {
   
      const g = this.state.fullData  
        return (
                    <div >
                               <div className="center">
                                    <Navbar/> 
                                         <FormControl style={style.inputbox} size="small" variant="filled"  variant="outlined">
                                              <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                               <OutlinedInput
                                                          id="outlined-adornment-amount"
                                                          // defaultValue={0}
                                                          value={this.state.Price}
                                                          onChange={this.getPrice}
                                                          startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                                          labelWidth={60}
                                                          variant="filled"
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

const style = {
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
