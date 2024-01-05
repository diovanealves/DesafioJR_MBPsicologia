import disciplines from '@/mocks/discipline'
import { useForm } from 'react-hook-form'

import UseNote from '@/hooks/useNote'
import { NoteSchema } from '@/schemas/NewNoteValidation'
import { FormContentProps } from '@/schemas/NoteData'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import DialogCard from './DialogCard'
import MyButton from './MyButton'

interface FormProps {
  bimester: string
  onClose: () => void
}

export default function FormContent({ bimester, onClose }: FormProps) {
  const [selectedDiscipline, setSelectedDiscipline] = useState<number | null>(
    null,
  )
  const { createNote } = UseNote()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      bimestre: bimester,
    },
    resolver: yupResolver(NoteSchema),
  })

  if (errors.nota) {
    setValue('disciplina', '')
  }

  async function onsubmit(data: FormContentProps) {
    const result = await createNote(data)
    reset({ disciplina: '', nota: 0 })
    if (result) {
      onClose()
    }
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-5 mx-auto mt-5">
        {disciplines.map((discipline) => (
          <DialogCard
            key={discipline.id}
            id={discipline.id}
            selectedId={selectedDiscipline}
            title={discipline.title}
            onClick={() => {
              setValue('disciplina', discipline.title)
              setSelectedDiscipline(discipline.id)
            }}
          />
        ))}
      </div>
      {errors.disciplina && (
        <p className="text-sm text-red-500 mt-1 mb-3">
          {errors.disciplina.message}
        </p>
      )}

      <span className="text-sm text-[#ECEDEE] mt-4 block">Nota</span>

      <input
        type="number"
        placeholder="5.4"
        className={`bg-transparent w-[101px] h-[48px] rounded-xl placeholder:text-[#6D6D6D] px-4 py-3 mt-2 focus:outline-none appearance-none border-2 ${
          errors.nota && ' border-red-500 transition-colors'
        }`}
        {...register('nota')}
      />
      {errors.nota && (
        <p className="text-sm text-red-500 mt-1">{errors.nota.message}</p>
      )}

      <div className="flex justify-end mt-7">
        <MyButton
          className="w-[134px] h-[48px ]"
          onClick={handleSubmit(onsubmit)}
        >
          Confirmar
        </MyButton>
      </div>
    </>
  )
}
