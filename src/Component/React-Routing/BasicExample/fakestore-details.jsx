import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"

export function FakeStoreDetails(){
    
    let params = useParams();
    const[product,setProduct] = useState({id:0,title:null,price:0,image:null,description:null,category:null,rating:{rate:0,count:0}});

    function LoadProductDetails(){
        axios.get(`https://fakestoreapi.com/products/${params.id}`).then(response=>{
            setProduct(response.data);
        })
    }
    useEffect(()=>{
        LoadProductDetails();
    },[params.id])
    return(
        <div className="container-fluid mt-4 d-flex justify-content-center align-items-center flex-column">
            <h2>Details</h2>
            <dl style={{width:'80%'}}>
                <dt>Title</dt>
                <dd>{product.title}</dd>
                <dt>Preview</dt>
                <dd>
                    <img src={product.image} width="200px" height="200px"/>
                </dd>
                <dt>Price</dt>
                <dd>{product.price.toLocaleString('en-us',{style:'currency',currency:'USD'})}</dd>
            </dl>
            {/* <Link to={`/product/${product.category}`}>Back to Products</Link> */}
        </div>
    )
}