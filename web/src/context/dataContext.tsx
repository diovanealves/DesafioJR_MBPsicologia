import { BimesterData } from '@/schemas/NoteData'
import React, { ReactNode, createContext, useContext, useState } from 'react'

type DataContextType = {
  searchData: BimesterData[]
  setSearchData: React.Dispatch<React.SetStateAction<BimesterData[]>>
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export const useDataContext = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider')
  }
  return context
}

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [searchData, setSearchData] = useState<BimesterData[]>([])

  return (
    <DataContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </DataContext.Provider>
  )
}
