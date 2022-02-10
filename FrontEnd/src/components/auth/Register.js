import React, { Fragment, useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { register, socialMediaSignUp } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

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
        password_confirm: '',
    });

    const { email, password, password_confirm } = formData;

    const onCreateAccount = () => {
        if (password !== password_confirm) {
            toast.warning('Passwords do not match', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }) 
        } else {
            const data = {
                email: email, 
                password: password
            }
            dispatch(register(data));
        }
    }

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    
    /* GOOGLE SIGNUP */
    const responseGOAuthSignup = (authResponse) => {
        // console.log('GL authResponse >> ', authResponse)
        if (!authResponse.error) {
            let body = {
                ...authResponse,
                register_type: 'GOOGLE'
            }
            dispatch(socialMediaSignUp(body));
        }
    }

    /* FACEBOOK SIGNUP */
    const responseFOAuthSignup = (authResponse) => {
        // console.log('FB authResponse >> ', authResponse)
        if (authResponse.accessToken) {
            let body = {
                ...authResponse,
                register_type: 'FB'
            }
            dispatch(socialMediaSignUp(body));
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
                <img src='assets/custom/images/girl.png' width="330px" height="752px" />
                <div className='right'>
                    <div className='panel1'>
                    <span>Sign Up</span>
                    </div>
                    <div className='panel2'>
                    <div className='email_panel'>
                        <span>Email</span>
                        <input 
                            type="email" 
                            name="email"
                            placeholder='abc@gmail.com' 
                            onChange={onChange}
                            />
                    </div>
                    <div className='email_panel'>
                        <span>Password</span>
                        <input 
                            type="password" 
                            name="password"
                            placeholder='Password' 
                            onChange={onChange}
                            />
                    </div>
                    <div className='email_panel'>
                        <span>Password Confirm</span>
                        <input 
                            type="password" 
                            name="password_confirm"
                            placeholder='Password' 
                            onChange={onChange}
                            />
                    </div>
                    </div>
                    <button className='panel3' onClick={() => onCreateAccount()}><span>Create Account</span></button>
                    <div className='login-plug'>
                        <GoogleLogin className='g-login'
                            clientId="860538264827-8qf2qpp6mqki8asmbpsroulb9u16un61.apps.googleusercontent.com"
                            buttonText="Signup"
                            onSuccess={responseGOAuthSignup}
                            onFailure={responseGOAuthSignup}
                            cookiePolicy={'single_host_origin'}
                        />
                        <FacebookLogin cssClass="g-login p-3 pr-5 bg-white text-secondary w-100 font-weight-light"
                            appId="984455555809462"
                            textButton="Signup"
                            fields="name,email,picture"
                            callback={responseFOAuthSignup}
                            icon="fa fa-facebook mr-4 ml-3 text-primary"
                        />   
                    </div>
                    <span className='panel4'>By continuing, you agree to Metafomo's Terms of Service and confirm that you have read Metafomo's Privacy Policy.</span>
                    <div className='panel5'>
                    You already have an account? &nbsp;<Link to="/login"><span>Connect now</span></Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Register;