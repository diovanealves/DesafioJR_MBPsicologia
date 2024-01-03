interface DialogCardProps {
  title: string
  background?: string
  onClick?: () => void
}
export default function DialogCard({
  background,
  title,
  onClick,
}: DialogCardProps) {
  return (
    <button
      className="flex items-center justify-center w-[130px] h-[53px] rounded-[20px] text-white text-lg font-medium opacity-20 hover:opacity-100"
      style={{
        backgroundColor: background,
      }}
      onClick={onClick}
    >
      {title}
    </button>
  )
}
