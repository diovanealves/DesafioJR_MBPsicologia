export interface DisciplineData {
  id?: string
  bimestre?: string
  disciplina: 'Biologia' | 'Artes' | 'Geografia' | 'Sociologia'
  nota: number
  criadoEm?: Date
  atualizadoEm?: Date
}
