import React from 'react';
//import styles from './css/leftnavbar.module.css'
import './css/leftnavbar.css'
import logo from './res/LOGO.png'
import { Link } from 'react-router-dom';

const LeftNavBar = () => {
  return (
    <div className="leftnav">
      <img src={logo} alt="LOGO" className="logopng" />
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to='/home' className="nav-link active">
            <i className="fas fa-home"></i>
            Home
          </Link>

        </li>
        <li className="nav-item">
          <Link to='/search' className="nav-link">
            <i className="fas fa-home"></i>
            Search
          </Link>

        </li>
        <li className="nav-item">
          <Link to='/favourite' className="nav-link">
            <i className="fas fa-star"></i>
            Favorite
          </Link>

        </li>
        <li className="nav-item">
          <Link to='/playlist' className="nav-link">
            <i className="fas fa-list"></i>
            Playlist
          </Link>

        </li>
        <li className="nav-item">
          <Link to='/history' className="nav-link">
            <i className="fas fa-history"></i>
            History
          </Link>

        </li>
        <li className="nav-item">
          <Link to='/logout' className="nav-link">
            <i className="fas fa-sign-out-alt"></i>
            Logout
          </Link>

        </li>
      </ul>
    </div>

  );
}

export default LeftNavBar;
