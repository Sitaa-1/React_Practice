import { useState } from "react"
import { ChildComponent } from "./childComponent";

export function ParentComponent(){
    const[msg,setMsg] = useState('waiting for child data');

    function handleChildClick(e){
        setMsg(e);
    }
    return(
        <div className="bg-warning border p-3">
            <h5>hi im parent - {msg}</h5>
            <ChildComponent onChildClick={handleChildClick} />
        </div>
    )
}