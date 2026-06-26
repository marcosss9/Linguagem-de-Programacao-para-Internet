import styles from './Estatisticas.module.css'

// Faixa de estatísticas reutilizável — PROPS DESESTRUTURADAS (itens).
// Recebe uma lista de { valor, rotulo, icone } e renderiza dinamicamente.
function Estatisticas({ itens }) {
  return (
    <div className={styles.faixa}>
      {itens.map((item) => (
        <div key={item.rotulo} className={styles.bloco}>
          <span className={styles.icone}>{item.icone}</span>
          <strong className={styles.valor}>{item.valor}</strong>
          <span className={styles.rotulo}>{item.rotulo}</span>
        </div>
      ))}
    </div>
  )
}

export default Estatisticas
