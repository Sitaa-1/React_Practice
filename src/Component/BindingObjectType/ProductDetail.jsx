import { useEffect, useState } from "react";

export function DataBindingObjType(){
    const [product] = useState({id:1,name:'TV',price:40000,cities:['Delhi','Hyd'],rating:{rate:4.3,count:6000}});

    useEffect(()=>{

    },[])
    return(
        <div className="container-fluid">
            <h4>Product Details</h4>
            <dl className="ms-4">
                <dt>Product Id</dt>
                <dd>{product.id}</dd>
                <dt>Name</dt>
                <dd>{product.name}</dd>
                <dt>Price</dt>
                <dd>{product.price.toLocaleString('en-in',{style:'currency', currency:'INR'})}</dd>
                <dt>Shipped To</dt>
                <dd>
                    <ol>
                        {
                            product.cities.map(city=> <li key={city}>{city}</li>)
                        }
                    </ol>
                </dd>
                <dt>Ratings</dt>
                <dd>
                    {product.rating.rate} <span className="bi bi-star-fill text-success"></span>
                    [{product.rating.count}]
                </dd>
            </dl>
        </div>
    )
}