import { useEffect, useState } from "react";

export function DataBindingMap(){
    const [menuItem] = useState(['Home','Sale','Shop','Contact','Services']);

    useEffect(()=>{

    },[])
    return(
        <div className="container-fluid">
            <header className="p-2 mt-2 align-items-center bg-light d-flex justify-content-between">
                <div>
                    <span className="bi bi-justify"></span>
                    <span className="max-2">Amazon</span>
                </div>
                <div>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="search amazon" />
                        <button className="btn btn-warning bi bi-search"></button>
                    </div>
                </div>
                <nav className="d-flex gap-3">
                    {
                        menuItem.map(item=> <span className="max-3" key={item}>{item}</span>)
                    }
                </nav>
            </header>
            <section className="mt-3">
                <ul className="list-group w-25">
                    {
                        menuItem.map(item => <li className="list-group-item list-group-item-denger" key={item}>{item}</li>)
                    }
                </ul>
                <ul className="list-unstyled ms-4">
                    {
                        menuItem.map(item=>
                        <li key={item}>
                            <input type="checkbox" />
                            <label>{item}</label>
                        </li>)
                    }
                </ul>
            </section>
        </div>
    )
}