import React, { Component } from 'react'

import {DataConsumer} from '../Context';
import Product from './Product';
export default class ProductList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <>
              <div className="row">
               <DataConsumer>
               
                   { (data)=>{
                     
                        
                    return data.products.map(product =>{
                                return  <Product key={product.id} product={product}></Product> 
                       });
                    
                     
                   }}
                     
                </DataConsumer> 
                </div>
            </>
        )
    }
}
