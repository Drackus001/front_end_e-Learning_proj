import React from 'react';
import styles from './css/categories.module.css'
import temple from './res/temple1.jpg';
import LeftNav from './LeftNavBar';
//import { Link } from 'react-router-dom';
const Categories = () => {
    return (
        <div>
            <LeftNav />
            <img src={temple} alt="" />
            <div className={styles.overlay}>
                <header>
                    <a href="index.html" className={styles.logo_title}><h1>Navigation</h1></a>
                    <a href="Home.html" className={styles.user}><i className="fas fa-user-circle fa-2x"></i></a>
                </header>

                <section>


                    <div className={styles.container}>
                        <a href="Search.html">
                            <div className={styles.box_1 + ' ' + styles.boxstyle}>
                                <div className={styles.content}>
                                    <i className="fas fa-map-marker fa-3x"></i>
                                    <h1>Location</h1>
                                </div>
                            </div>
                        </a>

                        <a href="Favorite.html">
                            <div className={styles.box_2 + ' ' + styles.boxstyle}>
                                <div className={styles.content}>
                                    <i className="fas fa-calendar fa-3x"></i>
                                    <h1>Date</h1>
                                </div>
                            </div>
                        </a >

                        <a href="Playlist.html">
                            <div className={styles.box_3 + ' ' + styles.boxstyle}>
                                <div className={styles.content}>
                                    <i className="fas fa-calendar-day fa-3x"></i>
                                    <h1>Event</h1>
                                </div>
                            </div>
                        </a >

                        <a href="History.html">
                            <div className={styles.box_4 + ' ' + styles.boxstyle}>
                                <div className={styles.content}>
                                    <i className="fas fa-clipboard-list fa-3x"></i>
                                    <h1>Subject</h1>
                                </div>
                            </div>
                        </a >

                        <a href="dictionary.html">
                            <div className={styles.box_5 + ' ' + styles.boxstyle}>
                                <div className={styles.content}>
                                    <i className="fas fa-microphone fa-3x"></i>
                                    <h1>Shibir</h1>
                                </div>
                            </div>
                        </a >
                        <a href="dictionary.html">
                            <div className={styles.box_1 + ' ' + styles.boxstyle}>
                                <div className={styles.content}>
                                    <i className="far fa-user fa-3x"></i>
                                    <h1>Vakta</h1>
                                </div>
                            </div>
                        </a >
                        <a href="dictionary.html">
                            <div className={styles.box_4 + ' ' + styles.boxstyle}>
                                <div className={styles.content}>
                                    <i className="fas fa-globe fa-3x"></i>
                                    <h1>Language</h1>
                                </div>
                            </div>
                        </a >
                        <a href="dictionary.html">
                            <div className={styles.box_3 + ' ' + styles.boxstyle}>
                                <div className={styles.content}>
                                    <i className="fas fa-user-friends fa-3x"></i>
                                    <h1>Audience</h1>
                                </div>
                            </div>
                        </a >
                    </div >

                </section >
                <footer>
                    <div className={styles.bottom_player}>
                        player
                        </div>
                </footer >
            </div >
        </div >
    );
}

export default Categories;
