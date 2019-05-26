import React from "react";

export const Success=(props)=>{
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
                    <h4>Thank you for registration</h4>
                    { finalData }
                </div>
        </div>
    );
}