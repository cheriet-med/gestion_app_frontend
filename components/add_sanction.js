import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Stack } from '@mui/system';
import ReplayIcon from '@mui/icons-material/Replay';
import IconButton from '@mui/material/IconButton';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import {en, fr , ar} from '../translations'
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';



import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import AbcIcon from '@mui/icons-material/Abc';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

export default function AjouterSanction() {


  const row = useRouter();




  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };





  const schema = yup.object().shape({
    date_sanction : yup.string().required(),
    duree_sanction : yup.string().required(),
    type_sanction : yup.string().required(),
  })

  const formik = useFormik({

    initialValues: {
        date_sanction:'',
        duree_sanction:'',
        type_sanction:'',
    },
  onSubmit: async (values, {resetForm}) => {


    const neo =  await fetch('https://gestion-wheat.vercel.app/sanction/',{

    method: 'POST',
    headers: {  
        'Content-Type': 'application/json',
       },
    body: JSON.stringify(values, null, 2)
})

handleClose()


},


   
  validationSchema:schema
 
});
  return (

  <Box >

      <IconButton color="primary" aria-label="popup"  onClick={handleClickOpen}>
      <Button variant="contained" endIcon={<ThumbDownOffAltIcon /> } sx={{width:"250px", background:"black", color:"white"}}>Ajouter une Sanction</Button>

      </IconButton>

      <Dialog open={open} onClose={handleClose}>
 <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }} >
        <DialogTitle sx={row.locale === "ar"? {direction:"rtl", display:"flex", justifyContent:"center"}:{direction:'ltr', display:"flex", justifyContent:"center"}}>Ajouter une Sanction</DialogTitle>
        <DialogContent>




        <Stack sx={{display:'flex', flexDirection:'row', gap:"10px"}}>
   

<TextField
         margin='normal'
              required
              fullWidth
              id="date_sanction"
              placeholder="Date de sanction"
              name="date_sanction"
              autoComplete="date_sanction"
              onChange={formik.handleChange}
              value={formik.values.date_sanction}
              error={formik.touched.date_sanction && Boolean(formik.errors.date_sanction)}
              helperText={formik.touched.date_sanction && formik.errors.date_sanction}
              sx={{background:"#F5F5F5", borderRadius:"5px"}}
              size="small"

            />
         
         
<TextField
         margin='normal'

              required
              fullWidth
              id="duree_sanction"
              placeholder="Duree de sanction"
              name="duree_sanction"
              autoComplete="duree_sanction"
              onChange={formik.handleChange}
              value={formik.values.duree_sanction}
              error={formik.touched.duree_sanction && Boolean(formik.errors.duree_sanction)}
              helperText={formik.touched.duree_sanction && formik.errors.duree_sanction}
              sx={{background:"#F5F5F5", borderRadius:"5px"}}
              size="small"

            />
         </Stack>

         <TextField
         margin='normal'

              required
              fullWidth
              id="type_sanction"
              placeholder="Type de sanction"
              name="type_sanction"
              autoComplete="type_sanction"
              onChange={formik.handleChange}
              value={formik.values.type_sanction}
              error={formik.touched.type_sanction && Boolean(formik.errors.type_sanction)}
              helperText={formik.touched.type_sanction && formik.errors.type_sanction}
              sx={{background:"#F5F5F5", borderRadius:"5px"}}
              size="small"

            />


        </DialogContent>


        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button 
          type="submit"
          >
            Ajouter
            </Button>
        </DialogActions>
             </Box> 
      </Dialog>
 
      </Box>

  );
}