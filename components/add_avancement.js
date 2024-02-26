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



export default function AjouterAvancement() {


  const row = useRouter();




  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };





  const schema = yup.object().shape({
    nombre_de_degree : yup.string().required(),
    nombre_de_echlon : yup.string().required(),
    date_avencement : yup.string().required(),
    id_avencement_personel : yup.string().required(),

  })

  const formik = useFormik({

    initialValues: {
        nombre_de_degree:'',
        nombre_de_echlon:'',
        date_avencement:'',
        id_avencement_personel:'',
    },
  onSubmit: async (values, {resetForm}) => {


    const neo =  await fetch('https://gestion-wheat.vercel.app/avancement/',{

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
      <Button variant="contained" endIcon={<CardTravelIcon /> } sx={{width:"250px", background:"black", color:"white"}}>Ajouter un Avancement</Button>

      </IconButton>

      <Dialog open={open} onClose={handleClose}>
 <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }} >
        <DialogTitle sx={row.locale === "ar"? {direction:"rtl", display:"flex", justifyContent:"center"}:{direction:'ltr', display:"flex", justifyContent:"center"}}>Ajouter un Avancement</DialogTitle>
        <DialogContent>




        <Stack sx={{display:'flex', flexDirection:'row', gap:"10px"}}>
   

<TextField
         margin='normal'
              required
              fullWidth
              id="nombre_de_degree"
              placeholder="Nombre de degree"
              name="nombre_de_degree"
              autoComplete="nombre_de_degree"
              onChange={formik.handleChange}
              value={formik.values.nombre_de_degree}
              error={formik.touched.nombre_de_degree && Boolean(formik.errors.nombre_de_degree)}
              helperText={formik.touched.nombre_de_degree && formik.errors.nombre_de_degree}
              sx={{background:"#F5F5F5", borderRadius:"5px"}}
              size="small"

            />
         
         
<TextField
         margin='normal'

              required
              fullWidth
              id="nombre_de_echlon"
              placeholder="Nombre de echlon"
              name="nombre_de_echlon"
              autoComplete="nombre_de_echlon"
              onChange={formik.handleChange}
              value={formik.values.nombre_de_echlon}
              error={formik.touched.nombre_de_echlon && Boolean(formik.errors.nombre_de_echlon)}
              helperText={formik.touched.nombre_de_echlon && formik.errors.nombre_de_echlon}
              sx={{background:"#F5F5F5", borderRadius:"5px"}}
              size="small"

            />
         </Stack>


<Stack sx={{display:'flex', flexDirection:'row', gap:"10px"}}>
            <TextField
                     margin='normal'

              required
              fullWidth
              id="date_avencement"
              placeholder="Date d'avencement"
              name="date_avencement"
              autoComplete="date_avencement"
              onChange={formik.handleChange}
              value={formik.values.date_avencement}
              error={formik.touched.date_avencement && Boolean(formik.errors.date_avencement)}
              helperText={formik.touched.date_avencement && formik.errors.date_avencement}
              sx={{background:"#F5F5F5", borderRadius:"5px"}}
              size="small"

            />

<TextField
         margin='normal'

              required
              fullWidth
              id="id_avencement_personel"
              placeholder="Id Avancement Personnel"
              name="id_avencement_personel"
              autoComplete="id_avencement_personel"
              onChange={formik.handleChange}
              value={formik.values.id_avencement_personel}
              error={formik.touched.id_avencement_personel && Boolean(formik.errors.id_avencement_personel)}
              helperText={formik.touched.id_avencement_personel && formik.errors.id_avencement_personel}
              sx={{background:"#F5F5F5", borderRadius:"5px"}}
              size="small"

            />

</Stack>


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