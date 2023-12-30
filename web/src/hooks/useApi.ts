import { useToast } from '@/components/ui/use-toast'
import { DisciplineData } from '@/schemas/NoteData'
import apiService from '@/services/apiService'

export default function UseApi() {
  const { toast } = useToast()

  async function createNote(data: DisciplineData) {
    try {
      const response = await apiService.createNote(data)

      if (response.status === 201) {
        toast({
          description: 'Nota criada com sucesso',
          variant: 'default',
          duration: 4500,
        })
        return response.data
      } else {
        toast({
          description: 'Erro ao criar. Tente novamente mais tarde.',
          variant: 'destructive',
          duration: 4500,
        })
      }
    } catch (error: any) {
      if (error.response && error.response.data) {
        toast({
          description: error.response.data.error,
          variant: 'destructive',
          duration: 4500,
        })
      } else {
        toast({
          description: 'Erro desconhecido. Por favor, tente novamente.',
          variant: 'destructive',
          duration: 4500,
        })
      }
    }
  }

  return { createNote }
}
