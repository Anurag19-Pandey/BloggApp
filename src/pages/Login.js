import React from 'react';
import { Link } from 'react-router-dom';
import '../css/PagesStyle/Login.css';

const Login = () => {
    return (
        <div className='login-container'>
            <div className='login-container-left-section'>
                <div className='login-form-container'>
                    <div className='login-form'>
                        <h1>BOLD<span className='site-name-second-part'>BLOG</span></h1>
                        <form className='login-sbt-form'>
                            <div className='email-login-container'>
                                <small className='error-msg'></small>
                                <input text="email" placeholder="Email" />
                            </div>
                            <div className='password-login-container'>
                                <small className='error-msg'></small>
                                <input text="password" placeholder="Password" />
                            </div>
                            <div className='btn-login-container'>
                                <button>Login</button>
                            </div>
                        </form>
                        <div className="account-signup-container">
                            <p>Don't have an account ? <Link className="signup-link" to="/signup">Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='login-container-right-section' style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1675012848706-ff1b1fd7c675?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </div>
    )
}

export default Login
