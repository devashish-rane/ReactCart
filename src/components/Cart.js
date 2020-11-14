import React, { Component } from 'react'

import {DataConsumer} from '../Context';
export default class Cart extends Component {
    render() {
        return (
            <>
                
              <DataConsumer>
                 
                    {
                        (data)=>{
                            console.log(data.increment);
                            const {decrement,increment,removeItem,clearCart} = data
                            if(data.cart.length!=0){
                                    return(
                                        <>
                                        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                        <h1 className="text-center" >Your Cart</h1>
                                        <button onClick={()=>clearCart()} style={{}} class="btn btn-primary btn-lg ml-3">Clear Cart</button>
                                        </div>
                                        <div className="border border-primary mt-5"  >
                                           

                                            {
                                                data.cart.map(inCartItem=>{
                                                  return  <div className="row ">
                                                    <div className="col-5 ml-4 sm-12">
                                                        <img style={{width:"200px",height:"200px"}} src={inCartItem.img}></img>    
                                                            
                                                    </div>

                                                    <div className="col-3 mt-5 sm-12">
                                                            <h4>{inCartItem.title}</h4>
                                                            <h4>{inCartItem.company}</h4>
                                                    </div>

                                                    <div className="col-3 mt-5 sm-12">
                                                             <h4>{inCartItem.price}$</h4>
                                                                 <div style={{display:"flex"}} >
                                                                     <button className="btn btn-danger" onClick={()=>decrement(inCartItem.id)} > - </button>
                                                                    <h4 className="mx-3"> {inCartItem.count} </h4>  
                                                                    <button className="btn btn-success" onClick={()=>increment(inCartItem.id)} > + </button>
                                                                    <button onClick={()=>removeItem(inCartItem.id)}  className=" ml-5 btn btn-outline-danger"> <i className="fa fa-trash-o" aria-hidden="true"></i> </button>
                                                            </div>
                                                    </div>
                                                   </div>
                                                })
                                            }
                                            
                                            
                                            
                                        </div>
                                    
                                    </>) //first return end
                                    }
                                    else{
                                            return(
                                                <h2 className="text-center">Your cart is empty...</h2>
                                            )                                           
                                    }
                        }
                    }
              </DataConsumer>
            </>
        )
    }
}
