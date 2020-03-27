import React, { useState, useEffect } from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Typography, Button, Modal } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

import IconButton from '@material-ui/core/IconButton';

import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarIcon from '@material-ui/icons/Star';
import DeleteOutline from '@material-ui/icons/DeleteOutline';

import { listLies, deleteLies } from '../../Services'

import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import { PopupConfirmResponse } from '../../Components/Popup';

function ListLies() {

  const [ranking, setRaking] = useState()
  const [userID, setUserId] = useState()

  const [open, setOpen] = useState(false);
  const [modalInformation, setModalInformation] = useState(false);

  useEffect(() => {
    getListLies();
    setUserId(localStorage.getItem('user_id'))
  }, [])

  const getListLies = async () => {
    const data = await listLies();
    setRaking(data)
  }

  const handleClickOpen = (e) => {
    setModalInformation(e)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    PopupConfirmResponse(
      'warning',
      'Deseja deletar a mentira ?',
      "Se deletar, não teremos mais o registro!",
      callbackDelete
    )
  }

  const callbackDelete = async (e) => {
    console.log(modalInformation)
    if (e.value) {
      const { status } = await deleteLies(modalInformation.id)
      if (status) {
        getListLies()
        setOpen(false);
      }
    }
  }

  return (
    <>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} maxWidth="sm" fullWidth>
        <MuiDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {modalInformation.resumo}
          {userID === modalInformation.user_id && <IconButton aria-label="close" onClick={handleDelete} style={{ position: 'absolute', top: "10px", right: "10px" }}>
            <DeleteOutline />
          </IconButton>}
        </MuiDialogTitle >
        <MuiDialogContent dividers>
          <Typography gutterBottom >
            {modalInformation.descricao}
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
        <Typography variant="h4" align='center'>
          Lista das principais gaitadas conhecidas
        </Typography>
        <List style={{ margin: "0 auto", marginTop: "35px", maxWidth: "680px" }}>
          {ranking && ranking.map((item, index) => {
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

export default ListLies