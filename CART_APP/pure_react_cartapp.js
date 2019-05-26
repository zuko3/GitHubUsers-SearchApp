import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      step:0,
      cartItems:[],
      cartItemsId:[],
      items:[
        {'id':1,'url':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9rG1bh_vmIVhhIsuZVg6MQy2p_yyr0vOeI9ATK5IEKjDPv8Um','price':10,'name':'Book1'},
        {'id':2,'url':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmAL_DaeiTehXaU7CIUYJsjs9x83SFC311YL8WyViZBuLVxvWE','price':20,'name':'Book2'}
      ],
      viewObj:null
    };

    this.gotoStep=this.gotoStep.bind(this);
    this.viewDeatils=this.viewDeatils.bind(this);
    this.addtoCart=this.addtoCart.bind(this);
    this.viewCart=this.viewCart.bind(this);
  }

  gotoStep(step){
    this.setState({
      step:step
    })
  }

  viewDeatils(step,obj){
     this.setState({
      viewObj:obj,
       step:step
    });
  }
  addtoCart(obj,step){
    this.setState({
      cartItems:[...this.state.cartItems,obj],
      cartItemsId:[...this.state.cartItemsId,obj.id],
      step:step
    })
  }

  viewCart(){
     this.setState({
       step:2
    });
  }

  render() {
    let cmp;
    switch(this.state.step){
      case 0:
        cmp=<div>
                <AppHeader viewCart={this.viewCart} gotoStep={this.gotoStep} step={this.state.step}/>
                <strong>Home page</strong>
                <ProductPage step={this.state.step} viewDeatils={this.viewDeatils} items={this.state.items}/>
            </div>        
      break;

      case 1:
       cmp=<div>
                <AppHeader viewCart={this.viewCart} gotoStep={this.gotoStep} step={this.state.step}/>
                <strong>Deatils page</strong>
                <ProductDeatilsPage itemsId={this.state.cartItemsId} addtoCart={this.addtoCart} viewObj={this.state.viewObj} gotoStep={this.gotoStep} step={this.state.step} />
            </div>
      break;
      
      case 2:
       cmp=<div>
                <AppHeader  gotoStep={this.gotoStep} step={this.state.step}/>
                <strong>cart page</strong>
                <CartPage cartlist={this.state.cartItems} gotoStep={this.gotoStep} step={this.state.step}/>
                
            </div>

       break;

       case 3:
       cmp=<div><h1>Thansk for purchasing</h1><button onClick={()=>{this.setState({ step:0,cartItems:[],viewObj:null,cartItemsId:[]})}}> Go to home page</button></div>
       break;
       default:
       cmp=<div><AppHeader gotoStep={this.gotoStep} step={this.state.step}/><h3>Not implemneted</h3></div>

    }
    return (
      <div>{cmp}</div>
    );
  }
}

function AppHeader(props){
  let el;
  if(props.step > 0){
    if(props.step==2){
         el=<button onClick={()=>props.gotoStep(props.step-2)}>&larr;</button>
    }else{
       el=<button onClick={()=>props.gotoStep(props.step-1)}>&larr;</button>
    }
    
  }
  return(
    <div>
      <h1>{el}&nbsp;Shop app</h1>
      {props.step!=2?<button onClick={props.viewCart}>View Cart</button>:null}
    </div>
  )
}

class ProductPage extends Component{
  render(){
      let productList=this.props.items.map((obj)=>{return(
      <div key={obj.id}>
              <div><img src={obj.url}/></div>
              <div>{obj.name}</div>
              <div>${obj.price}</div>
              <button onClick={()=>this.props.viewDeatils(this.props.step+1,obj)}>View</button>
      </div>)
    })

    return(
    <div>
      {productList}
    </div>
  )
  }
}


function ProductDeatilsPage(props){
let id=props.viewObj.id;
let notAdded = props.itemsId.indexOf(id)==-1;

  return(
    <div>
        <div><img src={props.viewObj.url}/></div>
        <div>{props.viewObj.name}</div>
        <div>${props.viewObj.price}</div>
         {notAdded?<button onClick={()=>props.addtoCart(props.viewObj,props.step+1)}>Add to cart</button>:<p>Already Added</p>} 
         <button onClick={()=>props.gotoStep(props.step-1)}>Back</button>
    </div>
  )
}

function CartPage(props){
      let cartList=props.cartlist.map((obj,i)=>{return(
      <div key={obj.i}>
              <div><img src={obj.url}/></div>
              <div>{obj.name}&nbsp;&nbsp;${obj.price}</div>
      </div>)
    })

    return(
    <div>
      {cartList}
      {cartList.length>0?<button onClick={()=>props.gotoStep(props.step+1)}>Buy Final step </button>:<h3>Cart is empty</h3> }
    </div>
  )

}

render(<App />, document.getElementById('root'));
