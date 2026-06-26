import { useMemo, useState } from 'react'
import FiltroBar from '../../components/FiltroBar/FiltroBar'
import GaleriaPlanetas from '../../components/GaleriaPlanetas/GaleriaPlanetas'
import { planetas, tiposDePlaneta } from '../../data/planetas'
import styles from './Catalogo.module.css'

/* ============================================================
   LIFT STATE UP
   ------------------------------------------------------------
   Este componente PAI guarda o estado compartilhado:
     - termo de busca e tipo selecionado  -> usados pelo FiltroBar
     - lista de favoritos                 -> usada pela GaleriaPlanetas
   Os componentes filhos não guardam esse estado: eles recebem
   valores e funções por props e "sobem" as mudanças até aqui.
   ============================================================ */
function Catalogo() {
  const [termo, setTermo] = useState('')
  const [tipoSelecionado, setTipoSelecionado] = useState('Todos')
  const [favoritos, setFavoritos] = useState([])
  const [soFavoritos, setSoFavoritos] = useState(false)

  // Função compartilhada: alterna um planeta na lista de favoritos.
  const alternarFavorito = (id) => {
    setFavoritos((atual) =>
      atual.includes(id) ? atual.filter((f) => f !== id) : [...atual, id],
    )
  }

  // Lista derivada do estado (filtro aplicado uma única vez).
  const planetasFiltrados = useMemo(() => {
    return planetas.filter((p) => {
      const combinaBusca = p.nome.toLowerCase().includes(termo.toLowerCase())
      const combinaTipo = tipoSelecionado === 'Todos' || p.tipo === tipoSelecionado
      const combinaFavorito = !soFavoritos || favoritos.includes(p.id)
      return combinaBusca && combinaTipo && combinaFavorito
    })
  }, [termo, tipoSelecionado, soFavoritos, favoritos])

  return (
    <div className={`container ${styles.pagina}`}>
      <header className={styles.cabecalho}>
        <span className={styles.kicker}>Catálogo cósmico</span>
        <h1>Planetas do Sistema Solar</h1>
        <p>
          Oito mundos, cada um com sua própria história. Use os filtros para
          explorar e marque seus favoritos com a estrela.
        </p>
      </header>

      {/* Filho 1 do Lift State Up: controla busca e tipo */}
      <FiltroBar
        termo={termo}
        aoMudarTermo={setTermo}
        tipoSelecionado={tipoSelecionado}
        aoMudarTipo={setTipoSelecionado}
        tipos={tiposDePlaneta}
        totalResultados={planetasFiltrados.length}
      />

      {/* Renderização condicional: barra de favoritos só aparece se houver algum */}
      {favoritos.length > 0 && (
        <div className={styles.barraFavoritos}>
          <span>⭐ {favoritos.length} planeta(s) favoritado(s)</span>
          <button
            className={`${styles.toggle} ${soFavoritos ? styles.toggleAtivo : ''}`}
            onClick={() => setSoFavoritos((v) => !v)}
          >
            {soFavoritos ? 'Mostrar todos' : 'Ver só favoritos'}
          </button>
        </div>
      )}

      {/* Filho 2 do Lift State Up: exibe a lista filtrada + favoritos */}
      <GaleriaPlanetas
        planetas={planetasFiltrados}
        favoritos={favoritos}
        onAlternarFavorito={alternarFavorito}
      />
    </div>
  )
}

export default Catalogo
