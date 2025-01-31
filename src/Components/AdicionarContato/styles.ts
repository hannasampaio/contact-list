import { Link } from 'react-router-dom'

import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Botao = styled(Link)`
  font-weight: 500;
  margin-bottom: 16px;
  font-size: 14px;
  padding: 16px 24px;
  width: 100%;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${variaveis.azulEscuro};
  color: ${variaveis.branco};
  border: none;
  text-decoration: none;
`
