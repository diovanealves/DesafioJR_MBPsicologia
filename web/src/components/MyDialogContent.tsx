import FormContent from './FormContent'
import { DialogContent, DialogTitle } from './ui/dialog'

interface MyDialogContentProps {
  title: string
  bimester: string
  onClose: () => void
}
export default function MyDialogContent({
  title,
  bimester,
  onClose,
}: MyDialogContentProps) {
  return (
    <DialogContent>
      <DialogTitle className="text-white text-2xl font-medium">
        {title}
      </DialogTitle>

      <div>
        <h1 className="text-base text-white font-medium">Disciplina</h1>
        <FormContent bimester={bimester} onClose={onClose} />
      </div>
    </DialogContent>
  )
}
