import { useNavigate } from 'react-router-dom'
import styles from './Hero.module.css'

// Componente Hero com PROPS DESESTRUTURADAS.
// Usa o hook useNavigate para navegar via botão para outra página.
function Hero({ titulo, destaque, subtitulo, textoBotao, rotaBotao }) {
  const navigate = useNavigate()

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.interior}`}>
        <div className={styles.texto}>
          <span className={styles.selo}>✦ Bem-vindo ao cosmos</span>
          <h1 className={styles.titulo}>
            {titulo} <span className={styles.gradiente}>{destaque}</span>
          </h1>
          <p className={styles.subtitulo}>{subtitulo}</p>

          {/* Evento de clique + useNavigate */}
          <div className={styles.acoes}>
            <button className="btn" onClick={() => navigate(rotaBotao)}>
              {textoBotao} →
            </button>
            <button className="btn btn-ghost" onClick={() => navigate('/sobre')}>
              Saiba mais
            </button>
          </div>
        </div>

        <div className={styles.arte} aria-hidden="true">
          <div className={styles.planetaArte}>
            <div className={styles.anelArte} />
            <div className={styles.luaArte} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
