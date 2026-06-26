// Dados mockados das missões espaciais. Usados na página "Missões".

export const missoes = [
  {
    id: 'voyager-1',
    nome: 'Voyager 1',
    agencia: 'NASA',
    ano: 1977,
    status: 'Em operação',
    destino: 'Espaço interestelar',
    icone: '🛰️',
    resumo:
      'A sonda mais distante já construída pela humanidade. Em 2012 tornou-se o primeiro objeto artificial a entrar no espaço interestelar.',
  },
  {
    id: 'apollo-11',
    nome: 'Apollo 11',
    agencia: 'NASA',
    ano: 1969,
    status: 'Concluída',
    destino: 'Lua',
    icone: '🌕',
    resumo:
      'A missão que levou os primeiros humanos à superfície lunar. Neil Armstrong e Buzz Aldrin caminharam na Lua em 20 de julho de 1969.',
  },
  {
    id: 'perseverance',
    nome: 'Perseverance',
    agencia: 'NASA',
    ano: 2020,
    status: 'Em operação',
    destino: 'Marte',
    icone: '🤖',
    resumo:
      'Rover que explora a cratera Jezero em busca de sinais de vida microbiana antiga, coletando amostras para retorno futuro à Terra.',
  },
  {
    id: 'james-webb',
    nome: 'James Webb (JWST)',
    agencia: 'NASA / ESA / CSA',
    ano: 2021,
    status: 'Em operação',
    destino: 'Ponto L2',
    icone: '🔭',
    resumo:
      'O telescópio espacial mais poderoso já lançado. Observa o universo em infravermelho, revelando as primeiras galáxias do cosmos.',
  },
  {
    id: 'cassini',
    nome: 'Cassini-Huygens',
    agencia: 'NASA / ESA / ASI',
    ano: 1997,
    status: 'Concluída',
    destino: 'Saturno',
    icone: '🪐',
    resumo:
      'Estudou Saturno e suas luas por 13 anos. Encerrou sua jornada mergulhando deliberadamente na atmosfera do planeta em 2017.',
  },
  {
    id: 'artemis',
    nome: 'Artemis',
    agencia: 'NASA',
    ano: 2022,
    status: 'Em andamento',
    destino: 'Lua',
    icone: '🚀',
    resumo:
      'Programa que pretende retornar humanos à Lua, incluindo a primeira mulher, e estabelecer uma presença sustentável até estabelecer bases lunares.',
  },
]

export const statusDisponiveis = ['Todos', ...new Set(missoes.map((m) => m.status))]
