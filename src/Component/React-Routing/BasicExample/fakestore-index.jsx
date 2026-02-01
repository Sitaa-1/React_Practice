import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FakeStoreHome } from "./fakestore-home";
import { FakeStoreProduct } from "./fakestore-product";
import { FakeStoreDetails } from "./fakestore-details";

export function FakeStoreIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
                <header className="bg-dark text-white text-center p-2">
                    <h1 className="bi bi-bag">Shopping</h1>
                </header>
                <section>
                    <Routes>
                        <Route path="/" element={<FakeStoreHome />}></Route>
                        <Route path="/product/:category" element={<FakeStoreProduct />}></Route>
                        <Route path="/details/:id" element={<FakeStoreDetails />}></Route>
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}