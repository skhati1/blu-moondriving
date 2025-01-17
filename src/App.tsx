import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import ContactUs from './pages/ContactUs'
import Index from './pages/Index'
import Services from './pages/Services'
import Resources from './pages/Resources'
import Faq from './pages/Faq'
import Student from './pages/Student'
import BlackBar from './components/BlackBar/BlackBar'
import Footer from './components/Footer/Footer'
import AboutUs from './pages/AboutUs'
import Quiz from './pages/Quiz'


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
            <Route path="/about" element={<AboutUs />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
