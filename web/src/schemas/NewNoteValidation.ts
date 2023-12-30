import { number, object, string } from 'yup'

export const NoteSchema = object().shape({
  bimestre: string(),
  disciplina: string().required('Disciplina e obrigatório'),
  nota: number()
    .min(0, 'A nota deve estar entre 0 e 10.')
    .max(10, 'A nota deve estar entre 0 e 10.')
    .typeError('Por favor, insira um número')
    .required('Esse campo é obrigatório'),
})
