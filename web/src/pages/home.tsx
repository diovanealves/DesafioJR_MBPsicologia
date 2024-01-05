import MyDialog from '@/components/MyDialog'
import NoteCard from '@/components/NoteCard'
import { useDataContext } from '@/context/dataContext'
import useNote from '@/hooks/useNote'
import { AlertTriangle } from 'lucide-react'
import { useEffect } from 'react'

export default function Home() {
  const { getNotes } = useNote()
  const { searchData } = useDataContext()

  useEffect(() => {
    getNotes()
  }, [getNotes])

  return (
    <div className="px-5 py-10 max-w-7xl mx-auto">
      {searchData.map((bimester, i) => (
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
                ? 'grid grid-cols-2 gap-4 my-6 md:grid-cols-4'
                : 'text-center'
            }`}
          >
            {bimester.notes.length > 0 ? (
              bimester.notes.map((notes) => (
                <NoteCard key={notes.id} {...notes} />
              ))
            ) : (
              <div className="flex justify-center items-center gap-2 h-28">
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
