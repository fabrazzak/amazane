
import React, { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import './Login.css'

const Login = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    const location=useLocation();
    const from= location.state?.from?.pathname || '/'

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailOnBlur=event=>{
        setEmail(event.target.value);
    }
    const handlePasswordOnBlur=event=>{
        setPassword(event.target.value);
    }
    if(user){
        navigate(from, {replace: true});
    }
    const handleSigninUser=event=>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }
   
    return (
        <div className='form-section'>
            <div className="form-container">
                <h1 className='form-title'>Login</h1>
                <form onSubmit={handleSigninUser}>
                    <div className="input-groupe">
                        <label className='input-lebel' htmlFor="email">Email</label>
                        <input onBlur={handleEmailOnBlur} className='input-filed' type="email" name="email" id="" />
                    </div>
                    
                    <div className="input-groupe">
                        <label className='input-lebel' htmlFor="password">Password</label>
                        <input onBlur={handlePasswordOnBlur} className='input-filed' type="password" name="password" id="1" />
                    </div>
                    <p style={{color:"red"}}>{error?.message}</p>
                    <div >
                        <input className="form-btn" type="submit" value="Login" />
                    </div>
                    <p className='form-login-signin'>New to Ema-john? <Link className='form-link' to="/signup">Create New Account</Link></p>
                    <div className='form-divider-container'>
                        <div className="form-divider"></div>
                        <p style={{'padding':'0px 15px'}}>or</p>
                        <div className="form-divider"></div>
                    </div>
                    <div className="form-with-google">
                        
                        <button className='form-with-google-btn'> 
                            <img className='form-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs8cgOljc_5-YsbcchW969FewKTTqRuhUZmg&usqp=CAU' alt="" /> <p> Contunue with Google</p></button>
                    </div>
                    
                    
                </form>
            </div>
            
            
        </div>
    );
};

export default Login;