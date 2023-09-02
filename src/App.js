import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Screens/home";
import About from "./Screens/about";
import Hotel from "./Screens/hotel";
import Destination from "./Screens/destination";
import Contact from "./Screens/contact";
import PageNotFound from "./Screens/page-not-found";


import "./css/style.css";
import "./css/flaticon.css";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="about-page" element={<About></About>}></Route>
        <Route path="hotels" element={<Hotel></Hotel>}></Route>
        <Route path="destination" element={<Destination></Destination>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>

        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;