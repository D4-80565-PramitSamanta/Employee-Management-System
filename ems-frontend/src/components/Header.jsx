import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div>
            <header>
                <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                    <a className="navbar-brand" href='https://www.javaguides.net'>EMS</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink exact to="/employees" className="nav-link">Employees</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/departments" className="nav-link">Departments</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
