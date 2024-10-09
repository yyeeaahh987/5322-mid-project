import Grid from '@mui/material/Grid2';

function Chiikawa() {
    return (
        <>
            <Grid container maxWidth="lg">
                <Grid size={12}>
                    <h3>USAGI</h3>
                </Grid>
                <Grid size={12}>
                    <p>Usagi is a lovely character in a comis call "Chiikawa" in Japan</p>
                    <p>Song of Usagi</p>
                </Grid>
                <Grid size={12}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Y4b-AWTOjmQ?si=BqSAY5-9IndNXqCv" title="YouTube video player" frameBorder={"0"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Grid>
            </Grid>
        </>
    )
}
export default Chiikawa;
