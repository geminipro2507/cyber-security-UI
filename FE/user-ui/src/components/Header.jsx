import React from "react";

function Header() {
    return (
        <section className="header_area">
            <div className="header_navbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="index.html">
                                    <img src="assets/images/logo.svg" alt="Logo" />
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                    <ul id="nav" className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <a className="page-scroll" href="#home">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#about">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#packges">Packges</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#services">Services</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#gallery">Gallery</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#blog">Blog</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#contact">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div id="home" className="header_slider">
                <div className="single_slider bg_cover d-flex align-items-center" style={{ backgroundImage: "url(assets/images/hero-area.jpg)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-8">
                                <div className="slider_content">
                                    <h2 className="slider_title wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.2s">Explore The World with<span> TraveLand</span></h2>
                                    <p className="wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.5s">Lorem ipsum dolor amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidun dolore.</p>
                                    <a href="javascript:void(0)" className="main-btn wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.8s">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;
