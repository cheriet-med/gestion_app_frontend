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




export default function EditeAbsence({p}) {

const e= p.data
  const row = useRouter();
  const { locale } = row;
  const t = row.locale === "en-US" ? en: row.locale === "fr"? fr: row.locale === "ar"? ar:"";
  const layout = row.locale === "ar"? {direction:"rtl"}:"";



  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };





  

  const formik = useFormik({


    initialValues: {
        type_abssence:e.type_abssence,
        decision_abssence:e.decision_abssence,
    },


    onSubmit: async (values) => {
     
      await fetch('https://gestion-wheat.vercel.app/absancedetail/'+e.id+'/',{

          method: 'PUT',
          headers: {  
            'Content-Type': 'application/json',
           },
          body: JSON.stringify(values, null, 2)
      })
      handleClose()
    },
  });
  return (

  <Box >

      <IconButton color="primary" aria-label="popup"  onClick={handleClickOpen}>
      <EditIcon   sx={{fontSize:"16px", color:"green"}}/>
      </IconButton>

      <Dialog open={open} onClose={handleClose}>
 <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }} >
        <DialogTitle sx={row.locale === "ar"? {direction:"rtl", display:"flex", justifyContent:"center"}:{direction:'ltr', display:"flex", justifyContent:"center"}}>Edité Absence</DialogTitle>
        <DialogContent>

        <Stack sx={{display:'flex', flexDirection:'row', gap:"10px"}}>
   

   <TextField
            margin='normal'
                 required
                 fullWidth
                 id="Type d'absence"
                 placeholder="type_abssence"
                 name="type_abssence"
                 autoComplete="type_abssence"
                 onChange={formik.handleChange}
                 value={formik.values.type_abssence}
                 error={formik.touched.type_abssence && Boolean(formik.errors.type_abssence)}
                 helperText={formik.touched.type_abssence && formik.errors.type_abssence}
                 sx={{background:"#F5F5F5", borderRadius:"5px"}}
                 size="small"
   
               />
            
            
   <TextField
            margin='normal'
   
                 required
                 fullWidth
                 id="decision_abssence"
                 placeholder="Décision d'absence"
                 name="decision_abssence"
                 autoComplete="decision_abssence"
                 onChange={formik.handleChange}
                 value={formik.values.decision_abssence}
                 error={formik.touched.decision_abssence && Boolean(formik.errors.decision_abssence)}
                 helperText={formik.touched.decision_abssence && formik.errors.decision_abssence}
                 sx={{background:"#F5F5F5", borderRadius:"5px"}}
                 size="small"
   
               />
            </Stack>
   



        </DialogContent>


        <DialogActions>
          <Button onClick={handleClose}>Non</Button>
          <Button 
          type="submit"
          >
            Edite
            </Button>
        </DialogActions>
             </Box> 
      </Dialog>
 
      </Box>

  );
}