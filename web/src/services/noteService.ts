import { Api } from '@/lib/axios'
import { DisciplineData } from '@/schemas/NoteData'
import { AxiosResponse } from 'axios'

class NoteService {
  async createNote({
    bimestre,
    disciplina,
    nota,
  }: DisciplineData): Promise<AxiosResponse<DisciplineData>> {
    return await Api.post('/disciplina', { bimestre, disciplina, nota })
  }

  async deleteNote(id: string) {
    return await Api.delete(`/disciplina/${id}`)
  }
}
export default new NoteService()
