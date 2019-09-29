import React from 'react';
import './css/leftnavbar.css'
import {Link} from 'react-router-dom';
const LeftNavBar = () => {
    return (
        <div className="leftnav">
        <img src="res/LOGO.png" alt="LOGO" className="logopng"/>
        <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to='/home' className="nav-link active">
                  <i className="fas fa-home"></i>
                  Home
                  </Link>
                  {/* <a className="nav-link active" href="Home.html"><i className="fas fa-home"></i>Home</a> */}
                </li>
                <li className="nav-item">
                <Link to='/Categories' className="nav-link">
                  <i className="fas fa-home"></i>
                  Search
                  </Link>
                  {/* <a className="nav-link" href="#"><i className="fas fa-search"></i>Search</a> */}
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="home.html"><i className="fas fa-star"></i>Favorite</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="home.html"><i className="fas fa-list"></i>Playlist</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="home.html"><i className="fas fa-history"></i>History</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="home.html"><i className="fas fa-sign-out-alt"></i>Logout</a>
                </li>
              </ul>
    </div>
    
    );
}

export default LeftNavBar;
