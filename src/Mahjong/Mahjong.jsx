import Grid from '@mui/material/Grid2';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Mahjong() {

    const items = [
        {
            nameChi: "自摸",
            nameEng: "self-drawn",
            feng: 1,
        },
        {
            nameChi: "無花",
            nameEng: "no flower",
            feng: 1,
        },
        {
            nameChi: "正花",
            nameEng: "flower",
            feng: 1,
        },
        {
            nameChi: "平胡",
            nameEng: "common hand",
            feng: 1,
        },
        {
            nameChi: "海底撈月",
            nameEng: "catching the moon from the bottom of the sea",
            feng: 1,
        },
        {
            nameChi: "混一色",
            nameEng: "mixed one suit",
            feng: 3,
        },
        {
            nameChi: "對對胡",
            nameEng: "all triplets",
            feng: 3,
        },
        {
            nameChi: "花胡",
            nameEng: "small flower tiles",
            feng: 3,
        },
        {
            nameChi: "小三元",
            nameEng: "junior 3 chiefs",
            feng: 5,
        },
        {
            nameChi: "清一色",
            nameEng: "pure one suit",
            feng: 7,
        },
        {
            nameChi: "小四喜",
            nameEng: "junior 4 happiness",
            feng: 6,
        },
        {
            nameChi: "大三元",
            nameEng: "grand 3 chiefs",
            feng: 8,
        },
        {
            nameChi: "大四喜",
            nameEng: "grand 4 happiness",
            feng: 13,
        },
        {
            nameChi: "字一色",
            nameEng: "all honor tiles",
            feng: 10,
        },
        {
            nameChi: "全么九",
            nameEng: "All terminals",
            feng: 10,
        },
        {
            nameChi: "十三么",
            nameEng: "13 terminal tiles",
            feng: 13,
        },
        {
            nameChi: "坎坎胡",
            nameEng: "hidden treasure mahjong",
            feng: 8,
        },
        {
            nameChi: "大花胡",
            nameEng: "big flower tiles",
            feng: 8,
        },
        {
            nameChi: "十八羅漢",
            nameEng: "",
            feng: 13,
        },
        {
            nameChi: "地胡",
            nameEng: "earthly hand",
            feng: 13,
        },
        {
            nameChi: "天胡",
            nameEng: "heavenly hand",
            feng: 13,
        },
    ]
    return (
        <>
            <Grid container maxWidth="lg">
                <Grid size={12}>
                    <h3>Mahjong</h3>
                </Grid>
                <Grid size={12}>
                    <p>Mahjong is a traditional Chinese tile-based game that requires skill, strategy, and a bit of luck. Played by four players, it involves drawing and discarding tiles to form specific sets and pairs, aiming to complete a winning hand. The game features 144 tiles, including suits, honors, and bonus tiles. Popular across Asia, mahjong has various regional rules and scoring systems, such as the Japanese riichi and Hong Kong styles. Known for its rich cultural significance, mahjong fosters social interaction and mental agility. It has also gained international popularity, with many variations played worldwide both casually and competitively.</p>
                </Grid>
                <Grid size={12}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name (chinese)</TableCell>
                                    <TableCell align="left">Name (english)</TableCell>
                                    <TableCell align="left">番數</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items.map((row) => (
                                    <TableRow
                                        key={row.nameChi}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.nameChi}
                                        </TableCell>
                                        <TableCell align="left">{row.nameEng}</TableCell>
                                        <TableCell align="left">{row.feng}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    )
}
export default Mahjong;