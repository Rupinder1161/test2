import React, { Component } from 'react'
import './middle.css'
import Skeleton from 'react-loading-skeleton';
import Slidera from './Slider'


export class Middle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
            //  this.setState({
            //      data:this.props.data
            //  })
             const g = this.props.data
             const Price = this.props.Price

             console.log(g)
        return (
            <div className="middlesection">
                                     <Slidera data={this.props.data} Price={this.props.Price}>3</Slidera>
            </div>
        )
    }
}

export default Middle
