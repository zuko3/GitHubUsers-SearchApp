import React from "react";

export const AccountField=(props)=>{
    return(
        <div>
                <div>
                    <label>Name</label> 
                    <input 
                            className={!props.Data.name.valid && props.Data.name.touched?'error':''}
                            placeholder={props.Data.name.placeholder}
                            value={props.Data.name.value}
                            onFocus={(event)=>props.onTouched(event,"name")}
                            onChange={(event)=>props.handleChnage(event,"name")}
                            type="text"/>
                </div>

                <div>
                    <label>Password</label>
                    <input
                         className={!props.Data.password.valid && props.Data.password.touched?'error':''}
                         placeholder={props.Data.password.placeholder}
                         value={props.Data.password.value}
                         onFocus={(event)=>props.onTouched(event,"password")}
                         onChange={(event)=>props.handleChnage(event,"password")} 
                         type="password"/>
                </div>

                <div>
                    <label>Email</label>
                    <input
                        className={!props.Data.email.valid && props.Data.email.touched?'error':''}
                        placeholder={props.Data.email.placeholder}
                        value={props.Data.email.value}
                        onFocus={(event)=>props.onTouched(event,"email")}
                        onChange={(event)=>props.handleChnage(event,"email")}  
                        type="email"/>
                </div>
                
                <div>
                    <button disabled={!(props.Data.name.valid  && props.Data.password.valid && props.Data.email.valid)} 
                            onClick={()=>props.goToStep('2')}>Continue</button> 
                </div>
        </div>
    );
}