import { Link } from 'react-router-dom'
import styles from './Sobre.module.css'

// Página informativa sobre o projeto e os recursos técnicos aplicados.
const recursos = [
  { icone: '🧭', titulo: 'Navegação SPA', texto: 'Roteamento com React Router DOM, sem recarregar a página.' },
  { icone: '🪐', titulo: 'Mapa orbital interativo', texto: 'Componente autoral com órbitas animadas e controle de tempo.' },
  { icone: '⭐', titulo: 'Favoritos dinâmicos', texto: 'Estado compartilhado entre filtro, galeria e cards (Lift State Up).' },
  { icone: '🎨', titulo: 'Identidade visual', texto: 'Tema cósmico próprio com CSS Modules e gradientes animados.' },
]

const tecnologias = ['React', 'JavaScript', 'Vite', 'React Router DOM', 'CSS Modules']

function Sobre() {
  return (
    <div className={`container ${styles.pagina}`}>
      <header className={styles.cabecalho}>
        <span className={styles.kicker}>Sobre o projeto</span>
        <h1>O que é o NEBULA?</h1>
        <p>
          O NEBULA é um observatório digital do cosmos: uma Single Page
          Application criada para explorar planetas, missões espaciais e a beleza
          do universo de forma interativa. O projeto foi desenvolvido como
          trabalho final da disciplina <strong>Linguagem de Programação para
          Internet</strong>, aplicando os principais conceitos de React.
        </p>
      </header>

      <section className={styles.bloco}>
        <h2>Recursos em destaque</h2>
        <div className={styles.recursos}>
          {recursos.map((r) => (
            <div key={r.titulo} className={styles.recurso}>
              <span className={styles.recursoIcone}>{r.icone}</span>
              <h3>{r.titulo}</h3>
              <p>{r.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.bloco}>
        <h2>Tecnologias utilizadas</h2>
        <div className={styles.tags}>
          {tecnologias.map((t) => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
      </section>

      <section className={styles.destaqueCriativo}>
        <h2>✦ Componente criativo</h2>
        <p>
          O coração do projeto é o <strong>Mapa Orbital Interativo</strong>: um
          Sistema Solar vivo onde os planetas orbitam o Sol em tempo real. Ao
          passar o mouse, a órbita pausa e o planeta cresce, revelando suas
          informações; ao clicar, você viaja até a página de detalhes. É possível
          ainda acelerar ou pausar o tempo do sistema inteiro.
        </p>
        <Link to="/" className="btn">Ver o mapa orbital →</Link>
      </section>
    </div>
  )
}

export default Sobre
