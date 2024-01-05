import ShowMyToast from '@/components/ShowMyToast'
import { useDataContext } from '@/context/dataContext'
import {
  BimesterData,
  DisciplineData,
  FormContentProps,
} from '@/schemas/NoteData'
import noteService from '@/services/noteService'
import { isAxiosError } from 'axios'
import { useCallback } from 'react'

const useNote = () => {
  const { setSearchData } = useDataContext()

  const getNotes = useCallback(async () => {
    try {
      const bimester = ['Primeiro', 'Segundo', 'Terceiro', 'Quarto']
      const notasPromises = bimester.map(async (bimester) =>
        noteService.getNotesByBimester(bimester),
      )
      const notes = await Promise.all(notasPromises)

      const bimesterData: BimesterData[] = bimester.reduce<BimesterData[]>(
        (acc, currentBimester, i) => {
          const filteredNotes = notes[i].data.filter(
            (note: DisciplineData) => note.bimestre === currentBimester,
          )
          acc.push({
            bimester: currentBimester,
            notes: filteredNotes,
          })

          return acc
        },
        [],
      )

      setSearchData(bimesterData)
    } catch (error) {
      ShowMyToast('Erro ao buscar notas', 'destructive')
      return []
    }
  }, [setSearchData])

  const createNote = useCallback(
    async (data: FormContentProps) => {
      try {
        const response = await noteService.createNote(data)

        if (response.status !== 201) {
          ShowMyToast(
            'Erro ao criar. tente novamente mais tarde',
            'destructive',
          )
        }

        ShowMyToast('Nota criado com sucesso', 'default')
        await getNotes()
        return response.data
      } catch (error) {
        const isAxiosErr = isAxiosError(error)
        const errorMessage =
          isAxiosErr && error.response?.data.error
            ? error.response?.data.error
            : 'Erro desconhecido. Por favor, tente novamente.'

        ShowMyToast(errorMessage, 'destructive')
      }
    },
    [getNotes],
  )

  const deleteNote = useCallback(
    async (id: string) => {
      try {
        const response = await noteService.deleteNote(id)

        if (response.status !== 204) {
          ShowMyToast(
            'Erro ao deletar. Tente novamente mais tarde',
            'destructive',
          )
        }

        ShowMyToast('Nota deletada com sucesso', 'default')
        await getNotes()
        return response.data
      } catch (error) {
        ShowMyToast('Erro ao deletar nota', 'destructive')
      }
    },
    [getNotes],
  )

  return { getNotes, createNote, deleteNote }
}

export default useNote
