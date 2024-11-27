import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import Header from './components/Header'
import Index from './pages/Index'
import Services from './pages/Services'
import Resources from './pages/Resources'
import Faq from './pages/Faq'
import Admin from './pages/Admin'
import Student from './pages/Student'

function App() {
  return (
    <>
      <Header />
      <div id="page-wrapper">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/student" element={<Student />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        <Contact />
      </div>
    </>
  )
}

export default App
