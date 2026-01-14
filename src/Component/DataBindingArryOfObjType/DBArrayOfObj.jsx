import { useState } from "react";

export function DataBindingArrOfObjType(){
    const [product] = useState([
        {id:1,Name:"TV",Price:45000},
        {id:2,Name:"Mobile",Price:12000},
        {id:3,Name:"Watch",Price:3000}
    ])

    return(
        <div>
            <h3>Product Table</h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name 
                            <span className="bi bi-sort-alpha-down"></span>
                        </th>
                        <th>Price 
                            <span className="bi bi-sort-alpha-down"></span>
                        </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map(product=>
                        <tr key={product.id}>
                            <td>{product.Name}</td>
                            <td>{product.Price}</td>
                            <td>
                                <button className="btn btn-warning bi bi-pen-fill"></button>
                                <button className="btn btn-denger bi bi-trash-fill mx-2"></button>
                            </td>
                        </tr>
                    )
                    }
                </tbody>
            </table>
        </div>
    )
}