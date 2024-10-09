import Grid from '@mui/material/Grid2';

import Card from '../Component/Card'
import profile from '../img/profile.jpg'
import './Profile.css'

function Profile() {
    return (
        <>
            <Grid container>
                <Grid size={6}>
                    <h3 style={{ fontWeight: "600", fontSize: "30px", margin:"0px 0px 30px 0px"}}>Hi! Here is Sunny.</h3>
                    <p className="profile-text">I am a 2015 graduate from the City University of Hong Kong, where I majored in Electronic and Communication Engineering.With a strong foundation in cutting-edge technologies, I am passionate about developing innovative solutions in the tech industry. I has a keen interest in telecommunications and enjoys staying updated with the latest advancements.</p>
                    <p className="profile-text">My education equipped me with valuable skills in problem-solving and analytical thinking, which I apply in my professional endeavors. I am eager to contribute to projects that enhance connectivity and improve communication systems, striving to make a positive impact in the field.</p>
                </Grid>
                <Grid size={6}>
                    <Grid container justifyContent={"center"}>
                        <Grid size={12}>
                            <img src={profile} alt="Profile picture" className="profile-pic"></img>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid size={12}>
                    <ul className="info-list">
                        <li><strong>Name: Sunny, Yiu Ka Chun</strong></li>
                        <li><strong>Date of Birth: 01 October 1991</strong></li>
                        <li><strong>Email: kachun1993@connect.polyu.hk</strong></li>
                    </ul>
                </Grid>
                <Grid size={4}>
                    <Card
                        title={"Chiikawa"}
                        redirectLink={"/chiikawa"}
                        content={`"Chiikawa" is a popular Japanese manga series created by Nagano. It features cute, small creatures living in a whimsical world filled with adventures and challenges. The series is known for its heartwarming stories and charming illustrations, capturing the everyday lives of these tiny beings.`}
                    ></Card>
                </Grid>
                <Grid size={4}>
                    <Card
                        title={"Attending concerts"}
                        content={"Attending concerts. Immersing in live music energizes me and inspires creativity."}
                    ></Card>
                </Grid>
                <Grid size={4}>
                    <Card
                        title={"Mahjong"}
                        redirectLink={"/mahjong"}
                        content={"Playing Mahjong sharpens my analytical skills and provides relaxation, complementing"}
                    ></Card>
                </Grid>
            </Grid>
        </>
    )
}
export default Profile;