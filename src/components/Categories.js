import React from 'react';
import LeftNav from './layouts/LeftNavBar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styles from './css/categories.module.css'
import temple from './res/temple1.jpg';
import Logo from './res/LOGO.png';


const Categories = () => {
    return (
        <Wrapper>
            <img src={temple} alt="background" />
            <Overlay>
                <LeftNav />
                <Header>
                    <Link to="/home/audio" className={styles.logo_title}>
                        <h1>Navigation</h1>
                    </Link>
                    <Link to="/home" className={styles.user}>Account &nbsp;<i className="fas fa-user-circle fa-2x"></i></Link>
                </Header>

                <Section>
                    <Container>
                        <Link to="Search.html">
                            <BoxStyle className={styles.box_1}>
                                <div className={styles.content}>
                                    <i className="fas fa-map-marker fa-3x"></i>
                                    <h1>Location</h1>
                                </div>
                            </BoxStyle>
                        </Link>

                        <Link to="Favorite.html">
                            <BoxStyle className={styles.box_2}>
                                <div className={styles.content}>
                                    <i className="fas fa-calendar fa-3x"></i>
                                    <h1>Date</h1>
                                </div>
                            </BoxStyle>
                        </Link>

                        <Link to="Playlist.html">
                            <BoxStyle className={styles.box_3}>
                                <div className={styles.content}>
                                    <i className="fas fa-calendar-day fa-3x"></i>
                                    <h1>Event</h1>
                                </div>
                            </BoxStyle>
                        </Link>

                        <Link to="History.html">
                            <BoxStyle className={styles.box_4}>
                                <div className={styles.content}>
                                    <i className="fas fa-clipboard-list fa-3x"></i>
                                    <h1>Subject</h1>
                                </div>
                            </BoxStyle>
                        </Link>

                        <Link to="dictionary.html">
                            <BoxStyle className={styles.box_5}>
                                <div className={styles.content}>
                                    <i className="fas fa-microphone fa-3x"></i>
                                    <h1>Shibir</h1>
                                </div>
                            </BoxStyle>
                        </Link>
                        <Link to="dictionary.html">
                            <BoxStyle className={styles.box_1}>
                                <div className={styles.content}>
                                    <i className="far fa-user fa-3x"></i>
                                    <h1>Vakta</h1>
                                </div>
                            </BoxStyle>
                        </Link>
                        <Link to="dictionary.html">
                            <BoxStyle className={styles.box_4}>
                                <div className={styles.content}>
                                    <i className="fas fa-globe fa-3x"></i>
                                    <h1>Language</h1>
                                </div>
                            </BoxStyle>
                        </Link>
                        <Link to="dictionary.html">
                            <BoxStyle className={styles.box_3}>
                                <div className={styles.content}>
                                    <i className="fas fa-user-friends fa-3x"></i>
                                    <h1>Audience</h1>
                                </div>
                            </BoxStyle>
                        </Link>
                    </Container>

                </Section>
                <Footer>
                    <div className={styles.bottom_player}>
                        player
                    </div>
                </Footer>

            </Overlay>
        </Wrapper>
    );
}


const Wrapper = styled.div`
    margin: 0%;
    padding: 0%;
    height: 100vh;
    
`;

const Overlay = styled.div`
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(to bottom right, #d442f5b7, #410082b7);
    position: absolute;
    top: 0%;

`;

const Header = styled.header`
    background-color: rgba(0, 0, 0, 0.541);
    padding-top: 0%;
    margin-top: 0%;
    margin-left: 20vw;
    position: absolute;
    width: 80vw;
    height: 7vh;
    display: flex;
    align-items: center;
`;

const Section = styled.section`
    position: relative;
    display: grid;
    align-items: center;
    justify-items: center;
    max-height: 90vh;
    max-width: 100vw;
    padding-top: 70px;
    padding-bottom: 27px;

`;

const BoxStyle = styled.div`
    width: 150px;
    height: 150px;
    display: grid;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 25px;
`;

const Footer = styled.footer`
    background-color: rgb(0, 7, 20);
    color: white;
    height: 10vh;
    width: 80vw;
    margin-left: 20vw;
`;

const Container = styled.div`
    height: 75vh;
    width: 75vw;
    background: rgba(19, 23, 36, 0.699);
    display: grid;
    align-content: center;
    justify-content: center;
    grid-template-areas: "a a a a";
    grid-gap: 50px 50px;
    grid-auto-rows: auto;
    grid-column-gap: 10%;
    grid-row-gap: 4em;
    overflow: auto;
    margin-left: 20vw;
    a {
    text-decoration: none;
    width: 150px;
    height: 150px;
    }
    h1{
        font-size:1.8rem;
    }
`;




export default Categories;
