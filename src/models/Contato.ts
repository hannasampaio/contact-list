import * as enums from '../utils/enums/contato'

class Contato {
  categoria: enums.Categoria
  nome: string
  telefone: string
  email: string
  id: number

  constructor(
    categoria: enums.Categoria,
    nome: string,
    telefone: string,
    email: string,
    id: number
  ) {
    this.categoria = categoria
    this.nome = nome
    this.telefone = telefone
    this.email = email
    this.id = id
  }
}

export default Contato
