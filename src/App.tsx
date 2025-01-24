import ContactList from './Containers/ContactList'
import ContactSideBar from './Containers/ContactSidebar'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <ContactSideBar />
        <ContactList />
      </Container>
    </>
  )
}

export default App
