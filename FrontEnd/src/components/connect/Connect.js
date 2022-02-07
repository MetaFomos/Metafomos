import React, { Fragment, useState } from 'react';
import Header from '../include/Header';
import Footer from '../include/Footer';

import { useDispatch, useSelector } from 'react-redux';
import { connect as connectWallet } from '../../actions/blockchain';

import Web3 from 'web3';

import '../../assets/scss/dashboard/Dashboard.scss';

const Connect = () => {

   const dispatch = useDispatch();
   const blockchain = useSelector(state => state.blockchain);

   const checkNet = async () => {
      const warningBtn = document.querySelector('#modal_warning');

      if (window.ethereum.chainId != 0x38) {
         warningBtn.click();
      } else {
         // if(blockchain.loading || blockchain.account) return;
         await dispatch(connectWallet());
         // connectAccountMarketplace();
      }
   }

   const switchNetwork = async () => {
      await window.ethereum.request({
         method: 'wallet_switchEthereumChain',
         params: [{ chainId: '0x38' }], // chainId must be in hexadecimal numbers
      });
      await dispatch(connectWallet());
      // connectAccountMarketplace();
   }

   const connectAccountMarketplace = () => {
      const connectAccountMarketplace = document.querySelector('#connectAccountMarketplace');
      connectAccountMarketplace.click();
   }

   const createNewGame = () => {
      const control_game = document.querySelector('#createGameAccount');
      control_game.click();
   }

   const linkExistGame = () => {
      const control_game = document.querySelector('#linkGameAccount');
      control_game.click();
   }

   const onCreateAccount = () => {
      const linkWalletAddress = document.querySelector('#linkWalletAddress');
      linkWalletAddress.click();
   }

   const onLastStep = () => {
      const agreement = document.querySelector('#agreement');
      agreement.click();
   }

   const onAcceptBtn =() => {
      const RegisterWallet = document.querySelector('#RegisterWallet');
      RegisterWallet.click();
   }

   const onBackBtn = () => {
      const linkWalletAddress = document.querySelector('#linkWalletAddress');
      linkWalletAddress.click();
   }

   return (
      <Fragment>
         <Header />
         {/* <!-- metamask connect  --> */}
         <section className="metamask_connect">
            <div className="panel">
               <div className="left">
                  <i className="icon fas fa-angle-left"></i> Go Back
               </div>
               <div className="right">
                  <p className="title1"> CONNECT WALLET </p>
                  <p className="title2"> Connect with your available wallet or create new wallet to join our marketplace </p>
                  <div className="meta_btn" onClick={() => checkNet()}>
                     <img src="assets/custom/images/metamask.png" />
                     {blockchain.loading
                        ? 'Connecting...'
                        : blockchain.account
                        ? blockchain.account.slice(0, 5) + '...' + blockchain.account.slice(-4) 
                        : 'Login with Meta Mask'
                     }
                  </div>
                  <p className='title4' style={{ color: '#fa009f' }}>
                     {blockchain.errorMsg ? blockchain.errorMsg : ''}
                  </p>
                  <p className="title4"> We do not own your private keys and cannot access your funds without your confirmation. </p>
               </div>
            </div>
         </section>
         {/* <Footer /> */}
	{/* <!-- metamask connect end --> */}

      <button id='modal_warning' data-toggle="modal" data-target="#connectModal" >Warning Network</button>
      {/* <!-- Warning Network --> */}
      <div className="modal fade login-modal sign-in" id="connectModal" tabIndex="-1" role="dialog" aria-labelledby="signin" aria-hidden="true" style={{background: 'rgba(19,11,33,.85)',backdropFilter: 'blur(40px)'}}>
            <div className="modal-dialog modal-dialog-centered " role="document">
               <div className="modal-content" style={{ boxShadow: 'none', background: '#261858' }}>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{ top: '4px', right: '10px' }}><span aria-hidden="true" style={{ fontSize: '48px',fontWeight: '100', border:'none' }}>&times;</span></button>
                  <div className="modal-body">
                        <div className="tab-content" id="pills-tabContent">
                           <div className="tab-pane fade show active" id="pills-m_login" role="tabpanel" aria-labelledby="pills-m_login-tab">

                              <div style={{ display: 'flex', alignItems:'center', justifyContent: 'center', margin: '20px 0' }}>
                                 <img src='assets/custom/images/network.png' />
                              </div>

                              <div className="header-area">
                                 <h6 className="title" style={{textTransform: 'unset', fontSize: '28px'}}>Warning Network</h6>
                                 <span style={{ fontSize: '17px' }}>You need to connect to supported network</span>
                              </div>

                              <div className="form-area" style={{ padding: '0 50px' }}>
                                 <form action="#" method="POST">
                                    
                                    <div className="form-group">
                                       {/* <button type="submit" className="mybtn2" style={{textTransform: 'unset'}}>Switch to BSC Network</button> */}
                                       <div data-dismiss="modal" className='spec_btn' style={{ marginBottom: '0px' }} onClick={() => switchNetwork()}>Switch to BSC Network</div>
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

         <button id='connectAccountMarketplace' data-toggle="modal" data-target="#connectAccountMarketplaceModal" >Connect Account Marketplace Modal</button>
         {/* <!-- connect account on the marketplace --> */}
         <div className="modal fade login-modal sign-in" id="connectAccountMarketplaceModal" tabIndex="-1" role="dialog" aria-labelledby="signin" aria-hidden="true" style={{background: 'rgba(19,11,33,.85)',backdropFilter: 'blur(40px)'}}>
            <div className="modal-dialog modal-dialog-centered " role="document">
               <div className="modal-content" style={{ boxShadow: 'none', background: '#261858' }}>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{ top: '4px', right: '10px' }}><span aria-hidden="true" style={{ fontSize: '48px',fontWeight: '100', border:'none' }}>&times;</span></button>
                  <div className="modal-body">
                        <div className="tab-content" id="pills-tabContent">
                           <div className="tab-pane fade show active" id="pills-m_login" role="tabpanel" aria-labelledby="pills-m_login-tab">

                              <div className="header-area">
                                 <h6 className="title" style={{textTransform: 'unset', fontSize: '28px', padding: '15px 0'}}>You are almost there!</h6>
                                 <span style={{ fontSize: '17px', color: 'white' }}>Connect your game account to continue on marketplace</span>
                              </div>

                              <div className="form-area" style={{ padding: '0 20px' }}>
                                 <form action="#" method="POST">
                                    <div className="form-group">
                                       <div data-dismiss="modal" className='spec_btn' style={{ marginBottom: '20px', background: '#7d1e9e' }} onClick={() => linkExistGame()} >Link to Existing game account</div>
                                       <div data-dismiss="modal" className='spec_btn' style={{ marginBottom: '0px' }} onClick={() => createNewGame()}>Create new game account</div>
                                    </div>
                                 </form>
                              </div>
                              
                           </div>
                        </div>
                  </div>
               </div>
               </div>
         </div>
         {/* <!-- connect account on the marketplace End --> */}

         <button id='createGameAccount' data-toggle="modal" data-target="#createGameAccountModal" >Create Game Account</button>
         {/* <!-- connect account on the marketplace --> */}
         <div className="modal fade login-modal sign-in" id="createGameAccountModal" tabIndex="-1" role="dialog" aria-labelledby="signin" aria-hidden="true" style={{background: 'rgba(19,11,33,.85)',backdropFilter: 'blur(40px)'}}>
            <div className="modal-dialog modal-dialog-centered " role="document">
               <div className="modal-content" style={{ boxShadow: 'none', background: '#261858', padding: '0px', display: 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}>
                  <div className='create_game'>
                     <img src='assets/custom/images/game.png' width="310px" height= "558px" />
                     <div className='right'>
                        <div className='panel1'>
                           <span>create game profile</span>
                           <button type="button" className="" data-dismiss="modal" aria-label="Close" style={{ top: '4px', right: '10px' }}><span aria-hidden="true" style={{ fontSize: '48px',fontWeight: '100', border:'none' }}>&times;</span></button>
                        </div>
                        <div className='panel2'>
                           <div className='email_panel'>
                              <span>Email</span>
                              <input type="email" placeholder='abc@gmail.com' />
                           </div>
                           <div className='code_panel'>
                              <div className='enter_panel'>
                                 <span>Enter Code</span>
                                 <input type="number" />
                              </div>
                              <button className='sendViaEmailBtn'><span>Send Code via email</span></button>
                           </div>
                        </div>
                        <button className='panel3' data-dismiss="modal" onClick={() => onCreateAccount()} ><span>Create Account</span></button>
                        <span className='panel4'>By continuing, you agree to Theta's Arena Terms of Service and confirm that you have read Theta's Arena Privacy Policy.</span>
                        <div className='panel5'>
                           You already have an account? <span>Connect now</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- connect account on the marketplace End --> */}

         <button id='linkGameAccount' data-toggle="modal" data-target="#linkGameAccountModal" >Link Game Account</button>
         {/* <!-- connect account on the marketplace --> */}
         <div className="modal fade login-modal sign-in" id="linkGameAccountModal" tabIndex="-1" role="dialog" aria-labelledby="signin" aria-hidden="true" style={{background: 'rgba(19,11,33,.85)',backdropFilter: 'blur(40px)'}}>
            <div className="modal-dialog modal-dialog-centered " role="document">
               <div className="modal-content" style={{ boxShadow: 'none', background: '#261858', padding: '0px', display: 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}>
                  <div className='create_game'>
                     <img src='assets/custom/images/game.png' width="310px" height= "558px" />
                     <div className='right'>
                        <div className='panel1'>
                           <span>create game profile</span>
                           <button type="button" className="" data-dismiss="modal" aria-label="Close" style={{ top: '4px', right: '10px' }}><span aria-hidden="true" style={{ fontSize: '48px',fontWeight: '100', border:'none' }}>&times;</span></button>
                        </div>
                        <div className='panel2'>
                           <div className='email_panel'>
                              <span>Email</span>
                              <input type="email" placeholder='abc@gmail.com' />
                           </div>
                           <div className='code_panel'>
                              <div className='enter_panel'>
                                 <span>Enter Code</span>
                                 <input type="number" />
                              </div>
                              <button className='sendViaEmailBtn'><span>Send Code via email</span></button>
                           </div>
                        </div>
                        <button className='panel3'><span>Link Account</span></button>
                        <span className='panel4'>By continuing, you agree to Theta's Arena Terms of Service and confirm that you have read Theta's Arena Privacy Policy.</span>
                        <div className='panel5'>
                           Don’t have an account? <span>Create now</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- connect account on the marketplace End --> */}

         <button id='linkWalletAddress' data-toggle="modal" data-target="#linkWalletAddressModal" >Link wallet address modal</button>
         {/* <!-- link wallet address --> */}
         <div className="modal fade login-modal sign-in" id="linkWalletAddressModal" tabIndex="-1" role="dialog" aria-labelledby="signin" aria-hidden="true" style={{background: 'rgba(19,11,33,.85)',backdropFilter: 'blur(40px)'}}>
            <div className="modal-dialog modal-dialog-centered " role="document">
               <div className="modal-content" style={{ boxShadow: 'none', background: '#261858' }}>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{ top: '4px', right: '10px' }}><span aria-hidden="true" style={{ fontSize: '48px',fontWeight: '100', border:'none' }}>&times;</span></button>
                  <div className="modal-body">
                        <div className="tab-content" id="pills-tabContent">
                           <div className="tab-pane fade show active" id="pills-m_login" role="tabpanel" aria-labelledby="pills-m_login-tab">

                              <div className="header-area">
                                 <span style={{ fontSize: '19px', fontWeight: '500' , 'textTransform': 'uppercase'}}>Last Step</span>
                                 <h6 className="title" style={{textTransform: 'unset', fontSize: '28px', padding: '15px 0'}}>Link Wallet Address</h6>
                                 <span style={{ fontSize: '17px'}}>Your account has been created, Link your address wallet to your account now to do get started</span>
                                 <p style={{ fontSize: '17px', color: 'white' }}>Your wallet: &nbsp; {blockchain.account ? blockchain.account.slice(0, 5) + '...' + blockchain.account.slice(-4) : ''}</p>
                              </div>

                              <div className="form-area" style={{ padding: '0 20px' }}>
                                 <form action="#" method="POST">
                                    <div className="form-group">
                                       <div data-dismiss="modal" className='spec_btn' style={{ marginBottom: '0px', textTransform: 'uppercase' }} onClick={() => onLastStep()}>Link</div>
                                    </div>
                                 </form>
                              </div>
                              
                           </div>
                        </div>
                  </div>
               </div>
               </div>
         </div>
         {/* <!-- link wallet address End --> */}

         <button id='agreement' data-toggle="modal" data-target="#agreementModal" >Link wallet address modal</button>
         {/* <!-- agreement --> */}
         <div className="modal fade login-modal sign-in" id="agreementModal" tabIndex="-1" role="dialog" aria-labelledby="signin" aria-hidden="true" style={{background: 'rgba(19,11,33,.85)',backdropFilter: 'blur(40px)'}}>
            <div className="modal-dialog modal-dialog-centered " role="document">
               <div className="modal-content" style={{ boxShadow: 'none', background: '#261858' }}>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{ top: '4px', right: '10px' }}><span aria-hidden="true" style={{ fontSize: '48px',fontWeight: '100', border:'none' }}>&times;</span></button>
                  <div className="modal-body agreement">
                        <div className="tab-content" id="pills-tabContent">
                           <div className="tab-pane fade show active" id="pills-m_login" role="tabpanel" aria-labelledby="pills-m_login-tab">

                              <div className="header-area">
                                 <h6 className="title" style={{textTransform: 'none', fontSize: '28px', padding: '15px 0'}}>Wallet Usage Agreement</h6>
                              </div>

                              <div className='panel'>
                                 <p className='title1'>Wallets and Digital Assets</p>
                                 <p className='title2'>
                                    Thetan Arena allows its users to access and manage multi-chain digital blockchain-based assets (“Digital Assets”). Your wallet, Digital Assets, and cryptocurrencies are completely in your own control. You are the one and only one responsible for manipulating your fund to perform any transfers of Digital Assets. We cannot interfere with any of your Digital Assets storage and transactions from your wallets in any case.
                                 </p>
                                 <p className='title2'>
                                    Thetan Arena does not maintain any blockchain wallets. You hereby acknowledge and agree that Thetan Arena has no liability for or control over the safety, suitability, quality, delivery, legality or other aspects of any of your Digital Assets.
                                 </p>
                                 <p className='title1'>
                                    Interaction with Protocols
                                 </p>
                                 <p className='title2'>
                                    You hereby acknowledge and agree that we do not execute the exchange of Digital Assets, cryptocurrencies and tokens, either directly or through Protocols. We do not define, suggest and execute any control over the price of Digital Assets accessible via Protocols. You do not interact with us when you perform swaps or interact with liquidity or lending pools, rather you interact with a Protocol directly. We do not own or control the underlying software which governs the operation of Protocols, even technically supported by the software created by us.
                                 </p>
                                 <p className='title2'>
                                    You hereby acknowledge and agree that we have no liability to any claims or damages that may arise as a result of any actions or transactions that you engage in while interacting with Protocols through the Thetan Arena Marketplace.
                                 </p>
                                 <p className='title2'>
                                    You hereby acknowledge and agree that you interact directly with the corresponding blockchain, we do not control your interaction with such blockchain and do not process or transmit any information, data or transactions entered by you. You hereby acknowledge and agree that we have no liability to any claims or damages that may arise as a result of any actions or transactions that you make or engage in while interacting with blockchains through the Thetan Arena.
                                 </p>
                                 <p className='title2'>
                                    You acknowledge that the functionality of Protocols is experimental in nature. Protocols you interact with and rely on, are third party software applications. We make no representations or warranties of any kind regarding these third-party applications, including but not limited to representations and warranties of compliance, availability, or security. We make no representations or warranties that Protocols are compliant with laws of any jurisdiction, and you are solely responsible for making any such determination with respect to your interaction with such Protocols.
                                 </p>
                                 <p className='title2'>
                                    We reserve the right to cancel or refuse your interaction with any supported blockchains or the accessibility of total interaction functionality to you due to requirements of any applicable laws or regulations, and without prior notice to you.
                                 </p>
                                 <p className='title1'>
                                    Managing Your Keys, Passwords, and Security
                                 </p>
                                 <p className='title2'>
                                    We does not control any of your account passwords, personal identification numbers (PINs), wallet private keys, passphrases for your blockchain wallets as well as any other codes that you deploy to have access to the Services provided by WOLFFUN INC. It is your responsibility to keep safe and guard any of your account passwords, personal identification numbers (PINs), wallet private keys, passphrases. You take full responsibility for keeping your own security information confidential. If you employ a third organization to store your private key(s), whether or not such appointments are made through the Services (e.g., through a key recovery service), WOLFFUN INC. is not responsible for the actions or omissions of such a third party.
                                 </p>
                                 <p className='title1'>
                                    Product Updates
                                 </p>
                                 <p className='title2'>
                                    WOLFFUN INC. reserves the right to make unscheduled deployments of changes, updates, or improvements to the Services at any time. We may add or remove any functionalities or features, and we may discontinue the Services altogether. When a new version of the Application or Extension is launched, we may send you notifications in the Application and the Extension as well as a post on social media channels. Therefore, if you want to update the latest version of the Application or Extension, you should activate update functionality in your version or install the new version manually.
                                 </p>
                                 <p className='title2'>
                                    You hereby acknowledge and agree that we have no obligation to enhance, modify or replace any part or component of the WOLFFUN INC. or to continue developing or releasing new versions of the WOLFFUN INC.
                                 </p>
                                 <p className='title1'>
                                    No Guarantee of Uninterrupted Access
                                 </p>
                                 <p className='title2'>
                                    You understand and agree that we do not guarantee uninterrupted, secure access to any parts of the WOLFFUN INC, and the operation of theWOLFFUN INC may be disturbed by numerous factors beyond our control.
                                 </p>
                                 <p className='title1'>
                                    Risks Disclosure. Assumptions of Risks
                                 </p>
                                 <p className='title2'>
                                    THIS SECTION CONTAINS INFORMATION REGARDING SIGNIFICANT RISKS OF HOLDING, OWNING, ACQUIRING AND PURCHASING TOKENS OR ANY DIGITAL ASSETS. PLEASE READ THIS SECTION CAREFULLY.
                                 </p>
                                 <p className='title2'>4.1 Holding, owning, acquiring and purchasing Digital Assets, interacting with Protocols, pools, smart contracts, Staking involves significant risks and potential for financial losses, including, without limitation, the following:</p>
                                 <p className='title2'>4.1.1 the features, functions, characteristics, operation, use and other properties of any Digital Assets (“Asset Properties”) and the software, networks, ledgers, protocols, systems, and other technology (including, if applicable, any distributed ledger (blockchains)) (“Underlying Technology”) used to administer, create, issue, transfer, cancel, use or transact in Digital Assets may be complex, technical or difficult to understand or evaluate;</p>
                                 <p className='title2'>4.1.2 any Digital Asset and its Underlying Technology may be vulnerable to attacks on the security, integrity or operation of the Digital Asset or its Underlying Technology (“Attacks”), including Attacks using computing power sufficient to overwhelm the normal operation of a decentralized distributed ledger (blockchain) or other Underlying Technology;</p>
                                 <p className='title2'>4.1.3 any Protocol, pool or smart contract may be vulnerable to Attacks, including phishing attacks. Any Protocol, pool or smart contract may cease to operate as expected due to various reasons, including Attacks, enforcement and regulatory activities, scamming activities, technical and communication issues. We do not monitor any Protocols or pools. We do not make any representation and warranty that these Protocols or pools are safe, secure, verified or verifiable, or of any value or quality or legality;</p>
                                 <p className='title2'>4.1.4 any Digital Asset, Asset Properties or Underlying Technology may change or otherwise cease to operate as expected due to a change made to the Underlying Technology, a change made using features or functions built into the Underlying Technology or a change resulting from an Attack. These changes may include, without limitation, a “fork” or “rollback” of the Digital Asset or blockchain;</p>
                                 <p className='title2'>4.1.5 any Digital Asset may decrease in value or lose all of its value due to various factors including the discovery of wrongful conduct, market manipulation, changes to Asset Properties or perceived value of Asset Properties, Attacks, suspension or cessation of support for a Digital Asset by Protocols, trading platforms, marketplace platforms or service providers, and other factors outside our control;</p>
                                 <p className='title2'>4.1.6 any Digital Asset may be lost if sent to the wrong address (for example, but without limitation, if the address is improperly formatted, contains errors, or is intended to be used for a different type of Digital Assets);</p>
                                 <p className='title2'>4.1.7 we make no representation whatsoever that any of the Digital Assets that may be found or are accessible through the Thetan Arena, are safe, suitable, true to any representations made by the Digital Asset issuer or sponsor, verified or verifiable, or of any value or quality or legality;</p>
                                 <p className='title2'>4.2 The risks described in this Section 4 may result in loss of Digital Assets, decrease in or loss of all value or exchangeability of Digital Assets, inability to access or transfer Digital Assets, inability to exchange Digital Assets, inability to receive financial benefits available to other Digital Assets holders, and other financial losses to you. You hereby assume and agree that we will have no responsibility or liability for such risks. You hereby irrevocably waive, release and discharge any and all claims, whether known or unknown to you, against Thetan Arena, its affiliates and their respective shareholders, members, directors, officers, employees, agents and representatives (“Representatives”) related to any of the risks set forth herein.</p>
                                 <p className='title2'>4.3 You should not acquire or trade any Digital Assets unless you have sufficient financial resources and can afford to lose all value of the Digital Assets.</p>
                                 <p className='title2'>4.5 You hereby assume and agree that we will have no responsibility or liability for such risks described in this Section 4. You hereby irrevocably waive, release and discharge any and all claims, whether known or unknown to you, against us, our affiliates and Representatives related to any of the risks set forth herein.</p>
                                 <p className='title2'>4.6 We do not provide any advice, does not have any fiduciary duty to you or any other user and does not make any warranty about the suitability of any Digital Assets for ownership by you.</p>
                              </div>

                              <div className='panel2'>
                                 <input type="checkbox" className='checkbox' />
                                 <span>I have read the above Agreements</span>
                              </div>

                              <div className='panel3'>
                                 <button onClick={() => onBackBtn()} data-dismiss="modal"><span>Back</span></button>
                                 <button onClick={() => onAcceptBtn()} data-dismiss="modal"><span>Accept</span></button>
                              </div>
                              
                           </div>
                        </div>
                  </div>
               </div>
               </div>
         </div>
         {/* <!-- agreement End --> */}


      <button id='RegisterWallet' data-toggle="modal" data-target="#registerWalletModal" >Register Wallet</button>
      {/* <!-- Register Wallet --> */}
      <div className="modal fade login-modal sign-in" id="registerWalletModal" tabIndex="-1" role="dialog" aria-labelledby="signin" aria-hidden="true" style={{background: 'rgba(19,11,33,.85)',backdropFilter: 'blur(40px)'}}>
            <div className="modal-dialog modal-dialog-centered " role="document">
               <div className="modal-content" style={{ boxShadow: 'none', background: '#261858' }}>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{ top: '4px', right: '10px' }}><span aria-hidden="true" style={{ fontSize: '48px',fontWeight: '100', border:'none' }}>&times;</span></button>
                  <div className="modal-body">
                        <div className="tab-content" id="pills-tabContent">
                           <div className="tab-pane fade show active" id="pills-m_login" role="tabpanel" aria-labelledby="pills-m_login-tab">

                              <div style={{ display: 'flex', alignItems:'center', justifyContent: 'center', margin: '20px 0' }}>
                                 <img src='assets/custom/images/success.svg' />
                              </div>

                              <div className="header-area">
                                 <h6 className="title" style={{textTransform: 'unset', fontSize: '28px'}}>AWESOME</h6>
                                 <span style={{ fontSize: '17px' }}>Wallet {blockchain.account ? blockchain.account.slice(0, 5) + '...' + blockchain.account.slice(-4) : ''} now linked to your game account! Login to get started.</span>
                              </div>

                              <div className="form-area" style={{ padding: '0 50px' }}>
                                 <form action="#" method="POST">
                                    
                                    <div className="form-group">
                                       {/* <button type="submit" className="mybtn2" style={{textTransform: 'unset'}}>Switch to BSC Network</button> */}
                                       <div data-dismiss="modal" className='spec_btn' style={{ marginBottom: '0px' }}>Login now</div>
                                    </div>
                                 </form>
                              </div>
                              
                           </div>
                        </div>
                  </div>
               </div>
               </div>
         </div>
         {/* <!-- Register Wallet End --> */}

      </Fragment>
   )
}


export default Connect;