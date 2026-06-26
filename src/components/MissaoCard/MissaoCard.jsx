import styles from './MissaoCard.module.css'

// Card de missão espacial — PROPS DESESTRUTURADAS.
// Renderização condicional aplica uma cor de "status" diferente por situação.
function MissaoCard({ missao }) {
  const classeStatus =
    missao.status === 'Em operação' || missao.status === 'Em andamento'
      ? styles.ativo
      : styles.concluido

  return (
    <article className={styles.card}>
      <div className={styles.topo}>
        <span className={styles.icone}>{missao.icone}</span>
        <span className={`${styles.status} ${classeStatus}`}>{missao.status}</span>
      </div>

      <h3 className={styles.nome}>{missao.nome}</h3>
      <p className={styles.resumo}>{missao.resumo}</p>

      <footer className={styles.rodape}>
        <span>🏛️ {missao.agencia}</span>
        <span>🎯 {missao.destino}</span>
        <span>📅 {missao.ano}</span>
      </footer>
    </article>
  )
}

export default MissaoCard
