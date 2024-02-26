import { Box, Container } from "@mui/system";
import Image from "next/image";

const C404 = () => {
    return (

            <Container component="main" maxWidth="xs">
                <Box sx={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", alignContent:"center", height:"100vh", paddingTop:"350px", paddingBottom:"350px"}}>
                    
                    <Image src="/error.webp" alt="Error" height={300} width={300} />
                </Box>
            </Container>
    )
}
export default C404;