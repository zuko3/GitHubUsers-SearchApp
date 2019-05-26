import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items:[]
    };
    this.addItems=this.addItems.bind(this);
    this.removeItems=this.removeItems.bind(this);
  }

  addItems(item){
    this.setState({
      items:[...this.state.items,item]
    })
   
  }

  removeItems(i){
     let arr=[...this.state.items];
     arr.splice(i,1);
     this.setState({
      items:[...arr]
    })

  }

  render() {
    return (
      <div>
        <ToDoForm addItems={this.addItems }/>
        <ShowMessages r={this.removeItems} msg={this.state.items}/>
      </div>
    );
  }
}

function ToDoForm(props){
  let inp=null;
  return(
    <div>
      <input type="text" ref={el=>inp=el}/>
      <button onClick={()=>props.addItems(inp.value)}>Add items</button>
    </div>
  )
}

function ShowMessages(props){
  return(
    <div>
        {props.msg.length >0 ? props.msg.map((obj,i)=><div key={i}><li>{obj} <button onClick={()=>props.r(i)}>x</button>     </li></div>):'No item added'}
        
     </div>
  )
}

render(<App />, document.getElementById('root'));