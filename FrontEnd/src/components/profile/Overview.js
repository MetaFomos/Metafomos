import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthFlag } from '../../actions/auth';
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../include/Footer';

const Overview = () => {
    const { isAuthenticated, authFlag}= useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500);

        if (authFlag) {
            toast.success("Login Success", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            dispatch(setAuthFlag());
        } 
      }, []);

    
    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }
    return (
        <Fragment>
            <ToastContainer />
            {/* <!-- Breadcrumb Area Start --> */}
            <section className="breadcrumb-area gamer-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="breadcrumb-list">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Players</a>
                                </li>
                                <li>
                                    <a href="#">Gamer's profile</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bc-content">
                                <div className="left">
                                    <h3>Tim Wilkins <span>Online</span></h3>
                                    <p>Member Since 08 JAN 2021</p>
                                </div>
                                <div className="right">
                                    <div className="player-wrapper">
                                        <span>Players</span>
                                        <h6>28</h6>
                                    </div>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img src="../assets/images/player/sm1.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="../assets/images/player/sm2.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="../assets/images/player/sm3.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="../assets/images/player/sm4.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <span>
                                                32+
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Breadcrumb Area End --> */}

            {/* <!-- Gamer Profile area Start --> */}
            <section className="gamer-profile-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="gamer-profile-top-inner">
                                <div className="profile-photo">
                                    <div className="img">
                                        <img src="../assets/images/gamer/gamer.png" alt="" />
                                    </div>
                                    <div className="mybadge">
                                        <img src="../assets/images/gamer/badge.png" alt="" />
                                        <span>12</span>
                                    </div>
                                </div>
                                <div className="g-p-t-counters">
                                    <div className="g-p-t-single-counter">
                                        <div className="img">
                                            <img src="../assets/images/gamer/c1.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4>687</h4>
                                            <span>Total Match</span>
                                        </div>
                                    </div>
                                    <div className="g-p-t-single-counter">
                                        <div className="img">
                                            <img src="../assets/images/gamer/c2.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4>687</h4>
                                            <span>Win Ratio</span>
                                        </div>
                                    </div>
                                    <div className="g-p-t-single-counter">
                                        <div className="img">
                                            <img src="../assets/images/gamer/c3.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4>687</h4>
                                            <span>Achievements</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="msg-btn-wrapper">
                                    <a href="#" className="msg-btn"  data-toggle="modal" data-target="#gamer-chat">
                                        <img src="../assets/images/gamer/envelop.png" alt="" />
                                        <span>Message</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Gamer Profile  area End --> */}

            {/* <!-- User Menu Area Start --> */}
            <div className="usermenu-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="usermenu-inner">
                                <div className="left-area">
                                    <ul>
                                        <li>
                                            <a href="gamer-profile1.html" className="active">Overview</a>
                                        </li>
                                        <li>
                                            <a href="gamer-profile2.html">Friends</a>
                                        </li>
                                        <li>
                                            <a href="gamer-profile3.html">statistics</a>
                                        </li>
                                        <li>
                                            <a href="gamer-profile4.html">play history</a>
                                        </li>
                                        <li>
                                            <a href="gamer-profile5.html">achievement</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="right-area">
                                    <a href="#" className="mybtn2">Follow</a>
                                    <a href="#" className="mybtn2">Invite to Team</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	        {/* <!-- User Menu Area End --> */}

            {/* <!-- User Main Content Area Start --> */}
            <section className="user-main-dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4">
                            <aside>
                                <div className="about">
                                    <h4>About Me</h4>
                                    <p>
                                        Nothing Interesting hasn't been written here, what a pity it is quite a nice field 
                                    </p>
                                    <ul>
                                        <li>
                                            <p><i className="fas fa-map-marked-alt"></i> Bern Switzerland</p>
                                        </li>
                                        <li>
                                            <p> <i className="fas fa-calendar-alt"></i> Member Since 08 Jan 2021</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="rank-area">
                                    <div className="top-area">
                                        <div className="left">
                                            <img src="../assets/images/gamer/lavel.png" alt="" />
                                        </div>
                                        <div className="right">
                                            <p>Rank: <span>12</span></p>
                                        </div>
                                    </div>
                                    <div className="bottom-area">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '75%'}}>75%</div>
                                        </div>
                                        <a href="#">View all Ranks <i className="fas fa-chevron-right"></i></a>
                                    </div>
                                </div>
                                <div className="achievment-area">
                                    <div className="header-area">
                                        <h4>Achievements</h4>
                                        <a href="#">All Rewards <i className="fas fa-chevron-right"></i></a>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="s-a">
                                                <img src="../assets/images/gamer/a1.png" alt="" />
                                                <span>Tournaments <br />
                                                    Joined</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="s-a">
                                                <img src="../assets/images/gamer/a2.png" alt="" />
                                                <span>Sets of <br />
                                                    Missions</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="s-a">
                                                <img src="../assets/images/gamer/a3.png" alt="" />
                                                <span>Game <br />
                                                    plays</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="s-a">
                                                <img src="../assets/images/gamer/a4.png" alt="" />
                                                <span>Active <br />
                                                    Days</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="s-a">
                                                <img src="../assets/images/gamer/a5.png" alt="" />
                                                <span>Tournaments <br />
                                                    Won</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="s-a">
                                                <img src="../assets/images/gamer/a6.png" alt="" />
                                                <span>Friends <br />
                                                    Referred</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                        <div className="col-xl-9 col-lg-8">
                            <main>
                                <div className="main-box">
                                    <div className="header-area">
                                        <h4>Games Playing</h4>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-borderless">
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <div className="game-info">
                                                        <img src="../assets/images/gamer/g1.png" alt="" />
                                                        <div className="content">
                                                            <h6>Fortnite</h6>
                                                            <span>Wager Challenge</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="players">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <img src="../assets/images/player/sm1.png" alt="" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <img src="../assets/images/player/sm2.png" alt="" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <img src="../assets/images/player/sm3.png" alt="" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <img src="../assets/images/player/sm4.png" alt="" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    32+
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ratio">
                                                        <span>Win Ratio</span>
                                                        <h4>63%</h4>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ratio">
                                                        <span>Elo Ratings </span>
                                                        <h4>2368</h4>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#" className="mybtn2">Challenge</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="game-info">
                                                        <img src="../assets/images/gamer/g2.png" alt="" />
                                                        <div className="content">
                                                            <h6>Fortnite</h6>
                                                            <span>Wager Challenge</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="players">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <img src="../assets/images/player/sm1.png" alt="" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <img src="../assets/images/player/sm2.png" alt="" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <img src="../assets/images/player/sm3.png" alt="" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <img src="../assets/images/player/sm4.png" alt="" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    32+
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ratio">
                                                        <span>Win Ratio</span>
                                                        <h4>63%</h4>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ratio">
                                                        <span>Elo Ratings </span>
                                                        <h4>2368</h4>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#" className="mybtn2">Challenge</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="game-info">
                                                        <img src="../assets/images/gamer/g3.png" alt="" />
                                                        <div className="content">
                                                            <h6>Fortnite</h6>
                                                            <span>Wager Challenge</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="players">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <img src="../assets/images/player/sm1.png" alt="" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <img src="../assets/images/player/sm2.png" alt="" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <img src="../assets/images/player/sm3.png" alt="" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <img src="../assets/images/player/sm4.png" alt="" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    32+
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ratio">
                                                        <span>Win Ratio</span>
                                                        <h4>63%</h4>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ratio">
                                                        <span>Elo Ratings </span>
                                                        <h4>2368</h4>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#" className="mybtn2">Challenge</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="game-info">
                                                        <img src="../assets/images/gamer/g4.png" alt="" />
                                                        <div className="content">
                                                            <h6>Fortnite</h6>
                                                            <span>Wager Challenge</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="players">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <img src="../assets/images/player/sm1.png" alt="" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <img src="../assets/images/player/sm2.png" alt="" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <img src="../assets/images/player/sm3.png" alt="" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <img src="../assets/images/player/sm4.png" alt="" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    32+
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ratio">
                                                        <span>Win Ratio</span>
                                                        <h4>63%</h4>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ratio">
                                                        <span>Elo Ratings </span>
                                                        <h4>2368</h4>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#" className="mybtn2">Challenge</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="game-info">
                                                        <img src="../assets/images/gamer/g5.png" alt="" />
                                                        <div className="content">
                                                            <h6>Fortnite</h6>
                                                            <span>Wager Challenge</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="players">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <img src="../assets/images/player/sm1.png" alt="" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <img src="../assets/images/player/sm2.png" alt="" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <img src="../assets/images/player/sm3.png" alt="" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <img src="../assets/images/player/sm4.png" alt="" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    32+
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ratio">
                                                        <span>Win Ratio</span>
                                                        <h4>63%</h4>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ratio">
                                                        <span>Elo Ratings </span>
                                                        <h4>2368</h4>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#" className="mybtn2">Challenge</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="game-info">
                                                        <img src="../assets/images/gamer/g6.png" alt="" />
                                                        <div className="content">
                                                            <h6>Fortnite</h6>
                                                            <span>Wager Challenge</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="players">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <img src="../assets/images/player/sm1.png" alt="" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <img src="../assets/images/player/sm2.png" alt="" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <img src="../assets/images/player/sm3.png" alt="" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <img src="../assets/images/player/sm4.png" alt="" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    32+
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ratio">
                                                        <span>Win Ratio</span>
                                                        <h4>63%</h4>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ratio">
                                                        <span>Elo Ratings </span>
                                                        <h4>2368</h4>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#" className="mybtn2">Challenge</a>
                                                </td>
                                            </tr>
                                            
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- User Main Content Area End --> */}
            <Footer />
        </Fragment>
    )
}

export default Overview;