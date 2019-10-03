import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import styled from 'styled-components'
//import { style } from './css/login.css'
import temple from './res/temple1.jpg'

const Wrapper = styled.div`
margin: 0%;
  padding: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* The image used */
  background-image: url(${temple});
  /* Full height */
  height: 100vh;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  `;

const Panel = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 2rem;
  margin-left: 17%;
  max-width: 100%;
`;

const GuestLogin = styled.div`
margin-top: 10%;

@media(max-width:768px) {
    margin-top: -2%;
    margin-bottom: 1rem;
  }
`;

const RegularLogin = styled.div`
  border-left: 1px solid rgb(255, 136, 0);
  height: 60%;
  padding: 1rem;

  @media(max-width:768px) {
    border-left: none;
    border-top: 1px solid rgb(255, 136, 0);

  }
`;

const Paragraph = styled.p`
    color: rgb(141, 141, 141);
    font-size: .8rem;
`;

const ForgetLeft = styled.div`
float:right;
`;



class Login extends Component {

    render() {

        return (
            <Wrapper>
                <div className="col-md-6">
                    <Panel>
                        <div class="panel-body">
                            <div className="row">
                                <GuestLogin className="col-md-5 text-center">
                                    <img src="#" alt="LOGO" /><br />
                                    <Link to='/home'> <button className="btn btn-danger rounded-pill btn-sm">Guest Login</button></Link>
                                </GuestLogin>

                                <RegularLogin className="col-md-7">
                                    <form className="form-horizontal">
                                        <Paragraph>Please enter your username and password to login.</Paragraph>
                                        <input id="textinput" name="textinput" type="text" placeholder="Enter User Name"
                                            className="form-control rounded-pill input-md" /><br />
                                        <input id="textinput" name="textinput" type="text" placeholder="Enter Password"
                                            className="form-control rounded-pill input-md" /><br />
                                        <ForgetLeft className="spacing" ><Link to="/home"><small> Forgot Password?</small></Link></ForgetLeft>
                                        <Link to='/home'>
                                            <button id="sign-in" name="sign-in" className="btn btn-danger pull-left rounded-pill">Sign-In</button>
                                        </Link>
                                    </form>
                                </RegularLogin>
                            </div>
                        </div>
                    </Panel>
                </div>
            </Wrapper>
        )
    }
}

export default Login
