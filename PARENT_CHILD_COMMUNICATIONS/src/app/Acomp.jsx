import React from 'react';
import { render, createPortal } from 'react-dom';
import {AAcomp} from "./AAcomp";

export class Acomp extends React.Component{
    parentClick(){
        alert("alert form A comp")
        this.props.parentClick();
    }
    render(){
        return(
            <div>
                <p> I am Acomp </p>
                <AAcomp nparentClick={this.parentClick.bind(this)}/>
            </div>
        )
    }
}