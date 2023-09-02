import React from "react";
import HeaderComponent from "../componnets/header";
import FooterComponent from "../componnets/footer";
import TopNavBar from "../componnets/top-navbar";

const About = () => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>

            <TopNavBar></TopNavBar>

            <section ClassName="hero-wrap hero-wrap-2 js-fullheight" style={{backgroundImage: `url(${require("../images/services-2.jpg")})`}}>
                <div ClassName="overlay js-fullheight"></div>
                <div ClassName="container">
                    <div ClassName="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
                        <div ClassName="col-md-9 pb-5 text-center">
                            <p ClassName="breadcrumbs"><span ClassName="mr-2"><a href="index.html">Home <i
                                ClassName="fa fa-chevron-right"></i></a></span> <span>About us <i ClassName="fa fa-chevron-right"></i></span>
                            </p>
                            <h1 ClassName="mb-0 bread">About Us</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section ClassName="ftco-section services-section">
                <div ClassName="container">
                    <div ClassName="row d-flex">
                        <div ClassName="col-md-6 order-md-last heading-section pl-md-5 d-flex align-items-center">
                            <div ClassName="w-100">
                                <span ClassName="subheading">Welcome to Travelix</span>
                                <h2 ClassName="mb-4">It's time to start your adventure</h2>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                                    paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                                    blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                                    ocean.
                                    A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <p><a href="#" ClassName="btn btn-primary py-3 px-4">Search Destination</a></p>
                            </div>
                        </div>
                        <div ClassName="col-md-6">
                            <div ClassName="row">
                                <div ClassName="col-md-12 col-lg-6 d-flex align-self-stretch">
                                    <div ClassName="services services-1 color-1 d-block img"
                                        style={{ backgroundImage: `url(${require("../images/services-1.jpg")})` }}>
                                        <div ClassName="icon d-flex align-items-center justify-content-center"><span
                                            ClassName="flaticon-paragliding"></span></div>
                                        <div ClassName="media-body">
                                            <h3 ClassName="heading mb-3">Activities</h3>
                                            <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                                        </div>
                                    </div>
                                </div>
                                <div ClassName="col-md-12 col-lg-6 d-flex align-self-stretch">
                                    <div ClassName="services services-1 color-2 d-block img"
                                        style={{ backgroundImage: `url(${require("../images/services-2.jpg")})` }}>
                                        <div ClassName="icon d-flex align-items-center justify-content-center"><span ClassName="flaticon-route"></span>
                                        </div>
                                        <div ClassName="media-body">
                                            <h3 ClassName="heading mb-3">Travel Arrangements</h3>
                                            <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                                        </div>
                                    </div>
                                </div>
                                <div ClassName="col-md-12 col-lg-6 d-flex align-self-stretch">
                                    <div ClassName="services services-1 color-3 d-block img"
                                        style={{ backgroundImage: `url(${require("../images/services-3.jpg")})` }}>
                                        <div ClassName="icon d-flex align-items-center justify-content-center"><span
                                            ClassName="flaticon-tour-guide"></span></div>
                                        <div ClassName="media-body">
                                            <h3 ClassName="heading mb-3">Private Guide</h3>
                                            <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                                        </div>
                                    </div>
                                </div>
                                <div ClassName="col-md-12 col-lg-6 d-flex align-self-stretch">
                                    <div ClassName="services services-1 color-4 d-block img"
                                        style={{ backgroundImage: `url(${require("../images/services-4.jpg")})` }}>
                                        <div ClassName="icon d-flex align-items-center justify-content-center"><span ClassName="flaticon-map"></span>
                                        </div>
                                        <div ClassName="media-body">
                                            <h3 ClassName="heading mb-3">Location Manager</h3>
                                            <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section ClassName="ftco-section ftco-about img" style={{ backgroundImage: `url(${require("../images/bg_4.jpg")})` }}>
                <div ClassName="overlay"></div>
                <div ClassName="container py-md-5">
                    <div ClassName="row py-md-5">

                    </div>
                </div>
            </section>

            <section ClassName="ftco-section ftco-about ftco-no-pt img">
                <div ClassName="container">
                    <div ClassName="row d-flex">
                        <div ClassName="col-md-12 about-intro">
                            <div ClassName="row">
                                <div ClassName="col-md-6 d-flex align-items-stretch">
                                    <div ClassName="img d-flex w-100 align-items-center justify-content-center"
                                        style={{ backgroundImage: `url(${require("../images/about-1.jpg")})` }}>
                                    </div>
                                </div>
                                <div ClassName="col-md-6 pl-md-5 py-5">
                                    <div ClassName="row justify-content-start pb-3">
                                        <div ClassName="col-md-12 heading-section">
                                            <span ClassName="subheading">About Us</span>
                                            <h2 ClassName="mb-4">Make Your Tour Memorable and Safe With Us</h2>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                                                the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                                                language ocean.</p>
                                            <p><a href="#" ClassName="btn btn-primary">Book Your Destination</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterComponent></FooterComponent>
        </div>
    )
};

export default About;