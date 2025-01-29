import { useSelector } from 'react-redux'

import ContactCard from '../../Components/ContactCard'
import { MainContainer, Titulo } from '../../styles/index'
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

  const exibeResultadoFiltrage = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todos') {
      mensagem = `${quantidade} Contato(s) encontrado(s) como: todos ${complementacao}`
    } else {
      mensagem = `${quantidade} Contato(s) encontrado(s) como: "${`${criterio}`}" ${complementacao}`
    }

    return mensagem
  }

  const contatos = filtraContatos()
  const mensagem = exibeResultadoFiltrage(contatos.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {contatos.map((c) => (
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
    </MainContainer>
  )
}
export default ContactList
