import { useState } from 'react';
import './mouse-animation.css';
export function MouseDownUpEvent(){

    const[animationObj,setAnimationObj] = useState({animationName: 'Spin',
        animationDuration:'3s',
        animationIterationCount:'infinite',
        animationTimingFunction:'linear'
    })
    function handleMouseDown(){
        setAnimationObj({animationName: 'Spin',
            animationDuration:'500ms',
            animationIterationCount:'infinite',
            animationTimingFunction:'linear'
        })
    }
    function handleMouseUp(){
        setAnimationObj({animationName: 'Spin',
            animationDuration:'3s',
            animationIterationCount:'infinite',
            animationTimingFunction:'linear'
        })
    }
    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <img onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} src="vite.svg" style={animationObj} width="200" height="200" />
        </div>
    )
}