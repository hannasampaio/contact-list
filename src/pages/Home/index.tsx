import ContactSidebar from '../../Containers/ContactSidebar'
import ContactList from '../../Containers/ContactList'

const Home = () => {
  return (
    <>
      <ContactSidebar mostrarFiltros={true} />
      <ContactList />
    </>
  )
}

export default Home
