import MyDialog from '@/components/MyDialog'

export default function Home() {
  return (
    <div className="px-6 py-32">
      <div className="flex flex-1 items-center justify-between">
        <h1 className="text-lg font-medium">Bimestre 1</h1>
        <MyDialog title="Bimestre 1" bimester="Primeiro" />
      </div>

      <div className="grid grid-cols-2 gap-2 mt-6"></div>
    </div>
  )
}
