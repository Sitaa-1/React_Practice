import { useRef, useState } from "react"

export function StopWatch(){

    const[hour,sethr] = useState(0);
    const[min,setMin] = useState(0);
    const[sec,setSec] = useState(0);
    const[ms,setMs] = useState(0);

    let thread = useRef(null);
        
    let milsec=0,second=0,mint=0,hrs=0;

    function Timer(){
        milsec++;
        if(milsec === 999){
            milsec=0;
            second++;
            if(second === 59){
                mint++;
                second=0;
                if(mint === 59){
                    mint=0;
                    hrs++;
                }
            }
        }
        setMs(milsec);
        setSec(second);
        setMin(mint);
        sethr(hrs);
    }

    function handleStartClick(){
        thread.current=setInterval(Timer,1);
    }
    function handleStopClick(){
        clearInterval(thread.current);
    }

    return(
        <div className="container-fluid ">
            <div className="bg-info mt-5 w-70 p-4 rounded d-flex gap-1 row justify-content-center">
                <div className="col text-light fs-5">{hour}</div>
                <div className="col text-light fs-5">:</div>
                <div className="col text-light fs-5">{min}</div>
                <div className="col text-light fs-5">:</div>
                <div className="col text-light fs-5">{sec}</div>
                <div className="col text-light fs-5">:</div>
                <div className="col text-light fs-5">{ms}</div>
            </div>
            < button className="btn btn-warning mt-4" onClick={handleStartClick}>Start</button>
            <button className="btn btn-danger mt-4 mx-3" onClick={handleStopClick}>Stop</button>
        </div>
        
    )
}