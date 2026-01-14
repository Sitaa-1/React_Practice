import { useState } from "react";

export function TwoWayBindingEx(){
    const[data,setData] =useState("jon");
    function handleChange(e){
        setData(e.target.value);
    }
    // const[pro,setpro] =useState('TV',['hyd','pune']);
    // function synthevents(e,...product){
    //     e.target.id;
    //     setpro(e.target.value);
    // }
    return(
        <div>
            <input type="text" value={data} onChange={handleChange}></input>
            <h3>{data}</h3>
           {/* </div> <button id="ii1" onClick={(e)=> synthevents({pro},{...product}])}>{product}</button> */}
        </div>
    )
}