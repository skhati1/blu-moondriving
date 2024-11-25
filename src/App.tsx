import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import Header from './components/Header'
import Index from './pages/Index'
import Services from './pages/Services'
import Resources from './pages/Resources'
import Faq from './pages/Faq'


function App() {
  return (
    <>
      <div id="page-wrapper">
        <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        <Contact />
      </div>
    </>
  )
}

export default App
