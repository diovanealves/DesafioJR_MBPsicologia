interface Discipline {
  id: number
  title: 'Biologia' | 'Artes' | 'Geografia' | 'Sociologia'
}

const disciplines: Discipline[] = [
  { id: 1, title: 'Biologia' },
  { id: 2, title: 'Artes' },
  { id: 3, title: 'Geografia' },
  { id: 4, title: 'Sociologia' },
]

export default disciplines
