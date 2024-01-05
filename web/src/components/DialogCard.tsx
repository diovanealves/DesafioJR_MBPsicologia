import { cva } from 'class-variance-authority'
import clsx from 'clsx'

interface DialogCardProps {
  id: number
  selectedId: number | null
  title: 'Biologia' | 'Artes' | 'Geografia' | 'Sociologia'
  onClick?: () => void
}
export default function DialogCard({
  id,
  selectedId,
  title,
  onClick,
}: DialogCardProps) {
  const dialogCardVariants = cva(
    `w-full h-[53px] rounded-[20px] text-white text-lg font-medium mx-auto ${
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
    <button
      className={clsx(dialogCardVariants({ variant: title }))}
      onClick={onClick}
    >
      {title}
    </button>
  )
}
