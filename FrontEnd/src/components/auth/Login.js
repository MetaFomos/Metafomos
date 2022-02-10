import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { Link, Navigate } from 'react-router-dom';
import { login, socialMediaLogin } from '../../actions/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    
    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
      }, []);

    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onLoginAccount = () => {
        const data = {
            email: email, 
            password: password
        }
        dispatch(login(data));
    }
    
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const responseOAuthLogin = (authResponse) => {
        if (authResponse.accessToken) {
            let body = { ...authResponse }
            dispatch(socialMediaLogin(body));
        }
    }

    if (isAuthenticated) {
        return <Navigate to="/profile/overview" />
    }

    return (
        <Fragment>
            <ToastContainer />
            <div style={{ height: '230px' }}></div>
            <div className='create_game'>
                <img src='assets/custom/images/game.png' width="310px" height="648px" />
                <div className='right'>
                    <div className='panel1'>
                        <span>Sign In</span>
                    </div>
                    <div className='panel2'>
                        <div className='email_panel'>
                            <span>Email</span>
                            <input 
                                type="email" 
                                name="email" 
                                onChange={onChange}
                                placeholder='abc@gmail.com' 
                                />
                        </div>
                        <div className='email_panel'>
                            <span>Password</span>
                            <input 
                                type="password" 
                                name="password" 
                                onChange={onChange}
                                placeholder='Password' 
                            />
                        </div>
                    </div>
                    <button className='panel3' onClick={() => onLoginAccount()}><span>Login Account</span></button>
                    <div className='login-plug'>
                        <GoogleLogin className='g-login'
                            clientId="860538264827-8qf2qpp6mqki8asmbpsroulb9u16un61.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={responseOAuthLogin}
                            onFailure={responseOAuthLogin}
                            cookiePolicy={'single_host_origin'}
                        />
                        <FacebookLogin cssClass="g-login p-3 pr-5 bg-white text-secondary w-100 font-weight-light"
                            appId="984455555809462"
                            textButton="Login"
                            fields="name,email,picture"
                            callback={responseOAuthLogin}
                            icon="fa fa-facebook mr-4 ml-3 text-primary"
                        /> 
                    </div>
                    <span className='panel4'>By continuing, you agree to Metafomo's Terms of Service and confirm that you have read Metafomo's Privacy Policy.</span>
                    <div className='panel5'>
                    Don’t have an account? &nbsp;<Link to="/register"><span>Create now</span></Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login;