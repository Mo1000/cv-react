import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Route exact path="/cv-react" element={<Home />}></Route>
          <Route path="/cv-react/competences" element={<Knowledges />} />
          <Route path="/cv-react/portofolio" element={<Portfolio />}></Route>
          <Route path="/cv-react/contact" element={<Contact />}></Route>
          <Route element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
