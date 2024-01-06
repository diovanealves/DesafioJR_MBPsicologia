import { cva } from 'class-variance-authority'
import clsx from 'clsx'

interface DialogCardProps {
  id: number
  selectedId: number | null
  title: 'Biologia' | 'Artes' | 'Geografia' | 'Sociologia'
  onChange: (id: number) => void
}

export default function DialogCard({
  id,
  selectedId,
  title,
  onChange,
}: DialogCardProps) {
  const dialogCardVariants = cva(
    `flex items-center justify-center w-full h-[53px] rounded-[20px] text-white text-lg font-medium mx-auto ${
      selectedId === id ? 'opacity-100' : 'opacity-20'
    }`,
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

  return (
    <label className="cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        checked={id === selectedId}
        onChange={() => onChange(id)}
      />
      <div className={clsx(dialogCardVariants({ variant: title }))}>
        {title}
      </div>
    </label>
  )
}
