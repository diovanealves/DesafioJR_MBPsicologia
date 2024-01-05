export interface DisciplineData {
  id?: string
  bimestre?: string
  disciplina: 'Biologia' | 'Artes' | 'Geografia' | 'Sociologia'
  nota: number
  criadoEm?: Date
  atualizadoEm?: Date
}

export interface FormContentProps {
  id?: string
  bimestre?: string
  disciplina: string
  nota: number
  criadoEm?: Date
  atualizadoEm?: Date
}

export interface BimesterData {
  bimester: string
  notes: DisciplineData[]
}
