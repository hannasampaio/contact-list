import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/contato'

type FiltroSate = {
  termo?: string
  criterio: 'Família' | 'Amigos' | 'Trabalho' | 'Todos'
  valor?: enums.Categoria
}

const initialState: FiltroSate = {
  termo: '',
  criterio: 'Todos'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroSate>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alteraTermo, alterarFiltro } = filtroSlice.actions
export default filtroSlice.reducer
