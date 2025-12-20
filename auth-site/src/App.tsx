import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router'
import AuthPage from './pages/auth-page'

function App() {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/auth" element={ <AuthPage /> } />
        </Routes>
    </Router>
    </>
  )
}

export default App
