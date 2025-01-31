import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import Contato from '../../models/Contato'
import { BotaoSalvar } from './styles'
import { Botao } from '../../styles'

import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

type Props = Contato

const ContactCard = ({
  categoria,
  nome,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [telefoneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.Card>
      <S.Tag categoria={categoria}> {categoria}</S.Tag>
      <S.Nome>
        {estaEditando && <em>Editando:</em>}
        {nome}
      </S.Nome>
      <MdEmail size={16} />
      <S.Email
        disabled={!estaEditando}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      >
        {email}
      </S.Email>
      <FaPhone size={16} />
      <S.Telefone
        disabled={!estaEditando}
        value={telefone}
        onChange={(evento) => setTelefone(evento.target.value)}
      >
        {telefone}
      </S.Telefone>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    categoria,
                    nome,
                    telefone,
                    email,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default ContactCard
