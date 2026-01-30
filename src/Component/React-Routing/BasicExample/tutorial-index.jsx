import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { TutorialJava } from "./tutorial-java";
import { TutorialReact } from "./tutorial-react";
import { TutorialHome } from "./tutorial-home";

export function TutorialIndex(){
    return(
        <div>
            <BrowserRouter>
             <h3 className="text-center">Tutorial Index</h3>
             <nav className="d-flex justify-content-center gap-4">
                <span><Link to="/home">Home</Link></span>
                <span><Link to="/java">Java</Link></span>
                <span><Link to="/react">react</Link></span>
             </nav>
             
             <hr></hr>
                <Routes>
                    <Route path="home" element={<TutorialHome />}></Route>
                    <Route path="java" element={<TutorialJava />}></Route>
                    <Route path="react" element={<TutorialReact />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}