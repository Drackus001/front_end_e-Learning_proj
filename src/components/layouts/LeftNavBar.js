import React from 'react';

import styles from '../css/leftnavbar.module.css'
import { styled } from 'styled-components'
import logo from '../res/LOGO.png'
import { Link } from 'react-router-dom';

const flex = 'flex-column'
const LeftNavBar = () => {
  return (
    <div className={styles.leftnav}>
      <img src={logo} alt="LOGO" className={styles.logopng} />
      <ul className={styles.nav + ' ' + flex}>
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
    </div >

  );
}

export default LeftNavBar;


