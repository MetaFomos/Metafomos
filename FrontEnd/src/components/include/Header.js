import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { connect as connectWallet } from '../../actions/blockchain';
import { logout } from '../../actions/auth';
import '../../assets/scss/Header/Header.scss';


import Web3 from 'web3';

import '../../assets/scss/dashboard/Dashboard.scss';

const Header = () => {

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const blockchain = useSelector(state => state.blockchain);
   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
   
   const checkNet = async () => {
      if (!isAuthenticated) {
         navigate("/login");
      } else {
         const warningBtn = document.querySelector('#modal_warning');
         if (window.ethereum.chainId != 0x4) {
            warningBtn.click();
         } else {
            // if(blockchain.loading || blockchain.account) return;
            connectWalletFunc();
         }
      }
   }

   const connectWalletFunc = () => {
      dispatch(connectWallet());
      
      // console.log(await SmartContractObj.methods.balanceOf("0x32058C6343FDdB311639D6f5D43627799eE5EBc5").call());
   }

   const switchNetwork = async () => {
      await window.ethereum.request({
         method: 'wallet_switchEthereumChain',
         params: [{ chainId: '0x4' }], // chainId must be in hexadecimal numbers
      });
      connectWalletFunc();
   }

   const onLogOut = () => {
      dispatch(logout())
   }

   return (
      <Fragment>
         {/* <!-- preloader area start --> */}
         {/* <div className="preloader" id="preloader">
            <div className="loader loader-1">
               <div className="loader-outter"></div>
               <div className="loader-inner"></div>
            </div>
         </div> */}
         {/* <!-- preloader area end --> */}

         {/* <!-- Header Area Start  --> */}
         <header className="header">
            <div className="overlay"></div>
            {/* <!-- Top Header Area Start --> */}
            <section className="top-header">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="content">
                           <div className="left-content">
                              <ul className="left-list">
                                 <li>
                                    <p>
                                       <i className="fas fa-headset"></i>	Support
                                    </p>
                                 </li>
                              </ul>
                              <ul className="top-social-links">
                                 <li>
                                    <a href="#">
                                       <i className="fab fa-facebook-f"></i>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#">
                                       <i className="fab fa-twitter"></i>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#">
                                       <i className="fab fa-pinterest-p"></i>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#">
                                       <i className="fab fa-linkedin-in"></i>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#">
                                       <i className="fab fa-instagram"></i>
                                    </a>
                                 </li>
                              </ul>
                           </div>
                           <div className="right-content">
                              <ul className="right-list">
                                 <li>
                                    <div className="language-selector">
                                       <select name="language" className="language">
                                          <option value="1">EN</option>
                                          <option value="2">IN</option>
                                          <option value="3">BN</option>
                                       </select>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="notofication"  data-toggle="modal" data-target="#usernotification">
                                       <i className="far fa-bell"></i>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="message"  data-toggle="modal" data-target="#usermessage">
                                       <i className="far fa-envelope"></i>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            {/* <!-- Top Header Area End --> */}
            {/* <!--Main-Menu Area Start--> */}
            <div className="mainmenu-area mainmenu-area2">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">                 
                        <nav className="navbar navbar-expand-lg navbar-light">
                           <a href="/" className="navbar-brand d-lg-none">
                              <img className="l2" src="../assets/images/logo2.png" alt="" width={"120%"} />
                           </a>
                           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_menu" aria-controls="main_menu"
                              aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                           </button>
                           <div className="collapse navbar-collapse fixed-height" id="main_menu">
                              <div className="main-menu-inner">
                                 <ul className="navbar-nav mr-auto">
                                    {/* <li style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                       <span className="mybtn1" onClick={() => checkNet()} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '0px', fontSize: 'unset', width: '270px'}}> 
                                          {isAuthenticated ? (<></>) : (<Link className="nav-link" to="/register">JOIN US NOW</Link>)}
                                       </span>
                                    </li> */}
                                    <li style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                       {isAuthenticated ? (<></>) : (
                                          <Link className="" to="/register">
                                             <span className="mybtn1" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '0px', fontSize: 'unset', width: '220px'}}> 
                                                Sign Up
                                             </span>
                                          </Link>
                                       )}
                                       
                                    </li>
                                    <li className="nav-item">
                                       <a className="nav-link" href="/" style={{ display: 'flex', justifyContent: 'center' }}>WHO WE ARE</a>
                                    </li>
                                    
                                 </ul>
                                 <a className="navbar-brand" href="/" style={{ position: 'sticky', left: '50%', transform: 'translate(-50%, 0)' }}>
                                    <img className="l2" src="../assets/images/logo2.png" alt="" />
                                 </a>
                                 <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                       {isAuthenticated ? (<></>) : (<Link className="nav-link" to="/login" style={{ display: 'flex', justifyContent: 'center' }}>LOGIN</Link>)}
                                    </li>
                                    {/* <li>
                                       <a href="#" className="mybtn1"  data-toggle="modal" data-target="#signin"> Join us</a>
                                    </li>  */}
                                    <li style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                       <span className="mybtn1" onClick={() => checkNet()} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '0px', fontSize: 'unset', width: '220px'}}> 
                                          <i className='fas fa-wallet' /> &nbsp;&nbsp;
                                          {blockchain.loading
                                             ? 'Connecting...'
                                             : blockchain.account
                                             ? blockchain.account.slice(0, 5) + '...' + blockchain.account.slice(-4) 
                                             : 'CONNECT'
                                          }
                                       </span>
                                    </li>
                                    <li className='nav-item'>
                                       <div className="user-info-menu-area">
                                          <div className="right-area" style={{ cursor: 'pointer' }}>
                                             <div className="icon">
                                                { isAuthenticated ? (
                                                   <img src="../assets/images/menu-user.png" alt="" />
                                                ) : (
                                                   <></>
                                                ) }
                                                
                                             </div>
                                             <div className="dp-menu">
                                                { isAuthenticated ? (
                                                   <div className="top-area">
                                                      <h6>Next Status : <span>Level 13</span></h6>
                                                      <div className="progress">
                                                         <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}}></div>
                                                      </div>
                                                      <a href="#">View all Ranks <i className="fas fa-chevron-right"></i></a>
                                                   </div>
                                                ) : (
                                                   <></>
                                                ) }
                                                
                                                <ul className="dp-links">
                                                   { isAuthenticated ? (
                                                      <div>
                                                         <li>
                                                            <Link to="/profile/overview">
                                                               <i className="far fa-user-circle"></i>My Account
                                                            </Link>
                                                         </li>
                                                         <li>
                                                            <a href="#" onClick={() => onLogOut()}>
                                                               <i className="fas fa-sign-out-alt"></i>Log out
                                                            </a>
                                                         </li>
                                                      </div>
                                                   ) : (
                                                      <div>
                                                         <li>
                                                            <Link to="/login">
                                                               <i className="fas fa-sign-in-alt"></i>Sign In
                                                            </Link>
                                                         </li>
                                                         <li>
                                                            <Link to="/register">
                                                               <i className="far fa-registered"></i>Sign Up
                                                            </Link>
                                                         </li>
                                                      </div>
                                                   ) }
                                                   
                                                   {/* <li>
                                                      <a href="#">
                                                         <i className="fas fa-code-branch"></i>Affiliate
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fas fa-wallet"></i>Wallet
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fas fa-cog"></i>Setting
                                                      </a>
                                                   </li> */}
                                                   
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                              
                           </div>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
            {/* <!--Main-Menu Area Start--> */}
         </header>
         {/* <!-- Header Area End  --> */}

         <button id='modal_warning' data-toggle="modal" data-target="#connectModal" hidden>Warning Network</button>
      {/* <!-- Warning Network --> */}
      <div className="modal fade login-modal sign-in" id="connectModal" tabIndex="-1" role="dialog" aria-labelledby="signin" aria-hidden="true" style={{background: 'rgba(19,11,33,.85)',backdropFilter: 'blur(40px)'}}>
            <div className="modal-dialog modal-dialog-centered " role="document">
               <div className="modal-content" style={{ boxShadow: 'none', background: '#261858' }}>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{ top: '4px', right: '10px' }}><span aria-hidden="true" style={{ fontSize: '48px',fontWeight: '100', border:'none' }}>&times;</span></button>
                  <div className="modal-body">
                        <div className="tab-content" id="pills-tabContent">
                           <div className="tab-pane fade show active" id="pills-m_login" role="tabpanel" aria-labelledby="pills-m_login-tab">

                              <div style={{ display: 'flex', alignItems:'center', justifyContent: 'center', margin: '20px 0' }}>
                                 <img src='../assets/custom/images/network.png' />
                              </div>

                              <div className="header-area">
                                 <h6 className="title" style={{textTransform: 'unset', fontSize: '28px'}}>Warning Network</h6>
                                 <span style={{ fontSize: '17px' }}>You need to connect to supported network</span>
                              </div>

                              <div className="form-area" style={{ padding: '0 50px' }}>
                                 <form action="#" method="POST">
                                    
                                    <div className="form-group">
                                       {/* <button type="submit" className="mybtn2" style={{textTransform: 'unset'}}>Switch to BSC Network</button> */}
                                       <div data-dismiss="modal" className='spec_btn' style={{ marginBottom: '0px' }} onClick={() => switchNetwork()}>Switch to Rinkeby Net</div>
                                    </div>
                                 </form>
                              </div>
                              
                           </div>
                        </div>
                  </div>
               </div>
               </div>
         </div>
         {/* <!-- Warning Network End --> */}
      </Fragment>
   )
}

export default Header;