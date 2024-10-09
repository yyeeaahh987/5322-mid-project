import logo from './logo.svg';
import './App.css';
import Bar from './Bar/Bar'
import Profile from './Profile/Profile';
import Introduction from './Introduction/Introduction';
import Contact from './Contact/Contact';
import "./Home.css"

import Grid from '@mui/material/Grid2';
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

const REACT_APP_DOMAIN = process.env.REACT_APP_DOMAIN

function Home({clickedSection}) {
    let location = useLocation();

    useEffect(()=>{
        if(location.hash === "#introduction"){
            window.location.href = `${REACT_APP_DOMAIN}#introduction`;
        }else if(location.hash === "#profile"){
            window.location.href = `${REACT_APP_DOMAIN}#profile`;
        }else if(location.hash === "#contact"){
            window.location.href = `${REACT_APP_DOMAIN}#contact`;
        }
    },[location.hash])

    return (
        <>
            <Grid container maxWidth="lg">
                <Grid size={12}>
                    <br></br>
                </Grid>
                <Grid size={12}>
                    <section id="introduction" className='introduction-section'>
                        <Introduction></Introduction>
                    </section>
                </Grid>
                <Grid size={12}>
                    <section id="profile">
                        <Profile></Profile>
                    </section>
                </Grid>
                <Grid size={12}>
                    <section id="contact">
                        <Contact></Contact>
                    </section>
                </Grid>
                <Grid size={12}>
                    <br></br>
                </Grid>
            </Grid>
        </>

        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
    );
}

export default Home;
