import axios from "axios";
import './mobile.css';
import { useEffect, useState } from "react"

export function MouseOverEx(){
    const[mobiles,setMobile] = useState([{image:null}]);
    function LoadMobile(){
        axios.get('mobile.json').then(response=>{
            setMobile(response.data);
        })
    }
    useEffect(()=>{
        LoadMobile();
    },[])

    const[preview,setPreview] = useState('mb1.jpg');

    function handleMouceOver(e){
        setPreview(e.target.src);
    }

    return(
        <div className="container-fluid p-3">
            <div className="row mt-4">
                <div className="col-2">
                    {
                        mobiles.map(mobile=>
                            <div key={mobile.image} className="my-4 mobile-container" style={{width:'100px'}}>
                                <img src={mobile.image} onMouseOver={handleMouceOver} width="100%" height="100"/>
                            </div>
                        )
                    }
                    </div>
                    <div className="col-10">
                        <img width="400" height="500" src={preview}></img>
                    </div>
            </div>
        </div>
    )
}