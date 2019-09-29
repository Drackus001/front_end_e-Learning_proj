import React, { Component } from 'react'
import './css/Home.css'
import { Link } from 'react-router-dom';

import temple from './res/temple1.jpg'

class Home extends Component {
    render() {
        return (

            <div>
                <img src={temple} alt="" />
                <div className="overlay">
                    <header>
                        <Link to="/" className="logo-title">
                            {/* <a href="index.html" className="logo-title"> */}
                            Logo
                        {/* </a> */}
                        </Link>
                        <Link to='/home' className='user'>
                            <i className="fas fa-user-circle fa-2x"></i>
                        </Link>
                        {/* <a href="Home.html" className="user"><i className="fas fa-user-circle fa-2x"></i></a> */}
                    </header>
                    <section>
                        <div className="container">

                            <Link to='/home/audio'>
                                <div className="box-1 boxstyle">
                                    <div className="content">
                                        <i className="fas fa-music fa-3x"></i>
                                        <h1>Audio</h1>
                                    </div>
                                </div>
                            </Link>
                          
                          <Link to='/home/video'>
                          <div className="box-2 boxstyle">
                                    <div className="content">
                                        <i className="fas fa-film fa-3x"></i>
                                        <h1>Video</h1>
                                    </div>
                                </div>
                          </Link>
                            <Link to='/home/ebooks'>
                            <div className="box-3 boxstyle">
                                    <div className="content">
                                        <i className="fas fa-atlas fa-3x"></i>
                                        <h1>eBooks</h1>
                                    </div>
                                </div>
                            </Link>
                            
                            <Link to='/home/training'>
                            <div className="box-4 boxstyle">
                                    <div className="content">
                                        <i className="fas fa-user-graduate fa-3x"></i>
                                        <h1>Training</h1>
                                    </div>
                                </div>
                            </Link>

                            <Link to='/home/dictionary'>
                            <div className="box-5 boxstyle">
                                    <div className="content">
                                        <i className="fas fa-spell-check fa-3x"></i>
                                        <h1>Dictionary</h1>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </section>
                </div>

            </div>
        )
    }
}

export default Home
