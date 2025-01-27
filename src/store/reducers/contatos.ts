import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/contato'

const contactsSlice = createSlice({
  name: 'contato',
  initialState: [
    new Contato(
      enums.Categoria.FAMILIA,
      'Júlia Sampaio',
      999999999,
      'julia@gmail.com',
      1
    ),
    new Contato(
      enums.Categoria.AMIGOS,
      'Katlin Botelho',
      88888888,
      'katlin@gmail.com',
      2
    ),
    new Contato(
      enums.Categoria.TRABALHO,
      'ANA SOUSA',
      77777777,
      'ana@gmail.com',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload)
    }
  }
})

export const { remover } = contactsSlice.actions

export default contactsSlice.reducer
