import React from "react";

const TopNavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <a className="navbar-brand" href="./">Travelix<span>Travel Agency</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a href="./" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="./about-page" className="nav-link">About</a></li>
                        <li className="nav-item active"><a href="./destination" className="nav-link">Destination</a></li>
                        <li className="nav-item"><a href="./hotels" className="nav-link">Hotel</a></li>
                        <li className="nav-item"><a href="./contact" className="nav-link">Contact</a></li>
                    </ul>
                </div>
            </div>
            </nav>        
        </div>

    )
};

export default TopNavBar;