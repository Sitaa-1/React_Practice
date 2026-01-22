import { useState } from "react"

export function RenderPartOfComponent(){
    const[signIn,setSignIn] = useState(true);

    function handleSignIn(){
        setSignIn(true);
    }
    function handleSignOut(){
        setSignIn(false);
    }

    return(
        <div className="container-fluid d-flex justify-content-between p-2 mt-2 border rounded">
            <div className="bg-warning p-2 rounded">
                <span className="bi bi-amazon">Amazon</span>
            </div>
            <div>
                {
                (signIn) ?
                    <div className="border rounded bg-light gap- d-flex justify-content-center">
                        <span className="badge fs-7 bg-danger mx-2 text-white align-self-center p-2 rounded rounded-circle">
                            <span className="bi bi-person"></span> 
                        </span>
                        <button className="btn btn-link fs-8" onClick={handleSignOut}>SignOut</button>
                    </div>
                :
                    <div className="d-flex">
                        <input type="text" className="form-control" placeholder="UserName"/>
                        <button className="btn btn-danger" onClick={handleSignIn}>SignIn</button>
                    </div>
                }       
            </div>
        </div>
    )
}