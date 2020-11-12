import React, { Component } from 'react'

import {DataConsumer} from '../Context';

export default class ProductList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <>
               <DataConsumer>
                   {(value)=>{
                       return <h2>{value}</h2>
                   }}
                </DataConsumer> 
            </>
        )
    }
}
