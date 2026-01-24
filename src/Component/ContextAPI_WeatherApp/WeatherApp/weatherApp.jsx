import { WeatherDetails } from "./weather-detail";

export function WeatherApp(){
    return(
        <div className="conatiner-fluid bg-secondary d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <div className="p-4 bg-light w-50 rounded rounded-2" style={{height:'400px'}}>
                <div>
                    <h3 className="text-center bi bi-cloud-rain">Weater App</h3>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="enter city name"/>
                        <button className="btn btn-warning bi bi-search"></button>
                    </div>
                    <div className="mt-4">
                        <WeatherDetails/>
                    </div>
                </div>
            </div>
        </div>
    )
}