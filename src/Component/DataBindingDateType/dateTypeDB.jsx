import { useState } from "react";
import moment from "moment";

export function DateTypeDataBinding(){
    //------------------- In JS -----------------//
    // const [departure] = useState(new Date('2026-01-04 22:10:28'));
    // const [weekdays] = useState(['Sun','Mon','Tue','Wed','Thu','Fri','Sat']);
    // const [months] = useState(['Jan','Feb','Mar','Apr','May','Jun'])
    // return(
    //     <div>
    //         <h3>Departure : {departure.getDate()} {weekdays[departure.getDay()]} , {months[departure.getMonth()]} {departure.getFullYear()}
    //         </h3>
    //     </div>
    // )

    const [departure] = useState(new Date('2026-01-04 22:10:28'));
    return(
        <div>
            <h3>Departure : {moment(departure).format('ddd DD, MMMM YYYY')}
            </h3>
        </div>
    )
}