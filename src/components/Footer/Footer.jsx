import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

// Rodapé global da aplicação.
function Footer() {
  return (
    <footer className={styles.rodape}>
      <div className={`container ${styles.grade}`}>
        <div className={styles.marca}>
          <img src="/nebula.svg" alt="Logotipo NEBULA" width="34" height="34" />
          <div>
            <strong>NEBULA</strong>
            <p>Observatório Digital do Cosmos</p>
          </div>
        </div>

        <nav className={styles.colunas}>
          <Link to="/">Início</Link>
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/missoes">Missões</Link>
          <Link to="/sobre">Sobre</Link>
        </nav>

        <p className={styles.creditos}>
          Projeto acadêmico · Linguagem de Programação para Internet
          <br />
          Construído com React + Vite · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer
