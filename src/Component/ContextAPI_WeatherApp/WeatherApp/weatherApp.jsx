//using props
// import { useState } from "react";
// import { WeatherDetails } from "./weather-detail";

// export function WeatherApp(){
// const[cityName,setCityName]=useState('');
// const[city,setCity] = useState('');

// function handleSearchBar(){
//     setCity(cityName);
// }

// function handleCityName(e){
//     setCityName(e.target.value);
// }
//     return(
//         <div className="conatiner-fluid bg-secondary d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
//             <div className="p-4 bg-light w-50 rounded rounded-2" style={{height:'400px'}}>
//                 <div>
//                     <h3 className="text-center bi bi-cloud-rain">Weater App</h3>
//                     <div className="input-group">
//                         <input type="text" onChange={handleCityName} className="form-control" placeholder="enter city name"/>
//                         <button className="btn btn-warning bi bi-search" onClick={handleSearchBar}></button>
//                     </div>
//                     <div className="mt-4">
//                         <WeatherDetails city={city}/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

//using context api
import { createContext } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export let CityContext = createContext(null);
import { useState } from "react";
import { WeatherDetails } from "./weather-detail";


export function WeatherApp(){
const[cityName,setCityName]=useState('');
const[city,setCity] = useState('');
const[toggleDetail, setToggleDetail] = useState('d-none');
const[itogle,setItogle] = useState('d-block');

function handleSearchBar(){
    setCity(cityName);
    setToggleDetail('d-block')
    setItogle('d-none');
}

function handleCityName(e){
    setCityName(e.target.value);
}
    return(
        <div className="conatainer-fluid d-flex justify-content-center align-items-center" style={{height:'100vh', background:'#fff5fe'}}>
            <div className="p-3 rounded rounded-2" style={{maxWidth:'85%',width:'100%'}}>
                <div>
                    <h3 className="text-center bi bi-cloud-rain">Weater App</h3>
                    <div className="input-group">
                        <input type="text" onChange={handleCityName} className="form-control" placeholder="enter city name"/>
                        <button className="btn btn-warning bi bi-search" onClick={handleSearchBar}></button>
                    </div>
                    <div className={`${itogle} d-flex justify-content-center`}><img src="whi.png" width="400px" height="400px"/></div>
                    <div className={`mt-4 ${toggleDetail}`}>
                        <CityContext.Provider value={city}>
                            <WeatherDetails/>
                        </CityContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}