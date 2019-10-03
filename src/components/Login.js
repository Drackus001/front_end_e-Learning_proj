import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './css/login.css'
//import temple from './res/temple1.jpg'

class Login extends Component {

    // componentDidMount() {
    //     document.body.className = "login-component" // Or set the class
    // }
    // componentDidUpdate() {
    //     document.body.className = "login-component" // Or set the class
    // }

    render() {

        return (
            // <Wrapper>
            <div className="col-md-12">
                <div className="panel">
                    <div class="panel-body">
                        <div className="row">
                            <div className="col-md-5 text-center guest-login">
                                <img src="#" alt="LOGO" /><br />
                                <Link to='/home'> <button className="btn btn-danger rounded-pill btn-sm">Guest Login</button></Link>
                            </div>

                            <div className="col-md-7 regular-login">
                                <form className="form-horizontal">
                                    <p>Please enter your username and password to login.</p>
                                    <input id="textinput" name="textinput" type="text" placeholder="Enter User Name"
                                        className="form-control rounded-pill input-md" /><br />
                                    <input id="textinput" name="textinput" type="text" placeholder="Enter Password"
                                        className="form-control rounded-pill input-md" /><br />
                                    <div className="spacing forgot"><Link href="#"><small> Forgot Password?</small></Link></div>
                                    <Link to='/home'>
                                        <button id="sign-in" name="sign-in" className="btn btn-danger pull-right rounded-pill">Sign-In</button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
