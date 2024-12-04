import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import ContactUs from './pages/ContactUs'
import Index from './pages/Index'
import Services from './pages/Services'
import Resources from './pages/Resources'
import Faq from './pages/Faq'
import Admin from './pages/Admin'
import Student from './pages/Student'
import BlackBar from './components/BlackBar'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <BlackBar />
      <Header />
      <div id="page-wrapper">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/student" element={<Student />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
