import React from 'react';
import { render, createPortal } from 'react-dom';

export class BBcomp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cname:'alert alert-danger'
        }
    }
    showalert(){
        alert("alert from BB comp")
    }
    render(){
        return(
            <div>
                <p className={this.state.cname}> I am BBcomp </p>
            </div>
        )
    }
}