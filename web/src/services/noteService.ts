import ShowMyToast from '@/components/ShowMyToast'
import { Api } from '@/lib/axios'
import { DisciplineData } from '@/schemas/NoteData'
import { AxiosResponse } from 'axios'

class NoteService {
  private cache: Record<string, DisciplineData[]> = {}

  async createNote({
    bimestre,
    disciplina,
    nota,
  }: DisciplineData): Promise<AxiosResponse<DisciplineData>> {
    return await Api.post('/disciplina', { bimestre, disciplina, nota })
  }

  async getNotesByBimester(bimester: string) {
    if (this.cache[bimester]) {
      return this.cache[bimester]
    }

    try {
      const response = await Api.get(`/disciplina/${bimester}/busca`)

      this.cache[bimester] = response.data

      return response.data
    } catch (error) {
      ShowMyToast(`Erro ao buscar nota do bimestre ${bimester}`, 'destructive')
      throw error
    }
  }
}

export default new NoteService()
