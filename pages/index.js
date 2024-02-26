
import React from 'react';
import { useFormik } from 'formik';
import { Box, Container,Stack} from "@mui/system";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import {en, fr , ar} from '../translations'
import CssBaseline from '@mui/material/CssBaseline';
import { Divider } from '@mui/material';
import Link from 'next/link';
import { LocalSee } from '@mui/icons-material';
import { Cookie } from '@next/font/google';
import { signIn, getCsrfToken } from 'next-auth/react';
import { useState } from 'react';
import Image from 'next/image';
import {Grid} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Alert from '@mui/material/Alert';


const  Login = () => {
    const row = useRouter();
    const { locale } = row;
    const t = row.locale === "fr"? fr: row.locale === "ar"? ar: en;
    const r = row.locale === "ar"? {paddingTop:"270px", direction:"rtl",backgroundImage: `url("/hero1.webp")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'relative',
    paddingBottom:{xs:"270px", sm:"470px", md:"270px"},

    }:{paddingTop:"270px",
    backgroundImage: `url("/hero3.png")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'relative',
    paddingBottom:{xs:"270px", sm:"470px", md:"375px"},

    }


 
      





const [isError, setIsError] = useState(null);
const schema = yup.object().shape({
  email : yup.string().email(row.locale === "fr"? "L'e-mail doit être un e-mail valide": row.locale === "ar"? "يجب أن يكون البريد الإلكتروني بريدًا إلكترونيًا صالحًا":"Email must be a valid email").required(row.locale === "fr"? "Veuillez remplir le champ e-mail": row.locale === "ar"? "الرجاء ملئ خانة البريد اﻹلكتروني":"Please fill in the email field"),
  password : yup.string().required(row.locale === "fr"? "Veuillez remplir le champ du mot de passe": row.locale === "ar"? "الرجاء ملئ خانة كلمة السر":"Please fill in the password field").min(8, 
  row.locale === "fr"? "Ce mot de passe est trop court. Il doit contenir au moins 8 caractères.": row.locale === "ar"? "كلمة المرور هذه قصيرة جدًا. يجب أن يحتوي على 8 أحرف على الأقل.":"This password is too short. It must contain at least 8 characters."),
  })
 
    const formik = useFormik({
      initialValues: {
        email:'', 
        password:'',
      },
    onSubmit: async (values) => {
        const res = await signIn('credentials', {
          redirect: false,
          email: values.email,
          password: values.password,
          callbackUrl: `${window.location.origin}`,
        });
        res.error =='No user found'? setIsError(true):row.push('/account')
      },

      validationSchema:schema,
      
    });
 
    return (
<Box sx={r}>
        <Container maxWidth="xs">



          <Stack spacing={1} >

          <Typography variant='h4' sx={{fontWeight:"bold", color:"white"}}> 
          {row.locale === "fr"? "Se connecter": row.locale === "ar"? "تسجيل الدخول":"Login"}
          </Typography>
          <Stack sx={{display:"flex", flexDirection:"row", gap:"5px", alignContent:"center", alignItems:"center", textAlign:"center", flexWrap:"wrap"}}>
          <Typography variant='subtitle1'  sx={{color:"white"}} > 
          {row.locale === "fr"? "Vous êtes un nouvel utilisateur ": row.locale === "ar"? "أنت مستخدم جديد":"You are a new user"}
          </Typography> 
          <Link href="/signin">
          <Typography sx={{color:"#D9CB04","&:hover":{textDecoration:"underline", color:"#C5C4C2"}}}>
          {row.locale === "fr"? "Créer un compte": row.locale === "ar"? "إنشاء حساب":"Create an account"}
          </Typography>
          </Link>
          </Stack>
          <Divider sx={{background:"white"}}/>
          
          </Stack>

        

        
         <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1}} >
         <Box sx={{marginTop:"15px", width:"100%", marginBottom:"15px"}}>
{ isError === false && (<Alert severity="success">{t.success}</Alert>)}
{ isError === true && ( <Alert severity="error" sx={{display:"flex", gap:"15px"}}>
{row.locale === "fr"? "Il y a une erreur dans l'e-mail ou le mot de passe, veuillez vérifier et réessayer."
: row.locale === "ar"? "هناك خطأ في البريد اﻹلكتروني أو كلمة السر، يرجى التأكد منه وإعادة المحاولة."
:"There is an error in the email or password, please check and try again."}
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
              value={formik.values.email.toLocaleLowerCase()}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{background:"#F5F5F5", borderRadius:"5px"}}
              size="small"

            />



<TextField
              margin="normal"
              required
              fullWidth
              id="password"
              placeholder={t.password}
              name="password"
              autoComplete="password"

              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              sx={{background:"#F5F5F5", borderRadius:"5px"}}
              size="small"

            />
      <Link href="/send-password">  
      <Typography variant='body2' sx={{color:"#D9CB04","&:hover":{textDecoration:"underline", color:"#C5C4C2"}}} >{t.forgot_password}
          </Typography>
          </Link>

             <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2  ,height:"37px", textTransform:"capitalize", fontSize:"16px", color:"#595652", background:"#D9CB04",
              "&:hover":{ background:"black", color:"#D9CB04"} }}

            >
            {row.locale === "fr"? "Se connecter": row.locale === "ar"? "تسجيل الدخول":"Login"}
            </Button>


        </Box>


       </Container>
</Box>
    );
 
  };



export default Login