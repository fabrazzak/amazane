import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../images/Logo.svg'
import CustomLink from '../CustomLink/CustomLink';
import auth from '../firebase.init';
import './Header.css'

const Header = () => {
   
 const [user]=useAuthState(auth);
    const handleSignOut =()=>{
        signOut(auth);
    }
    return (
        <div className='header'>
            <img src={logo} alt="logo" />
            <ul className='list-iteam'>
               <li><CustomLink to="/shop">Shop</CustomLink></li>
               <li><CustomLink to="/order">Order</CustomLink></li>
               <li><CustomLink to="/order-review">Order Review</CustomLink></li>
               <li><CustomLink to="/manage-inventory">Manage Inventory</CustomLink></li>
               
               {
                 user? <button onClick={handleSignOut}>Sign Out</button>
                 :
                <li><CustomLink to="/login">Login</CustomLink></li>
               }
               
 
            </ul>
        </div>
    );
};

export default Header;