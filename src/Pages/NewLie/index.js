import React, { useEffect, useState } from 'react'
import { FormControl, TextField, Grid, Button } from '@material-ui/core'

//import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

function NewLie() {

  const [selectValue, setSelectValue] = useState()

  const options = [
    { value: 'dinheiro', label: 'Dinheiro' },
    { value: 'esposa', label: 'Esposa' },
    { value: 'trabalho', label: 'Trabalho' }
  ]

  useEffect(() => {
    console.log(selectValue)
  }, [selectValue])

  const HandlerChange = (e) => {
    setSelectValue(e)
  }

  return (
    <div className="container">
      <h1>Cadastrar nova mentira ?!</h1>
      <Grid container>
        <Grid container item xs={6} spacing={4}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField label="resumo" />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                id="outlined-multiline-static"
                label="história da mentira"
                multiline
                rows="6"
                variant="outlined"
              />
            </FormControl>
          </Grid>
          <Grid item xs={8}>
            <FormControl fullWidth>
              <CreatableSelect
                name="category"
                closeMenuOnSelect={false}
                components={animatedComponents}
                options={options}
                onChange={HandlerChange}
                isMulti
              >
              </CreatableSelect>
            </FormControl>
          </Grid>
          <Grid container item xs={12} justify="flex-end">
            <Grid item xs={2}>
              <FormControl fullWidth>
                <Button variant="contained"> Adicionar </Button>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default NewLie