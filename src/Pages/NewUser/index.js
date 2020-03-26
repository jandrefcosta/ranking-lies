import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

import { FormControl, TextField, Grid, Button } from '@material-ui/core'

import { registerUser } from '../../Services/'

import './style.scss'

function NewUser() {

  const [formRegister, setFormRegister] = useState({})

  const HandlerSubmit = async (e) => {
    e.preventDefault()
    if (Object.keys(formRegister).length < 2) {
      Swal.fire({
        heightAuto: false,
        icon: 'warning',
        text: 'Preencha todos os dados'
      })
      return
    }

    const data = await registerUser(formRegister);
    if (data.error) {
      Swal.fire({
        heightAuto: false,
        icon: 'error',
        title: 'Oops...',
        text: data.error
      })
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