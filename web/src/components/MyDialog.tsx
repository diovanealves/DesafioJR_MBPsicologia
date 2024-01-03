import { Plus } from 'lucide-react'
import MyButton from './MyButton'
import { Dialog, DialogTrigger } from './ui/dialog'

interface DialogProps {
  title: string
  bimester: string
}

export default function MyDialog({ title, bimester }: DialogProps) {
  return (
    <Dialog>
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
    </Dialog>
  )
}
