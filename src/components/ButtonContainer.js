import Styled from 'styled-components';




export const  ButtonContainer  = Styled.button`
font-size:1.4rem;
background:transparent;
border: 0.05rem solid var(--lightBlue);
border-color: ${props =>props.cart ? "var(--mainYellow)": "var(--lightBlue)"};
border-radius :5px;   
cursor:pointer;
margin:0.2rem 0.3rem;
transition:all 0.2s ease-in-out;
&:hover{
    background:${props =>props.cart ? "var(--mainYellow)": "var(--lightBlue)"};
    color:var(--mainBlue);  
    border-outline:none;
}

`