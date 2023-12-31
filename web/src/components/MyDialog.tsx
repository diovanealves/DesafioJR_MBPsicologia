import { Plus } from 'lucide-react'
import { useState } from 'react'
import MyButton from './MyButton'
import MyDialogContent from './MyDialogContent'
import { Dialog, DialogTrigger } from './ui/dialog'

interface DialogProps {
  title: string
  bimester: string
}

export default function MyDialog({ title, bimester }: DialogProps) {
  const [isClose, setIsClose] = useState(false)

  return (
    <Dialog open={isClose} onOpenChange={setIsClose}>
      <DialogTrigger asChild>
        {window.innerWidth < 768 ? (
          <MyButton mobile mobileText="Adicionar">
            <Plus className="h-8 w-8 text-black" />
          </MyButton>
        ) : (
          <MyButton className="text-base font-semibold leading-4 gap-2">
            Lançar nota
            <Plus className="h-8 w-8 text-black" />
          </MyButton>
        )}
      </DialogTrigger>

      <MyDialogContent
        title={title}
        bimester={bimester}
        onClose={() => setIsClose(false)}
      />
    </Dialog>
  )
}
