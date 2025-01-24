import FiltroCard from '../../Components/FiltroCard'

import * as S from './styles'

const ContactSideBar = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Contato" />
      <S.Filtros>
        <FiltroCard legenda="Família" contador={1} />
        <FiltroCard legenda="Amigos" contador={2} />
        <FiltroCard legenda="Trabalho" contador={3} />
        <FiltroCard legenda="Gerais" contador={4} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default ContactSideBar
