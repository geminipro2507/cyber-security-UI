import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Content";

function Index() {
    return (
        <div>
            {/* Preloader */}
            <div className="preloader">
                <div className="loader">
                    <div className="ytp-spinner">
                        <div className="ytp-spinner-container">
                            <div className="ytp-spinner-rotator">
                                <div className="ytp-spinner-left">
                                    <div className="ytp-spinner-circle"></div>
                                </div>
                                <div className="ytp-spinner-right">
                                    <div className="ytp-spinner-circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header */}
            <Header />

            {/* Hero - included in Header */}

            {/* About Section */}
            <section id="about" className="about_area pt-130 pb-130">
                <div className="about_wrapper">
                    <div className="about_image bg_cover" style={{ backgroundImage: "url(assets/images/about_image.jpg)" }}></div>
                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="col-lg-6">
                                <div className="about_content">
                                    <div className="section_title">
                                        <h3 className="title">
                                            About Us <br /> TraveLand in <span>Numbers</span>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianum eirmod tempor invidunt ut labore et dolore magna aliqyam era sed diam voluptua. At vero eos et accusam etjusto duo dolres etea reb. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <a href="javascript:void(0)" className="main-btn">Read More</a>
                                </div>
                                <div className="about_counter d-flex flex-wrap">
                                    <div className="single_counter counter_1 d-flex justify-content-center align-items-center wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.2s">
                                        <div className="counter_wrapper">
                                            <span className="counter">534</span>
                                            <p>Trips Done</p>
                                        </div>
                                    </div>
                                    <div className="single_counter counter_2 d-flex justify-content-center align-items-center wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.5s">
                                        <div className="counter_wrapper">
                                            <span className="counter">424</span>
                                            <p>Corporate Clients</p>
                                        </div>
                                    </div>
                                    <div className="single_counter counter_2 d-flex justify-content-center align-items-center wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.8s">
                                        <div className="counter_wrapper">
                                            <span className="counter">35</span>
                                            <p>Visited Countries</p>
                                        </div>
                                    </div>
                                    <div className="single_counter counter_1 d-flex justify-content-center align-items-center wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="1.1s">
                                        <div className="counter_wrapper">
                                            <span className="counter">15</span>
                                            <p>Team Members</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packages Section */}
            <section id="packges" className="destination_area pt-130 pb-130">
                <div className="section_title text-center pb-25">
                    <h3 className="title">You are using free lite version</h3>
                    <p>Please, purchase full version of the template to get all pages, features and permission to remove footer credits</p>
                    <br />
                    <a href="https://rebrand.ly/traveland-ud/" rel="nofollow" className="main-btn">Purchase Now</a>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="services_area pt-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section_title text-center pb-25">
                                <h3 className="title">Service We Provide</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianum eirmod tempor invidunt ut labore et dolore magna </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single_service mt-30 text-center wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.2s">
                                <div className="services_icon">
                                    <i className="lni lni-apartment"></i>
                                </div>
                                <div className="services_content">
                                    <h4 className="title">Hotel Booking</h4>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianum eirmod.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single_service mt-30 text-center wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.4s">
                                <div className="services_icon">
                                    <i className="lni lni-plane"></i>
                                </div>
                                <div className="services_content">
                                    <h4 className="title">Flight Booking</h4>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianum eirmod.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single_service mt-30 text-center wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.6s">
                                <div className="services_icon">
                                    <i className="lni lni-ship"></i>
                                </div>
                                <div className="services_content">
                                    <h4 className="title">Ship Booking</h4>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianum eirmod.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single_service mt-30 text-center wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.8s">
                                <div className="services_icon">
                                    <i className="lni lni-car-alt"></i>
                                </div>
                                <div className="services_content">
                                    <h4 className="title">Car Booking</h4>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianum eirmod.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="gallery_area pt-120 pb-130">
            </section>

            {/* Team Section */}
            <section id="team" className="team_area pt-120 pb-130">
                <div className="section_title text-center pb-25">
                    <h3 className="title">You are using free lite version</h3>
                    <p>Please, purchase full version of the template to get all pages, features and permission to remove footer credits</p>
                    <br />
                    <a href="https://rebrand.ly/traveland-ud/" rel="nofollow" className="main-btn">Purchase Now</a>
                </div>
            </section>

            {/* Testimonial Section */}
            <section id="testimonial" className="testimonial_area pt-120">
            </section>

            {/* Blog Section */}
            <section id="blog" className="blog_area pt-120 pb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section_title text-center pb-25">
                                <h3 className="title">Recent Blog Post</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianum eirmod tempor invidunt ut labore et dolore magna </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="single_blog mt-30">
                                <div className="blog_image">
                                    <img src="assets/images/blog-1.jpg" alt="blog" />
                                </div>
                                <div className="blog_content">
                                    <div className="blog_meta">
                                        <ul>
                                            <li>Posted by: <a href="javascript:void(0)">Michle Smith</a></li>
                                            <li>14 June 2023</li>
                                        </ul>
                                    </div>
                                    <h4 className="blog_title"><a href="javascript:void(0)">Tonumy eirmod tempor invidunt ut labore et dolore magn aaliq yam erat, sed diam voluptua.</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magn aaliq yam erat, sed diam voluptua. At vero eos et accusam et justo dolores  ea rebum Stet clita kasd gubergren sea.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single_blog d-sm-flex mt-30">
                                <div className="blog_image">
                                    <img src="assets/images/blog-2.jpg" alt="blog" />
                                </div>
                                <div className="blog_content blog_content_2 media-body">
                                    <h4 className="blog_title"><a href="javascript:void(0)">Tonumy eirmod temporinvi unt ut labore et dolore</a></h4>
                                    <p>Lorem ipsum dolor sit ametcon setetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                    <a href="javascript:void(0)" className="more">Read More</a>
                                </div>
                            </div>
                            <div className="single_blog d-sm-flex mt-30">
                                <div className="blog_image">
                                    <img src="assets/images/blog-3.jpg" alt="blog" />
                                </div>
                                <div className="blog_content blog_content_2 media-body">
                                    <h4 className="blog_title"><a href="javascript:void(0)">Tonumy eirmod temporinvi unt ut labore et dolore</a></h4>
                                    <p>Lorem ipsum dolor sit ametcon setetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                    <a href="javascript:void(0)" className="more">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact_area pt-120 pb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section_title text-center pb-25">
                                <h3 className="title">Get in Touch</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianum eirmod tempor invidunt ut labore et dolore magna </p>
                            </div>
                        </div>
                    </div>
                    <div className="contact_form">
                        <form action="assets/contact.php" method="POST" id="contact-form">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="single_form">
                                        <input type="text" name="name" id="name" placeholder="Name" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single_form">
                                        <input type="text" name="phone" id="phone" placeholder="Phone" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single_form">
                                        <input type="email" name="email" id="email" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single_form">
                                        <select id="country" name="country">
                                            <option value="0" disabled>Select Trip</option>
                                            <option value="1">Trip 1</option>
                                            <option value="2">Trip 2</option>
                                            <option value="3">Trip 3</option>
                                            <option value="4">Trip 4</option>
                                            <option value="5">Trip 5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="single_form">
                                        <textarea name="message" id="message" placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="single_form">
                                        <button type="submit" className="main-btn">Send Message</button>
                                    </div>
                                </div>
                            </div>
                            <p className="form-message pt-30"></p>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />

            {/* Back to Top */}
            <a href="#" className="back-to-top"><i className="lni lni-chevron-up"></i></a>
        </div>
    );
}

export default Index;