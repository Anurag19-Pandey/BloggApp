import React from 'react'
import { Link } from "react-router-dom";
import '../css/PagesStyle/SignUp.css';

const SignUp = () => {
    return (
        <div className='signup-container'>
            <div className='signup-container-left-section' style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1669461028866-84765a42b26a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </div>
            <div className='signup-container-right-section'>
                <div className='signup-form-container'>
                    <div className='signup-form'>
                        <h1>BOLD<span className='site-name-second-part'>BLOG</span></h1>
                        <div className='signup-sbt-form-container'>
                            <form className='signup-sbt-form'>
                                <div className='userinfo-signup-container'>
                                    <div className='first-name-container'>
                                        <small className='error-msg'></small>
                                        <input type="text" placeholder='First Name' />
                                    </div>
                                    <div className='last-name-container'>
                                        <small className='error-msg-2'></small>
                                        <input type="text" placeholder='Last Name' />
                                    </div>
                                </div>
                                <div className='user-image-container'>
                                    <small className='error-msg'></small>
                                    <input type="text" placeholder='Image URL' />
                                </div>
                                <div className='email-container'>
                                    <small className='error-msg'></small>
                                    <input type="text" placeholder='Email' />

                                </div>
                                <div className='password-signup-container'>
                                    <div className='password-container'>
                                        <small className='error-msg'></small>
                                        <input type="password" placeholder='Password' />
                                    </div>
                                    <div className='confirm-password-container'>
                                        <small className='error-msg-2'></small>
                                        <input type="password" placeholder='Confirm Password' />
                                    </div>
                                </div>
                                <div className='btn-signup-container'>
                                    <button>Sign Up</button>
                                </div>
                                <div className='account-login-container'>
                                    <p>Already have an account ? <Link className='login-link' to="/login">Login</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp