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




export default function Ajouterpersonnel() {


  const row = useRouter();




  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };





  const schema = yup.object().shape({
    prenom : yup.string().required(),
    nom : yup.string().required(),
    sex : yup.string().required(),
    adress : yup.string().required(),
    naissance: yup.string().required(),
    entre: yup.string().required(),
    enfant: yup.number(),
    prenom_femme: yup.string(),
    prenom_pere: yup.string().required(),
    nom_mere: yup.string().required(),
    prenom_mere: yup.string().required(),
    tel: yup.number(),
  })

  const formik = useFormik({

    initialValues: {
      prenom:'',
      nom:'',
      sex:'',
      adress:'',
      naissance:'',
      entre:'',
      enfant:'',
      prenom_femme:'',
      prenom_pere:'',
      nom_mere:'',
      prenom_mere:'',
      tel:'',

    },
  onSubmit: async (values, {resetForm}) => {


    const neo =  await fetch('https://gestion-wheat.vercel.app/personel/',{

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
      <Button variant="contained" endIcon={<PersonAddAlt1Icon /> } sx={{width:"250px", background:"black", color:"white"}}>Ajouter un personnel</Button>

      </IconButton>

      <Dialog open={open} onClose={handleClose}>
 <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }} >
        <DialogTitle sx={row.locale === "ar"? {direction:"rtl", display:"flex", justifyContent:"center"}:{direction:'ltr', display:"flex", justifyContent:"center"}}>Ajouter un personnel</DialogTitle>
        <DialogContent>




        <Stack sx={{display:'flex', flexDirection:'row', gap:"10px"}}>

<TextField
         margin='normal'
              required
              fullWidth
              id="prenom"
              placeholder="Prenom"
              name="prenom"
              autoComplete="prenom"
              onChange={formik.handleChange}
              value={formik.values.prenom}
              error={formik.touched.prenom && Boolean(formik.errors.prenom)}
              helperText={formik.touched.prenom && formik.errors.prenom}
              sx={{background:"#F5F5F5", borderRadius:"5px"}}
              size="small"

            />
         
         
<TextField
         margin='normal'

              required
              fullWidth
              id="nom"
              placeholder="Nom"
              name="nom"
              autoComplete="nom"
              onChange={formik.handleChange}
              value={formik.values.nom}
              error={formik.touched.nom && Boolean(formik.errors.nom)}
              helperText={formik.touched.nom && formik.errors.nom}
              sx={{background:"#F5F5F5", borderRadius:"5px"}}
              size="small"

            />
         
            <TextField
                     margin='normal'

              required
              fullWidth
              id="sex"
              placeholder="Sex"
              name="sex"
              autoComplete="sex"
              onChange={formik.handleChange}
              value={formik.values.sex}
              error={formik.touched.sex && Boolean(formik.errors.sex)}
              helperText={formik.touched.sex && formik.errors.sex}
              sx={{background:"#F5F5F5", borderRadius:"5px"}}
              size="small"

            />


</Stack>

      



<TextField
         margin='normal'

              required
              fullWidth
              id="adress"
              placeholder="Adresse"
              name="adress"
              autoComplete="adress"
              onChange={formik.handleChange}
              value={formik.values.adress}
              error={formik.touched.adress && Boolean(formik.errors.adress)}
              helperText={formik.touched.adress && formik.errors.adress}
              sx={{background:"#F5F5F5", borderRadius:"5px"}}
              size="small"

            />


<Stack sx={{display:'flex', flexDirection:'row', gap:"10px"}}>
<TextField
         margin='normal'

              required
              fullWidth
              id="naissance"
              placeholder="Date de naissance"
              name="naissance"
              autoComplete="naissance"
              onChange={formik.handleChange}
              value={formik.values.naissance}
              error={formik.touched.naissance && Boolean(formik.errors.naissance)}
              helperText={formik.touched.naissance && formik.errors.naissance}
              sx={{background:"#F5F5F5", borderRadius:"5px"}}
              size="small"

            />


<TextField
         margin='normal'

              required
              fullWidth
              id="entre"
              placeholder="Date d'entre"
              name="entre"
              autoComplete="entre"
              onChange={formik.handleChange}
              value={formik.values.entre}
              error={formik.touched.entre && Boolean(formik.errors.entre)}
              helperText={formik.touched.entre && formik.errors.entre}
              sx={{background:"#F5F5F5", borderRadius:"5px"}}
              size="small"

            />



<TextField
         margin='normal'

              required
              fullWidth
              id="enfant"
              placeholder="Nombre d'enfants"
              name="enfant"
              autoComplete="enfant"
              onChange={formik.handleChange}
              value={formik.values.enfant}
              error={formik.touched.enfant && Boolean(formik.errors.enfant)}
              helperText={formik.touched.enfant && formik.errors.enfant}
              sx={{background:"#F5F5F5", borderRadius:"5px"}}
              size="small"

            />


</Stack>
<Stack sx={{display:'flex', flexDirection:'row', gap:"10px"}}>
<TextField
         margin='normal'

              required
              fullWidth
              id="prenom_femme"
              placeholder="Prenom de femme"
              name="prenom_femme"
              autoComplete="prenom_femme"
              onChange={formik.handleChange}
              value={formik.values.prenom_femme}
              error={formik.touched.prenom_femme && Boolean(formik.errors.prenom_femme)}
              helperText={formik.touched.prenom_femme && formik.errors.prenom_femme}
              sx={{background:"#F5F5F5", borderRadius:"5px"}}
              size="small"

            />


<TextField
         margin='normal'

              required
              fullWidth
              id="prenom_pere"
              placeholder="Prenom de Père"
              name="prenom_pere"
              autoComplete="prenom_pere"
              onChange={formik.handleChange}
              value={formik.values.prenom_pere}
              error={formik.touched.prenom_pere && Boolean(formik.errors.prenom_pere)}
              helperText={formik.touched.prenom_pere && formik.errors.prenom_pere}
              sx={{background:"#F5F5F5", borderRadius:"5px"}}
              size="small"

            />

</Stack>
<Stack sx={{display:'flex', flexDirection:'row', gap:"10px"}}>

<TextField
         margin='normal'

              required
              fullWidth
              id="nom_mere"
              placeholder="Nom de mére"
              name="nom_mere"
              autoComplete="nom_mere"
              onChange={formik.handleChange}
              value={formik.values.nom_mere}
              error={formik.touched.nom_mere && Boolean(formik.errors.nom_mere)}
              helperText={formik.touched.nom_mere && formik.errors.nom_mere}
              sx={{background:"#F5F5F5", borderRadius:"5px"}}
              size="small"

            />


<TextField
         margin='normal'

              required
              fullWidth
              id="prenom_mere"
              placeholder="Prenom de mére"
              name="prenom_mere"
              autoComplete="prenom_mere"
              onChange={formik.handleChange}
              value={formik.values.prenom_mere}
              error={formik.touched.prenom_mere && Boolean(formik.errors.prenom_mere)}
              helperText={formik.touched.prenom_mere && formik.errors.prenom_mere}
              sx={{background:"#F5F5F5", borderRadius:"5px"}}
              size="small"

            />


<TextField
         margin='normal'

              required
              fullWidth
              id="tel"
              placeholder="Numéro de telephone"
              name="tel"
              autoComplete="tel"
              onChange={formik.handleChange}
              value={formik.values.tel}
              error={formik.touched.tel && Boolean(formik.errors.tel)}
              helperText={formik.touched.tel && formik.errors.tel}
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