import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/router';
import {en, fr , ar} from '../translations'
import { Box } from '@mui/system';




export default function DeleteRandement({p}) {
  const id = p.data.id
  const [open, setOpen] = React.useState(false);
  const row = useRouter();
  const { locale } = row;
  const t = row.locale === "en-US" ? en: row.locale === "fr"? fr: row.locale === "ar"? ar:"";
  const layout = row.locale === "ar"? {direction:"rtl"}:"";

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handledelete = async () =>{

    await fetch('https://gestion-wheat.vercel.app/randementdetail/'+id+'/',{

            method: 'DELETE',
            headers: { 
              'Content-Type': 'application/json',
             },
             
        });

    setOpen(false);
    
  }

  return (
<Box>
      <IconButton color="primary" aria-label="delete"  onClick={handleClickOpen}>
      <DeleteIcon sx={{fontSize:"16px", color:"red"}}/>
      </IconButton>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="Delete" sx={row.locale === "ar"? {direction:"rtl"}:{direction:'ltr'}}>
        supprimer
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={row.locale === "ar"? {direction:"rtl"}:{direction:'ltr'}}>
          voulez-vous supprimer ce Randement ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
           Non
          </Button>
          <Button onClick={handledelete} autoFocus>
             supprimer
          </Button>
        </DialogActions>
      </Dialog>
      </Box>
  );
}