import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
      this.state={
        'name':''
      };
      this.setSearchName=this.setSearchName.bind(this);
  }

   setSearchName(value){
      this.setState({
        'name':value
      });
  }

  render() {
    return (
      <div className="container-fluid">
          <div className="row">
            <div className="col-sm"><Navbar setName={this.setSearchName}/></div>
          </div>
          <div className="row">
            <div className="col-sm"><Users name={this.state.name}/></div>
          </div>
      </div>  
    );
  }
}


class Navbar extends React.Component{
  constructor(props){
      super(props);
      this.setSearchName=this.setSearchName.bind(this);
  }

  setSearchName(event){
    this.props.setName(event.target.value)
  }


  render(){
    return(
            <nav className="navbar navbar-expand-sm bg-light">
                 <h3>Github Search</h3>
                 <ul className="navbar-nav">
                            <li className="nav-item">
                                &nbsp; &nbsp;
                            </li>
                            <li className="nav-item">
                                 &nbsp; &nbsp;
                            </li>
                  </ul>         
                  <div className="form-group form-inline">
                    <input type="text" onChange={(e)=>this.setSearchName(e)} className="form-control" placeholder="Search Users"/>
                    &nbsp;&nbsp;
                    <button  className="btn btn-primary">Search</button>
                  </div>
            </nav>
        );
  }
} 


class Users extends React.Component{
    constructor(props){
        super(props);
        this.state={
          data:'',
          isLoading:false,
          isError:false,
          userToshow:null
        }
        this.onuserClick=this.onuserClick.bind(this);
    }
    
    componentWillReceiveProps(nextProps){
          let name=nextProps.name.trim();
          if(name!=''){
            this.setState({data:'',isLoading:true, isError:false,userToshow:null})
            fetch('https://api.github.com/search/users?q='+name)
            .then((response)=>response.json())
            .then((jsonData)=>{
                    this.setState({data:jsonData.items, isLoading:false, isError:false,userToshow:null})
            })
            .catch((e)=>{
                this.setState({data:'', isLoading:false, isError:true,userToshow:null});
                console.log(e);
            })
          }else{
              this.setState({data:'',isLoading:false, isError:false, userToshow:null})
          }
    }

    onuserClick(obj){
         this.setState({userToshow:obj})
    }

    render(){
      let loading=[<div  className="row">
                        <div className="col-sm-2">
                            <h5>Loading  ...</h5>
                        </div>
                        <div className="col-sm-1">
                            <i className="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i>
                        </div>
                </div>]
      let errMsg=[<div className="row">
                        <div className="col-sm-7 ">
                            <h5>Sorry Error oucured..</h5>
                        </div>
                </div>];
      let searchUser=[<div className="row">
                        <div className="col-sm-7 ">
                            <h5>Search a user using search box</h5>
                        </div>
                </div>];

      let userList=[];
      if(this.state.data!='' && this.state.data ){
        userList=this.state.data.map((obj,i)=><div key={i} onClick={()=>this.onuserClick(obj)}><List obj={obj}/></div>)
      }
      
      return(
        <div className="row">
          <div className="col-sm">
              {!this.state.isLoading && !this.state.isError && this.state.data==''?searchUser.map(child =><div> {child}</div>):''}
              {this.state.isLoading ? loading.map(child =><div> {child}</div>):''}
              {!this.state.isLoading && this.state.isError? errMsg.map(child =><div> {child}</div>):''}
              {!this.state.isLoading && !this.state.isError && this.state.data!='' ? userList:''}
          </div>
           {!this.state.isLoading && !this.state.isError && this.state.data!='' ? <div className="col-sm"><DetailUser obj={this.state.userToshow}/></div>:''}
        </div>
      )
    }
}

function List(props){
    return(
      <div className="row marginrow">
            <div className="col-sm text-right">
              <img src={props.obj.avatar_url} className="rounded-circle" height="50" width="50" alt="Avatar"/>
            </div>
            <div className="col-sm my-auto">
              <p>{props.obj.login}</p>
            </div>
        </div>
    )
}



function DetailUser(props){
    return(
      <div>
          {props.obj?<div>
              <div className="row marginrow text-center">
                    <div className="col-sm">
                        <img src={props.obj.avatar_url} className="rounded-circle" height="100" width="100" alt="Avatar"/>
                    </div>
              </div>
              <div className="row marginrow text-center">
                    <div className="col-sm">
                        <h3>{props.obj.login}</h3>
                    </div>
              </div>
              <div className="row marginrow text-center">
                    <div className="col-sm">
                        <a href={props.obj.html_url}>GitHub Link</a>
                    </div>
              </div>
          </div>
          :<h3>Select a user to see</h3>} 
      </div>   
    )
}

render(<App />, document.getElementById('root'));
