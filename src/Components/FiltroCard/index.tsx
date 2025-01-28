import { useDispatch, useSelector } from 'react-redux'
import { alterarFiltro } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'
import * as S from './styles'
import * as enums from '../../utils/enums/contato'

export type Props = {
  legenda: string
  criterio: 'familia' | 'amigos' | 'trabalho' | 'todos'
  valor?: enums.Categoria
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()

  // Acessa o estado de contatos e filtro usando useSelector
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { filtro } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarContatos = () => {
    if (criterio === 'todos') return itens.length

    if (valor === enums.Categoria.FAMILIA) {
      return itens.filter((item) => item.categoria === enums.Categoria.FAMILIA)
        .length
    } else if (valor === enums.Categoria.AMIGOS) {
      return itens.filter((item) => item.categoria === enums.Categoria.AMIGOS)
        .length
    } else if (valor === enums.Categoria.TRABALHO) {
      return itens.filter((item) => item.categoria === enums.Categoria.TRABALHO)
        .length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const contador = contarContatos()
  const ativo = verificaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
