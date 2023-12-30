import disciplines from '@/mocks/discipline'
import { NoteSchema } from '@/schemas/NewNoteValidation'
import { DisciplineData } from '@/schemas/NoteData'
import { yupResolver } from '@hookform/resolvers/yup'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import DialogCard from './DialogCard'
import MyButton from './MyButton'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

interface DialogProps {
  title: string
  bimester: string
}

export default function MyDialog({ title, bimester }: DialogProps) {
  const [open, setOpen] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(NoteSchema),
  })

  if (errors.nota) {
    setValue('disciplina', '')
  }

  const onSubmit = async (data: DisciplineData) => {
    setValue('bimestre', bimester)
    console.log(data)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <MyButton mobile mobileText="Adicionar">
          <Plus className="w-8 h-8 text-black" />
        </MyButton>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle className="text-white text-3xl font-medium">
          {title}
        </DialogTitle>
        <DialogClose />

        <div className="flex flex-col">
          <h1 className="text-lg font-medium text-white">Disciplina</h1>
          <div className="grid grid-cols-2 gap-5 mt-6 ">
            {disciplines.map((discipline, index) => (
              <DialogCard
                key={index}
                title={discipline.title}
                background={discipline.background}
                onClick={() => setValue('disciplina', discipline.title)}
              />
            ))}
          </div>
          {errors.disciplina && (
            <p className="text-sm text-red-500 mt-1">
              {errors.disciplina?.message}
            </p>
          )}

          <span className="text-sm text-[#ECEDEE] mt-4">Nota</span>
          <input
            type="number"
            placeholder="7.4"
            className={`bg-transparent w-[101px] h-[48px] rounded-xl placeholder:text-[#6D6D6D] px-4 py-3 mt-2 focus:outline-none appearance-none border-2 ${
              errors.nota && 'border-red-500'
            }`}
            {...register('nota')}
          />
          {errors.nota && (
            <p className="text-sm text-red-500 mt-1 mb-5">
              {errors.nota?.message}
            </p>
          )}

          <div className="flex justify-end">
            <MyButton
              className="w-[134px] h-[48px]"
              onClick={handleSubmit(onSubmit)}
            >
              Confirmar
            </MyButton>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
