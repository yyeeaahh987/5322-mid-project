

import { useEffect, useState } from 'react';
import './App.css';
import Home from './Home'
import Bar from './Bar/Bar'
import Chiikawa from './Chiikawa/Chiikawa'
import Mahjong from './Mahjong/Mahjong'
import party from './audio/party.flac'
import nounToTop from './img/nounToTop.png'

import {
  Routes,
  Route,
  Outlet,
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';

const REACT_APP_DOMAIN = process.env.REACT_APP_DOMAIN

export default function App() {
  const [clickedSection, setClickedSection] = useState(null);
  const [isPlayBgm, setIsPlayBgm] = useState(false)
  useEffect(() => {
    var aud = document.getElementById("chiikawaAudio")
    if (isPlayBgm === true) {
      aud.play();
    } else {
      aud.pause();
    }
  }, [isPlayBgm])

  // console.log(`clickedSection`,clickedSection)

  useEffect(()=>{
    console.log(`clickedSection`,clickedSection)
  },[clickedSection])

  useEffect(() => {
      if (clickedSection === "Introduction") {
          // setClickedSection(null)
          window.location.href = `${REACT_APP_DOMAIN}#introduction`
      } else if (clickedSection === "Profile") {
          // setClickedSection(null)
          window.location.href = `${REACT_APP_DOMAIN}#profile`;
      } else if (clickedSection === "Contact") {
          // setClickedSection(null)
          window.location.href = `${REACT_APP_DOMAIN}#contact`;
      } else if (clickedSection === undefined || clickedSection === null || clickedSection === "Top") {

      } else {
          // setClickedSection(null)
      }
  }, [clickedSection])

  function handleBackToTop(){
    // setClickedSection("Top")
    window.location.href = `${REACT_APP_DOMAIN}#`;
  }

  return (
    <>
      <audio id="chiikawaAudio" autoPlay loop="loop" preload="auto" src={party}></audio>
      <section id="top"></section>
      <Bar clickedSection={clickedSection} setClickedSection={setClickedSection} isPlayBgm={isPlayBgm} setIsPlayBgm={setIsPlayBgm}></Bar>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Routes>
          <Route path="/" element={<Home clickedSection={clickedSection} setClickedSection={setClickedSection} />}>
          </Route>
          <Route path="chiikawa" element={<Chiikawa />} />
          <Route path="mahjong" element={<Mahjong />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <IconButton className='back-to-top' onClick={handleBackToTop}>
          {/* <NavigationIcon></NavigationIcon> */}
          <img src={nounToTop} className='noun-to-top'></img>
        </IconButton>
      </Box>

      {/* <Grid container justifyContent="center">
        <Grid size={12}> */}
      {/* <Box> */}

      {/* </Box> */}
      {/* </Grid>
      </Grid> */}


    </>
  );
}

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ textDecoration: match ? "underline" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && " (active)"}
    </div>
  );
}
