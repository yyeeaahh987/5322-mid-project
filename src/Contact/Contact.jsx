import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import TextField from '@mui/material/TextField';

import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import './Contact.css';
const LINKED_IN_PATH = "https://www.linkedin.com/";
const INSTAGRAM_PATH = "https://www.instagram.com/";
const FACEBOOK_PATH = "https://www.facebook.com/";
const X_PATH = "https://x.com/";

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    function handleNameOnChange(e) {
        let tempObj = form
        tempObj = {
            ...tempObj,
            name: e.target.value
        }
        setForm(tempObj)
    }

    function handleEmailOnChange(e) {
        let tempObj = form
        tempObj = {
            ...tempObj,
            email: e.target.value
        }
        setForm(tempObj)
    }

    function handleMessageOnChange(e) {
        let tempObj = form
        tempObj = {
            ...tempObj,
            message: e.target.value
        }
        setForm(tempObj)
    }

    function handleClear() {
        console.log(`handleClear`)
        setForm({
            name: "",
            email: "",
            message: "",
        })
    }

    function handleClickLinkedIn() {
        window.open(LINKED_IN_PATH)
    }
    function handleClickInstagram() {
        window.open(INSTAGRAM_PATH)
    }

    function handleClickFacebook() {
        window.open(FACEBOOK_PATH)
    }

    function handleClickX() {
        window.open(X_PATH)
    }

    return (
        <>
            <Grid container>
                <Grid size={6}>
                    <Grid size={12}>
                        <h3>My Contact</h3>
                    </Grid>
                    <Grid size={12}>
                        <Grid container alignContent={"center"} alignItems={"center"}>
                            <Grid>
                                <span>Email: kachun1993@connect.polyu.hk</span>
                            </Grid>
                            <Grid>
                                <a href="mailto:kachun1993@connect.polyu.hk" className="mail-button"><MailIcon></MailIcon></a>
                            </Grid>

                        </Grid>


                    </Grid>
                    <Grid size={12}>
                        <p>Phone: +852 6123 4567 <WhatsAppIcon className="whatsapp-button"></WhatsAppIcon></p>
                    </Grid>
                    <Grid size={12}>
                        <IconButton onClick={handleClickLinkedIn}>
                            <LinkedInIcon className='linked-in'></LinkedInIcon>
                        </IconButton>

                        <IconButton onClick={handleClickInstagram}>
                            <InstagramIcon className='instagram'></InstagramIcon>
                        </IconButton>

                        <IconButton onClick={handleClickFacebook}>
                            <FacebookIcon className='facebook'></FacebookIcon>
                        </IconButton>

                        <IconButton onClick={handleClickX}>
                            <XIcon className='x'></XIcon>
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid size={6}>
                    <Grid size={12}>
                        <TextField id="name" label="Your Name" variant="standard" placeholder="Your Name" value={form.name}
                            fullWidth
                            onChange={handleNameOnChange}
                        />
                    </Grid>
                    <Grid size={12}>
                        <TextField id="email" label="Your Email" variant="standard" placeholder="abc@aaa.com" value={form.email}
                            fullWidth
                            onChange={handleEmailOnChange}
                        />
                    </Grid>
                    <Grid size={12}>
                        <TextField id="message" maxRows={3} minRows={3}
                            label="Message" variant="standard" placeholder="Your Message"
                            value={form.message} multiline fullWidth
                            onChange={handleMessageOnChange}
                        />
                    </Grid>
                    <br></br>
                    <Grid size={12}>
                        <Button className="send-button">Send</Button><> </>
                        <Button className="clear-button" onClick={handleClear}>Clear</Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default Contact;