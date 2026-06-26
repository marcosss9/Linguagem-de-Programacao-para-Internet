import PlanetaCard from '../PlanetaCard/PlanetaCard'
import styles from './GaleriaPlanetas.module.css'

// Galeria que recebe a lista JÁ FILTRADA pelo componente pai (Lift State Up).
// Repassa o estado de favoritos para cada card.
function GaleriaPlanetas({ planetas, favoritos, onAlternarFavorito }) {
  // Renderização condicional: estado vazio quando o filtro não retorna nada.
  if (planetas.length === 0) {
    return (
      <div className={styles.vazio}>
        <span className={styles.vazioIcone}>🛰️</span>
        <h3>Nenhum planeta encontrado</h3>
        <p>Tente ajustar a busca ou selecionar outra categoria.</p>
      </div>
    )
  }

  return (
    <div className={styles.grade}>
      {planetas.map((planeta) => (
        <PlanetaCard
          key={planeta.id}
          planeta={planeta}
          favorito={favoritos.includes(planeta.id)}
          onAlternarFavorito={onAlternarFavorito}
        />
      ))}
    </div>
  )
}

export default GaleriaPlanetas
