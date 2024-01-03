import { Api } from '@/lib/axios'
import { DisciplineData } from '@/schemas/NoteData'
import { AxiosResponse } from 'axios'

class ApiService {
  async createNote({
    bimestre,
    disciplina,
    nota,
  }: DisciplineData): Promise<AxiosResponse<DisciplineData>> {
    return await Api.post('/disciplina', { bimestre, disciplina, nota })
  }
}

export default new ApiService()
