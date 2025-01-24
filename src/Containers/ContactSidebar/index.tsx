import FiltroCard from '../../Components/FiltroCard'

import * as S from './styles'

const ContactSideBar = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Contato" />
      <S.Filtros>
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default ContactSideBar
