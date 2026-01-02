import React from "react";

function Footer() {
    return (
        <section id="footer" className="footer_area">
            <div className="footer_widget pt-80 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 order-md-1 order-lg-1">
                            <div className="footer_about mt-50">
                                <a href="#"><img src="assets/images/logo.svg" alt="logo" /></a>
                                <p>Lorem ipsum dolor sifsddt amet, conse tetur sadipscing elitr, sed diam onumy eirmod tempor invidunt ut labore et dolore magna aliquya.</p>
                                <ul className="social">
                                    <li><a className="social_1" href="javascript:void(0)"><i className="lni lni-facebook-original"></i></a></li>
                                    <li><a className="social_2" href="javascript:void(0)"><i className="lni lni-twitter-original"></i></a></li>
                                    <li><a className="social_3" href="javascript:void(0)"><i className="lni lni-instagram-original"></i></a></li>
                                    <li><a className="social_4" href="javascript:void(0)"><i className="lni lni-linkedin-original"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 order-md-3 order-lg-2">
                            <div className="footer_link_wrapper d-flex flex-wrap">
                                <div className="footer_link mt-45">
                                    <h4 className="footer_title">Quick Link</h4>
                                    <ul className="link">
                                        <li><a href="javascript:void(0)">Home</a></li>
                                        <li><a href="javascript:void(0)">About</a></li>
                                        <li><a href="javascript:void(0)">Trip Pacakge</a></li>
                                        <li><a href="javascript:void(0)">Services</a></li>
                                        <li><a href="javascript:void(0)">Gallery</a></li>
                                    </ul>
                                </div>
                                <div className="footer_link mt-45">
                                    <h4 className="footer_title">Support</h4>
                                    <ul className="link">
                                        <li><a href="javascript:void(0)">Customer Support</a></li>
                                        <li><a href="javascript:void(0)">Privacy & Policy</a></li>
                                        <li><a href="javascript:void(0)">Terms & Condition</a></li>
                                        <li><a href="javascript:void(0)">Forum</a></li>
                                        <li><a href="javascript:void(0)">Tour Guide</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 order-md-2 order-lg-3">
                            <div className="footer_subscribe mt-45">
                                <h4 className="footer_title">Subscribe Newsletter</h4>
                                <p>Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam.</p>
                                <div className="subscribe_form">
                                    <form action="#">
                                        <input type="text" placeholder="Enter email" />
                                        <button><i className="lni lni-arrow-right"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center mt-90">Designed and Developed by <a href="#">UIdeck</a></p>
            </div>
        </section>
    );
}

export default Footer;
