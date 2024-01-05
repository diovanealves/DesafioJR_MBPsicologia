import { DataProvider } from './context/dataContext'
import Home from './pages/home'

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  )
}

export default App
