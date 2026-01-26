import { useState } from "react"

export function FormDemo(){
    const[username,setUsername]=useState('');
    const[age,setAge]=useState(0);
    const[city,setCity]=useState();

    function handleUsername(e){
        setUsername(e.target.value);
    }
    function handleAge(e){
        setAge(e.target.value);
    }
    function handleCity(e){
        setCity(e.target.value);
    }
    function handleRegisterClick(e){
        e.preventDefault();
        console.log(`UserName : ${username}\n Age : ${age}\n City : ${city}`)
    }

    return(
        <div>
            <h4>Register User</h4>
            <form>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" onChange={handleUsername}/>{}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" onChange={handleAge}/></dd>
                    <dt>Your City</dt>
                    <dd>
                        <select onChange={handleCity}>
                            <option>Select City</option>
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </select>
                    </dd>
                </dl>
                <button onClick={handleRegisterClick}>Register</button>
            </form>
        </div>
    )
}