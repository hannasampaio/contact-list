import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  FiSearch,
  FiUsers,
  FiUser,
  FiBriefcase,
  FiFilter
} from 'react-icons/fi'

import FiltroCard from '../../Components/FiltroCard'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../utils/enums/contato'
import { Botao, Campo } from '../../styles'
import AdicionarContato from '../../Components/AdicionarContato'

type Props = {
  mostrarFiltros: boolean
}

const ContactSideBar = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <AdicionarContato />
            <S.InputContainer>
              <FiSearch size={20} />
              <Campo
                type="text"
                placeholder="Buscar contato"
                value={termo}
                onChange={(evento) =>
                  dispatch(alteraTermo(evento.target.value))
                }
              />
            </S.InputContainer>
            <S.Filtros>
              <FiltroCard
                valor={enums.Categoria.FAMILIA}
                criterio="Família"
                legenda="Família"
                icone={<FiUsers size={20} />}
              />
              <FiltroCard
                valor={enums.Categoria.AMIGOS}
                criterio="Amigos"
                legenda="Amigos"
                icone={<FiUser size={20} />}
              />
              <FiltroCard
                valor={enums.Categoria.TRABALHO}
                criterio="Trabalho"
                legenda="Trabalho"
                icone={<FiBriefcase size={20} />}
              />
              <FiltroCard
                valor={enums.Categoria.TODOS}
                criterio="Todos"
                legenda="Todos"
                icone={<FiFilter size={20} />}
              />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>
            Voltar a lista de contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default ContactSideBar
