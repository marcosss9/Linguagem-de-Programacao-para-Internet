import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './Navbar.module.css'

// Barra de navegação principal da SPA.
// Usa <Link> na logo e <NavLink> nos itens (para destacar a rota ativa).
const links = [
  { para: '/', rotulo: 'Início' },
  { para: '/catalogo', rotulo: 'Catálogo' },
  { para: '/missoes', rotulo: 'Missões' },
  { para: '/sobre', rotulo: 'Sobre' },
]

function Navbar() {
  // Estado local para abrir/fechar o menu no modo mobile (evento de clique).
  const [aberto, setAberto] = useState(false)

  return (
    <header className={styles.cabecalho}>
      <div className={`container ${styles.barra}`}>
        <Link to="/" className={styles.logo} onClick={() => setAberto(false)}>
          <img src="/nebula.svg" alt="Logotipo NEBULA" className={styles.logoIcone} />
          <span className={styles.logoTexto}>
            NEBULA<small>observatório do cosmos</small>
          </span>
        </Link>

        <button
          className={styles.hamburguer}
          onClick={() => setAberto((v) => !v)}
          aria-label="Abrir menu de navegação"
          aria-expanded={aberto}
        >
          <span className={aberto ? styles.barraXAtiva : styles.barraX} />
        </button>

        <nav className={`${styles.nav} ${aberto ? styles.navAberta : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.para}
              to={link.para}
              end={link.para === '/'}
              onClick={() => setAberto(false)}
              className={({ isActive }) =>
                `${styles.item} ${isActive ? styles.itemAtivo : ''}`
              }
            >
              {link.rotulo}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
