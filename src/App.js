import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Details from './components/Details';

function App() {
  return (
     <>
       <BrowserRouter>
            <Navbar> </Navbar>
            
            <Switch>
               <Route exact path="/" component={ProductList}></Route>
                
               <Route path="/cart" component={Cart}></Route> 
               <Route path="/details" component={Details}></Route> 
               <Route path="/" component={Default}></Route> 
            </Switch>
       </BrowserRouter>     
     </>
  );
}

export default App;
