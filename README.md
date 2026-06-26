# 🌌 NEBULA — Observatório Digital do Cosmos

Single Page Application (SPA) desenvolvida em **React + JavaScript + Vite** para
explorar o Sistema Solar de forma interativa: planetas, missões espaciais e um
mapa orbital animado.

> Trabalho Final da disciplina **Linguagem de Programação para Internet**
> Curso: Grande Área de Computação — UNIUBE · Prof. Dr. Camilo Barreto

---

## 👥 Integrantes do grupo

> ⚠️ **Preencha com os dados reais do grupo antes de entregar:**

| Nome | RA |
|------|----|
| _Marcos Martins_ | _5162599_ |
| _Thiago Paes Spirandelli_ | _5162258_ |
| _Pedro Henrique_ | _5162120_ |
| _Pedro Augusto Rodrigues_ | _5164033_ |

---

## 📝 Título do projeto

**NEBULA — Observatório Digital do Cosmos**

## 🪐 Descrição do projeto

O NEBULA é um observatório digital do universo. A aplicação permite navegar por
um catálogo de planetas, consultar detalhes de cada corpo celeste, acompanhar
missões espaciais históricas e interagir com um **mapa orbital animado** do
Sistema Solar. Todo o conteúdo é renderizado a partir de dados locais (mock),
sem qualquer backend, banco de dados ou API externa.

## 🌠 Tema escolhido

**Exploração espacial / Astronomia** — um hub temático sobre o cosmos, dentro da
categoria "Site temático sobre ciência" sugerida no enunciado.

## 🛠️ Tecnologias utilizadas

- **React 18** (com JavaScript)
- **Vite** (bundler e dev server)
- **React Router DOM** (roteamento SPA)
- **CSS Modules** (estilização isolada por componente)
- Gráficos e elementos visuais construídos com **CSS/SVG** (planetas, órbitas, anéis)

## ✨ Principais funcionalidades

- 🧭 Navegação SPA entre **6 rotas** (5 páginas + rota dinâmica de detalhe e 404)
- 🪐 **Catálogo de planetas** com busca por nome e filtro por tipo
- ⭐ Sistema de **favoritos** com filtro "ver só favoritos"
- 🔭 **Página de detalhe** de cada planeta (rota dinâmica `/catalogo/:id`)
- 🚀 **Catálogo de missões espaciais** com filtro por status e ordenação por ano
- 🌌 **Mapa Orbital Interativo** (componente criativo autoral)
- 📱 Layout **responsivo** com menu mobile
- 🎨 Identidade visual cósmica própria (tema escuro, gradientes e animações)

---

## 🌟 Componente criativo desenvolvido pelo grupo

### Mapa Orbital Interativo (`SistemaSolarInterativo`)

Localização: [`src/components/SistemaSolarInterativo/`](src/components/SistemaSolarInterativo/)

É um **Sistema Solar vivo**: o Sol fica no centro e os oito planetas orbitam ao
seu redor em tempo real, cada um na sua própria órbita e velocidade. As
interações por **eventos de mouse** causam alterações visuais e funcionais
perceptíveis:

- **Passar o mouse sobre um planeta** → a órbita daquele planeta **pausa**, ele
  **cresce**, ganha um **brilho** e um **painel lateral** exibe suas informações.
- **Mover o mouse pelo palco** → o campo de estrelas ao fundo se desloca com
  efeito **parallax**.
- **Clicar em um planeta** → navega (via `useNavigate`) para sua página de detalhe.
- **Controles de tempo** → botões para **pausar**, deixar **lento**, **normal**
  ou **rápido** todas as órbitas simultaneamente.

O componente foi inteiramente construído com React e CSS (órbitas, anéis e
planetas desenhados com gradientes e `keyframes`), com identidade temática
coerente com o projeto.

---

## ⚙️ Passos para instalação

Pré-requisito: **Node.js 18+** instalado.

```bash
# 1. Acesse a pasta do projeto
cd nebula-observatorio-cosmos

# 2. Instale as dependências
npm install
```

## ▶️ Passos para execução

```bash
# Ambiente de desenvolvimento (abre em http://localhost:5173)
npm run dev

# Gerar build de produção
npm run build

# Pré-visualizar o build de produção
npm run preview
```

---

## 🔗 Repositório no GitHub

> ⚠️ **Cole aqui o link do repositório após publicá-lo:**
> `https://github.com/SEU-USUARIO/nebula-observatorio-cosmos`

---

## 🗂️ Estrutura de pastas

```
src/
├── components/        # Componentes reutilizáveis
│   ├── Navbar/
│   ├── Footer/
│   ├── Hero/
│   ├── PlanetaCard/
│   ├── GaleriaPlanetas/
│   ├── FiltroBar/
│   ├── MissaoCard/
│   ├── Estatisticas/
│   └── SistemaSolarInterativo/   ← componente criativo
├── pages/             # Páginas/rotas da SPA
│   ├── Home/
│   ├── Catalogo/
│   ├── PlanetaDetalhe/
│   ├── Missoes/
│   ├── Sobre/
│   └── NaoEncontrado/
├── data/              # Dados mockados (planetas, missões)
├── styles/            # Estilos globais e variáveis de tema
├── App.jsx            # Definição das rotas
└── main.jsx           # Ponto de entrada da aplicação
```

## ✅ Requisitos do trabalho atendidos

| Requisito | Onde |
|-----------|------|
| React + JavaScript + Vite | projeto inteiro |
| Mínimo de 4 páginas (SPA) | Home, Catálogo, Missões, Sobre (+ Detalhe e 404) |
| Barra de navegação | `components/Navbar` |
| React Router DOM | `App.jsx`, `main.jsx` |
| `Link` / `NavLink` | `Navbar`, `Footer` |
| `useNavigate` em botão/card | `Hero`, `PlanetaCard`, `SistemaSolarInterativo` |
| Mínimo de 5 componentes próprios | 9 componentes em `components/` |
| Lift State Up (2+ componentes) | `Catalogo` → `FiltroBar` + `GaleriaPlanetas` |
| Props desestruturadas (2+) | `PlanetaCard`, `MissaoCard`, `Hero`, `FiltroBar`... |
| Dados mockados | `data/planetas.js`, `data/missoes.js` |
| CSS Modules | todos os `*.module.css` |
| Renderização condicional | favoritos, estado vazio, anéis, status |
| Eventos | clique, hover, movimento do mouse, input |
| Imagens / ícones / gráficos | SVG logo, planetas em CSS, ícones |
| Organização de pastas | `components/`, `pages/`, `data/`, `styles/` |
| Componente criativo autoral | `SistemaSolarInterativo` |

---

Construído com 💜 para a disciplina de Linguagem de Programação para Internet.
