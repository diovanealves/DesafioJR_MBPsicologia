import disciplines from '@/mocks/discipline'
import { Plus } from 'lucide-react'
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

export default function MyDialog({ title }: DialogProps) {
  return (
    <Dialog>
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
                onClick={() => console.log(discipline.title)}
              />
            ))}
          </div>

          <span className="text-sm text-[#ECEDEE] mt-4">Nota</span>
          <input
            type="number"
            placeholder="7.4"
            className={`bg-transparent w-[101px] h-[48px] rounded-xl placeholder:text-[#6D6D6D] px-4 py-3 mt-2 focus:outline-none appearance-none border-2`}
          />

          <div className="flex justify-end">
            <MyButton
              className="w-[134px] h-[48px]"
              onClick={() => console.log('funcionando')}
            >
              Confirmar
            </MyButton>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
