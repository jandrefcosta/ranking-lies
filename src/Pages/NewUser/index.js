import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { FormControl, TextField, Grid, Button } from '@material-ui/core'

import { registerUser } from '../../Services/'
import { PopupInfo } from '../../Components/Popup'

import './style.scss'

function NewUser() {

  const [formRegister, setFormRegister] = useState({})
  const history = useHistory()

  const HandlerSubmit = async (e) => {
    e.preventDefault()
    if (Object.keys(formRegister).length < 2) {
      PopupInfo('warning', null, 'Preencha todos os dados')
      return;
    }

    const data = await registerUser(formRegister);

    if (data.error) {
      PopupInfo('error', 'Oops...', data.error)
    } else {
      PopupInfo('success', 'Heeey', 'Registro realizado com sucesso', () => { history.push('/') })
    }
  }

  const HandlerChange = (e) => {
    const { target: { name, value } } = e
    setFormRegister({ ...formRegister, [name]: value })
  }

  return (

    <div className="register-container">
      <h1>Novo Usuário</h1>
      <form onSubmit={HandlerSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField name="email" label="email" type="email" onChange={HandlerChange} />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField name="senha" label="senha" type="password" onChange={HandlerChange} />
            </FormControl>
          </Grid>
          <Grid container item xs={12} justify="space-between">
            <Grid item >
              <FormControl fullWidth>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button variant="contained" color="secondary"  > Voltar </Button>
                </Link>
              </FormControl>
            </Grid>
            <Grid item >
              <FormControl fullWidth>
                <Button variant="contained" color="primary" type="submit"> Cadastrar </Button>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default NewUser