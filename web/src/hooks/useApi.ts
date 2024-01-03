import ShowMyToast from '@/components/ShowMyToast'
import { DisciplineData } from '@/schemas/NoteData'
import apiService from '@/services/apiService'
import { isAxiosError } from 'axios'
import { useCallback } from 'react'

export default function UseApi() {
  const createNote = useCallback(async (data: DisciplineData) => {
    try {
      const response = await apiService.createNote(data)

      if (response.status !== 201) {
        ShowMyToast('Erro ao criar. Tente novamente mais tarde.', 'destructive')
      }

      ShowMyToast('Nota criado com sucesso.', 'default')
      return response.data
    } catch (error) {
      const isAxiosErr = isAxiosError(error)
      const errorMessage =
        isAxiosErr && error.response?.data.error
          ? error.response?.data.error
          : 'Erro desconhecido. Por favor, tente novamente.'

      ShowMyToast(errorMessage, 'destructive')
    }
  }, [])

  return { createNote }
}
