import React from 'react';
import logo from './logo.svg';
import './style.css';

function Footer() {
  return (
    /* Footer */
    <footer>
        {/* Footer - Company Information */}
        <div class="container-fluid px-5">
                <div class="row">
                    <div class="col-md-4 col-sm-12">
                        <h4>Contact Us</h4>
                        <div class="row pl-md-1 text-secondary">
                            <div class="col-12">
                                <i class="fa fa-home px-md-2"></i>
                                <small>48 Dunfield Ave, Toronto, Canada, M4S 2H4</small>
                            </div>
                        </div>

                        <div class="row pl-md-1 text-secondary py-4">
                            <div class="col-12">
                                <i class="fa fa-paper-plane px-md-2"></i>
                                <small>www.estore.com</small>
                            </div>
                        </div>
                        
                        <div class="row pl-md-1 text-secondary">
                            <div class="col-12">
                                <i class="fa fa-phone-volume px-md-2"></i>
                                <small>(647) 999-0923</small>
                            </div>
                        </div>                 
                        
                        <div class="row social text-secondary">
                            <div class="col-12 py-3">
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-google-plus-g"></i>
                                <i class="fab fa-skype"></i>
                                <i class="fab fa-pinterest-p"></i>
                                <i class="fab fa-youtube"></i>
                                <i class="fab fa-linkedin-in"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-2 col-sm-12">
                        <h4>Our Services</h4>
                        <div class="d-flex flex-column pl-md-3">
                            <small class="pt-0">Toronto</small>
                            <small>Vancouver</small>
                            <small>Calgary</small>
                            <small>Sudbury</small>
                            <small>Montreal</small>
                        </div>
                    </div>

                    <div class="col-md-2 col-sm-12">
                        <h4>Extras</h4>
                        <div class="d-flex flex-column pl-md-3">
                            <small class="pt-0">About Store</small>
                            <small>New Collection</small>
                            <small>Contact Us</small>
                            <small>Latest News</small>
                            <small>Our Sitemap</small>
                        </div>
                    </div>

                    <div class="col-md-4 follow-us col-sm-12">
                        <h4>Follow Instagram</h4>
                        <div class="d-flex flex-row">
                            <img src="./assets/instagram1.jpg" alt="Instagram 1" class="img-fluid" />
                            <img src="./assets/instagram2.jpg" alt="Instagram 2" class="img-fluid" />
                            <img src="./assets/instagram3.jpg" alt="Instagram 3" class="img-fluid" />
                        </div>
                        <div class="d-flex flex-row">
                            <img src="./assets/instagram4.jpg" alt="Instagram 4" class="img-fluid" />
                            <img src="./assets/instagram5.jpg" alt="Instagram 5" class="img-fluid" />
                            <img src="./assets/instagram6.jpg" alt="Instagram 6" class="img-fluid" />
                        </div>
                    </div>
                </div>
        </div>

        {/* Footer - Help & Subscribe */}
        <div class="container-fluid news pt-5">
            <div class="row">
                <div class="col-md-6 col-12 pl-5">
                    <h4 class="primary-color font-roboto m-0 p-0">
                        Need Help? Call Our Award-Warning
                    </h4>
                    <p class="m-0 p-0 text-secondary">
                        Support Team 24/7 At (647) 999-0923
                    </p>
                </div>
                <div class="col-md-4 col-12 my-md-0 my-3 pl-md-0 pl-5">
                    <input type="text" class="form-control border-0 bg-light" placeholder="Enter Your email Address" />
                </div>
                <div class="col-md-2 col-12 my-md-0 my-3 pl-md-0 pl-5">
                    <button class="btn bg-primary-color text-white">Subscribe</button>
                </div>
            </div>
        </div>

        {/* Footer - Payment & Copyright */}
        <div class="container text-center">
            <p class="pt-5">
                <img src="./assets/payment.jpg" alt="payment image" class="img-fluid" />
            </p>
            <small class="text-secondary py-4">ESTORE © 2019 ESTORE. All Rights Reserved. Designed by David Ryu</small>
        </div>
    </footer>
  );
}

export default Footer;