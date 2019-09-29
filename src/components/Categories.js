import React from 'react';
import './css/Categories.css'
import temple from './res/temple1.jpg';
import LeftNav from './LeftNavBar';
const Categories = () => {
    return (
       <div>
        <LeftNav/>
       <img src={temple} alt=""/>
        <div className="overlay">
            <header>
                <a href="index.html" className="logo-title"><h1>Navigation</h1></a>
                <a href="Home.html" className="user"><i className="fas fa-user-circle fa-2x"></i></a>
            </header>
            
            <section>
                    
                
                <div className="container">
                    <a href="Search.html">
                        <div className="box-1 boxstyle">
                            <div className="content">
                                <i className="fas fa-map-marker fa-3x"></i>
                                <h1>Location</h1>
                            </div>
                        </div>
                    </a>
        
                    <a href="Favorite.html">
                        <div className="box-2 boxstyle">
                            <div className="content">
                                <i className="fas fa-calendar fa-3x"></i>
                                <h1>Date</h1>
                            </div>
                        </div>
                    </a>
        
                    <a href="Playlist.html">
                        <div className="box-3 boxstyle">
                            <div className="content">
                                <i className="fas fa-calendar-day fa-3x"></i>
                                <h1>Event</h1>
                            </div>
                        </div>
                    </a>
                    
                    <a href="History.html">
                        <div className="box-4 boxstyle">
                            <div className="content">
                                <i className="fas fa-clipboard-list fa-3x"></i>
                                <h1>Subject</h1>
                            </div>
                        </div>
                    </a>
                    
                    <a href="dictionary.html">
                        <div className="box-5 boxstyle">
                            <div className="content">
                                <i className="fas fa-microphone fa-3x"></i>
                                <h1>Shibir</h1>
                            </div>
                        </div>
                    </a>
                    <a href="dictionary.html">
                        <div className="box-1 boxstyle">
                            <div className="content">
                                <i className="far fa-user fa-3x"></i>
                                <h1>Vakta</h1>
                            </div>
                        </div>
                    </a>
                    <a href="dictionary.html">
                        <div className="box-4 boxstyle">
                            <div className="content">
                                <i className="fas fa-globe fa-3x"></i>
                                <h1>Language</h1>
                            </div>
                        </div>
                    </a>
                    <a href="dictionary.html">
                        <div className="box-3 boxstyle">
                            <div className="content">
                                <i className="fas fa-user-friends fa-3x"></i>
                                <h1>Audience</h1>
                            </div>
                        </div>
                    </a>
                </div>
        
            </section>
            <footer>
                    <div className="bottom-player">
                            player
                        </div>
            </footer>
        </div> 
        </div>
    );
}

export default Categories;
