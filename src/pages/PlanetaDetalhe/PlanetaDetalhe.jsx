import { useParams, useNavigate, Link } from 'react-router-dom'
import { buscarPlanetaPorId } from '../../data/planetas'
import styles from './PlanetaDetalhe.module.css'

// Página de detalhe de um planeta, identificado pelo parâmetro de rota :id.
function PlanetaDetalhe() {
  const { id } = useParams()
  const navigate = useNavigate()
  const planeta = buscarPlanetaPorId(id)

  // Renderização condicional: trata o caso de id inexistente.
  if (!planeta) {
    return (
      <div className={`container ${styles.naoEncontrado}`}>
        <span className={styles.emoji}>🌌</span>
        <h1>Planeta não encontrado</h1>
        <p>O corpo celeste que você procura não está em nosso catálogo.</p>
        <Link to="/catalogo" className="btn">Voltar ao catálogo</Link>
      </div>
    )
  }

  const especificacoes = [
    { rotulo: 'Tipo', valor: planeta.tipo },
    { rotulo: 'Distância do Sol', valor: planeta.distanciaSol },
    { rotulo: 'Diâmetro', valor: planeta.diametro },
    { rotulo: 'Luas', valor: planeta.luas },
    { rotulo: 'Duração do dia', valor: planeta.duracaoDia },
    { rotulo: 'Duração do ano', valor: planeta.duracaoAno },
    { rotulo: 'Temperatura', valor: planeta.temperatura },
  ]

  return (
    <div className={`container ${styles.pagina}`}>
      <button className={styles.voltar} onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <div className={styles.topo}>
        <div className={styles.visual}>
          <div
            className={styles.planeta}
            style={{
              background: `radial-gradient(circle at 32% 30%, ${planeta.cor}, ${planeta.corSecundaria} 72%, #08081a)`,
            }}
          >
            {planeta.temAneis && <span className={styles.anel} />}
          </div>
        </div>

        <div className={styles.intro}>
          <span className={styles.tag}>{planeta.tipo}</span>
          <h1>{planeta.nome}</h1>
          <p>{planeta.descricao}</p>
        </div>
      </div>

      <section className={styles.bloco}>
        <h2>Especificações</h2>
        <dl className={styles.especificacoes}>
          {especificacoes.map((item) => (
            <div key={item.rotulo} className={styles.especItem}>
              <dt>{item.rotulo}</dt>
              <dd>{item.valor}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={styles.bloco}>
        <h2>Curiosidades</h2>
        <ul className={styles.curiosidades}>
          {planeta.curiosidades.map((c, i) => (
            <li key={i}>
              <span className={styles.bolinha}>✦</span>
              {c}
            </li>
          ))}
        </ul>
      </section>

      <div className={styles.rodapeAcoes}>
        <Link to="/catalogo" className="btn btn-ghost">← Todos os planetas</Link>
        <Link to="/missoes" className="btn">Ver missões espaciais →</Link>
      </div>
    </div>
  )
}

export default PlanetaDetalhe
