import React from "react";
import './Navbar.css';
import {NavLink} from "react-router-dom";
import s from './Navbar.css'

const Navbar = () => {
    return <nav className='nav'>
        <div className='item'>
            <NavLink to="/profile">Profile</NavLink>
            {/*to do lesson 20 add activeClassName in a*/}

        </div>
        <div className='item'>
            <NavLink to="/dialogs">Messages</NavLink>
        </div>
        <div className='item'>

        </div>
        <div className='item'>

        </div>
    </nav>
}

export default Navbar;