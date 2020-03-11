import React, { useState } from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Typography, Button, Modal } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarIcon from '@material-ui/icons/Star';


import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

function Home() {

  const ranking = [
    { resumo: "Minha esposa é pica grossa", points: 150 },
    { resumo: "Fui sequestrado", points: 115 },
    { resumo: "Vendi um carro ontem também, igual ao seu", points: 45 }
  ]

  const [open, setOpen] = useState(false);
  const [modalInformation, setModalInformation] = useState(false);


  const handleClickOpen = (e) => {
    console.log(e)
    setModalInformation(e)
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (

    <>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <MuiDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {modalInformation.resumo}
        </MuiDialogTitle >
        <MuiDialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography>
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
            <StarBorderIcon />
            <StarBorderIcon />
          </Typography>
        </MuiDialogContent>


        <MuiDialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Fechar
          </Button>
        </MuiDialogActions>
      </Dialog>
      <div className="container">
        <List>
          {ranking.map((item, index) => {
            return (
              <ListItem button onClick={(e) => handleClickOpen(item)} key={index}>
                <ListItemIcon>
                  <EmojiEventsIcon />
                </ListItemIcon>
                <ListItemText primary={item.resumo} />
              </ListItem>
            )
          })}
        </List>
      </div>
    </>
  )
}

export default Home