//using props
// import axios from "axios";
// import { useEffect, useState } from "react"

// export function WeatherDetails(props){
//     const[weatherObj,setWeatherObj] = useState({weather:[], main:{temp:0}, name:null});

//     function LoadWeatherDetail(){
//         axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=788204f6a2e3dc0d86d9c0ad91e14855&units=metric`)
//         .then(response=>{
//             setWeatherObj(response.data);
//         })
//     }
//     useEffect(()=>{
//         LoadWeatherDetail();
//     },[props])

//     return(
//         <div className="bg-light shadow shadow-lg p-3">
//             <h3>{weatherObj.name}</h3>
//             <div className="fs-1 fw-bold">
//                 {weatherObj.main.temp}&deg;C
//             </div>
//             {/* <div>
//                 {weatherObj.weather[0].description}
//             </div> */}
//         </div>
//     )
// }

//using context api

import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { CityContext } from "./weatherApp";

export function WeatherDetails(){
    const[weatherObj,setWeatherObj] = useState({weather:[], main:{temp:0,temp_min:0,temp_max:0,pressure:0,humidity:0,sea_level:0}, visibility:0, wind:{speed:0}, name:null});
    
    let city = useContext(CityContext)
    
    function LoadWeatherDetail(){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=788204f6a2e3dc0d86d9c0ad91e14855&units=metric`)
        .then(response=>{
            setWeatherObj(response.data);
        })
    }
    
    useEffect(()=>{
        LoadWeatherDetail();
    },[city])

    return(
        <div className="d-flex gap-4" style={{maxWidth:'90%',width:'100%'}}>
                <div className="shadow shadow-lg rounded-4" style={{background:'#ffdffb',width:'60%',padding:'15px 25px'}}>
                    <div className="d-flex justify-content-between">
                         <p className="fw-bold" style={{fontSize:'20px'}} >{weatherObj.name}</p>
                         <p className="p-2 pt-1 pb-1 rounded-3 text-primary" style={{backgroundColor:'#d4e6fa',fontSize:'18px'}}>&deg;C</p>
                        {/* <img src="vave.jpg"/>  */}
                    </div>
                    <div className="d-flex flex-column gap-1 mt-3">
                        <p className="fw-bold m-0" style={{fontSize:'20px'}}>Mostly clear</p>
                        <div className="d-flex gap-2">
                            <p className="m-0" style={{fontSize:'18px',fontWeight:'400'}}>H{weatherObj.main.temp_min}&deg;</p>
                            <p className="m-0" style={{fontSize:'18px',fontWeight:'400'}}>L{weatherObj.main.temp_max}&deg;</p>
                        </div>
                    </div>
                    <div className="fs-1 fw-bold d-flex align-items-center justify-content-center gap-2">
                            <img src="badal.png" width='120px'/>
                            <h3 className="fw-bold fs-1 m-0">{weatherObj.main.temp}&deg;C</h3>
                    
                    </div>
                </div>
                <div className="d-flex gap-4">
                    <div className="d-flex flex-column gap-2" style={{maxWidth:'600px',width:'100%'}}>
                        <div className="shadow shadow-lg gap-3 pt-2 pb-2 d-flex justify-content-between p-3 rounded-4" style={{background:'rgb(255, 223, 251)',width:'100%'}}>
                            <div className="d-flex gap-1 flex-column">
                                <p className="m-0" style={{fontWeight:'500'}}>Visibility</p>
                                <p className="m-0 fw-bold">{weatherObj.visibility} k/m</p>
                                <p className="m-0 fw-bold">Good</p>
                            </div>
                            <img src="visiblity1.png" width="80px" style={{objectFit:'fill'}}/>
                        </div>
                        <div className="shadow shadow-lg gap-3 p-3 pt-2 pb-2 d-flex justify-content-between p-3 rounded-4" style={{background:'#ffdffb',width:'100%'}}>
                            <div className="d-flex gap-1 flex-column">
                                <p className="m-0" style={{fontWeight:'500'}}>Pressure</p>
                                <p className="m-0 fw-bold">{weatherObj.main.pressure}m/b</p>
                                <p className="m-0 fw-bold">Rising Rapidly</p>
                            </div>
                            <img src="pressure.png" width="95px" height="100px" style={{objectFit:'fill'}}/>
                        </div>
                        <div className="shadow shadow-lg gap-3 p-3 pt-2 pb-2 d-flex justify-content-between p-3 rounded-4" style={{background:'#ffdffb',width:'100%'}}>
                            <div className="d-flex gap-1 flex-column" style={{width:'max-content'}}>
                                <p className="m-0" style={{fontWeight:'500'}}>Sea Level</p>
                                <p className="m-0 fw-bold">{weatherObj.main.sea_level}m/l</p>
                                <p className="m-0 fw-bold">Medium</p>
                            </div>
                            <img src="sea.png" width="110px" height="105x" style={{objectFit:'fill'}}/>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-3" style={{maxWidth:'650px',width:'100%'}}>
                        <div className="shadow shadow-lg p-3 pt-2 pb-2 rounded-4 d-flex flex-column justify-content-between gap-2" style={{background:'#ffdffb'}}>
                             <div className="d-flex justify-content-between">
                                <p className="m-0 fw-bold">Wind</p>
                                <div className="bi bi-chevron-right"></div>
                            </div>
                             <div className="d-flex gap-3">
                                <img src="wind2.png" width="120px" height="120x" style={{objectFit:'fill'}}/> 
                                <div className="d-flex flex-column gap-1">
                                    <span className="d-flex gap-1 align-items-end"><span className="fw-bold" style={{fontSize:'30px'}}>{weatherObj.wind.speed} </span>km/h</span>
                                    <p style={{whiteSpace:'nowrap'}}>Wind Speed</p>
                                </div>
                             </div>
                            <p className="m-0 fw-bold">Force:2 (Light Breeze)</p>
                        </div>
                        <div className="shadow shadow-lg p-3 pt-2 pb-2 rounded-4 d-flex flex-column justify-content-between gap-2" style={{background:'#ffdffb'}}>
                            <div className="d-flex justify-content-between">
                                <p className="m-0 fw-bold">Humidity</p>
                                <div className="bi bi-chevron-right"></div>
                            </div>
                            <div className="d-flex gap-4">
                                <div>
                                    <img src="tub.png" width="20px" height="130px"/>
                                    <img src="tub.png" width="20px" height="130px"/>
                                    <img src="tub.png" width="20px" height="130px"/>  
                                    <img src="tub.png" width="20px" height="130px"/>
                                    <img src="tub.png" width="20px" height="130px"/>
                                    <img src="tub.png" width="20px" height="130px"/>
                                </div>
                                <div className="d-flex flex-column gap-1">
                                    <span className=""><span className="fw-bold text-center" style={{fontSize:'30px'}}>{weatherObj.main.humidity}</span>%</span>
                                    <p style={{whiteSpace:'nowrap'}}>Humid</p>
                                </div>
                            </div>
                            <p className="m-0 fw-bold">Normal</p>
                        </div>
                    </div>
                </div>
            </div>
           
    )
}