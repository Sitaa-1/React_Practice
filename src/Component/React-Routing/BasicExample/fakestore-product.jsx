import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export function FakeStoreProduct(){

    let params = useParams();

    const[products,setProducts] = useState([{id:0,title:null,price:0,image:null,description:null,category:null,rating:{rate:0,count:0}}]);

    function LoadProduct(){
        axios.get(`https://fakestoreapi.com/products`).then(reponse=>{
            setProducts(reponse.data.filter(product=>product.category===params.category));
        })
    }
    useEffect(()=>{
        LoadProduct();
    })
    return(
            <div className="container-fluid mt-4">
                <h4>Products</h4>
                <div className="d-flex flex-wrap flax-row" style={{width:'600px'}}>
                    {
                        products.map(product=>
                            <div className="card m-2 p-2" style={{width:'180px'}} key={product.id}>
                                <div className="card-header">
                                    <img className="card-img-top" src={product.image} height="90"/>
                                </div>
                                <div className="card-footer">
                                    <Link to={`/details/${product.id}`} className="btn btn-dark w-150">Details</Link>
                                </div>
                            </div>
                        )
                    }
                </div>
                <Link to="/">Back to categorys</Link>
            </div>
    )
}