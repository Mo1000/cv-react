import React from 'react';
import {BrowserRouter ,Routes ,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Knowledges from "./pages/Knowledges";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";


const App = () => {
    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route path="/competences" element={<Knowledges/>}/>
                <Route path="/portofolio" element={<Portfolio/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route element={<NotFound/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
    );
};

export default App;
