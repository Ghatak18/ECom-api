// Header.js
import React from 'react';
import './Header.css'; // Import Header component-specific CSS for styling
import { GiEagleEmblem } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const handleHome = () => {
        navigate('/')
    }
    return (
        <header className="header">
            <GiEagleEmblem onClick={handleHome} className='logo'/>
        </header>
    );
};

export default Header;
