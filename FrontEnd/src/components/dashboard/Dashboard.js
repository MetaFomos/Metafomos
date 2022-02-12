import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import HowPlay from './HowPlay';
import GamePlay from './GamePlay';
import LatestActivity from './LatestActivity';
import ExLottery from './ExLottery';
import RecentWinner from './RecentWinner';
import JoinUs from './JoinUs';
import Footer from '../include/Footer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
   
   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
   const navigate = useNavigate();

   useEffect(() => {
      const body = document.querySelector('#root');
      body.scrollIntoView({
          behavior: 'smooth'
      }, 500)
    }, []);
   

   return (
      <Fragment>
         <ToastContainer />
         {/* <!-- Hero Area Start --> */}
         <div className="hero-area hero-area2 hero-area4">
            <img className="shape parallax5" src="assets/images/home/h2-shape-old.png" alt="" />
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="content">
                        <div className="content" style={{ marginTop: '99px' }}>
                           <h5 className="subtitle" style={{ marginBottom: '1px' }}>
                              SHARE | INVITE | EARN
                           </h5>
                           <h1 className="title">
                              <img src="assets/images/text.png" alt="" />
                           </h1>
                           <div className="links">
                              <Link to="/login"><span className="mybtn1">join us now</span></Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- Hero Area End --> */}

         <HowPlay />

         <GamePlay />

         <LatestActivity />

         <ExLottery />

         <RecentWinner />

         <JoinUs />

         <Footer />

         {/* <!-- SignIn Area Start --> */}
         <div className="modal fade login-modal sign-in" id="signin" tabIndex="-1" role="dialog" aria-labelledby="signin" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered " role="document">
               <div className="modal-content">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <div className="modal-body">
                     <ul className="nav l-nav" role="tablist">
                        <li className="nav-item" role="presentation">
                           <a className="nav-link mybtn2 active" id="pills-m_login-tab" data-toggle="pill" href="#pills-m_login" role="tab" aria-controls="pills-m_login" aria-selected="true">Login</a>
                        </li>
                        <li className="nav-item" role="presentation">
                           <a className="nav-link mybtn2" id="pills-m_register-tab" data-toggle="pill" href="#pills-m_register" role="tab" aria-controls="pills-m_register" aria-selected="false">Register</a>
                        </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-m_login" role="tabpanel" aria-labelledby="pills-m_login-tab">
                           <div className="header-area">
                              <h4 className="title">Welcome to
                                 JuGARO</h4>
                           </div>
                           <div className="form-area">
                              <form action="#" method="POST">
                                 <div className="form-group">
                                       <input type="text" className="input-field" id="input-name"  placeholder="Username" />
                                 </div>
                                 <div className="form-group">
                                       <input type="email" className="input-field" id="input-email"  placeholder="Password" />
                                 </div>
                                 <div className="form-group">
                                    <span>Forgot your password? <a href="#">recover password</a></span>
                                 </div>
                                 <div className="form-group">
                                    <button type="submit" className="mybtn2">Login</button>
                                 </div>
                              </form>
                           </div>
                           
                        </div>
                        <div className="tab-pane fade" id="pills-m_register" role="tabpanel" aria-labelledby="pills-m_register-tab">
                           <div className="header-area">
                              <span className="bunnus_btn">
                                 <span>Current Contest Pool</span>
                                 <h4>$500</h4>
                              </span>
                              <h4 className="title">Play +100 games
                                 and win cash!</h4>
                                 <p className="text">
                                    Fill this outyour majesty & Get Your Bonus
                                 </p>
                           </div>
                           <div className="form-area">
                              <form action="#" method="POST">
                                 <div className="form-group">
                                       <input type="text" className="input-field" id="input-name"  placeholder="Username" />
                                 </div>
                                 <div className="form-group">
                                       <input type="email" className="input-field" id="input-email"  placeholder="Enter your Email" />
                                 </div>
                                 <div className="form-group">
                                       <input type="password" className="input-field" id="input-password"  placeholder="Enter your password" />
                                 </div>
                                 <div className="form-group">
                                       <input type="password" className="input-field" id="input-con-password"  placeholder="Enter your Confirm Password" />
                                 </div>
                                 <div className="form-group">
                                    <div className="check-group">
                                          <input type="checkbox" className="check-box-field" id="input-terms"  />
                                          <label htmlFor="input-terms">
                                                I agree with <a href="#">terms and Conditions</a> and  <a href="#">privacy policy</a>
                                          </label>
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <button type="submit" className="mybtn2">Register</button>
                                 </div>
                              </form>
                           </div>
                        </div>
                        </div>
                     
                     
                  </div>
               </div>
               </div>
         </div>
         {/* <!-- SignIn Area End --> */}

         {/* <!-- User Message Modal Start--> */}
         <div className="modal fade" id="usermessage" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
                     <div className="modal-content">
                        <div className="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                        </div>
                        <div className="modal-body">
                           <div id="mycontainer">
                              <aside>
                                 <header>
                                    <input type="text" placeholder="search" />
                                 </header>
                                 <ul>
                                    <li>
                                       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt="" />
                                       <div>
                                          <h2>Prénom Nom</h2>
                                          <h3>
                                             <span className="status orange"></span>
                                             offline
                                          </h3>
                                       </div>
                                    </li>
                                    <li>
                                       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_02.jpg" alt="" />
                                       <div>
                                          <h2>Prénom Nom</h2>
                                          <h3>
                                             <span className="status green"></span>
                                             online
                                          </h3>
                                       </div>
                                    </li>
                                    <li>
                                       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_03.jpg" alt="" />
                                       <div>
                                          <h2>Prénom Nom</h2>
                                          <h3>
                                             <span className="status orange"></span>
                                             offline
                                          </h3>
                                       </div>
                                    </li>
                                    <li>
                                       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_04.jpg" alt="" />
                                       <div>
                                          <h2>Prénom Nom</h2>
                                          <h3>
                                             <span className="status green"></span>
                                             online
                                          </h3>
                                       </div>
                                    </li>
                                    <li>
                                       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_05.jpg" alt="" />
                                       <div>
                                          <h2>Prénom Nom</h2>
                                          <h3>
                                             <span className="status orange"></span>
                                             offline
                                          </h3>
                                       </div>
                                    </li>
                                    <li>
                                       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_06.jpg" alt="" />
                                       <div>
                                          <h2>Prénom Nom</h2>
                                          <h3>
                                             <span className="status green"></span>
                                             online
                                          </h3>
                                       </div>
                                    </li>
                                    <li>
                                       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_07.jpg" alt="" />
                                       <div>
                                          <h2>Prénom Nom</h2>
                                          <h3>
                                             <span className="status green"></span>
                                             online
                                          </h3>
                                       </div>
                                    </li>
                                    <li>
                                       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_08.jpg" alt="" />
                                       <div>
                                          <h2>Prénom Nom</h2>
                                          <h3>
                                             <span className="status green"></span>
                                             online
                                          </h3>
                                       </div>
                                    </li>
                                    <li>
                                       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_09.jpg" alt="" />
                                       <div>
                                          <h2>Prénom Nom</h2>
                                          <h3>
                                             <span className="status green"></span>
                                             online
                                          </h3>
                                       </div>
                                    </li>
                                    <li>
                                       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_10.jpg" alt="" />
                                       <div>
                                          <h2>Prénom Nom</h2>
                                          <h3>
                                             <span className="status orange"></span>
                                             offline
                                          </h3>
                                       </div>
                                    </li>
                                 </ul>
                              </aside>
                              <main>
                                 <header>
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt="" />
                                    <div>
                                       <h2>Vincent Porter</h2>
                                       <h3>already 1902 messages</h3>
                                    </div>
                                 </header>
                                 <ul id="chat">
                                    <li className="you">
                                       <div className="entete">
                                          <span className="status green"></span>
                                          <h2>Vincent</h2>
                                          <h3>10:12AM, Today</h3>
                                       </div>
                                       <div className="triangle"></div>
                                       <div className="message">
                                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                       </div>
                                    </li>
                                    <li className="me">
                                       <div className="entete">
                                          <h3>10:12AM, Today</h3>
                                          <h2>Vincent</h2>
                                          <span className="status blue"></span>
                                       </div>
                                       <div className="triangle"></div>
                                       <div className="message">
                                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                       </div>
                                    </li>
                                    <li className="me">
                                       <div className="entete">
                                          <h3>10:12AM, Today</h3>
                                          <h2>Vincent</h2>
                                          <span className="status blue"></span>
                                       </div>
                                       <div className="triangle"></div>
                                       <div className="message">
                                          OK
                                       </div>
                                    </li>
                                    <li className="you">
                                       <div className="entete">
                                          <span className="status green"></span>
                                          <h2>Vincent</h2>
                                          <h3>10:12AM, Today</h3>
                                       </div>
                                       <div className="triangle"></div>
                                       <div className="message">
                                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                       </div>
                                    </li>
                                    <li className="me">
                                       <div className="entete">
                                          <h3>10:12AM, Today</h3>
                                          <h2>Vincent</h2>
                                          <span className="status blue"></span>
                                       </div>
                                       <div className="triangle"></div>
                                       <div className="message">
                                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                       </div>
                                    </li>
                                    <li className="me">
                                       <div className="entete">
                                          <h3>10:12AM, Today</h3>
                                          <h2>Vincent</h2>
                                          <span className="status blue"></span>
                                       </div>
                                       <div className="triangle"></div>
                                       <div className="message">
                                          OK
                                       </div>
                                    </li>
                                 </ul>
                                 <footer>
                                    <textarea placeholder="Type your message"></textarea>
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png" alt="" />
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png" alt="" />
                                    <a href="#">Send</a>
                                 </footer>
                              </main>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* <!-- User Message Modal End--> */}

               {/* <!-- User Notification Modal Start--> */}
         <div className="modal fade" id="usernotification" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
               <div className="modal-content">
                  <div className="modal-header">
                     <h4>Notification</h4>
                     <div className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                     </div>
                  </div>
                  <div className="modal-body">
                     <div className="single-notification">
                        <div className="img">
                           <img src="assets/images/n1.png" alt="" />
                        </div>
                        <div className="content">
                           <div className="top-area">
                              <h4>Update Announcement</h4>
                              <p>2021-03-07  -  23:50:21 </p>
                           </div>
                           <div className="middle-area">
                              <h6>Dear player:</h6>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum dictum congue. Duis fringilla malesuada lobortis. In ultricies venenatis magna ut mollis. Nam sit amet arcu lobortis, porta nisl non, egestas felis. Nulla et finibus massa. Ut varius tristique elit et gravida.</p>
                           </div>
                           <div className="bottom-area">
                              <p>Jugaro.Game Team</p>
                              <span>April 30 2021</span>
                           </div>
                        </div>
                     </div>
                     <div className="single-notification">
                        <div className="img">
                           <img src="assets/images/n1.png" alt="" />
                        </div>
                        <div className="content">
                           <div className="top-area">
                              <h4>Update Announcement</h4>
                              <p>2021-03-07  -  23:50:21 </p>
                           </div>
                           <div className="middle-area">
                              <h6>Dear player:</h6>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum dictum congue. Duis fringilla malesuada lobortis. In ultricies venenatis magna ut mollis. Nam sit amet arcu lobortis, porta nisl non, egestas felis. Nulla et finibus massa. Ut varius tristique elit et gravida.</p>
                           </div>
                           <div className="bottom-area">
                              <p>Jugaro.Game Team</p>
                              <span>April 30 2021</span>
                           </div>
                        </div>
                     </div>
                     <div className="single-notification">
                        <div className="img">
                           <img src="assets/images/n1.png" alt="" />
                        </div>
                        <div className="content">
                           <div className="top-area">
                              <h4>Update Announcement</h4>
                              <p>2021-03-07  -  23:50:21 </p>
                           </div>
                           <div className="middle-area">
                              <h6>Dear player:</h6>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum dictum congue. Duis fringilla malesuada lobortis. In ultricies venenatis magna ut mollis. Nam sit amet arcu lobortis, porta nisl non, egestas felis. Nulla et finibus massa. Ut varius tristique elit et gravida.</p>
                           </div>
                           <div className="bottom-area">
                              <p>Jugaro.Game Team</p>
                              <span>April 30 2021</span>
                           </div>
                        </div>
                     </div>
                     <div className="single-notification">
                        <div className="img">
                           <img src="assets/images/n1.png" alt="" />
                        </div>
                        <div className="content">
                           <div className="top-area">
                              <h4>Update Announcement</h4>
                              <p>2021-03-07  -  23:50:21 </p>
                           </div>
                           <div className="middle-area">
                              <h6>Dear player:</h6>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum dictum congue. Duis fringilla malesuada lobortis. In ultricies venenatis magna ut mollis. Nam sit amet arcu lobortis, porta nisl non, egestas felis. Nulla et finibus massa. Ut varius tristique elit et gravida.</p>
                           </div>
                           <div className="bottom-area">
                              <p>Jugaro.Game Team</p>
                              <span>April 30 2021</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- User Notification Modal End--> */}

         {/* <!-- Back to Top Start --> */}
         <div className="bottomtotop">
            <i className="fas fa-chevron-right"></i>
         </div>
         {/* <!-- Back to Top End --> */}

         {/* modal start */}

      </Fragment>
   )
}

export default Dashboard;