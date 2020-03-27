import React, { useEffect, useState } from 'react'
import { FormControl, TextField, Grid, Button } from '@material-ui/core'

//import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import { PopupInfo } from '../../Components/Popup';
import { registerLies } from '../../Services';

const animatedComponents = makeAnimated();

function NewLie() {

  const [selectCategory, setSelectCategory] = useState()
  const [formRegisterLie, setFormRegisterLie] = useState({})

  const options = [
    { value: 'dinheiro', label: 'Dinheiro' },
    { value: 'esposa', label: 'Esposa' },
    { value: 'trabalho', label: 'Trabalho' }
  ]

  useEffect(() => {
    console.log(selectCategory)
  }, [selectCategory])

  const HandlerChange = (e) => {
    const { target: { name, value } } = e
    setFormRegisterLie({ ...formRegisterLie, [name]: value })
  }

  const HandlerChangeSelect = (e) => {
    console.log(e)
    setSelectCategory(e)
  }

  const HandlerSubmit = async (e) => {
    e.preventDefault()

    if (selectCategory === undefined) {
      PopupInfo('warning', null, 'Selecione pelo menos uma categoria')
      return;
    }
    const category = selectCategory.map(item => { return item.value.toLowerCase() })
    const request = { ...formRegisterLie, "categorias": category }
    console.log(request)
    console.log(Object.keys(request).length)
    if (Object.keys(request).length < 3) {
      PopupInfo('warning', null, 'Preencha todos os dados')
      return;
    }
    const data = await registerLies(request);
    if (data.error) {
      PopupInfo('error', 'Oops...', data.error)
    } else {
      PopupInfo('success', 'Heeey', 'Registro realizado com sucesso', () => { HandlerClearInputs() })
    }
  }

  const HandlerClearInputs = () => {
    console.log("clear")
    setFormRegisterLie({})
    setSelectCategory()
  }

  return (
    <>

      <form onSubmit={HandlerSubmit}>
        <Grid container justify="center">
          <Grid container item xs={6} spacing={4}>
            <Grid item xs={12}>
              <h1>Cadastrar nova mentira ?!</h1>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField name="resumo" label="resumo" onChange={HandlerChange} />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-multiline-static"
                  label="história da mentira"
                  name="descricao"
                  onChange={HandlerChange}
                  multiline
                  rows="6"
                  variant="outlined"
                />
              </FormControl>
            </Grid>
            <Grid item xs={8}>
              <FormControl fullWidth>
                <CreatableSelect
                  name="categoria"
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  options={options}
                  onChange={HandlerChangeSelect}
                  isMulti
                >
                </CreatableSelect>
              </FormControl>
            </Grid>
            <Grid container item xs={12} justify="flex-end">
              <Grid item>
                <FormControl fullWidth>
                  <Button variant="contained" color="primary" type="submit"> Adicionar </Button>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default NewLie