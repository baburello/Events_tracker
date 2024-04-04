import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Container, Grid, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { FaPaperclip } from "react-icons/fa";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" color="success" onClick={handleClickOpen}>
       Объект кушиш
      </Button>
      <Dialog 
        sx={{width:'700px', height:'900px', margin:'0 auto', textAlign:'center'}}
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle sx={{margin:'0 auto'}}>Отправить заявку</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[800],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <TextField id="outlined-basic" label="Кадастр раками" variant="outlined" placeholder='01:10:02:04:0001' sx={{minWidth:'260px'}}/>
            </Grid>
            <Grid item xs={6}>
            <TextField id="outlined-basic" label="Шартнома ID" variant="outlined" placeholder='23512' sx={{minWidth:'260px'}}/>
            </Grid>
            <Grid item xs={6}>
            <TextField id="outlined-basic" label="Вилоят" variant="outlined" placeholder='Кашкадарё вилояти' sx={{minWidth:'260px'}}/>
          </Grid>
          <Grid item xs={6}>
              <TextField id="outlined-basic" label="Умумий ер майдони" variant="outlined" placeholder='5005' sx={{minWidth:'260px'}}/>
            </Grid>
            <Grid item xs={6}>
            <TextField id="outlined-basic" label="Туман" variant="outlined" placeholder='Касби тумани' sx={{minWidth:'260px'}}/>
            </Grid>
            <Grid item xs={6}>
            <TextField id="outlined-basic" label="Курилиш ости майдони" variant="outlined" placeholder='3009' sx={{minWidth:'260px'}}/>
            </Grid>
            <Grid item xs={6}>
            <TextField id="outlined-basic" label="МФЙ" variant="outlined" placeholder='Камаши МФЙ' sx={{minWidth:'260px'}}/>
            </Grid>
            <Grid item xs={6}>
            <TextField id="outlined-basic" label="Умумий фойдали майдони" variant="outlined" placeholder='6000' sx={{minWidth:'260px'}}/>
            </Grid>
            <Grid item xs={6}>
            <TextField id="outlined-basic" label="Манзил" variant="outlined" placeholder='Камаши МФЙ' sx={{minWidth:'260px'}}/>
          </Grid>
          <Grid item xs={6}>
          <TextField id="outlined-basic" label="Локация" variant="outlined" placeholder='41.317583, 69.290889' sx={{minWidth:'260px'}}/>
          </Grid>
          </Grid>
        </DialogContent>
        <DialogTitle sx={{ margin: '0 auto' }}>Кадастрни юкланг</DialogTitle>
          <Container fixed>
          <Box sx={{ bgcolor: '#cdd1d5', height: '10vh', display:'flex', justifyContent:'space-around', alignItems:'center', borderRadius:'10px' }}>
            <Button color='error' variant='contained'>Загрузить фото</Button>
            <FaPaperclip />
            <Box sx={{width:'250px'}}>
            Нажмите или перетащите файл,
            чтобы загрузить его
            </Box>
          </Box>
      </Container>
        <DialogActions sx={{padding:'40px'}}>
          <Button type="submit" color='success' variant='contained' sx={{margin:'0 auto', width:'200px'}}>Отправить</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}