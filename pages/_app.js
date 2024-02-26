import '../styles/globals.css'
import Layout from '../layouts/layout'
import React from 'react'
import { SessionProvider } from "next-auth/react"
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {
  createTheme,
  ThemeProvider,
} 
from '@mui/material/styles';


const theme = createTheme({
  typography: {
    fontFamily: 'Roboto', 
  },
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#D9CB04',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#D9CB04',
    },
  },

});


function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}
)
 {
if(Component.get ){
  return Component.get( <Component {...pageProps} />)
}

  return (
    
<SessionProvider session={session}>
<ThemeProvider theme={theme}>
 <Layout>    
    <Component {...pageProps} />
</Layout> 
</ThemeProvider>
</SessionProvider>     


     )
    }
export default MyApp

