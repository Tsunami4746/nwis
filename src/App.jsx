import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import NavigationMenu from './components/layout/NavigationMenu'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import WellMapPage from './pages/WellMapPage'
import WellHistory from './pages/WellHistory'
import DocumentIntelligence from './pages/DocumentIntelligence'
import KnowledgeRepository from './pages/KnowledgeRepository'
import SimilarWells from './pages/SimilarWells'
import DepthCorrelationPage from './pages/DepthCorrelationPage'
import RiskEngine from './pages/RiskEngine'
import Alerts from './pages/Alerts'
import Assistant from './pages/Assistant'
import Admin from './pages/Admin'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-nwis-bg text-nwis-text">
        <Navbar menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((current) => !current)} />
        <NavigationMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/well-map" element={<WellMapPage />} />
          <Route path="/well/:wellId" element={<WellHistory />} />
          <Route path="/documents" element={<DocumentIntelligence />} />
          <Route path="/knowledge" element={<KnowledgeRepository />} />
          <Route path="/similar-wells" element={<SimilarWells />} />
          <Route path="/depth-correlation" element={<DepthCorrelationPage />} />
          <Route path="/risk-engine" element={<RiskEngine />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
