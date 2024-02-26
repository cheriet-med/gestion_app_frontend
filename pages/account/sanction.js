
import { Container} from "@mui/system";
import { Typography, Box, Grid, Paper, Divider } from '@mui/material'
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyIcon from '@mui/icons-material/Key';

import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import { useSession, signIn, signOut } from "next-auth/react";
import useSWR from 'swr'

import {en, fr , ar} from '../../translations'
import { useRouter } from 'next/router';
import Link from "next/link";
import Image from "next/image";

import InfoIcon from '@mui/icons-material/Info';

import PersonIcon from '@mui/icons-material/Person';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import AbcIcon from '@mui/icons-material/Abc';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import HouseboatIcon from '@mui/icons-material/Houseboat';
import TablePersonel from "../../components/table_of_personel";
import TableSanction from "../../components/table_of_sanction";




const Account = () => {
  const { data:session } = useSession()
  const id = session?.user.id
  const name = session?.user.first_name
  const link = session?.user.link_website
  const user_id = session?.user.is_superuser
  const usr = session?.user
 const row = useRouter();
  const { locale } = row;


  const p = row.locale === "ar"? 
  {color:"#595652", '&:hover':{color:'#D9CB04'}, display:"flex"}:
  {color:"#595652", '&:hover':{color:'#D9CB04'}};

 

 if(user_id === true) return <Dashboard/>

 if(session) return (

<Container  sx={{paddingTop:"100px", paddingBottom:"100px"}} maxWidth="xl">

<Grid container spacing={3}>

<Grid item  xs={12} sm={12} md={2} >
            <List
      sx={{ width: '100%', background:"#fafafa", borderRadius:"10px"}}
 
    >
      <Link href='/account'>
      <ListItemButton >
      <ListItemIcon sx={{pl:2}}>
                <PersonIcon/>
              </ListItemIcon>
        <ListItemText primary="Personnel" sx={p}/>
      </ListItemButton>
</Link>
      <Link href='/account/avancement'>
      <ListItemButton >
      <ListItemIcon sx={{pl:2}}>
                <CardTravelIcon/>
              </ListItemIcon>
        <ListItemText primary="Avancement" sx={p}/>
      </ListItemButton>
</Link>
<Link href='/account/abssence'>
      <ListItemButton >
      <ListItemIcon sx={{pl:2}}>
                <AbcIcon/>
        </ListItemIcon>
        <ListItemText primary="Abssence" sx={p} />
      </ListItemButton>
</Link>

<Link href='/account/sanction'>
      <ListItemButton >
      <ListItemIcon sx={{pl:2}}>
                <ThumbDownOffAltIcon/>
        </ListItemIcon>
        <ListItemText primary="Sanction" sx={p} />
      </ListItemButton>
</Link>

<Link href='/account/randement'>
      <ListItemButton >
      <ListItemIcon sx={{pl:2}}>
                <ThumbUpOffAltIcon/>
        </ListItemIcon>
        <ListItemText primary="Randement" sx={p} />
      </ListItemButton>
</Link>


<Link href='/account/conge'>
      <ListItemButton >
      <ListItemIcon sx={{pl:2}}>
                <HouseboatIcon/>
        </ListItemIcon>
        <ListItemText primary="Congé" sx={p} />
      </ListItemButton>
</Link>


      <ListItemButton onClick={() => (
        signOut(),
        row.push("/")
        )}>
      <ListItemIcon sx={{pl: 2}}>
                <LogoutIcon />
              </ListItemIcon>
        <ListItemText primary="Se Déconnecter" sx={p}/>
</ListItemButton>

    </List>

</Grid>




<Grid item  xs={12} sm={12} md={10} >

<Box >
      <TableSanction/>
</Box>
</Grid>
</Grid>         
</Container>
) 
}

export default Account;




