import React from "react";
import {AccountField} from "./AccountField";
import {SurveyField} from "./SurveyField"
import { render } from 'react-dom';
import {Confirmation} from "./Confirmation";
import {Success} from "./Success"

export class Registration extends React.Component{

    constructor(){
        super();
        this.state={
            step:'1',
            formData:{
                        "1":{
                                name:{
                                    value:'',
                                    name:'name',
                                    type:"text",
                                    placeholder:'Enter your name',
                                    required:true,
                                    touched:false,
                                    valid:false

                                },
                                password:{
                                    value:'',
                                    name:'password',
                                    type:"text",
                                    placeholder:'Enter your password',
                                    required:true,
                                    touched:false,
                                    valid:false

                                },
                                email:{
                                    value:'',
                                    name:'email',
                                    type:"email",
                                    placeholder:'Enter your email',
                                    required:true,
                                    touched:false,
                                    valid:false

                                },
                                valid:false
                    },
                    "2":{
                            hobbey:{
                                value:'',
                                type:"text",
                                name:'hobbey',
                                placeholder:'Enter your hobbey',
                                required:true,
                                touched:false,
                                valid:false

                            },
                            gender:{
                                value:'male',
                                name:'gender',
                                type:'radio',
                                valid:true,
                                touched:true
                            },
                            valid:false
                    }

            }
           
        }

        this.changeHandler=this.changeHandler.bind(this);
        this.goToStep=this.goToStep.bind(this);
        this.checkElemnetvalidity=this.checkElemnetvalidity.bind(this);
        this.onTouched=this.onTouched.bind(this)

    }


    changeHandler(event,el){
        let stepName=this.state.step;
        let formData=Object.assign({},this.state.formData);
        let stepData=Object.assign({},formData[stepName]);
        let elData=Object.assign({},stepData[el]);
        elData.value=event.target.value;
        elData.valid=this.checkElemnetvalidity(elData);
        formData[stepName][el]=elData;
        this.setState({
            formData:formData
        })
        
    }

    onTouched(event,el){
        let stepName=this.state.step;
        let formData=Object.assign({},this.state.formData);
        let stepData=Object.assign({},formData[stepName]);
        let elData=Object.assign({},stepData[el]);
        elData.touched=true
        formData[stepName][el]=elData;
        this.setState({
            formData:formData
        })
    }

    checkElemnetvalidity(elData){
        switch(elData.type){
            case 'text':
                if(elData.required==true && elData.value.trim()==""){
                    return false;
                 }else{
                     return true;
                 }
            case 'email':
                if(elData.required==true && elData.value.trim()==""){
                    return false;
                 }else if(!(/(.+)@(.+){2,}\.(.+){2,}/.test(elData.value)) ){
                     return false;
                 }else{
                     return true
                 }

        }
    }

    goToStep(step){
        this.setState({
            step:step            
        })
    }

    render(){
        let formEl=null;
        let step=this.state.step
        switch(step){
                case "1":
                        formEl= <AccountField
                                        goToStep={this.goToStep}
                                        onTouched={this.onTouched} 
                                        handleChnage={this.changeHandler} 
                                        Data={this.state.formData[step]}/>
                        break;
                case "2":
                        formEl= <SurveyField 
                                        goToStep={this.goToStep} 
                                        onTouched={this.onTouched} 
                                        handleChnage={this.changeHandler} 
                                        Data={this.state.formData[step]}/>
                        break;
                case "3":
                        formEl= <Confirmation 
                                    goToStep={this.goToStep} 
                                    formData={this.state.formData}/>
                        break;
                case "4":
                        formEl= <Success 
                                     goToStep={this.goToStep} 
                                    formData={this.state.formData}/>
                        break;

        }
        return(
            <div>
                <div><h3>[ Step - {this.state.step} ]</h3></div>
                <div>{formEl}</div>
            </div>
        ) 
       
    }
}