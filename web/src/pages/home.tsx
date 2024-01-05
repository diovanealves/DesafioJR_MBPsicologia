import MyDialog from '@/components/MyDialog'
import NoteCard from '@/components/NoteCard'
import useNote from '@/hooks/useNote'
import { AlertTriangle } from 'lucide-react'

export default function Home() {
  const { noteByBimester } = useNote()

  return (
    <div className="px-5 py-10">
      {noteByBimester.map((bimester, i) => (
        <div key={i}>
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-medium">Bimestre {i + 1}</h1>
            <MyDialog
              title={`Bimestre ${i + 1}`}
              bimester={bimester.bimester}
            />
          </div>

          <div
            className={`my-6 ${
              bimester.notes.length > 0
                ? 'grid grid-cols-2 gap-2 '
                : 'text-center'
            }`}
          >
            {bimester.notes.length > 0 ? (
              bimester.notes.map((notes) => (
                <NoteCard key={notes.id} {...notes} />
              ))
            ) : (
              <div className="flex justify-center items-center gap-2">
                <AlertTriangle className="w-10 h-10 text-red-500" />
                <h1 className="font-medium">
                  Ainda não tem nenhuma nota cadastrada
                </h1>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
