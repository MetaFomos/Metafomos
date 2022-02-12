import React, { Fragment } from 'react';

const Footer = () => {
   return (
      <Fragment>
         <div className="subscribe-area subscribe-area2">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="subscribe-box">
                        <img className="left" src="../assets/images/vr.png" alt="" />
                        {/* <img className="right" src="assets/images/game controler_.png" alt="" /> */}
                        <div className="row justify-content-center">
                           <div className="col-lg-12">
                              <div className="heading-area">
                                    <h5 className="sub-title">
                                       Subscribe to Jugaro
                                    </h5>
                                    <h4 className="title">
                                       To Get Exclusive Benefits
                                    </h4>
                              </div>
                           </div>
                        
                           <div className="col-lg-6 col-12">
                              
                              <form action="#" className="form-area">
                                    <input type="text" placeholder="Your Email Address" />
                                    <button className="mybtn1" type="submit">Subscribe
                                    </button>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- Footer Area Start --> */}
         <footer className="footer" id="footer">

         <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="flogo">
                        <a href="#"><img src="../assets/images/logo2.png" alt="" width="150px" height="86.05px" /></a>
                     </div>
                     <div className="social-links">
                        <ul>
                           <li>
                              <a href="https://www.facebook.com/metafomos">
                                 <i className="fab fa-facebook-f"></i>
                              </a>
                           </li>
                           <li>
                              <a href="https://twitter.com/MetaFomos">
                                 <i className="fab fa-twitter"></i>
                              </a>
                           </li>
                           <li>
                              <a href="https://www.reddit.com/r/MetaFomos/">
                                 <i className="fab fa-reddit"></i>
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 <i className="fab fa-linkedin-in"></i>
                              </a>
                           </li>
                           <li>
                              <a href="https://www.instagram.com/metafomos/">
                                 <i className="fab fa-instagram"></i>
                              </a>
                           </li>
                        </ul>
                     </div>
                     <div className="footer-menu">
                        <ul>
                           <li>
                              <a href="#">
                                 About
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 FAQ
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 Contact
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 Terms of Service
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 Privacy
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div className="copy-bg">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                           <p>Copyright © 2022.All Rights Reserved By Metafomo</p>
                     </div>
                  </div>
               </div>
            </div>
         </footer> 
         {/* <!-- Footer Area End --> */}
      </Fragment>
   )
}

export default Footer;