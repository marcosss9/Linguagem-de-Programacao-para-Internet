import { Link, useNavigate } from 'react-router-dom'
import Hero from '../../components/Hero/Hero'
import Estatisticas from '../../components/Estatisticas/Estatisticas'
import SistemaSolarInterativo from '../../components/SistemaSolarInterativo/SistemaSolarInterativo'
import { planetas } from '../../data/planetas'
import { missoes } from '../../data/missoes'
import styles from './Home.module.css'

// Página inicial: hero, estatísticas, componente criativo e chamadas de ação.
function Home() {
  const navigate = useNavigate()

  const totalLuas = planetas.reduce((soma, p) => soma + p.luas, 0)

  const estatisticas = [
    { icone: '🪐', valor: planetas.length, rotulo: 'Planetas catalogados' },
    { icone: '🌙', valor: totalLuas, rotulo: 'Luas registradas' },
    { icone: '🚀', valor: missoes.length, rotulo: 'Missões históricas' },
    { icone: '✦', valor: '∞', rotulo: 'Estrelas no cosmos' },
  ]

  return (
    <div className={styles.pagina}>
      <Hero
        titulo="Explore o"
        destaque="universo"
        subtitulo="O NEBULA é um observatório digital interativo. Navegue pelo Sistema Solar, descubra planetas, acompanhe missões espaciais e mergulhe nos segredos do cosmos."
        textoBotao="Explorar catálogo"
        rotaBotao="/catalogo"
      />

      <section className="container">
        <Estatisticas itens={estatisticas} />
      </section>

      {/* Componente criativo em destaque */}
      <section className={`container ${styles.secao}`}>
        <div className={styles.tituloSecao}>
          <span className={styles.kicker}>Componente interativo</span>
          <h2>Mapa Orbital em tempo real</h2>
          <p>
            Passe o mouse sobre os planetas para pausar suas órbitas e revelar
            informações. Clique em qualquer um para explorá-lo a fundo. Use os
            controles para acelerar ou pausar o tempo.
          </p>
        </div>
        <SistemaSolarInterativo />
      </section>

      {/* Destaques navegáveis */}
      <section className={`container ${styles.secao}`}>
        <div className={styles.tituloSecao}>
          <span className={styles.kicker}>Destaques</span>
          <h2>Comece a explorar</h2>
        </div>

        <div className={styles.destaques}>
          {planetas.slice(0, 3).map((planeta) => (
            <div
              key={planeta.id}
              className={styles.destaque}
              onClick={() => navigate(`/catalogo/${planeta.id}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate(`/catalogo/${planeta.id}`)}
            >
              <div
                className={styles.destaquePlaneta}
                style={{
                  background: `radial-gradient(circle at 32% 30%, ${planeta.cor}, ${planeta.corSecundaria} 72%, #08081a)`,
                }}
              />
              <div>
                <h3>{planeta.nome}</h3>
                <p>{planeta.tipo}</p>
              </div>
              <span className={styles.seta}>→</span>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Link to="/catalogo" className="btn">Ver todos os planetas</Link>
          <Link to="/missoes" className="btn btn-ghost">Conhecer as missões</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
