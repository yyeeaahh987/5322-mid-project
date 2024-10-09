import * as React from 'react';
import Grid from '@mui/material/Grid2';
import usagi from '../img/usagi.jpeg'
import './introduction.css'

function Introduction() {
    return (
        <>
            <Grid container>
                <Grid size={6}>
                    <Grid container justifyContent={"center"} alignContent={"center"}>
                        <img src={usagi} alt="Usagi" className="profile-pic"></img>
                    </Grid>
                </Grid>
                <Grid size={6}>
                    <Grid container justifyContent={"center"} alignContent={"center"}>
                        <span className="word">👋 I am Sunny</span>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default Introduction;