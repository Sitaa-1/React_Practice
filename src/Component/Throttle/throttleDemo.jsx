import { useEffect, useState } from "react"

export function ThrottleDemo(){
    const[now,setNow] =useState(new Date());
    function LoadTime(){
        setNow(new Date());
    }
    useEffect(()=>{
        setInterval(LoadTime,1000);
    },[])

    return(
        <div className="container-fluid text-center">
            <div className="h1">{now.toLocaleTimeString()}</div>
        </div>
    )
}