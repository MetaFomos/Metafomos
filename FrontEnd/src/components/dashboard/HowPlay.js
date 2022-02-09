import React, { Fragment } from 'react';

const HowPlay = () => {
   return (
      <Fragment>
         {/* <!-- How play area start --> */}
         <section className="how-to-play">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="section-heading">
                           <h5 className="subtitle">
                              More Smartly
                           </h5>
                           <h2 className="title ">
                              How to start
                           </h2>
                           <h6 className="text">
                              To enter our portal you need to get Visitor Pass NFT
                           </h6>
                        </div>
                     </div>
                  </div>
                  <div className="row justify-content-center">
                     <div className="col-lg-4 col-md-6">
                        <div className="s-h-play">
                           <img src="assets/images/h-play/ic1.png" alt="" />
                           <h4>Sign Up &<br /> Download Wallet</h4>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6">
                        <div className="s-h-play">
                           <img src="assets/images/h-play/ic2.png" alt="" />
                           <h4>Connect Wallet To Get <br /> Visitor Pass NFT Token</h4>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6">
                        <div className="s-h-play">
                           <img src="assets/images/h-play/ic3.png" alt="" />
                           <h4>Gain Access To Our <br /> Portal</h4>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-lg-12 text-center">
                        <a href="#" className="mybtn1" style={{marginBottom: '120px'}}>Get started Now!</a>
                     </div>
                  </div>
               </div>
         </section>
         {/* <!-- How play area  end --> */}
      </Fragment>
   )
}

export default HowPlay;