import styles from './FiltroBar.module.css'

// FiltroBar é um componente CONTROLADO: não guarda estado próprio.
// Ele recebe os valores e as funções de alteração via props (PROPS DESESTRUTURADAS)
// e "sobe" as mudanças para o componente pai (Lift State Up).
function FiltroBar({
  termo,
  aoMudarTermo,
  tipoSelecionado,
  aoMudarTipo,
  tipos,
  totalResultados,
}) {
  return (
    <div className={styles.barra}>
      <div className={styles.busca}>
        <span className={styles.lupa}>⌕</span>
        <input
          type="text"
          placeholder="Buscar planeta..."
          value={termo}
          onChange={(e) => aoMudarTermo(e.target.value)}
          className={styles.input}
        />
        {/* Renderização condicional: botão de limpar só quando há texto */}
        {termo && (
          <button
            className={styles.limpar}
            onClick={() => aoMudarTermo('')}
            aria-label="Limpar busca"
          >
            ✕
          </button>
        )}
      </div>

      <div className={styles.tipos}>
        {tipos.map((tipo) => (
          <button
            key={tipo}
            className={`${styles.chip} ${tipoSelecionado === tipo ? styles.chipAtivo : ''}`}
            onClick={() => aoMudarTipo(tipo)}
          >
            {tipo}
          </button>
        ))}
      </div>

      <span className={styles.contador}>
        {totalResultados} {totalResultados === 1 ? 'resultado' : 'resultados'}
      </span>
    </div>
  )
}

export default FiltroBar
