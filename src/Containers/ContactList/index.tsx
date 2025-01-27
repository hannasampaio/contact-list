import { useSelector } from 'react-redux'

import ContactCard from '../../Components/ContactCard'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ContactList = () => {
  const { contatos } = useSelector((state: RootReducer) => state)
  return (
    <Container>
      <p>
        2 Contatos classificados como: &quot;categoria&ldquo; e
        &quot;termo&ldquo;
      </p>
      <ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <ContactCard
              categoria={c.categoria}
              nome={c.nome}
              email={c.email}
              telefone={c.telefone}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}
export default ContactList
