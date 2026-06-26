import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { planetas } from '../../data/planetas'
import styles from './SistemaSolarInterativo.module.css'

/* ============================================================
   COMPONENTE CRIATIVO AUTORAL — "Mapa Orbital Interativo"
   ------------------------------------------------------------
   Um sistema solar vivo, com planetas em órbita animada.
   Interações por eventos de mouse que causam alteração visual/funcional:
     • Passar o mouse sobre um planeta  -> pausa a órbita, amplia, brilha
                                           e exibe um painel de informações.
     • Mover o mouse sobre o palco       -> efeito parallax no fundo estelar.
     • Clicar em um planeta              -> navega para a página de detalhe.
     • Botões de velocidade do tempo     -> aceleram / pausam todas as órbitas.
   ============================================================ */

const velocidades = [
  { id: 'pausa', rotulo: '⏸ Pausar', fator: 0 },
  { id: 'lento', rotulo: '🐢 Lento', fator: 2.2 },
  { id: 'normal', rotulo: '▶ Normal', fator: 1 },
  { id: 'rapido', rotulo: '⚡ Rápido', fator: 0.4 },
]

function SistemaSolarInterativo() {
  const navigate = useNavigate()

  // Estados que mudam a interface conforme os eventos de mouse.
  const [planetaAtivo, setPlanetaAtivo] = useState(null)
  const [velocidade, setVelocidade] = useState('normal')
  const [parallax, setParallax] = useState({ x: 0, y: 0 })

  const fator = velocidades.find((v) => v.id === velocidade).fator
  const pausado = fator === 0
  const info = planetaAtivo
    ? planetas.find((p) => p.id === planetaAtivo)
    : null

  // Evento de movimento do mouse -> deslocamento parallax do fundo.
  const aoMoverMouse = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left - r.width / 2) / r.width
    const y = (e.clientY - r.top - r.height / 2) / r.height
    setParallax({ x: x * 26, y: y * 26 })
  }

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.palco}
        onMouseMove={aoMoverMouse}
        onMouseLeave={() => setParallax({ x: 0, y: 0 })}
      >
        {/* Fundo estelar com parallax */}
        <div
          className={styles.estrelas}
          style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
        />

        {/* Sol no centro */}
        <div className={styles.sol} title="Sol">
          <div className={styles.solBrilho} />
        </div>

        {/* Órbitas + planetas */}
        {planetas.map((planeta, i) => {
          const raio = 70 + i * 44 // espaçamento uniforme entre as órbitas
          const ativo = planetaAtivo === planeta.id
          const duracao = planeta.velocidadeOrbita * (fator || 1)

          return (
            <Fragment key={planeta.id}>
              {/* Anel da órbita (elemento gráfico) */}
              <div
                className={`${styles.orbita} ${ativo ? styles.orbitaAtiva : ''}`}
                style={{ width: raio * 2, height: raio * 2 }}
              />

              {/* Wrapper que gira e carrega o planeta */}
              <div
                className={styles.giro}
                style={{
                  width: raio * 2,
                  height: raio * 2,
                  animationDuration: `${duracao}s`,
                  // pausa global (botão) OU pausa individual (hover)
                  animationPlayState: pausado || ativo ? 'paused' : 'running',
                }}
              >
                <button
                  className={`${styles.planeta} ${ativo ? styles.planetaAtivo : ''}`}
                  style={{
                    width: planeta.tamanhoVisual * 1.6,
                    height: planeta.tamanhoVisual * 1.6,
                    background: `radial-gradient(circle at 32% 30%, ${planeta.cor}, ${planeta.corSecundaria} 72%, #08081a)`,
                  }}
                  onMouseEnter={() => setPlanetaAtivo(planeta.id)}
                  onMouseLeave={() => setPlanetaAtivo(null)}
                  onClick={() => navigate(`/catalogo/${planeta.id}`)}
                  aria-label={`Explorar ${planeta.nome}`}
                >
                  {planeta.temAneis && <span className={styles.anelPlaneta} />}
                </button>
              </div>
            </Fragment>
          )
        })}
      </div>

      {/* Controles de velocidade do tempo (eventos de clique) */}
      <div className={styles.controles}>
        {velocidades.map((v) => (
          <button
            key={v.id}
            className={`${styles.controle} ${velocidade === v.id ? styles.controleAtivo : ''}`}
            onClick={() => setVelocidade(v.id)}
          >
            {v.rotulo}
          </button>
        ))}
      </div>

      {/* Painel de informações — renderização condicional ao passar o mouse */}
      <div className={`${styles.painel} ${info ? styles.painelVisivel : ''}`}>
        {info ? (
          <>
            <div className={styles.painelTopo}>
              <span
                className={styles.painelPlaneta}
                style={{
                  background: `radial-gradient(circle at 32% 30%, ${info.cor}, ${info.corSecundaria} 72%, #08081a)`,
                }}
              />
              <div>
                <h3>{info.nome}</h3>
                <span className={styles.painelTipo}>{info.tipo}</span>
              </div>
            </div>
            <ul className={styles.painelDados}>
              <li><span>Distância do Sol</span><strong>{info.distanciaSol}</strong></li>
              <li><span>Diâmetro</span><strong>{info.diametro}</strong></li>
              <li><span>Luas</span><strong>{info.luas}</strong></li>
            </ul>
            <p className={styles.painelDica}>Clique no planeta para explorar →</p>
          </>
        ) : (
          <div className={styles.painelVazio}>
            <span>🛸</span>
            <p>Passe o mouse sobre um planeta para revelar seus segredos.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SistemaSolarInterativo
