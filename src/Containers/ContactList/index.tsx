import ContactCard from '../../Components/ContactCard'
import { Container } from './styles'

const contatos = [
  {
    categoria: 'Familia',
    nome: 'Hanna Sampaio',
    email: 'hanna@hotmail.com',
    telefone: 910218893
  },
  {
    categoria: 'Amigos',
    nome: 'Nathany',
    email: 'nany@hotmail.com',
    telefone: 910222333
  },
  {
    categoria: 'Trabalho',
    nome: 'Ana',
    email: 'ana@hotmail.com',
    telefone: 910219999
  }
]

const ContactList = () => (
  <Container>
    <p>
      2 Contatos classificados como: &quot;categoria&ldquo; e &quot;termo&ldquo;
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

export default ContactList
