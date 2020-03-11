import React, { useEffect, useState } from 'react'
import { FormControl, TextField, Grid, Button } from '@material-ui/core'


function NewUser() {

  const [selectValue, setSelectValue] = useState()

  useEffect(() => {
  }, [selectValue])

  const HandlerChange = (e) => {
    setSelectValue(e)
  }

  return (
    <div className="container">
      <h1>Novo Usuário</h1>
      <Grid container>
        <Grid container item xs={6} spacing={4}>
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
            <Grid item xs={2}>
              <FormControl fullWidth>
                <Button variant="contained"> Cadastrar </Button>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default NewUser