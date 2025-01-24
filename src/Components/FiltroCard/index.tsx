import * as S from './styles'

export type Props = {
  ativo?: boolean
}

const FiltroCard = (props: Props) => (
  <S.Card ativo={props.ativo}>
    <S.Contador>5</S.Contador>
    <S.Label>contatos</S.Label>
  </S.Card>
)
export default FiltroCard
