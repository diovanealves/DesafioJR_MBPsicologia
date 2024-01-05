import ShowMyToast from '@/components/ShowMyToast'
import { DisciplineData } from '@/schemas/NoteData'
import noteService from '@/services/noteService'
import { isAxiosError } from 'axios'
import { useCallback } from 'react'

const useNote = () => {
  const createNote = useCallback(async (data: DisciplineData) => {
    try {
      const response = await noteService.createNote(data)

      if (response.status !== 201) {
        ShowMyToast('Erro ao criar. tente novamente mais tarde', 'destructive')
      }

      ShowMyToast('Nota criado com sucesso', 'default')
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

  const deleteNote = useCallback(async (id: string) => {
    try {
      const response = await noteService.deleteNote(id)

      if (response.status !== 204) {
        ShowMyToast(
          'Erro ao deletar. Tente novamente mais tarde',
          'destructive',
        )
      } else {
        ShowMyToast('Nota deletada com sucesso', 'default')
      }

      return response.data
    } catch (error) {
      ShowMyToast('Erro ao deletar nota', 'destructive')
    }
  }, [])

  return { createNote, deleteNote }
}

export default useNote
