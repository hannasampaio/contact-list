import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/contato'
import { Botao } from '../../styles'

type TagProps = {
  categoria?: enums.Categoria
}

function retornacorDeFundo(props: TagProps): string {
  if (props.categoria) {
    if (props.categoria === enums.Categoria.FAMILIA) return variaveis.amarelo
    if (props.categoria === enums.Categoria.AMIGOS) return variaveis.verde
    if (props.categoria === enums.Categoria.TRABALHO) return variaveis.azulClaro
  }
  return variaveis.azulEscuro
}

export const Card = styled.div`
  background-color: ${variaveis.cinzaMuitoClaro};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`
export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
  color: ${variaveis.branco};
  font-weight: 700;
  display: inline-block;
  background-color: ${(props) => retornacorDeFundo(props)};
`

export const Nome = styled.h3`
  margin: 16px 0;
  font-weight: 700;
  font-size: 18px;
  color: ${variaveis.preto};
  height: 1.3rem;
  cursor: pointer;
  width: 100%;
  border: none;
  background-color: transparent;
`

export const Email = styled.textarea`
  color: ${variaveis.preto};
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
  color: ${variaveis.preto};
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

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
