import AppRouter from './components/app-router/AppRouter'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router basename='/hypixel-farm-designs/'>
      <AppRouter />
    </Router>
  )
}

export default App
