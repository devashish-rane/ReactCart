import { logDOM } from '@testing-library/react'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from "../logo.svg";
import Styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav class="navbar navbar-expand-sm navbar-dark bg-dark px-sm-5">
                   
                    <Link to="/"> <img src={logo} className="navbar-brand"></img></Link>
                    {/* <Link to="/"> <h2  className="navbar-brand">ReactCart</h2></Link> */}

                    <ul className="navbar-nav align-items-center">
                            <li className="nav-item ml-5  font-weight-bold"><Link  to="/" className="nav-link">ProductList</Link></li>
                    </ul>
                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer >
                         <i class="fa fa-cart-plus" aria-hidden="true"></i> Cart
                         </ButtonContainer>
                     </Link>
                </nav>

            </>
        )
    }
}



const ButtonContainer  = Styled.button`
   font-size:1.4rem;
   background:transparent;
   color: var(--mainWhite);
   border: 0.05rem solid var(--lightBlue);
   border-radius :5px;   
   cursor:pointer;
   margin:0.2rem 0.3rem;
   transition:all 0.2s ease-in-out;
   &:hover{
       background:var(--lightBlue);
       color:var(--mainBlue);
       border-outline:none;
   }
   
`

const NavbarWrapper = Styled.nav`
   
`
