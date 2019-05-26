import React from 'react';
import { render, createPortal } from 'react-dom';
import {Acomp} from "./Acomp";
import {Bcomp} from "./Bcomp";

const appRoot=document.getElementById("app-root")

class Main extends React.Component{

  showAlert(){
    alert('From then parent component index');
    this.el.showAlert();
  }


  render(){
    return(
      <div className="container">
          <div className="row">
              <div className="col"><h3>Parent Component</h3></div>
            
          </div>
          <div className="row">
              <div className="col">
                  <Acomp parentClick={this.showAlert.bind(this)}/>
              </div>
              <div className="col">
                  <Bcomp ref={(cmp)=>this.el=cmp}/>
              </div>
          </div>
      </div>
    )
  }
}

render(<Main />, appRoot);