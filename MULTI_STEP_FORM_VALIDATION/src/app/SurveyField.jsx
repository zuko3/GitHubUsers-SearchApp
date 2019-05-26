import React from "react";

export const SurveyField=(props)=>{
    return(
        <div>
                <div>
                    <label>Hobbey</label> 
                    <input 
                            className={!props.Data.hobbey.valid && props.Data.hobbey.touched?'error':''}
                            placeholder={props.Data.hobbey.placeholder}
                            value={props.Data.hobbey.value}
                            onFocus={(event)=>props.onTouched(event,"hobbey")}
                            onChange={(event)=>props.handleChnage(event,"hobbey")}
                            type="text"/>
                </div>
                 <div>
                     <input checked={"male"==props.Data.gender.value?true:false} onChange={(event)=>props.handleChnage(event,"gender")} type="radio" value="male" name={props.Data.gender.name}/>Male
                     <input checked={"female"==props.Data.gender.value?true:false} onChange={(event)=>props.handleChnage(event,"gender")} type="radio" value="female" name={props.Data.gender.name}/>Female
                 </div>
                
                <div>
                    <button onClick={()=>props.goToStep('1')}>Back</button>&nbsp;&nbsp;
                    <button  disabled={!props.Data.hobbey.valid} onClick={()=>props.goToStep('3')}>Continue</button> 
                </div>
        </div>
    );
}