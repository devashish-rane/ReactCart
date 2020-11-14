import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {DataConsumer} from '../Context';


//import proptypes
import propTypes from 'prop-types';



import Styled from 'styled-components';
export default class Product extends Component {
    render() {
      
       const {id,title,img,price,company,inCart} = this.props.product;

       return (
            <ProductWrapper className="card  col-md-2 col-sm-4 ml-5 mt-3 " style={{width:"18rem"}} >
             
{/* consumer of context */}
              <DataConsumer>
                {(data)=>{
                  return (
                    <>
                    <Link to="/details" className="image-container" onClick={()=>data.handleDetail(id)}>
                    <img className="card-img-top" src={img} alt="Card image cap"></img>
                    </Link>
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                        <p className="card-text">{company}</p>
                        {/* <Link to="/details"  className="btn btn-primary">{price}$ Buy</Link> */}
                        {/* if in cart disable the button */}
                        <button className="cart-button" disabled={inCart?true:false} 
                        onClick={()=>data.addToCart(id)}>
                        {inCart? (<p className="mb-0" disabled >In cart</p>) :(<i class="fa fa-cart-plus mr-3" aria-hidden="true"></i> ) }
                        </button>
                        <h5 style={{display:"inline-block",marginRight:"40px"}} className="card-title float-right">{price}<span className="mr-5">$</span></h5>
                      </div>
                      </> 
                  )
                }}
           

            </DataConsumer>
          </ProductWrapper>
       )
    }
}


Product.propTypes = {
  product:propTypes.shape({
    id:propTypes.number,
    img:propTypes.string,
    title:propTypes.string,
    inCart:propTypes.bool,
    price: propTypes.number
  }).isRequired
}

const ProductWrapper = Styled.div`
.card{
  border-color:transparent;
  transition: all 1s;
}
&:hover{
  .card {
    border :004rem solid rgb(0,0,0,0.2);
    box-shadow :2px 2px 2px 2px rgb(0,0,0,0.2);
  }
  .image-container{
    positon:relative;
    overflow:hidden;
  }
 
}

.cart-button{
  position:absolute;
  bottom:0;
  right:0;
  padding:0.2rem 0.4rem;
  background-color:var(--lightBlue);
  border:none;
  color:var(--mainWhite);
  border-radius: 0.5rem 0 0 0;
//  transform:translate(100%,100%);
font-size:2rem;
outline:none;
}
.cart-button:hover{
  background-color:var(--mainBlue);
  transition:all 1s ;
}
`