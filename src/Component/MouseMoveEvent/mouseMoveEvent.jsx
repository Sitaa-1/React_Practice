import { useState } from "react"

export function MouseMove(){
    const[style,setStyle]=useState({position:'fixed',top:'',left:''});
    
    function handleMouseMove(e){
        setStyle({position:'fixed',top:`${e.clientY}px`,left:`${e.clientX}px`})
    }


    return(
        <div onMouseMove={handleMouseMove}>
            <div style={{height:'1000px'}}>
                <p className="fs-2">Mouse Move pointer to test</p>
                <img src="./vite.svg" style={style} height="40" width="30" /> 
            </div>
        </div>
    )
}