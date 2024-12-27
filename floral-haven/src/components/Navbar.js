import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Main.css';

function Navbar() {
    return (
        <aside className="navbar">
            <nav>
                <NavLink to="/" className="logo-link">
                    <img src="/images/logo.png" alt="Floral Haven Logo" />
                </NavLink>

                <br />

                <NavLink to="/bat" className={({ isActive }) => (isActive ? 'btn active' : 'btn')}>
                    Bats
                </NavLink>

                <br />

                <NavLink to="/butterfly" className={({ isActive }) => (isActive ? 'btn active' : 'btn')}>
                    Butterflies
                </NavLink>

                <br />

                <NavLink to="/bee" className={({ isActive }) => (isActive ? 'btn active' : 'btn')}>
                    Bees
                </NavLink>

                <br />

                <NavLink to="/hummingbird" className={({ isActive }) => (isActive ? 'btn active' : 'btn')}>
                    Hummingbirds
                </NavLink>

                <br />

                <NavLink to="/gardenlayout" className={({ isActive }) => (isActive ? 'btn active' : 'btn')}>
                    Garden Layouts
                </NavLink>

                <br />

                <NavLink to="/contactus" className={({ isActive }) => (isActive ? 'btn active' : 'btn')}>
                    Contact Us
                </NavLink>

                <br />

                <NavLink to="/signup" className={({ isActive }) => (isActive ? 'btn active' : 'btn')}>
                    Sign up
                </NavLink>

                <br />

                <NavLink to="/login" className={({ isActive }) => (isActive ? 'btn active' : 'btn')}>
                    Login
                </NavLink>
            </nav>
        </aside>
    );
}

export default Navbar;
