import axios from "axios";
import { useEffect, useState } from "react"
import { Link, Route } from "react-router-dom";

export function FakeStoreHome(){

    const[categories,setCategories] = useState([]);

    function LoadProduct(){
        axios.get(`https://fakestoreapi.com/products/categories`).then(response=>{
            setCategories(response.data);
        })
    }
    useEffect(()=>{
        LoadProduct();
    },[])

    return(
        <div className="container-fluid mt-5">
            <h2>Shopping Home</h2>
            <ul className="list-group w-25">
                {
                    categories.map(category=> <li className="list-group-item my-2 list-group-item-secondary" key={category}>
                        <span><Link className="btn" to={`product/${category}`}>{category.toUpperCase()}</Link></span>
                    </li>)
                }
            </ul>
        </div>
    )
}