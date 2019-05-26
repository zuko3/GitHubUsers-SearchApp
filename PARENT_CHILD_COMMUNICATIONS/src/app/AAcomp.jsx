import React from 'react';
import { render, createPortal } from 'react-dom';

export class AAcomp extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <p> I am AAcomp </p>
                <button onClick={this.props.nparentClick}>show alert</button>
            </div>
        )
    }
}