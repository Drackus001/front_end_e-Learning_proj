import React, { Component } from 'react'
import styles from './css/home.module.css'
import { Link } from 'react-router-dom';

import temple from './res/temple1.jpg';

class Home extends Component {
    render() {
        return (

            <div >
                <img src={temple} alt="" />
                <div className={styles.overlay}>
                    <header>
                        <Link to="/" className={styles.logo_title}>
                            {/* <a href="index.html" className="logo-title"> */}
                            <h1>Logo</h1>
                            {/* </a> */}
                        </Link>
                        <Link to='/home' className={styles.user}>
                            <i className="fas fa-user-circle fa-2x" />
                        </Link>
                        {/* <a href="Home.html" className="user"><i className="fas fa-user-circle fa-2x"></i></a> */}
                    </header>
                    <section>
                        <div className={styles.container}>

                            <Link to='/home/audio'>
                                <div className={styles.box_1 + ' ' + styles.boxstyle}>
                                    <div className={styles.content}>
                                        <i className="fas fa-music fa-3x"></i>
                                        <h1>Audio</h1>
                                    </div>
                                </div>
                            </Link>

                            <Link to='/home/video'>
                                <div className={styles.box_2 + ' ' + styles.boxstyle}>
                                    <div className={styles.content}>
                                        <i className="fas fa-film fa-3x"></i>
                                        <h1>Video</h1>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/home/ebooks'>
                                <div className={styles.box_3 + ' ' + styles.boxstyle}>
                                    <div className={styles.content}>
                                        <i className="fas fa-atlas fa-3x"></i>
                                        <h1>eBooks</h1>
                                    </div>
                                </div>
                            </Link>

                            <Link to='/home/training'>
                                <div className={styles.box_4 + ' ' + styles.boxstyle}>
                                    <div className={styles.content}>
                                        <i className="fas fa-user-graduate fa-3x"></i>
                                        <h1>Training</h1>
                                    </div>
                                </div>
                            </Link>

                            <Link to='/home/dictionary'>
                                <div className={styles.box_5 + ' ' + styles.boxstyle}>
                                    <div className={styles.content}>
                                        <i className="fas fa-spell-check fa-3x"></i>
                                        <h1>Dictionary</h1>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </section>
                </div>

            </div >
        )
    }
}

export default Home
