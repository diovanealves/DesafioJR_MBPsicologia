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

  async getNotesByBimester(
    bimester: string,
  ): Promise<AxiosResponse<DisciplineData>> {
    return await Api.get(`/disciplina/${bimester}/busca`)
  }
}
export default new NoteService()
