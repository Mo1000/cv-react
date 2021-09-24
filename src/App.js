import React from 'react';
import {BrowserRouter ,Switch ,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Knowledges from "./pages/Knowledges";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";


const App = () => {
    return (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/compétences" component={Knowledges}></Route>
                <Route path="/portofolio" component={Portfolio}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    </>
    );
};

export default App;
