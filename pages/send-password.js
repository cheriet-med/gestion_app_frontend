
import React from 'react';
import { useFormik } from 'formik';
import { Box, Container, Stack} from "@mui/system";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import {en, fr , ar} from '../translations'
import CssBaseline from '@mui/material/CssBaseline';
import { Divider } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import Alert from '@mui/material/Alert';

const Contact = () => {
  const [isError, setIsError] = useState(null);  
  const row = useRouter();
    const { locale } = row;
    const t = row.locale === "fr"? fr: row.locale === "ar"? ar: en;
    const r = row.locale === "ar"? {paddingTop:"270px", direction:"rtl",backgroundImage: `url("/hero3.png")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'relative',
    paddingBottom:{xs:"270px", sm:"470px", md:"270px"},

    }:{paddingTop:"270px",
    backgroundImage: `url("/hero3.png")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'relative',
    paddingBottom:{xs:"270px", sm:"470px", md:"400px"},

    }

    
const schema = yup.object().shape({
  email : yup.string().email(row.locale === "fr"? "L'e-mail doit être un e-mail valide": row.locale === "ar"? "يجب أن يكون البريد الإلكتروني بريدًا إلكترونيًا صالحًا":"Email must be a valid email").required(row.locale === "fr"? "Veuillez remplir le champ e-mail": row.locale === "ar"? "الرجاء ملئ خانة البريد اﻹلكتروني":"Please fill in the email field"),

  })
 
    const formik = useFormik({
 
      initialValues: {

        email:'',

      },
      onSubmit: async (values) => {
       
      const neo =  await fetch('https://azguer-backend.vercel.app/auth/users/reset_password/',{
  
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
             },
            body: JSON.stringify(values, null, 2)
        });
        neo.status == 204 ? 
        setIsError(false):setIsError(true)
      },
      validationSchema:schema
 
    });
 
    return (
        <Box sx={r}>
        <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',

          }}
        >
            <Stack spacing={2}>
          <Typography variant='subttile1'  sx={{color:"white"}}>{t.forgot_password_message}</Typography>

        </Stack>
        

        
         <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }} >
         <Box sx={{marginTop:"15px", width:"100%", marginBottom:"15px"}}>
{ isError === false && (<Alert severity="success" sx={{display:"flex", gap:"15px"}}>
{row.locale === "fr"? "Le lien de changement de mot de passe a été envoyé avec succès, veuillez vérifier votre e-mail."
: row.locale === "ar"? "لقد تم إرسال رابط تغيير كلمة السر بنجاح، الرجاء تفقد بريدك اﻹلكتروني.  "
:"The password change link has been sent successfully, please check your email."}
</Alert>)}
{ isError === true && ( <Alert severity="error" sx={{display:"flex", gap:"15px"}}>
{row.locale === "fr"? "Il y a une erreur dans l'e-mail, veuillez vérifier et réessayer."
: row.locale === "ar"? "هناك خطأ في البريد اﻹلكتروني، يرجى التأكد منه وإعادة المحاولة."
:"There is an error in the email, please check and try again."}
  </Alert>) }
</Box>

         <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder={t.Email_Address}
              name="email"
              autoComplete="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              size="small"

              sx={{background:"white", borderRadius:"5px"}}
            />
            <Typography sx={{color:"#ffcdd2"}}> {formik.touched.email && formik.errors.email}</Typography>

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