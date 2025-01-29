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
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoExiste) {
        alert('Já Existe um contato com esse nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contactsSlice.actions

export default contactsSlice.reducer
