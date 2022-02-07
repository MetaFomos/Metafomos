import React, { Fragment } from 'react';

const RecentWinner = () => {
   return (
      <Fragment>
         {/* <!-- Recent Winner Area Start --> */}
         <section className="recent-winners">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="top-section">
                        <h3>Recent winners</h3>
                        <a href="#">View all</a>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-4 col-lg-6 col-md-6">
                     <div className="single-winner">
                        <div className="img">
                           <img src="assets/images/r-winner/1.png" alt="" />
                        </div>
                        <div className="content">
                           <div className="top-content">
                              <img src="assets/images/r-winner/p1.png" alt="" />
                              <div className="lc">
                                 <h6>Vicky Hart</h6>
                                 <span>3 days ago</span>
                              </div>
                           </div>
                           <div className="numbers">
                              <span>08</span>
                              <span>15</span>
                              <span>18</span>
                              <span>33</span>
                              <span>35</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                     <div className="single-winner">
                        <div className="img">
                           <img src="assets/images/r-winner/2.png" alt="" />
                        </div>
                        <div className="content">
                           <div className="top-content">
                              <img src="assets/images/r-winner/p2.png" alt="" />
                              <div className="lc">
                                 <h6>Vicky Hart</h6>
                                 <span>3 days ago</span>
                              </div>
                           </div>
                           <div className="numbers">
                              <span>08</span>
                              <span>15</span>
                              <span>18</span>
                              <span>33</span>
                              <span>35</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                     <div className="single-winner">
                        <div className="img">
                           <img src="assets/images/r-winner/3.png" alt="" />
                        </div>
                        <div className="content">
                           <div className="top-content">
                              <img src="assets/images/r-winner/p3.png" alt="" />
                              <div className="lc">
                                 <h6>Vicky Hart</h6>
                                 <span>3 days ago</span>
                              </div>
                           </div>
                           <div className="numbers">
                              <span>08</span>
                              <span>15</span>
                              <span>18</span>
                              <span>33</span>
                              <span>35</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* <!-- Recent Winner Area End --> */}
      </Fragment>
   )
}

export default RecentWinner;