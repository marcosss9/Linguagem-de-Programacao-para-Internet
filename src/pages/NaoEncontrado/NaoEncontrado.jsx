import { Link } from 'react-router-dom'
import styles from './NaoEncontrado.module.css'

// Rota coringa (404) para qualquer caminho não mapeado.
function NaoEncontrado() {
  return (
    <div className={`container ${styles.pagina}`}>
      <span className={styles.codigo}>404</span>
      <h1>Você se perdeu no espaço</h1>
      <p>Esta página não existe em nossa galáxia. Vamos te levar de volta.</p>
      <Link to="/" className="btn">Voltar ao início</Link>
    </div>
  )
}

export default NaoEncontrado
