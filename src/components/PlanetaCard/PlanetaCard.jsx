import { useNavigate } from 'react-router-dom'
import styles from './PlanetaCard.module.css'

// Card de planeta com PROPS DESESTRUTURADAS.
// - Recebe o estado de "favorito" e a função de alternar (Lift State Up).
// - Usa useNavigate para abrir a página de detalhe ao clicar no card.
function PlanetaCard({ planeta, favorito, onAlternarFavorito }) {
  const navigate = useNavigate()

  const irParaDetalhe = () => navigate(`/catalogo/${planeta.id}`)

  // Estilo dinâmico do "planeta" desenhado via gradiente CSS (elemento gráfico).
  const estiloPlaneta = {
    background: `radial-gradient(circle at 30% 28%, ${planeta.cor}, ${planeta.corSecundaria} 70%, #0a0a18)`,
  }

  return (
    <article className={styles.card} onClick={irParaDetalhe} role="button" tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && irParaDetalhe()}>
      <div className={styles.visual}>
        <div className={styles.planeta} style={estiloPlaneta}>
          {/* Renderização condicional: anel só aparece se o planeta tiver anéis */}
          {planeta.temAneis && <span className={styles.anel} />}
        </div>

        {/* Botão de favoritar — para o clique de propagar para o card */}
        <button
          className={`${styles.favorito} ${favorito ? styles.favoritoAtivo : ''}`}
          onClick={(e) => {
            e.stopPropagation()
            onAlternarFavorito(planeta.id)
          }}
          aria-label={favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          title={favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          {favorito ? '★' : '☆'}
        </button>
      </div>

      <div className={styles.corpo}>
        <header className={styles.cabecalho}>
          <h3>{planeta.nome}</h3>
          <span className={styles.tag}>{planeta.tipo}</span>
        </header>

        <p className={styles.descricao}>{planeta.descricao}</p>

        <dl className={styles.infos}>
          <div>
            <dt>Luas</dt>
            <dd>{planeta.luas}</dd>
          </div>
          <div>
            <dt>Diâmetro</dt>
            <dd>{planeta.diametro}</dd>
          </div>
        </dl>

        <span className={styles.verMais}>Ver detalhes →</span>
      </div>
    </article>
  )
}

export default PlanetaCard
