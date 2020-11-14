import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import {DataConsumer} from '../Context';

import {ButtonContainer} from "./ButtonContainer";


export default class Details extends Component {
    render() {
        return (
            <>
              <DataConsumer>
                  {
                      (data)=>{
                         const {id,company,title,img,price,info,inCart} =  data.detailProduct;

                         return (
                         <div className="container-fluid ">
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-blue my-5">
                                          <h1>{title}</h1>
                                            <div className="row">
                                                 <div style={{borderRight:"1px solid black"}} className="col-6  text-center text-blue my-5"> 
                                                        <img  src={img}></img>
                                                </div>
                                                 <div className="col-md-6 col-sm-12  text-center text-blue my-5"> 
                                                        <h3>{company}</h3> 
                                                        <h5>{price}<span className="mr-2"> $</span></h5>
                                                        <p className="border " style={{margin:"5px 3px",padding:"10px 20px"}}>{info}</p>
                                                        <Link to="/">
                                                            <ButtonContainer style={{color:"black"}}>
                                                                Back to home
                                                            </ButtonContainer>
                                                        </Link>
                                                        
                                                        <ButtonContainer cart onClick={()=>{
                                                            data.addToCart(id)
                                                        }} disabled={inCart?true:false} style={{color:"black"}}>
                                                            {inCart? "In cart" : "Add to Cart"}
                                                        </ButtonContainer>
                                                        
                                                 </div>   
                                            </div>
                                  
                                    </div>
                                </div>
                         </div>
                         );
                      }
                  }
              </DataConsumer>
             
            </>
        )
    }
}

