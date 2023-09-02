import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
    return(
        <div>
        <h1>404 Error-Page Not Found</h1>
        <NavLink to="/">Goto Home</NavLink>
        </div>
    )
};

export default PageNotFound;