import { Api } from '@/lib/axios'
import { DisciplineData } from '@/schemas/NoteData'

class ApiService {
  async createNote(data: DisciplineData) {
    return Api.post('/disciplina', data)
  }
}

export default new ApiService()
