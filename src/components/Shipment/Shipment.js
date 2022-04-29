import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const Shipment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');

    const [user]=useAuthState(auth);

    


    const handleOnBlurName = event => {
        setName(event.target.value);

    }
    const handleOnBlurEmail = event => {
        setEmail(event.target.value);

    }
    const handleOnBlurAddress = event => {
        setAddress(event.target.value);
    }
    const handleOnBlurPhoneNumber = event => {
        setPhoneNumber(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const allInformation = name + " " + address + " " +phoneNumber;
        console.log(name,email,address,phoneNumber);
       



    }

    return (
        <div className='form-section-signup'>
            <div className="form-container">
                <h1 className='form-title'>Shipment Information</h1>
                <form onSubmit={handleCreateUser}>
                    <div className="input-groupe">
                        <label className='input-lebel' htmlFor="name">Your Name</label>
                        <input onBlur={handleOnBlurName} className='input-filed' type="text" name="email" id="" />
                    </div>
                    <div className="input-groupe">
                        <label className='input-lebel' htmlFor="email">Email</label>
                        <input readOnly  className='input-filed' type="email" name="email" id="" />
                    </div>

                    <div className="input-groupe">
                        <label className='input-lebel' htmlFor="address">Address</label>
                        <input onBlur={handleOnBlurAddress} className='input-filed' type="text" name="address" id="" />
                    </div>
                    <p style={{ "color": "red" }}>{error}</p>
                    <div className="input-groupe">
                        <label className='input-lebel' htmlFor="phone-number">Phone Number</label>
                        <input onBlur={handleOnBlurPhoneNumber} className='input-filed' type="text" name="phone-number" id="" />
                    </div>
                    <div >
                        <input className="form-btn" type="submit" value="Submit" />
                    </div>
                   
                   
                  


                </form>
            </div>


        </div>
    );
};

export default Shipment;