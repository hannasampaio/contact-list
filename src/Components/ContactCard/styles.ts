import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/contato'

type TagProps = {
  categoria?: enums.Categoria
}

function retornacorDeFundo(props: TagProps): string {
  if (props.categoria) {
    if (props.categoria === enums.Categoria.FAMILIA) return variaveis.amarelo
    if (props.categoria === enums.Categoria.AMIGOS) return variaveis.verde
    if (props.categoria === enums.Categoria.TRABALHO) return variaveis.vermelho
  }
  return variaveis.azulEscuro
}

export const Card = styled.div`
  background-color: #f2f2f2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`
export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
  color: #aeae;
  font-weight: 700;
  display: inline-block;
  background-color: ${(props) => retornacorDeFundo(props)};
`

export const Nome = styled.h3`
  margin: 16px 0;
  font-weight: 700;
  font-size: 18px;
  color: #000;
  height: 1.3rem;
  cursor: pointer;
  width: 100%;
  border: none;
  background-color: transparent;
`

export const Email = styled.textarea`
  color: #000;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  cursor: pointer;
  display: block;
  width: 100%;
  resize: none;
  border: none;
  background-color: transparent;
`

export const Telefone = styled.textarea`
  color: #000;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  cursor: pointer;
  display: block;
  width: 100%;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-tp: 16px;
`

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
  margin-top: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

export const BotaoRemover = styled(Botao)`
  background-color: ${variaveis.verde};
`
