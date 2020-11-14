import React, { Component } from 'react'
import {detailProduct, storeProducts} from './data';

const DataContext = React.createContext();



class DataProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             products: [],
             detailProduct : detailProduct,
             cart:[]
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

    
    render() {
    
        return (
        
            <DataContext.Provider value={{...this.state,
            addToCart:this.addToCart,
            handleDetail:this.handleDetail}}>
                { this.props.children }
            </DataContext.Provider>
        )
    }
}

const DataConsumer = DataContext.Consumer;


export { DataProvider , DataConsumer };
