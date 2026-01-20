import { useState } from "react"

export function ElementState(){
    const[userName,setUserName] = useState('');
    const[msg,setMsg] = useState('');

    function handleNameBlur(){
        setUserName(userName.toUpperCase());
        setMsg('')
    }
    function handleNameChange(e){
        setUserName(e.target.value);
    }
    function handleNameFocus(){
        setMsg('Name in Block Letters');
    }
    return(
        <div>
            <h4>Register</h4>
            <label>UserName</label>
            <input type="text" value={userName} onFocus={handleNameFocus} onChange={handleNameChange} onBlur={handleNameBlur} className="" placeholder="name"/>
            <p className="text-warning fs-6">{msg}</p>
        </div>
    )
}