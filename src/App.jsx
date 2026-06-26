import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Catalogo from './pages/Catalogo/Catalogo'
import PlanetaDetalhe from './pages/PlanetaDetalhe/PlanetaDetalhe'
import Missoes from './pages/Missoes/Missoes'
import Sobre from './pages/Sobre/Sobre'
import NaoEncontrado from './pages/NaoEncontrado/NaoEncontrado'
import styles from './App.module.css'

// Componente raiz: define o layout fixo (Navbar + Footer) e as rotas da SPA.
function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.conteudo}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/catalogo/:id" element={<PlanetaDetalhe />} />
          <Route path="/missoes" element={<Missoes />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<NaoEncontrado />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
