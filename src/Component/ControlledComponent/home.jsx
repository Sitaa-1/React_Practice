import { useState } from "react";
import { NavbarComponent } from "./navbar";
import { TableGridTable } from "./data-grid-table";

export function HomeComponent(){
    const[product]=useState([{Name:'tv',price:20000}])
    const[employee] = useState([{Name:'jojo',Post:'Manager',Salary:'200000',Brach:'Hyd'},{Name:'coco',Post:'Clark',Salary:'100000',Brach:'Hyd'}])
    return(
        <div className="container-fluid">
            <NavbarComponent logo="bi bi-amazon" orientation="horizontal" theme="bg-dark text-white" brand="Amazon" menu={['Home','Category','Blog','Contact']}/>
            <NavbarComponent logo="bi bi-amazon" orientation="varticle" theme="bg-dark text-white" brand="Amazon" menu={['Home','Category','Blog','Contact']}/>    

            <div>
                <div className="container-fluid mt-3">
                    <TableGridTable caption="Product table" data={product} />
                </div>
                <div className="container-fluid mt-3">
                    <TableGridTable caption="Employee table" data={employee} />
                </div>
            </div>
        </div>
    )
}