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
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

export default function AjouterRandement() {


  const row = useRouter();




  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };





  const schema = yup.object().shape({
    degree_rendement : yup.string().required(),
  })

  const formik = useFormik({

    initialValues: {
        degree_rendement:'',
    },

  onSubmit: async (values, {resetForm}) => {


    const neo =  await fetch('https://gestion-wheat.vercel.app/randement/',{

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
      <Button variant="contained" endIcon={<ThumbUpOffAltIcon /> } sx={{width:"250px", background:"black", color:"white"}}>Ajouter un randement</Button>

      </IconButton>

      <Dialog open={open} onClose={handleClose}>
 <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }} >
        <DialogTitle sx={row.locale === "ar"? {direction:"rtl", display:"flex", justifyContent:"center"}:{direction:'ltr', display:"flex", justifyContent:"center"}}>Ajouter un randement</DialogTitle>
        <DialogContent>




     

<TextField
         margin='normal'
              required
              fullWidth
              id="degree_rendement"
              placeholder="Degree de rendement"
              name="degree_rendement"
              autoComplete="degree_rendement"
              onChange={formik.handleChange}
              value={formik.values.degree_rendement}
              error={formik.touched.degree_rendement && Boolean(formik.errors.degree_rendement)}
              helperText={formik.touched.degree_rendement && formik.errors.degree_rendement}
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