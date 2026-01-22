import { useRef, useState } from "react"

export function DebounceDemo(){
    const[msg,setMsg] = useState('');
    let thread = useRef(null);

    function Level1(){
        setMsg('volume incress : 20%')
    }
    function Level2(){
        setMsg('volume incress : 70%')
    }
    function Level3(){
        setMsg('volume full')
    }
    function VolumeUpClick(){
        setTimeout(Level1,2000);
        thread.current = setTimeout(Level2,5000);
        setTimeout(Level3,1000);
    }
    function handleCancleClick(){
        alert('canceled');
        clearTimeout(thread.current)
    }

    return(
        <div className="container-fluid p-4">
            <button onClick={VolumeUpClick} className="btn btn-warning bi bi-volume-up"></button>
            <button className="btn btn-danger mx-2" onClick={handleCancleClick}>Cancle L2</button>
            <p className="fs-4">{msg}</p>
        </div>
    )
}