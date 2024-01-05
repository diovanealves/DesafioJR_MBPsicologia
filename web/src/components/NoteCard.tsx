import useNote from '@/hooks/useNote'
import { DisciplineData } from '@/schemas/NoteData'
import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import { format } from 'date-fns'
import { BarChart3, Trash2 } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

interface NoteCardProps extends DisciplineData {}

export default function NoteCard(props: NoteCardProps) {
  const { deleteNote } = useNote()
  const cardVariants = cva(
    'flex flex-1 flex-col justify-between h-[146px] rounded-[20px] pt-4 pb-5',
    {
      variants: {
        variant: {
          Biologia: 'bg-card-biology',
          Artes: 'bg-card-art',
          Geografia: 'bg-card-geography',
          Sociologia: 'bg-card-sociology',
        },
      },
    },
  )

  const formattedDate = props.criadoEm
    ? format(props.criadoEm, 'dd/MM/yyyy')
    : ''

  return (
    <div className="flex items-start">
      <div className={clsx(cardVariants({ variant: props.disciplina }))}>
        <div className="ml-4 space-y-2">
          <h1 className="text-lg font-medium leading-4">{props.disciplina}</h1>
          <p className="text-sm font-normal leading-3">{formattedDate}</p>
        </div>

        <div
          className={twMerge(
            'py-1 flex items-center pl-4 gap-1 bg-[#0F0F0F] bg-opacity-75',
            props.nota < 6
              ? 'text-red-500'
              : props.nota >= 6 && props.nota < 8
                ? 'text-yellow-500'
                : 'text-green-500',
          )}
        >
          <BarChart3 className="h-5 w-5" />
          <h1 className="text-sm font-normal">Nota: {props.nota}</h1>
        </div>
      </div>

      <button onClick={() => deleteNote(props.id as string)}>
        <Trash2 className="text-[#FF5964]" />
      </button>
    </div>
  )
}
