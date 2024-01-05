import { Api } from '@/lib/axios'
import { DisciplineData, FormContentProps } from '@/schemas/NoteData'
import { AxiosResponse } from 'axios'

class NoteService {
  async getNotesByBimester(bimester: string) {
    return await Api.get(`/disciplina/${bimester}/busca`)
  }

  async createNote({
    bimestre,
    disciplina,
    nota,
  }: FormContentProps): Promise<AxiosResponse<DisciplineData>> {
    return await Api.post('/disciplina', { bimestre, disciplina, nota })
  }

  async deleteNote(id: string) {
    return await Api.delete(`/disciplina/${id}`)
  }
}
export default new NoteService()
