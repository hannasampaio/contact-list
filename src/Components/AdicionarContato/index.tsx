import { Botao } from './styles'
import { FiPlusCircle } from 'react-icons/fi'

const AdicionarContato = () => {
  return (
    <>
      <Botao to="/novo">
        {' '}
        <FiPlusCircle size={16} style={{ marginRight: 6 }} /> Novo contato
      </Botao>
    </>
  )
}

export default AdicionarContato
