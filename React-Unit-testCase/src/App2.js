import React from "react";
import {render} from "react-dom";

export class App2 extends React.Component{
    constructor(){
        super();
        this.state = {timerStatus: 'Running'};
        setTimeout( () => {
            this.setState({timerStatus: 'Done'})
          }, 2000)
    }

    componentDidMount(){

    }
    onButtonClick(){
        alert('Clicked')
    }
    render(){
        return(
            <div>
                <p id="rahulid">title</p>
                <h1>{this.state.timerStatus}</h1>
                <p>world</p>
                {this.props.children}
                <button onClick={
                    this.onButtonClick.bind(this)
                    }>Clck me</button>
         </div>
        )

    }
        
}