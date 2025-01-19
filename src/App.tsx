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
import { ReactElement } from 'react'


function App() {
  const WrappedComponent = (content: ReactElement) => (
    <>
      <BlackBar />
      <Header />
      {content}
      <Footer />
    </>
  )
  return (
    <>
      <div id="page-wrapper">
        <Routes>
          <Route path="/quiz" element={<Quiz />} />

          <Route path="/" element={WrappedComponent(<Index />)} />
          <Route path="/services" element={WrappedComponent(<Services />)} />
          <Route path="/resources" element={WrappedComponent(<Resources />)} />
          <Route path="/faq" element={WrappedComponent(<Faq />)} />
          <Route path="/contact" element={WrappedComponent(<ContactUs />)} />
          <Route path="/student" element={WrappedComponent(<Student />)} />
          <Route path="/about" element={WrappedComponent(<AboutUs />)} />
          <Route path="/quiz" element={WrappedComponent(<Quiz />)} />
        </Routes>
      </div>
    </>
  )
}

export default App
