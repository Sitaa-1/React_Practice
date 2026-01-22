import axios from "axios";
import { useEffect, useState, useRef } from "react"

export function CarouselDemo(){

    const[product,setProduct] = useState({id:0,title:null,image:null,category:null,description:null,price:0,rating:{rate:0,count:0}});
    const[status,setStatus] = useState('');

    let ProductId = useRef(1);
    let thread = useRef(null);

    function LoadProductManually(id){
        axios.get(`https://fakestoreapi.com/products/${id}`).then(response=>{
            setProduct(response.data);
        })
    }
    function handleNextClick(){
        ProductId.current = ProductId.current + 1;
        LoadProductManually(ProductId.current);
        setStatus('slide show -manual');
    }
    function handlePrevClick(){
        ProductId.current = ProductId.current - 1;
        LoadProductManually(ProductId.current);
        setStatus('slide show -manual');
    }
    function LoadProductAuto(){
        ProductId.current = ProductId.current+1;
        LoadProductManually(ProductId.current);
    }
    function handlePlayClick(){
        thread.current = setInterval(LoadProductAuto, 3000);
        setStatus('slide show - started')
    }
    function handlePauseClick(){
        clearInterval(thread.current);
        setStatus('slide show - paused')
    }
    function handleSeekBar(e){
        ProductId.current = e.target.value;
        LoadProductManually(ProductId.current);
    }
    useEffect(()=>{ 
        LoadProductManually(1);
    },[])
    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="card mt-3 p-2 w-50">
                <div className="card-header text-center overflow-auto">
                    {product.title}
                    <div className="fw-bold">{status}</div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                            <button className="bi btn btn-dark bi-chevron-left" onClick={handlePrevClick}></button>
                        </div>
                        <div className="col-10 position-relative">
                            <div className="badge bg-danger text-white rounded rounded-circle p-2 fs-8 position-absolute top-0 end-0">
                                {product.price.toLocaleString('en-us',{style:'currency',currency:'USD'})}
                            </div>
                            <img width="100%" src={product.image} height="300" />
                            <div>
                                <input className="form-range" onChange={handleSeekBar} type="range" min="1" max="20" />
                            </div>
                        </div>
                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                            <button className="bi btn btn-dark bi-chevron-right" onClick={handleNextClick}></button>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-warning bi bi-play" onClick={handlePlayClick}></button>
                    <button className="btn btn-danger bi bi-pause mx-2" onClick={handlePauseClick}></button>
                </div>
            </div>
        </div>
    )
}