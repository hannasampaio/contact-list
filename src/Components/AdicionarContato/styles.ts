import { Link } from 'react-router-dom'

import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Botao = styled(Link)`
  font-weight: 500;
  margin-bottom: 1.25rem;
  font-size: 1rem;
  padding: 8px 24px;
  width: 100%;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${variaveis.azulEscuro};
  color: #fff;
  border: none;
  text-decoration: none;
`
