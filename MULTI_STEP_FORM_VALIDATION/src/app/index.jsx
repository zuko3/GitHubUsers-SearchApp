import React from 'react';
import { render, createPortal } from 'react-dom';
import {Registration} from "./Registration"

const appRoot=document.getElementById("app-root")

class Main extends React.Component{
  render(){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col"><h3>Multi Step form React</h3></div>
                    </div>
                    <Registration/>
                </div>
            )
    }
}

render(<Main />, appRoot);