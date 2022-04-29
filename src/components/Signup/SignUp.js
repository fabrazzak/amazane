import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const SignUp = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [conformPassword,setConformPassword]=useState('');
    const [error,setError]=useState('');
    const navigate = useNavigate();
   

    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);

    const handleOnBlurEmail=event=>{
        setEmail(event.target.value);
       
    }
    const handleOnBlurPassword=event=>{
        setPassword(event.target.value);
    }
    const handleOnBlurConformPassword=event=>{
        setConformPassword(event.target.value);
    }
    if(user){
        navigate('/');
    }
    const handleCreateUser=event=>{
        event.preventDefault();
        if (password!==conformPassword){
            const error= " Your password did not match."
            setError(error);
            return;

        }
        if(password.length<6){
            const error="Your password should be 6 character"
            setError(error);
            return;
        }
        createUserWithEmailAndPassword(email,password);
       sendEmailVerification();
       

        
    }
    


    return (
        <div className='form-section-signup'>
            <div className="form-container">
                <h1 className='form-title'>Sign Up</h1>
                <form onSubmit={handleCreateUser}>
                    <div className="input-groupe">
                        <label className='input-lebel' htmlFor="email">Email</label>
                        <input onBlur={handleOnBlurEmail}  className='input-filed' type="email" name="email" id="" />
                    </div>

                    <div className="input-groupe">
                        <label className='input-lebel' htmlFor="password">Password</label>
                        <input onBlur={handleOnBlurPassword} className='input-filed' type="password" name="password" id="2" />
                    </div>
                    <p style={{"color":"red"}}>{error}</p>
                    <div className="input-groupe">
                        <label className='input-lebel' htmlFor="conform-password">Conform Password</label>
                        <input onBlur={handleOnBlurConformPassword} className='input-filed' type="password" name="conform-password" id="3" />
                    </div>
                    <div >
                        <input className="form-btn" type="submit" value="Sign Up" />
                    </div>
                    <p className='form-login-signin'>Already have an account? <Link className='form-link' to="/login">Login</Link></p>
                    <div className='form-divider-container'>
                        <div className="form-divider"></div>
                        <p style={{ 'padding': '0px 15px' }}>or</p>
                        <div className="form-divider"></div>
                    </div>
                    <div className="form-with-google">

                        <button className='form-with-google-btn'>
                            <img className='form-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs8cgOljc_5-YsbcchW969FewKTTqRuhUZmg&usqp=CAU' alt="" /> <p> Continue with Google</p></button>
                    </div>


                </form>
            </div>


        </div>
    );
};

export default SignUp;