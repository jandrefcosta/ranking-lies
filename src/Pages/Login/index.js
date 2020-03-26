import React from 'react'
import { Link } from 'react-router-dom'
import { FormControl, TextField, Grid, Button } from '@material-ui/core'

import './style.scss'

function Login() {

  const handlerLogin = (e) => {
    console.log(e)
  }

  return (
    <div className="login-container">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField label="email" />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField label="senha" />
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