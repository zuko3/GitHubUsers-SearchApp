import React from 'react';
import { render, createPortal } from 'react-dom';
import {BBcomp} from "./BBcomp";

export class Bcomp extends React.Component{
    showAlert(){
        alert("alert from B comp")
        this.el.showalert();
        this.el.setState({
             cname:'alert alert-success'
        })
    }
    render(){
        return(
            <div>
                <p> I am Bcomp </p>
                <BBcomp ref={(cmp)=>this.el=cmp}/>
            </div>
        )
    }
}