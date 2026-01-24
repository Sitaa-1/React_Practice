import { createContext, useContext, useState } from "react"

let UserContext = createContext(null);

export function Level1(){
    let context = useContext(UserContext);
    return(
        <div className="bg-danger border p-4">
            <h3>Level 1 {context}</h3>
            <Lavel2 />
        </div>
    )
}

export function Lavel2(){
    let context = useContext(UserContext);
    return(
        <div className="bg-warning border p-4">
            <h3>Level 2 {context}</h3>
        </div>
    )
}

export function ContextAPIDemo(){
    const[text,setText] = useState('');
    function handleInput(e){
        setText(e.target.value)
    }
    return(
        <div className="bg-success p-4">
            <h3>Parent
                <input type="text" onChange={handleInput} placeholder="username"/>
            </h3>
            <UserContext value={text}>
                <Level1 />
            </UserContext>
        </div>
    )
}