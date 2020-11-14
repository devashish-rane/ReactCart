import React, { Component } from 'react'
import {detailProduct, storeProducts} from './data';

const DataContext = React.createContext();



class DataProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             products: [],
             detailProduct : detailProduct,
             cart:[{
                id: 1,
                title: "Google Pixel - Black",
                img: "img/product-1.png",
                price: 10,
                company: "GOOGLE",
                info:
                  "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                inCart: false,
                count: 0,
                total: 0
              }],
             subtotal:0,
             cartTax:0,
             cartTotal:0
        }
    }
    componentDidMount(){
        this.settingStateToProduct();

    }
    settingStateToProduct=()=>{

        let newProducts=[];
        storeProducts.forEach((item)=>{
              const temp =   {...item};
              newProducts =[...newProducts , temp];
        })
        this.setState(()=>
        {
          return { products:newProducts}
        },console.log(this.state.products))
    }
    
    addToCart = (id)=>{
        let tempProducts=[ ...this.state.products];
        const index = tempProducts.indexOf(this.getAnItem(id));
        const product = tempProducts[index];
        console.log(product);
        product.inCart=true;
        product.count=1;
        const price = product.price;
        product.total = price;

        this.setState(()=>{
            return{products :tempProducts, cart:[...this.state.cart,product]}
        },()=>console.log(this.state))

    }
    handleDetail = (id)=>{
        const item = this.getAnItem(id);
        this.setState(()=>{
            return {detailProduct :item}
        })
    }

    getAnItem  =(id)=>{
       const item =  this.state.products.find((item)=> item.id === id );
       return item;
    }

    // methods related to cart
    increment= (id)=>{
        console.log("incr");
    }
    decrement = (id)=>{
        console.log("decr");
    }
    removeItem = (id)=>{
        console.log("Item removed");             
    }
    clearCart = ()=>{
        this.setState(()=>{
           return {cart:[]}
        })
    }

    
    render() {
    
        return (
        
            <DataContext.Provider value={{...this.state,
            addToCart:this.addToCart,
            handleDetail:this.handleDetail,
            increment:this.increment,
            decrement:this.decrement,
            removeItem:this.removeItem,
            clearCart:this.clearCart}}>
                { this.props.children }
            </DataContext.Provider>
        )
    }
}

const DataConsumer = DataContext.Consumer;


export { DataProvider , DataConsumer };
