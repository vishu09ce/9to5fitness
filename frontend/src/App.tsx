import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CoverPage from './pages/CoverPage'
import SectionPage from './pages/SectionPage'
import AiCoachPage from './pages/AiCoachPage'

export default function App() {
  return (
    <BrowserRouter basename="/9to5fitness">
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/section/:slug" element={<SectionPage />} />
        <Route path="/ai-coach" element={<AiCoachPage />} />
      </Routes>
    </BrowserRouter>
  )
}
