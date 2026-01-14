import axios from "axios";
import { useEffect, useState } from "react"

export function Fakestore(){
    const[product,setProduct] = useState([{id:0,title:null,price:0,description:null,category:null,image:null,rating:{rate:0,count:0}}]);
    const[categories,setCategories] = useState([]);

    function LoadProduct(url){
        axios.get(url).then(response =>{
            setProduct(response.data)
        })
    }
    function LoadCategories(){
        axios.get(`https://fakestoreapi.com/products/categories`).then(response=>{
           // response.data;
            setCategories(response.data);
        })
    }
    useEffect(() =>{
        LoadProduct(`https://fakestoreapi.com/products`)
    },[])
    return(
        <div className="container-fluid">
            <header className="d-flex align-items-center justify-content-between p-2 bg-light">
                <div>
                    <span className="bi bi-bag fs-4 fw-bold text-dark"></span>
                    <span className="fs--4 mx-2 fw-bold">Shopping</span>
                </div>
                <div>
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="search" />
                        <button className="btn btn-warning bi bi-search"></button>
                    </div>
                </div>
                <div>
                    <button className="btn bi bi-person"></button>
                    <button className="btn mx-2 bi bi-heart"></button>
                    <button className="btn bi bi-cart4"></button>
                </div>
            </header>
            <section className="d-flex">
                <nav className="col2">
                    <div className="bg-light p-3">
                        <div className="d-flex my-3 justify-content-between">
                            <span className="text-primary">Filter</span>
                            <span className="text-primary">Clear All</span>
                        </div>
                        <div className="mt-3">
                            <label className="form-label fw-bold">Category</label>
                            <div>
                                <select className="form-select">
                                    {
                                        categories.map(category=>
                                            <option key={category} value={category}>{category.toUpperCase()}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="mt-3">
                            <label className="form-label fw-bold">Choose Categories</label>
                            <div>
                                <ul className="list-unstyled">
                                    {
                                        categories.map(category=>
                                            <li style={{fontSize:'13px'}} className="my-2" key={category}>
                                                <input type="checkbox" /><label>{category.toUpperCase()}</label>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="form-label fw-bold">Price range</label>
                            <input type="range" className="form-range" />
                        </div>
                        <div className="mt-4">
                            <label className="form-label fw-bold">Ratings</label>
                            <ul className="list-unstyled">
                                <li>4 <span className="bi bi-star-fill text-warning"></span>
                                    <span className="bi bi-star-fill text-warning"></span>
                                    <span className="bi bi-star-fill text-warning"></span>
                                    <span className="bi bi-star-fill text-warning"></span>
                                </li>
                                <li>3 <span className="bi bi-star-fill text-warning"></span>
                                    <span className="bi bi-star-fill text-warning"></span>
                                    <span className="bi bi-star-fill text-warning"></span>
                                </li>
                                <li>2 <span className="bi bi-star-fill text-warning"></span>
                                    <span className="bi bi-star-fill text-warning"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <main className="col-9 d-flex overflow-auto flex-wrap" style={{height:'580px'}}>
                    {
                        product.map(product=>
                            <div key={product.id} className="card m-2" style={{width:'250px'}}>
                                <img src={product.image} className="card-img-top" height="150" />
                                <div className="card-header" style={{height:'120px',fontSize:'17px'}}>
                                    {product.title}
                                </div>
                                <div className="card-body p-2">
                                    <dl className="m-0">
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>{product.rating.rate} <span className="bi bi-stat-fill text-success"/></dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button className="btn w-100 btn-warning bi bi-card4">Add To card</button>
                                </div>
                            </div>
                        )
                    }
                </main>
            </section>
        </div>
    )
}