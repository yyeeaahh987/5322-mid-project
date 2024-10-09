import Grid from '@mui/material/Grid2';
import { useNavigate } from "react-router-dom";
import './Card.css'

function Card({ title, content, redirectLink }) {
    const navigate = useNavigate()

    function handleTitleOnClick() {
        navigate(redirectLink)
    }
    return (
        <>
            <Grid container>
                <Grid size={12}>
                    {redirectLink != null && <h3 className="card-title redirect-link" onClick={handleTitleOnClick}>{title}</h3>}
                    {redirectLink == null && <h3 className="card-title">{title}</h3>}
                </Grid>
                <Grid size={12}>
                    <p>{content}</p>
                </Grid>
            </Grid>
        </>
    )
}
export default Card;