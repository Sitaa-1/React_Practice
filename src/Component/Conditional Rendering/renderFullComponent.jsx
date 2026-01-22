import { useState } from "react"
import { Login } from "../Login/login";
import { EMICalculator } from "../ElementStateEvent/emi_Calculator";

export function FullComponentRendering(){

    const[component,setComponent] = useState(null);

    function handleLogin(){
        setComponent(<Login />);
    }
    function handleRegister(){
        setComponent(<EMICalculator />);
    }

    return(
        <div>
            <h2>Home</h2>
            <button className="btn btn-primary mx-2" onClick={handleLogin}>Login</button>
            <button className="btn btn-success mx-2" onClick={handleRegister}>Register</button>
            <hr />
            <div>
                {component}
            </div>
        </div>
    )
}