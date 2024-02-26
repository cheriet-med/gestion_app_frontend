
import React from 'react';
import { useFormik } from 'formik';
import { Box, Container } from "@mui/system";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import {en, fr , ar} from '../../../../../translations'
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import Alert from '@mui/material/Alert';


const Contact = () => {
  const [isError, setIsError] = useState(null);  
   const row = useRouter();
    const { locale } = row;
    const t = row.locale === "fr"? fr: row.locale === "ar"? ar: en;
    const r = row.locale === "ar"? {paddingTop:"270px", direction:"rtl",backgroundImage: `url("/hero1.webp")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'relative',
    paddingBottom:{xs:"270px", sm:"470px", md:"270px"},

    }:{paddingTop:"270px",
    backgroundImage: `url("/hero1.webp")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'relative',
    paddingBottom:{xs:"270px", sm:"470px", md:"270px"},
    }  

  const {query} = useRouter(); 
  const uid = query.id
  const token = query.token

const schema = yup.object().shape({
    new_password : yup.string().required(row.locale === "fr"? "Veuillez remplir le champ nouveau mot de passe"
    : row.locale === "ar"? "الرجاء ملئ خانة كلمة السر الجديدة"
    :"Please fill in the new password field").min(8, 
      row.locale === "fr"? "Ce mot de passe est trop court. Il doit contenir au moins 8 caractères.": row.locale === "ar"? "كلمة المرور هذه قصيرة جدًا. يجب أن يحتوي على 8 أحرف على الأقل.":"This password is too short. It must contain at least 8 characters."),
    re_new_password : yup.string().required(row.locale === "fr"? "Veuillez remplir le champ nouveau mot de passe"
    : row.locale === "ar"? "الرجاء ملئ خانة كلمة السر الجديدة"
    :"Please fill in the new password field").min(8, 
      row.locale === "fr"? "Ce mot de passe est trop court. Il doit contenir au moins 8 caractères.": row.locale === "ar"? "كلمة المرور هذه قصيرة جدًا. يجب أن يحتوي على 8 أحرف على الأقل.":"This password is too short. It must contain at least 8 characters."),
  })
 
    const formik = useFormik({
 
      initialValues: {
        uid,
        token,
        new_password:'',
        re_new_password:''
      },
      onSubmit: async (values) => {

       const neo = await fetch('https://azguer-backend.vercel.app/auth/users/reset_password_confirm/',{
  
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
             },
            body: JSON.stringify(values, null, 2)
        }) 
        neo.status == 200 ? 
        setIsError(false):setIsError(true)
      },
      validationSchema:schema
 
    });
 
    return (
      <Box sx={r}>
      <Container  maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',

        }}
      >
        <Box>
          <Typography variant='subtitle1' sx={{color:"white"}}>{t.rest_password_message}</Typography>
        </Box>
         <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }} >
         <Box sx={{marginTop:"15px", width:"100%", marginBottom:"15px"}}>
{ isError === false && (<Alert severity="success" sx={{display:"flex", gap:"15px"}}>
{row.locale === "fr"? "Un nouveau mot de passe a été créé avec succès"
: row.locale === "ar"? "لقد تم إنشاء كلمة سر جديدة بنجاح"
:"A new password has been created successfully"}
</Alert>)}
{ isError === true && ( <Alert severity="error" sx={{display:"flex", gap:"15px"}}>
{row.locale === "fr"? "Il y a une erreur dans le mot de passe, veuillez vérifier et réessayer."
: row.locale === "ar"? "هناك خطأ في كلمة السر، يرجى التأكد منه وإعادة المحاولة."
:"There is an error in the password, please check and try again."}
  </Alert>) }
</Box>
         <TextField
              margin="normal"
              required
              fullWidth
              id="new_password"
              placeholder={t.new_Password}
              name="new_password"
              autoComplete="new_password"

              type="password"
              onChange={formik.handleChange}
              value={formik.values.new_password}
              error={formik.touched.new_password && Boolean(formik.errors.new_password)}
              sx={{background:"#F5F5F5", borderRadius:"5px"}}
              size="small"
                          />
            <Typography sx={{color:'#ffcdd2'}}>{formik.touched.new_password && formik.errors.new_password}</Typography>
        <TextField
              margin="normal"
              required
              fullWidth
              id="re_new_password"
              placeholder={t.re_new_passwoed}
              name="re_new_password"
              autoComplete="re_new_password"

              type="password"
              onChange={formik.handleChange}
              value={formik.values.re_new_password}
              error={formik.touched.re_new_password && Boolean(formik.errors.re_new_password)}
              sx={{background:"#F5F5F5", borderRadius:"5px"}}
              size="small"
                          />
             <Typography sx={{color:'#ffcdd2'}}>{formik.touched.re_new_password && formik.errors.re_new_password}</Typography>
             <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 , height:"37px"}}
            >
             {t.send}
            </Button>


        </Box>
       </Box>
       </Container>
      </Box>
    );
 
  };

  export default Contact;