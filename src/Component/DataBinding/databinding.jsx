import { useEffect, useState } from "react";

export function DataBinding(){
    const [price, setPrice] = useState(20000);
    const [name, setName] = useState();
    
    const [stack] = useState(false);
    useEffect(() => {
        setPrice(40000);
        setName(prompt("Enter name"));
    },[]);
    const[styleClass] = useState('bg-success text-white');
    return(
        <div>
            <h1> name : {name} price : {price}</h1>
            <p className={`border border-2 p-2 border-warning ${styleClass}`}>
                {(stack === true)? "true" : "false"}
            </p>
            <p className={"border border-5 p-2 border-warning " + styleClass}>
                {(name === null) ? " Name require" : name}
            </p>
        </div>
    );
}