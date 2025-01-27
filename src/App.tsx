import { Provider } from 'react-redux'
import ContactList from './Containers/ContactList'
import ContactSideBar from './Containers/ContactSidebar'
import EstiloGlobal, { Container } from './styles'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <ContactSideBar />
        <ContactList />
      </Container>
    </Provider>
  )
}

export default App
