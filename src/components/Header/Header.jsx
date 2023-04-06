import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <ul>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/about">About</ActiveLink>
                <ActiveLink to="/friends">Friends</ActiveLink>
                <ActiveLink to="/contact">Contact</ActiveLink>
            </ul>
        </div>
    );
};

export default Header;