import React, { Component } from 'react'
import styles from './css/home.module.css'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import temple from './res/temple1.jpg';

const Wrapper = styled.div`
    margin: 0%;
    padding: 0%;
    height: 100vh;
`;

const Header = styled.div`
    background-color: rgba(0, 0, 0, 0.541);
    padding-top: 0%;
    margin-top: 0%;
    position: absolute;
    width: 100vw;
    display: flex;
    align-items: center;

`;

const Overlay = styled.div`
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(to bottom right, #d442f5b7, #410082b7);
    position: absolute;
    top: 0%;

    @media (max-width: 1000px) {
        height: 130vh;
        width: 100%;
        background-image: linear-gradient(to bottom right, #d442f5b7, #410082b7);
        position: absolute;
        top: 0%;
    }
    
    @media (max-width: 550px) {
        height: 210vh;
        width: 100%;
        background-image: linear-gradient(to bottom right, #d442f5b7, #410082b7);
        position: absolute;
        top: 0%;
    }
`;

const Section = styled.div`
    position: relative;
    display: grid;
    align-items: center;
    justify-items: center;
    max-height: 90vh;
    max-width: 100vw;
    padding-top: 150px;
`;

const Container = styled.div`
    display: grid;
    grid-template-areas: "a a a";
    grid-gap: 50px 150px;
    grid-auto-rows: auto;

    @media (max-width: 1000px) {
        display: grid;
        grid-template-areas: "a a";
        grid-gap: 50px 150px;
        grid-auto-rows: auto;
    }
    @media (max-width: 550px) {  
        display: grid;
        grid-template-areas: "a";
        grid-gap: 50px 150px;
        grid-auto-rows: auto;
    }

`;

class Home extends Component {
    render() {
        return (

            <Wrapper>
                <img src={temple} alt="" />
                <Overlay>
                    <Header>
                        <Link to="/home" className={styles.logo_title}>
                            <h1>Logo</h1>
                        </Link>
                        <Link to='/home' className={styles.user}>
                            <i className="fas fa-user-circle fa-2x" />Account
                        </Link>

                    </Header>
                    <Section>
                        <Container>

                            <Link to='/home/audio' className={styles.A}>
                                <div className={styles.box_1 + ' ' + styles.boxstyle}>
                                    <div className={styles.content}>
                                        <i className="fas fa-music fa-3x"></i>
                                        <h1>Audio</h1>
                                    </div>
                                </div>
                            </Link>

                            <Link to='/home/video' className={styles.A}>
                                <div className={styles.box_2 + ' ' + styles.boxstyle}>
                                    <div className={styles.content}>
                                        <i className="fas fa-film fa-3x"></i>
                                        <h1>Video</h1>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/home/ebooks' className={styles.A}>
                                <div className={styles.box_3 + ' ' + styles.boxstyle}>
                                    <div className={styles.content}>
                                        <i className="fas fa-atlas fa-3x"></i>
                                        <h1>eBooks</h1>
                                    </div>
                                </div>
                            </Link>

                            <Link to='/home/training' className={styles.A}>
                                <div className={styles.box_4 + ' ' + styles.boxstyle}>
                                    <div className={styles.content}>
                                        <i className="fas fa-user-graduate fa-3x"></i>
                                        <h1>Training</h1>
                                    </div>
                                </div>
                            </Link>

                            <Link to='/home/dictionary' className={styles.A}>
                                <div className={styles.box_5 + ' ' + styles.boxstyle}>
                                    <div className={styles.content}>
                                        <i className="fas fa-spell-check fa-3x"></i>
                                        <h1>Dictionary</h1>
                                    </div>
                                </div>
                            </Link>
                        </Container>
                    </Section>
                </Overlay>

            </Wrapper >
        )
    }
}

export default Home
