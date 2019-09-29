import React, { Component } from 'react'
import { Link } from 'react-router-dom';

//import './css/Home.css'
import styles from './css/login.module.css'
import temple from './res/temple1.jpg'


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
                <img src={temple} alt="temple img" />
                <form onSubmit={this.login} className={styles.form}>
                    <div className={styles.container}>
                        <div className={styles.logo_guestlogin}>
                            <h1>logo</h1>
                            <Link to='/home'>
                                <button type='button' className={styles.btn_login}>Guest Login</button>
                            </Link>

                        </div>
                        <span></span>
                        <div className={styles.regularlogin}>

                            <p>Please enter your username and password to login.</p>
                            <input type="text" value={username} onChange={this.handleUserNameChange} name="username" placeholder="Username" id="username" className={styles.inputs} /><br />
                            <input type="password" value={password} onChange={this.handlePasswordChange} name="password" placeholder="Password" id="password" className={styles.inputs} /><br />
                            <Link to='/' className={styles.Forgot}>
                                Forgot Password?
                            </Link>

                            <Link to='/home'>
                                <button type='submit' className={styles.btn_login}>Login <i className="fas fa-long-arrow-alt-right"></i></button>
                            </Link>

                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
