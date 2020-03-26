import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FormControl, TextField, Grid, Button } from '@material-ui/core'

import { PopupInfo } from '../../Components/Popup'
import { login } from '../../Services'

import './style.scss'

function Login() {

  const [formLogin, setFormLogin] = useState({})
  const history = useHistory()

  const handlerLogin = async (e) => {
    console.log(formLogin)
    if (Object.keys(formLogin).length < 2) {
      PopupInfo('warning', null, 'Preencha todos os dados')
      return;
    }
    const data = await login(formLogin)

    if (data.error) {
      PopupInfo('error', 'Oops...', data.error)
    } else {
      localStorage.setItem('user_id', data.id)
      history.push('/list-lies')
    }

  }

  const HandlerChange = (e) => {
    const { target: { name, value } } = e
    setFormLogin({ ...formLogin, [name]: value })
  }

  return (
    <div className="login-container">
      <h1>Qual a da vez?</h1>
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
        <Grid container item xs={12} justify="flex-end">
          <Grid item>
            <FormControl fullWidth>
              <Button variant="contained" color="primary" onClick={handlerLogin}> Entrar </Button>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container item xs={12} justify="flex-end">
          <Grid item>
            <FormControl fullWidth>
              <Link to='/new-user'> Não tenho cadastro </Link>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </div >
  )
}
export default Login;