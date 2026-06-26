import { useState } from 'react'
import MissaoCard from '../../components/MissaoCard/MissaoCard'
import { missoes, statusDisponiveis } from '../../data/missoes'
import styles from './Missoes.module.css'

// Página de missões espaciais, com filtro por status e ordenação por ano.
function Missoes() {
  const [statusFiltro, setStatusFiltro] = useState('Todos')
  const [maisRecentes, setMaisRecentes] = useState(true)

  const lista = missoes
    .filter((m) => statusFiltro === 'Todos' || m.status === statusFiltro)
    .sort((a, b) => (maisRecentes ? b.ano - a.ano : a.ano - b.ano))

  return (
    <div className={`container ${styles.pagina}`}>
      <header className={styles.cabecalho}>
        <span className={styles.kicker}>Linha do tempo cósmica</span>
        <h1>Missões Espaciais</h1>
        <p>
          Das primeiras pegadas na Lua aos olhos infravermelhos do James Webb:
          conheça as missões que expandiram nossa visão do universo.
        </p>
      </header>

      <div className={styles.controles}>
        <div className={styles.chips}>
          {statusDisponiveis.map((status) => (
            <button
              key={status}
              className={`${styles.chip} ${statusFiltro === status ? styles.chipAtivo : ''}`}
              onClick={() => setStatusFiltro(status)}
            >
              {status}
            </button>
          ))}
        </div>

        <button
          className={styles.ordenar}
          onClick={() => setMaisRecentes((v) => !v)}
        >
          {maisRecentes ? '↓ Mais recentes' : '↑ Mais antigas'}
        </button>
      </div>

      {/* Renderização condicional: mensagem quando o filtro esvazia a lista */}
      {lista.length > 0 ? (
        <div className={styles.grade}>
          {lista.map((missao) => (
            <MissaoCard key={missao.id} missao={missao} />
          ))}
        </div>
      ) : (
        <p className={styles.vazio}>Nenhuma missão com esse status no momento.</p>
      )}
    </div>
  )
}

export default Missoes
