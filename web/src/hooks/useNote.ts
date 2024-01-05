import ShowMyToast from '@/components/ShowMyToast'
import { DisciplineData, FormContentProps } from '@/schemas/NoteData'
import noteService from '@/services/noteService'
import { isAxiosError } from 'axios'
import { useCallback, useEffect, useState } from 'react'

interface BimesterData {
  bimester: string
  notes: DisciplineData[]
}

const useNote = () => {
  const [noteByBimester, setNoteByBimester] = useState<BimesterData[]>([])

  useEffect(() => {
    async function getNotes() {
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

        setNoteByBimester(bimesterData)
      } catch (error) {
        ShowMyToast('Erro ao buscar notas', 'destructive')
      }
    }

    getNotes()
  }, [])

  const createNote = useCallback(async (data: FormContentProps) => {
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

  return { noteByBimester, createNote, deleteNote }
}

export default useNote
