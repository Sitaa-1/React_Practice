import { useState } from "react";

export function RegExpresionDb(){
    const [regEx] = useState(/(?=.*[A-Z])\w{4,15}/);
    const [password] = useState('daVid123');

    return(
        <div>
            <p>Your Password : {password}</p>
            {
                (password.match(regEx)) ? "Strong Password":"Week Password"
            }
        </div>
    )
}