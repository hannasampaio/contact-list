import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Aside = styled.aside`
  padding: 32px;
  background-color: ${variaveis.cinzaMuitoClaro};
  height: 100vh;
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`
export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  svg {
    position: absolute;
    left: 12px;
    color: ${variaveis.cinzaEscuro};
  }

  input {
    width: 100%;
    padding: 10px 12px 10px 36px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    transition: border 0.3s;
`
