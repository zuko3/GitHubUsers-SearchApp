import React from "react";

export const Confirmation=(props)=>{
    let finalData=[];
    for(let key in props.formData){
        let stepData=props.formData[key];
        for(let elkey in stepData){
            if(stepData[elkey].__proto__==Object.prototype){
                finalData.push(<p key={elkey}><b>{elkey} : {stepData[elkey].value}</b></p>);
           }
        }
    }
    return(
        <div>
                <div>
                    <h4>Confirm Your data</h4>
                    { finalData }
                </div>
                
                <div>
                    <button onClick={()=>props.goToStep('2')}>Back</button>&nbsp;&nbsp;
                    <button onClick={()=>props.goToStep('4')}>Continue</button> 
                </div>
        </div>
    );
}