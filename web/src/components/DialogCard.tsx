interface DialogCardProps {
  id: number
  selectedId: number | null
  title: string
  background?: string
  onClick?: () => void
}
export default function DialogCard({
  id,
  selectedId,
  background,
  title,
  onClick,
}: DialogCardProps) {
  return (
    <button
      className={`flex items-center justify-center w-[130px] h-[53px] rounded-[20px] text-white text-lg font-medium ${
        selectedId === id ? 'opacity-100' : 'opacity-20'
      }`}
      style={{
        backgroundColor: background,
      }}
      onClick={onClick}
    >
      {title}
    </button>
  )
}
