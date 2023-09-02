import React from "react";
import HeaderComponent from "../componnets/header";
import FooterComponent from "../componnets/footer";
import TopNavBar from "../componnets/top-navbar";

const Destination = () => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>

            <TopNavBar></TopNavBar>

            <section className="hero-wrap hero-wrap-2 js-fullheight" style={{backgroundImage: `url(${require("../images/bg_4.jpg")})`}}>
                <div className="overlay js-fullheight"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
                        <div className="col-md-9 pb-5 text-center">
                            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i
                                className="fa fa-chevron-right"></i></a></span> <span>Tour List <i className="fa fa-chevron-right"></i></span>
                            </p>
                            <h1 className="mb-0 bread">Tours List</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section ftco-no-pb">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="search-wrap-1">
                                <form action="#" className="search-property-1">
                                    <div className="row no-gutters">
                                        <div className="col-lg d-flex">
                                            <div className="form-group p-4 border-0">
                                                <label for="#">Destination</label>
                                                <div className="form-field">
                                                    <div className="icon"><span className="fa fa-search"></span></div>
                                                    <input type="text" className="form-control" placeholder="Search place" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg d-flex">
                                            <div className="form-group p-4 border-0">
                                                <label for="#">Location/Area</label>
                                                <div className="form-field">
                                                    <div className="icon"><span className="fa fa-location-arrow"></span></div>
                                                    <input type="text" className="form-control" placeholder="Search place" />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-lg d-flex">
                                            <div className="form-group d-flex w-100 border-0">
                                                <div className="form-field w-100 align-items-center d-flex">
                                                    <input type="submit" value="Search" className="align-self-stretch form-control btn btn-primary" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4 m-btm-40">
                            <div className="item">
                                <div className="project-destination">
                                    <a href="#" className="img" style={{ backgroundImage: `url(${require("../images/place-1.jpg")})` }}>
                                        <div className="text">
                                            <h3>Philippines</h3>
                                            <span>8 Tours</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 m-btm-40">
                            <div className="item">
                                <div className="project-destination">
                                    <a href="#" className="img" style={{ backgroundImage: `url(${require("../images/place-2.jpg")})` }}>
                                        <div className="text">
                                            <h3>Canada</h3>
                                            <span>2 Tours</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 m-btm-40">
                            <div className="item">
                                <div className="project-destination">
                                    <a href="#" className="img" style={{ backgroundImage: `url(${require("../images/place-3.jpg")})` }}>
                                        <div className="text">
                                            <h3>Thailand</h3>
                                            <span>5 Tours</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 m-btm-40">
                            <div className="item">
                                <div className="project-destination">
                                    <a href="#" className="img" style={{ backgroundImage: `url(${require("../images/place-4.jpg")})` }}>
                                        <div className="text">
                                            <h3>Autralia</h3>
                                            <span>5 Tours</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 m-btm-40">
                            <div className="item">
                                <div className="project-destination">
                                    <a href="#" className="img" style={{ backgroundImage: `url(${require("../images/place-5.jpg")})` }}>
                                        <div className="text">
                                            <h3>Greece</h3>
                                            <span>7 Tours</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 m-btm-40">
                            <div className="item">
                                <div className="project-destination">
                                    <a href="#" className="img" style={{ backgroundImage: `url(${require("../images/place-1.jpg")})` }}>
                                        <div className="text">
                                            <h3>Philippines</h3>
                                            <span>8 Tours</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 m-btm-40">
                            <div className="item">
                                <div className="project-destination">
                                    <a href="#" className="img" style={{ backgroundImage: `url(${require("../images/place-2.jpg")})` }}>
                                        <div className="text">
                                            <h3>Canada</h3>
                                            <span>2 Tours</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 m-btm-40">
                            <div className="item">
                                <div className="project-destination">
                                    <a href="#" className="img" style={{ backgroundImage: `url(${require("../images/place-3.jpg")})` }}>
                                        <div className="text">
                                            <h3>Thailand</h3>
                                            <span>5 Tours</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 m-btm-40">
                            <div className="item">
                                <div className="project-destination">
                                    <a href="#" className="img" style={{ backgroundImage: `url(${require("../images/place-4.jpg")})` }}>
                                        <div class="text">
                                            <h3>Autralia</h3>
                                            <span>5 Tours</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="row mt-5">
                        <div class="col text-center">
                            <div class="block-27">
                                <ul>
                                    <li><a href="#">&lt;</a></li>
                                    <li class="active"><span>1</span></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li><a href="#">&gt;</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterComponent></FooterComponent>
        </div>
    )
};

export default Destination;