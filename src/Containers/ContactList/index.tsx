import { useSelector } from 'react-redux'

import ContactCard from '../../Components/ContactCard'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (contato) => contato.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (criterio === 'familia') {
        contatosFiltrados = contatosFiltrados.filter(
          (contato) => contato.categoria === valor
        )
      } else if (criterio === 'amigos') {
        contatosFiltrados = contatosFiltrados.filter(
          (contato) => contato.categoria === valor
        )
      } else if (criterio === 'trabalho') {
        contatosFiltrados = contatosFiltrados.filter(
          (contato) => contato.categoria === valor
        )
      }
      return contatosFiltrados
    } else {
      return itens
    }
  }

  return (
    <Container>
      <p>
        2 Contatos classificados como: &quot;categoria&ldquo; e &quot;{termo}
        &ldquo;
      </p>
      <ul>
        <li>{termo}</li>
        <li>{criterio}</li>
        <li>{valor}</li>
      </ul>
      <ul>
        {filtraContatos().map((c) => (
          <li key={c.nome}>
            <ContactCard
              id={c.id}
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
