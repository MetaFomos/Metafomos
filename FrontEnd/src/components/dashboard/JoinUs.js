import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const JoinUs = () => {
   return (
      <Fragment>
         {/* <!-- join us area start --> */}
         <section className="join_us join_us2 join_us3">
            <img className="l-image" src="assets/images/joinus_left_img.png" alt="" />
            <img className="r-image" src="assets/images/joinus-bg2.png" alt="" />
            <div className="container">
               <div className="row justify-content-end">
                  <div className="col-xl-7">
                     <div className="section-heading content-left">
                        <h5 className="subtitle">
                           Daily Earning Opportunities
                        </h5>
                        <h2 className="title ">
                           Be One of Us
                        </h2>
                        <h6 className="text">
                           Get started in less than 5 minutes - no credit card required. Gain early access to MetaFomos portal and earn NFTs and Tokens today!
                        </h6>
                        <Link to="/login">
                           <span className="mybtn1" style={{ marginTop: '85px' }}> 
                              JOIN US NOW
                           </span>
                        </Link>
                        
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* <!-- join us area  end --> */}

      </Fragment>
   )
}

export default JoinUs;