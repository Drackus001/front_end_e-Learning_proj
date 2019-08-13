import React, { Component } from 'react'

import './css/Home.css'
import './css/style.css'
import temple from './res/temple1.jpg'
import Home from './Home'

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
                <imgage src={temple} alt="temple image" />
                <form onSubmit={this.login} className="form">
                    <div className="container">
                        <div className="logo-guestlogin">
                            <h1>logo</h1>
                            <a href={<Home />} className=''><button type='button' className="btn-login">Guest Login</button></a>

                        </div>
                        <span></span>
                        <div className="regularlogin">

                            <p>Please enter your username and password to login.</p>
                            <input type="text" value={username} onChange={this.handleUserNameChange} name="username" placeholder="Username" id="username" className="inputs" /><br />
                            <input type="password" value={password} onChange={this.handlePasswordChange} name="password" placeholder="Password" id="password" className="inputs" /><br />
                            <a href={<Home />} className="Forgot">Forgot Password?</a>
                            <button type='submit' className="btn-login">Login <i className="fas fa-long-arrow-alt-right"></i></button>

                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
