import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../Components/FiltroCard'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../utils/enums/contato'

const ContactSideBar = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder=" Buscar Contato"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard
            valor={enums.Categoria.FAMILIA}
            criterio="familia"
            legenda="família"
          />
          <FiltroCard
            valor={enums.Categoria.AMIGOS}
            criterio="amigos"
            legenda="amigos"
          />
          <FiltroCard
            valor={enums.Categoria.TRABALHO}
            criterio="trabalho"
            legenda="trabalho"
          />
          <FiltroCard
            valor={enums.Categoria.TODOS}
            criterio="todos"
            legenda="todos"
          />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default ContactSideBar
