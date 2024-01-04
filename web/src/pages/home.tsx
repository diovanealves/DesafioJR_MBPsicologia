import MyDialog from '@/components/MyDialog'
import NoteCard from '@/components/NoteCard'
import UseNote from '@/hooks/useNote'

export default function Home() {
  const { noteByBimester } = UseNote()

  return (
    <div className="px-5 py-32">
      {noteByBimester.map((bimester, i) => (
        <div key={i}>
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-medium">Bimestre {i + 1}</h1>
            <MyDialog
              title={`Bimestre ${i + 1}`}
              bimester={bimester.bimester}
            />
          </div>

          <div className="grid grid-cols-2 gap-2 my-6">
            {bimester.notes.map((notes, index) => (
              <NoteCard key={index} variant={notes.disciplina} {...notes} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
