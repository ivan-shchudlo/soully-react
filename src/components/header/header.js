import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header () 
{
    return (
        <header className="top-menu">

        <nav className="top-menu-nav">
            <div className="logo">
                  LOGO
            </div>
        <div className="centered">
            <ul className="top-menu-nav-list">
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>

                <Link to="/recomendations">Day</Link>
                </li>
                <li>

                <Link to="/month">Month</Link>

                </li>
                <li>
                <Link to="/stories">Stories</Link>

                </li>
            </ul>
        </div>
            <div className="top-menu-nav-list">
                <li>
                   Log out
                 </li>
            </div>
        </nav>
    </header>
    );
    
}
export default Header;