import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";


const C500 = () => {
    return (
        <Box sx={{paddingTop:"200px", paddingBottom:"200px"}}>
            <Container component="main" maxWidth="xs">
                <Box sx={{display:"flex", justifyContent:"center"}}>
                    <Typography variant="h1">500</Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default C500;