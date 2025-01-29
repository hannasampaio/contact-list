import styled from 'styled-components'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #fff;
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
    border-color: #007bff;
    outline: none;
  }
`

export const Opcoes = styled.div`
  display: flex;
  margin-bottom: 10px;
  gap: 16px;

  label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    cursor: pointer;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;

  }
`

export default { Form, Campo, Opcoes }
