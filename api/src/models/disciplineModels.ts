import { number, object, string } from 'yup'

export const IDisciplineSchema = object({
  bimestre: string()
    .oneOf(['Primeiro', 'Segundo', 'Terceiro', 'Quarto'], 'Bimestre inválido')
    .required('Bimestre obrigatório'),
  disciplina: string()
    .oneOf(
      ['Biologia', 'Artes', 'Geografia', 'Sociologia'],
      'Disciplina inválida',
    )
    .required('Disciplina obrigatório'),
  nota: number()
    .min(0, 'A nota deve estar entre 0 e 10.')
    .max(10, 'A nota deve estar entre 0 e 10.'),
})
