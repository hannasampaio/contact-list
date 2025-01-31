import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: ${variaveis.azulEscuro};
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: ${variaveis.branco};
  padding: 24px;
  border-radius: 8px;
`

export const Campo = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: ${variaveis.azulClaro};
    outline: none;
  }
`

export const Opcoes = styled.div`
  display: flex;
  margin-bottom: 10px;
  gap: 8px;

  label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    cursor: pointer;
  }
`

export const Opcao = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  text-transform: capitalize;
  margin-right: 10px;

  }
`

export default { Form, Campo, Opcoes }
