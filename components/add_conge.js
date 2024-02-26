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

import HouseboatIcon from '@mui/icons-material/Houseboat';
export default function AjouterConge() {


  const row = useRouter();




  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };





  const schema = yup.object().shape({
    date_debut : yup.string().required(),
    duree_fin : yup.string().required(),
    type_conge : yup.string().required(),
  })

  const formik = useFormik({

    initialValues: {
        date_debut:'',
        duree_fin:'',
        type_conge:'',
    },
  onSubmit: async (values, {resetForm}) => {


    const neo =  await fetch('https://gestion-wheat.vercel.app/conge/',{

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
      <Button variant="contained" endIcon={<HouseboatIcon /> } sx={{width:"250px", background:"black", color:"white"}}>Ajouter un conge</Button>

      </IconButton>

      <Dialog open={open} onClose={handleClose}>
 <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }} >
        <DialogTitle sx={row.locale === "ar"? {direction:"rtl", display:"flex", justifyContent:"center"}:{direction:'ltr', display:"flex", justifyContent:"center"}}>Ajouter un Conge</DialogTitle>
        <DialogContent>




        <Stack sx={{display:'flex', flexDirection:'row', gap:"10px"}}>
   

<TextField
         margin='normal'
              required
              fullWidth
              id="date_debut"
              placeholder="Date de debut"
              name="date_debut"
              autoComplete="date_debut"
              onChange={formik.handleChange}
              value={formik.values.date_debut}
              error={formik.touched.date_debut && Boolean(formik.errors.date_debut)}
              helperText={formik.touched.date_debut && formik.errors.date_debut}
              sx={{background:"#F5F5F5", borderRadius:"5px"}}
              size="small"

            />
         
         
<TextField
         margin='normal'

              required
              fullWidth
              id="duree_fin"
              placeholder="Duree de fin"
              name="duree_fin"
              autoComplete="duree_fin"
              onChange={formik.handleChange}
              value={formik.values.duree_fin}
              error={formik.touched.duree_fin && Boolean(formik.errors.duree_fin)}
              helperText={formik.touched.duree_fin && formik.errors.duree_fin}
              sx={{background:"#F5F5F5", borderRadius:"5px"}}
              size="small"

            />
         </Stack>

         <TextField
         margin='normal'

              required
              fullWidth
              id="type_conge"
              placeholder="Type de conge"
              name="type_conge"
              autoComplete="type_conge"
              onChange={formik.handleChange}
              value={formik.values.type_conge}
              error={formik.touched.type_conge && Boolean(formik.errors.type_conge)}
              helperText={formik.touched.type_conge && formik.errors.type_conge}
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