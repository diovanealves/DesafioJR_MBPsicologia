import ShowMyToast from '@/components/ShowMyToast'
import { DisciplineData } from '@/schemas/NoteData'
import noteService from '@/services/noteService'
import { isAxiosError } from 'axios'
import { useCallback, useEffect, useState } from 'react'

interface BimesterData {
  bimester: string
  notes: DisciplineData[]
}

export default function UseNote() {
  const [noteByBimester, setNoteByBimester] = useState<BimesterData[]>([])

  useEffect(() => {
    async function getNotes() {
      try {
        const bimester = ['Primeiro', 'Segundo', 'Terceiro', 'Quarto']
        const notasPromises = bimester.map(async (bimester) =>
          noteService.getNotesByBimester(bimester),
        )
        const notes = await Promise.all(notasPromises)

        const bimesterData: BimesterData[] = bimester.map((bimester, index) => {
          const filteredNotes = notes[index].filter(
            (note: DisciplineData) => note.bimestre === bimester,
          )
          return {
            bimester,
            notes: filteredNotes,
          }
        })
        setNoteByBimester(bimesterData)
      } catch (error) {
        ShowMyToast('Erro ao buscar notas', 'destructive')
      }
    }

    getNotes()
  }, [])

  const createNote = useCallback(async (data: DisciplineData) => {
    try {
      const response = await noteService.createNote(data)

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

  return { noteByBimester, createNote }
}
