import React from 'react';
import styles from './css/categories.module.css'
import temple from './res/temple1.jpg';
import LeftNav from './LeftNavBar';
import { Link } from 'react-router-dom';
const Categories = () => {
    return (
        <div>
            {/* <LeftNav /> */}
            <img src={temple} alt="" />
            <div className={styles.overlay}>
                <header>
                    <Link to="/" className={styles.logo_title}>
                        <h1>Navigation</h1>
                    </Link>
                    <Link to="/home" className={styles.user}>
                        <i className="fas fa-user-circle fa-2x"></i>
                    </Link>
                </header>

                <section>


                    <div className={styles.container}>
                        <Link to="/home/audio/location">
                            <div className={styles.box_1 + ' ' + styles.boxstyle}>
                                <div className={styles.content}>
                                    <i className="fas fa-map-marker fa-3x"></i>
                                    <h1>Location</h1>
                                </div>
                            </div>
                        </Link>

                        <Link to="/home/audio/date">
                            <div className={styles.box_2 + ' ' + styles.boxstyle}>
                                <div className={styles.content}>
                                    <i className="fas fa-calendar fa-3x"></i>
                                    <h1>Date</h1>
                                </div>
                            </div>
                        </Link>

                        <Link to="/home/audio/event">
                            <div className={styles.box_3 + ' ' + styles.boxstyle}>
                                <div className={styles.content}>
                                    <i className="fas fa-calendar-day fa-3x"></i>
                                    <h1>Event</h1>
                                </div>
                            </div>
                        </Link >

                        <Link to="/home/audio/subject">
                            <div className={styles.box_4 + ' ' + styles.boxstyle}>
                                <div className={styles.content}>
                                    <i className="fas fa-clipboard-list fa-3x"></i>
                                    <h1>Subject</h1>
                                </div>
                            </div>
                        </Link>

                        <Link to="/home/audio/shibir">
                            <div className={styles.box_5 + ' ' + styles.boxstyle}>
                                <div className={styles.content}>
                                    <i className="fas fa-microphone fa-3x"></i>
                                    <h1>Shibir</h1>
                                </div>
                            </div>
                        </Link >

                        <Link href="/home/audio/vakta">
                            <div className={styles.box_1 + ' ' + styles.boxstyle}>
                                <div className={styles.content}>
                                    <i className="far fa-user fa-3x"></i>
                                    <h1>Vakta</h1>
                                </div>
                            </div>
                        </Link >

                        <Link href="/home/audio/language">
                            <div className={styles.box_4 + ' ' + styles.boxstyle}>
                                <div className={styles.content}>
                                    <i className="fas fa-globe fa-3x"></i>
                                    <h1>Language</h1>
                                </div>
                            </div>
                        </Link >

                        <Link to="/home/audio/audience">
                            <div className={styles.box_3 + ' ' + styles.boxstyle}>
                                <div className={styles.content}>
                                    <i className="fas fa-user-friends fa-3x"></i>
                                    <h1>Audience</h1>
                                </div>
                            </div>
                        </Link >
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
