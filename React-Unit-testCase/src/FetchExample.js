import React  from "react";

export class FetchExample extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        fetch("https://restcountries.eu/rest/v2/all").then(res=>res.json())
        .then(json=>{
            console.log(json);
            this.setState({
                data: json
            })
        })
        .catch(err=>{
            console.error(err);
        })
    }
    render(){
        return(
            <div>
                {this.state.data.map((country,index)=>{
                    return <li key={index}>{country.name}</li>
                })}
            </div>
        ); 
    }
}