import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      categoria: enums.Categoria.FAMILIA,
      nome: 'Júlia Sampaio',
      telefone: '999999999',
      email: 'julia@gmail.com'
    },
    {
      id: 2,
      categoria: enums.Categoria.AMIGOS,
      nome: 'Katlin Botelho',
      telefone: '999999999',
      email: 'katlin@gmail.com'
    },
    {
      id: 3,
      categoria: enums.Categoria.TRABALHO,
      nome: 'Ana Sousa',
      telefone: '999999999',
      email: 'ana@gmail.com'
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      )
      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    }
  }
})

export const { remover, editar } = contactsSlice.actions

export default contactsSlice.reducer
