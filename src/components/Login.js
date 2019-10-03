import React, { Component } from 'react'
import { Link } from 'react-router-dom';

//import './css/Home.css'
import './css/login.module.css'
import temple from './res/temple.jpg';
import logo from './res/LOGO.png'


class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    login = () => {
        alert(` username=${this.state.username}
                password=${this.state.password}`)
    }

    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        const { username, password } = this.state
        return (

            <div>
                <div className="col-md-8 middlePage">
                    <div className="panel">
                        <div className="panel_body">
                            <div className="row">
                                <div className="col-md-5 text-center guest_login">
                                    {/* <img src={logo} alt="LOGO" /><br /> */}
                                    <button className="btn btn-danger rounded-pill btn-sm">Guest Login</button>
                                </div>

                                <div className="col-md-7 regular_login">
                                    <form className="form-horizontal">
                                        <p>Please enter your username and password to login.</p>
                                        <input id="textinput" name="textinput" type="text" placeholder="Enter User Name"
                                            className="form-control rounded-pill input-md" /> <br />
                                        <input id="textinput" name="textinput" type="text" placeholder="Enter Password"
                                            className="form-control rounded-pill input-md" /> <br />
                                        <div className="spacing forgot"><Link to="/"><small> Forgot Password?</small></Link></div>
                                        <Link to="/home"> <button id="sign-in" name="sign-in" className="btn btn-danger pull-right rounded-pill" >Sign In</button> </Link>
                                    </form>
                                </div>
                            </div >
                        </div >
                    </div >
                </div >
            </div >


            // <div>
            //     <img src={temple} alt="temple img" />
            //     <form onSubmit={this.login} className={styles.form}>
            //         <div className={styles.container}>
            //             <div className={styles.logo_guestlogin}>
            //                 <h1>logo</h1>
            //                 <Link to='/home'>
            //                     <button type='button' className={styles.btn_login}>Guest Login</button>
            //                 </Link>

            //             </div>
            //             <span></span>
            //             <div className={styles.regularlogin}>

            //                 <p>Please enter your username and password to login.</p>
            //                 <input type="text" value={username} onChange={this.handleUserNameChange} name="username" placeholder="Username" id="username" className={styles.inputs} /><br />
            //                 <input type="password" value={password} onChange={this.handlePasswordChange} name="password" placeholder="Password" id="password" className={styles.inputs} /><br />
            //                 <Link to='/' className={styles.Forgot}>
            //                     Forgot Password?
            //                 </Link>

            //                 <Link to='/home'>
            //                     <button type='submit' className={styles.btn_login}>Login <i className="fas fa-long-arrow-alt-right"></i></button>
            //                 </Link>

            //             </div>
            //         </div>
            //     </form>
            // </div>
        )
    }
}

export default Login
