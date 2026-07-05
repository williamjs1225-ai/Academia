/* ═══════════════════════════════════════════════════════════════════════
   ACADEMIA · app.js
   Lógica principal do aplicativo (extraída do <script> original).
   Nenhuma funcionalidade foi alterada nesta extração/organização.
   ═══════════════════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════
   ACADEMIA v3 · APP.JS — All fixes applied
═══════════════════════════════════════════════ */
'use strict';

/* ── ICONS ── */
const ICONS = {
  dumbbell:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="4" height="10" rx="1"/><rect x="18" y="7" width="4" height="10" rx="1"/><path d="M6 12h12"/><rect x="9" y="9" width="6" height="6" rx="1"/></svg>`,
  fire:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 01-7 7 7 7 0 01-7-7c0-1.53.4-2.973 1.1-4.2L8.5 14.5z"/></svg>`,
  push:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 9l6-6 6 6"/><path d="M12 3v12"/><path d="M4 19h16"/></svg>`,
  pull:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 15l6 6 6-6"/><path d="M12 21V9"/><path d="M4 5h16"/></svg>`,
  legs:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v10l4 4"/><path d="M8 12l-4 4 4 4"/><path d="M16 20h4"/></svg>`,
  chart:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  trophy:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 9H4.5a2.5 2.5 0 010-5H6"/><path d="M18 9h1.5a2.5 2.5 0 000-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 006 6 6 6 0 006-6V2z"/></svg>`,
  star:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  bolt:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  check:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
  lock:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`,
  target:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  info:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  note:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  weight:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
  arrow_r: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`,
  streak:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
  clock:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  medal:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  calendar:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  edit:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  trash:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>`,
  sleep:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`,
  question:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  x:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
  camera:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  link:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>`,
};

/* ── CARD INFO TOOLTIPS ── */
const CARD_INFO = {
  'treino-hoje': {title:'Treino de Hoje', text:'Mostra qual treino está programado para hoje com base no seu cronograma PPL. Clique em "Iniciar Treino" para começar a sessão.'},
  'semana':      {title:'Semana', text:'Mostra o progresso da semana atual: treinos concluídos, pendentes e dias de descanso. Dias de descanso aparecem marcados automaticamente.'},
  'volume':      {title:'Volume Semanal', text:'Exibe o volume total de treino por semana — calculado como peso × repetições × séries. Acompanhe sua evolução de carga ao longo do tempo.'},
  'treinos':     {title:'Seus Treinos', text:'Lista rápida de todos os treinos da semana PPL. Clique em qualquer card para abrir a prévia do treino e iniciá-lo.'},
  'conquistas':  {title:'Conquistas', text:'Mostra todas as medalhas e metas alcançadas. Conquistas são desbloqueadas por consistência, volume, sequências de dias e recordes pessoais.'},
  'stats':       {title:'Estatísticas', text:'Resumo geral do seu histórico: total de treinos realizados, volume acumulado em kg/toneladas e quantidade de recordes pessoais (PRs) batidos.'},
  'xp':          {title:'Nível & XP', text:'Sistema de experiência: você ganha XP ao concluir treinos e bater PRs. A cada nível o título muda, do Iniciante ao PPL God!'},
  'biometria':   {title:'Biometria', text:'Registre seu peso corporal ao longo do tempo e veja o gráfico de evolução. Adicione fotos de progresso para acompanhar visualmente sua transformação.'},
  'notas':       {title:'Notas', text:'Espaço para anotar observações de cada treino: sensações, dores, alimentos, qualidade do sono ou qualquer coisa relevante para seu progresso.'},
  'historico':   {title:'Histórico', text:'Todos os treinos registrados com data, duração, volume total, séries concluídas e RPE. Clique em qualquer sessão para ver os detalhes completos.'},
};

/* ── PPL WORKOUT DATA ── */
function normalizeMuscleGroup(value){
  const raw = (value || '').toString().trim();
  const map = {
    'Peito':'Peito',
    'Costas':'Costas',
    'Ombros':'Ombros',
    'Bíceps':'Bíceps',            'Biceps':'Bíceps',
    'Tríceps':'Tríceps',          'Triceps':'Tríceps',
    'Antebraços':'Antebraços',    'Antebracos':'Antebraços', 'Antebraço':'Antebraços',
    'Quadríceps':'Quadríceps',    'Quadriceps':'Quadríceps',
    'Posterior de Coxa':'Posterior de Coxa', 'Posteriores':'Posterior de Coxa', 'Posterior':'Posterior de Coxa',
    'Glúteos':'Glúteos',          'Gluteos':'Glúteos', 'Glúteo':'Glúteos',
    'Panturrilhas':'Panturrilhas',
    'Abdômen':'Abdômen',          'Abdomen':'Abdômen',
    // Categorias amplas usadas antes desta atualização — mantidas só para
    // sessões antigas já salvas não perderem o vínculo com nenhum grupo.
    'Braços':'Bíceps',
    'Pernas':'Quadríceps',
  };
  return map[raw] || raw || 'Peito';
}

function normalizeWorkoutExercises(workouts){
  return (workouts||[]).map(w=>({
    ...w,
    exercises:(w.exercises||[]).map(e=>({
      ...e,
      muscle: getExerciseMuscles(e.muscle)
    }))
  }));
}

// Um exercício pode trabalhar até 2 grupos musculares (ex: Stiff-Legged
// Deadlift = Glúteos + Posterior de Coxa). `e.muscle` é armazenado como um
// array de 1 ou 2 nomes já normalizados. Esta função aceita tanto o
// formato antigo (uma única string) quanto o novo (array), então dados
// salvos antes desta atualização continuam funcionando sem migração.
function getExerciseMuscles(value){
  const arr = Array.isArray(value) ? value : [value];
  const out = [];
  arr.forEach(v=>{
    const n = normalizeMuscleGroup(v);
    if(n && !out.includes(n)) out.push(n);
  });
  if(!out.length) out.push('Peito');
  return out.slice(0,2); // no máximo 2 grupos musculares por exercício
}

// Texto de exibição para o(s) grupo(s) muscular(es) de um exercício —
// "Peito" para um só grupo, ou "Glúteos + Posterior de Coxa" para dois.
function muscleLabel(value){
  return getExerciseMuscles(value).join(' + ');
}

const DEFAULT_WORKOUTS = normalizeWorkoutExercises([
  {
    id:'push1',name:'Push',day:'Segunda-feira',icon:'push',colorClass:'push',
    note:'Comece pelos compostos enquanto o SNC está fresco. Aumente carga a cada semana.',
    exercises:[
      {id:'p1e1',name:'Supino Reto com Barra',       sets:4,reps:'6–10', muscle:'Peito',     tip:'Exercício base comprovado para hipertrofia de peito. Priorize execução e amplitude completa antes de aumentar carga.'},
      {id:'p1e2',name:'Supino Inclinado c/ Halteres',sets:3,reps:'8–12', muscle:'Peito',     tip:'Ativa a cabeça clavicular do peitoral. Incline o banco entre 30–45° para máxima ativação.'},
      {id:'p1e3',name:'Crucifixo com Halteres',      sets:3,reps:'10–15',muscle:'Peito',     tip:'Isolamento do peitoral com maior amplitude. Mantenha leve flexão nos cotovelos durante todo o movimento.'},
      {id:'p1e4',name:'Desenvolvimento c/ Halteres', sets:4,reps:'8–12', muscle:'Ombros',    tip:'Principal motor dos ombros. Desça até os cotovelos ficarem paralelos ao chão para ativação total.'},
      {id:'p1e5',name:'Elevação Lateral c/ Halteres',sets:4,reps:'12–20',muscle:'Ombros',    tip:'Sobrecarga mecânica no deltoide medial. Use cargas moderadas, execute devagar (2s subindo, 3s descendo).'},
      {id:'p1e6',name:'Tríceps Pulley (corda)',       sets:3,reps:'10–15',muscle:'Tríceps',   tip:'Isolamento do tríceps com extensão total. Abra a corda no final do movimento para maximizar o pico.'},
      {id:'p1e7b',name:'Supino Fechado',              sets:3,reps:'8–12', muscle:'Tríceps',   tip:'Pegada fechada desloca o foco do peito para o tríceps. Cotovelos próximos ao corpo durante todo o movimento.'},
    ]
  },
  {
    id:'legs1',name:'Legs + Abs',day:'Terça-feira',icon:'legs',colorClass:'legs',
    note:'Panturrilha responde bem a alta frequência e amplitude completa. Não negligencie o stretch no fundo.',
    exercises:[
      {id:'l1e1b',name:'Hack Agachamento',            sets:4,reps:'8–12', muscle:'Quadríceps', tip:'Máquina guiada com apoio nas costas — foco total em quadríceps com menor exigência de estabilização.'},
      {id:'l1e2',name:'Leg Press 45°',                sets:3,reps:'10–15',muscle:'Quadríceps', tip:'Volume adicional de quad com menor carga espinhal. Pés na largura dos ombros.'},
      {id:'l1e3',name:'Cadeira Extensora',            sets:3,reps:'12–15',muscle:'Quadríceps', tip:'Isolamento de quad. Melhor ativação EMG do vasto lateral. Segure o pico por 1 segundo.'},
      {id:'l1e4',name:'Stiff-Legged Deadlift',        sets:4,reps:'8–12', muscle:['Posterior de Coxa','Glúteos'],tip:'Ativação máxima de isquiossurais e glúteo. Sinta o alongamento na parte posterior da coxa.'},
      {id:'l1e5',name:'Flexão de Joelho (mesa)',      sets:3,reps:'10–15',muscle:'Posteriores',tip:'Isolamento direto dos posteriores. Controle a descida (excêntrico de 3 segundos).'},
      {id:'l1e6',name:'Panturrilha em Pé',            sets:4,reps:'12–20',muscle:'Panturrilhas',tip:'Ativa o gastrocnêmio. Amplitude total é a chave — desça até sentir o stretch completo.'},
      {id:'l1e7',name:'Panturrilha Sentado',          sets:3,reps:'15–20',muscle:'Panturrilhas',tip:'Enfatiza o sóleo. Alta frequência funciona bem para panturrilha.'},
      {id:'l1e8',name:'Abdominal Crunch com Carga',   sets:3,reps:'12–15',muscle:'Abdômen',   tip:'Reto abdominal. Adicione peso progressivo para hipertrofia real. Não balance o tronco.'},
      {id:'l1e9',name:'Elevação de Pernas Pendurado', sets:3,reps:'10–15',muscle:'Abdômen',   tip:'Ativa iliopsoas + reto abdominal inferior. Evite balanço — controle o movimento.'},
    ]
  },
  {
    id:'pull1',name:'Pull',day:'Quarta-feira',icon:'pull',colorClass:'pull',
    note:'Na barra fixa, priorize amplitude total — desça completamente. O stretch em cima ativa mais fibras.',
    exercises:[
      {id:'pu1e1b',name:'Puxada Alta na Polia',        sets:4,reps:'8–12', muscle:'Costas',  tip:'Alternativa controlada à barra fixa. Puxe até a altura do queixo, controlando bem a fase excêntrica.'},
      {id:'pu1e2',name:'Remada Curvada com Barra',    sets:4,reps:'8–12', muscle:'Costas',  tip:'Espessura de costas. Alta ativação de romboides e lat. Cotovelos perto do corpo.'},
      {id:'pu1e3',name:'Remada Cavalinho / Polia',    sets:3,reps:'10–15',muscle:'Costas',  tip:'Ênfase em retração escapular. Puxe para o umbigo, não para o peito.'},
      {id:'pu1e4',name:'Pull-down Triângulo',         sets:3,reps:'10–15',muscle:'Costas',  tip:'Alta ativação do lat. Puxe para o peito, não para o queixo. Incline levemente o tronco.'},
      {id:'pu1e5',name:'Rosca Direta com Barra',      sets:3,reps:'8–12', muscle:'Bíceps',  tip:'Sobrecarga máxima de bíceps. Sem balanço de quadril — mantenha o tronco fixo.'},
      {id:'pu1e6',name:'Rosca Martelo',               sets:3,reps:'10–15',muscle:'Bíceps',  tip:'Braquial + bíceps. Adiciona espessura ao braço. Execute alternado.'},
      {id:'pu1e7',name:'Encolhimento com Barra',      sets:4,reps:'10–15',muscle:'Costas',  tip:'Principal exercício para trapézio superior. Movimento vertical puro.'},
    ]
  },
  {
    id:'push2',name:'Push #2',day:'Quinta-feira',icon:'push',colorClass:'push2',
    note:'Use cargas ligeiramente menores que segunda. Priorize a execução.',
    exercises:[
      {id:'p2e1',name:'Supino Declinado',             sets:4,reps:'8–12', muscle:'Peito',   tip:'Peitoral inferior. Complementa o supino reto.'},
      {id:'p2e2',name:'Crossover na Polia',           sets:3,reps:'12–15',muscle:'Peito',   tip:'Isolamento com tensão constante no peitoral. Cruze as mãos no final.'},
      {id:'p2e3',name:'Voador (Peck Deck)',           sets:3,reps:'12–15',muscle:'Peito',   tip:'Alta ativação EMG do peitoral. Segure 1 segundo no pico.'},
      {id:'p2e4b',name:'Desenvolvimento na Máquina',  sets:4,reps:'8–12', muscle:'Ombros',  tip:'Trajetória guiada, mais segura para cargas altas. Foco no deltoide anterior e lateral.'},
      {id:'p2e5',name:'Face Pull na Polia',           sets:3,reps:'15–20',muscle:'Ombros',  tip:'Deltoide posterior + saúde do manguito rotador. Puxe até as orelhas.'},
      {id:'p2e6',name:'Tríceps Francês (EZ)',         sets:3,reps:'10–12',muscle:'Tríceps', tip:'Ativa a cabeça longa do tríceps em maior ROM.'},
      {id:'p2e7b',name:'Kickback na Polia',            sets:3,reps:'12–15',muscle:'Tríceps', tip:'Tensão constante do cabo ao longo de todo o movimento, diferente do halter. Tronco paralelo ao chão.'},
    ]
  },
  {
    id:'pull2',name:'Pull #2',day:'Sexta-feira',icon:'pull',colorClass:'pull2',
    note:'O terra no início garante carga máxima. RDL pode ser feito mais leve e controlado.',
    exercises:[
      {id:'pu2e1b',name:'Remada Articulada na Máquina',sets:4,reps:'8–12', muscle:'Costas',     tip:'Espessura de costas com menor exigência de estabilização lombar comparado ao terra. Puxe até o abdômen.'},
      {id:'pu2e2',name:'Remada Unilateral (Halter)',  sets:3,reps:'10–12',muscle:'Costas',     tip:'Isola cada lado, corrige desequilíbrios musculares.'},
      {id:'pu2e3',name:'Pull-down Supinado',          sets:3,reps:'10–15',muscle:'Bíceps',     tip:'Bíceps + lat. Traga a barra até o peito com cotovelos perto.'},
      {id:'pu2e4',name:'Rosca Concentrada',           sets:3,reps:'12–15',muscle:'Bíceps',     tip:'Pico de contração do bíceps. Apoie o cotovelo na coxa.'},
      {id:'pu2e5',name:'Rosca Scott (EZ)',            sets:3,reps:'8–12', muscle:'Bíceps',     tip:'Remove compensação; isolamento total de bíceps.'},
      {id:'pu2e6',name:'Romanian Deadlift (RDL)',     sets:4,reps:'8–12', muscle:'Posteriores',tip:'Melhor exercício para posteriores com hip hinge.'},
      {id:'pu2e7',name:'Cadeira Flexora',             sets:3,reps:'10–15',muscle:'Posteriores',tip:'Isola isquiossurais. Excêntrico de 3 segundos.'},
      {id:'pu2e8',name:'Panturrilha em Pé',           sets:4,reps:'12–20',muscle:'Panturrilhas',tip:'Segunda sessão semanal para garantir frequência adequada.'},
    ]
  },
]);

// Canonical list + display order for muscle groups, used by the weekly
// series-per-muscle tracker. The app now uses the same categories shown in
// the UI and in the volume filters.
const MUSCLE_GROUPS = ['Peito','Costas','Ombros','Bíceps','Tríceps','Antebraços','Quadríceps','Posterior de Coxa','Glúteos','Panturrilhas','Abdômen'];

// Evidence-based weekly series targets per muscle group (used to compute
// the ✅/⚠️/❌ status next to each group in the weekly breakdown).
const MUSCLE_WEEKLY_TARGET = {
  'Peito':12, 'Costas':14, 'Ombros':12,
  'Bíceps':10, 'Tríceps':10, 'Antebraços':6,
  'Quadríceps':12, 'Posterior de Coxa':8, 'Glúteos':8,
  'Panturrilhas':10, 'Abdômen':8,
};
// Lê a meta de séries semanais de um grupo muscular, priorizando o valor
// que o usuário personalizou no editor de metas (ver openMetaEditor()).
function getMuscleTarget(m){
  const goal=DB.getVolumeGoals().find(g=>g.name===m);
  return goal ? goal.target : (MUSCLE_WEEKLY_TARGET[m]||10);
}

// Lista de TODOS os grupos musculares atualmente rastreados no Volume
// Semanal — os 11 padrão mais quaisquer grupos personalizados que o
// usuário tenha adicionado no Editor de Metas. É o que permite que uma
// nova meta criada pelo usuário apareça automaticamente na lista e no
// seletor "Grupo Muscular" dos exercícios, funcionando como as demais.
function getAllMuscleGroups(){
  return DB.getVolumeGoals().map(g=>g.name);
}

// Builds a lookup from exercise id -> muscle group across every workout
// the user currently has (not just the defaults), so custom exercises
// added later can also be tagged via their own `muscle` field, and a
// name-based fallback covers older history entries saved before the
// `id` field existed in session.exercises.
function buildMuscleLookup(){
  const byId = {};
  const byName = {};
  // Always start from DEFAULT_WORKOUTS so every standard exercise name
  // maps to a muscle group even if the user's localStorage copy was saved
  // before the muscle field existed. Then overlay with the user's current
  // workouts so any custom exercises or edits take precedence.
  [...DEFAULT_WORKOUTS, ...DB.getWorkouts()].forEach(w=>{
    (w.exercises||[]).forEach(e=>{
      const muscles = getExerciseMuscles(e.muscle);
      if(muscles.length){
        byId[e.id] = muscles;
        byName[(e.name||'').trim()] = muscles; // trim to avoid whitespace mismatches
      }
    });
  });
  return {byId, byName};
}

/* ── DEFAULT SCHEDULE (editable) ── */
// Maps JS getDay() 0=Sun..6=Sat to workout id or null (rest)
const DEFAULT_SCHEDULE = {0:null,1:'push1',2:'legs1',3:'pull1',4:'push2',5:'pull2',6:null};

/* ── EXTENDED ACHIEVEMENTS ── */
const ACHIEVEMENTS = [
  // First steps
  {id:'first',     icon:'bolt',    name:'Primeiro Passo',      desc:'Conclua seu primeiro treino.',                          cat:'inicio',   cond:s=>s.totalWorkouts>=1},
  {id:'w5',        icon:'dumbbell',name:'Consistente',          desc:'Complete 5 treinos.',                                   cat:'volume',   cond:s=>s.totalWorkouts>=5},
  {id:'w10',       icon:'target',  name:'Dedicado',             desc:'Complete 10 treinos.',                                  cat:'volume',   cond:s=>s.totalWorkouts>=10},
  {id:'w25',       icon:'trophy',  name:'Veterano',             desc:'Complete 25 treinos.',                                  cat:'volume',   cond:s=>s.totalWorkouts>=25},
  {id:'w50',       icon:'trophy',  name:'Meio Centenário',      desc:'Complete 50 treinos.',                                  cat:'volume',   cond:s=>s.totalWorkouts>=50},
  {id:'w100',      icon:'medal',   name:'Centenário',           desc:'Complete 100 treinos.',                                 cat:'volume',   cond:s=>s.totalWorkouts>=100},
  {id:'w200',      icon:'medal',   name:'Guerreiro',            desc:'Complete 200 treinos.',                                 cat:'volume',   cond:s=>s.totalWorkouts>=200},
  {id:'w500',      icon:'star',    name:'Lenda Viva',           desc:'Complete 500 treinos.',                                 cat:'volume',   cond:s=>s.totalWorkouts>=500},
  // Streak
  {id:'streak3',   icon:'fire',    name:'Em Chamas',            desc:'Treine 3 dias consecutivos.',                           cat:'streak',   cond:s=>s.streak>=3},
  {id:'streak7',   icon:'streak',  name:'Semana Perfeita',      desc:'Treine 7 dias consecutivos.',                           cat:'streak',   cond:s=>s.streak>=7},
  {id:'streak14',  icon:'streak',  name:'Duas Semanas',         desc:'Treine 14 dias consecutivos.',                          cat:'streak',   cond:s=>s.streak>=14},
  {id:'streak30',  icon:'fire',    name:'Mês de Ferro',         desc:'Treine 30 dias consecutivos.',                          cat:'streak',   cond:s=>s.streak>=30},
  // PRs
  {id:'pr1',       icon:'chart',   name:'Primeiro PR',          desc:'Quebre seu primeiro recorde pessoal.',                  cat:'evolucao', cond:s=>s.totalPRs>=1},
  {id:'pr10',      icon:'chart',   name:'Quebrador de PRs',     desc:'Quebre 10 recordes pessoais.',                          cat:'evolucao', cond:s=>s.totalPRs>=10},
  {id:'pr25',      icon:'chart',   name:'Máquina de Evolução',  desc:'Quebre 25 recordes pessoais.',                          cat:'evolucao', cond:s=>s.totalPRs>=25},
  // Volume
  {id:'vol10k',    icon:'weight',  name:'10 Toneladas',         desc:'Acumule 10.000 kg de volume total.',                    cat:'evolucao', cond:s=>s.totalVolumeKg>=10000},
  {id:'vol100k',   icon:'weight',  name:'100 Toneladas',        desc:'Acumule 100.000 kg de volume total.',                   cat:'evolucao', cond:s=>s.totalVolumeKg>=100000},
  {id:'vol500k',   icon:'weight',  name:'Meio Milhão',          desc:'Acumule 500.000 kg de volume total.',                   cat:'evolucao', cond:s=>s.totalVolumeKg>=500000},
  // Weekly
  {id:'fullweek',  icon:'star',    name:'PPL Completo',         desc:'Complete todos os 5 treinos em uma semana.',            cat:'consistencia',cond:s=>(s.weekWorkouts||0)>=5},
  // Time milestones (based on first workout date)
  {id:'time1w',    icon:'calendar',name:'1 Semana de Treinos',  desc:'Treine por 1 semana completa.',                         cat:'tempo',    cond:s=>daysTraining(s)>=7},
  {id:'time1m',    icon:'calendar',name:'1 Mês de Treinos',     desc:'Complete 1 mês treinando.',                             cat:'tempo',    cond:s=>daysTraining(s)>=30},
  {id:'time3m',    icon:'calendar',name:'3 Meses de Treinos',   desc:'3 meses de consistência.',                              cat:'tempo',    cond:s=>daysTraining(s)>=90},
  {id:'time6m',    icon:'calendar',name:'6 Meses de Treinos',   desc:'Meio ano de dedicação!',                                cat:'tempo',    cond:s=>daysTraining(s)>=180},
  {id:'time1y',    icon:'trophy',  name:'1 Ano de Treinos',     desc:'Um ano inteiro de consistência!',                       cat:'tempo',    cond:s=>daysTraining(s)>=365},
  {id:'time2y',    icon:'trophy',  name:'2 Anos de Treinos',    desc:'Dois anos de comprometimento.',                         cat:'tempo',    cond:s=>daysTraining(s)>=730},
  {id:'time3y',    icon:'medal',   name:'3 Anos de Treinos',    desc:'Três anos — você é uma máquina!',                       cat:'tempo',    cond:s=>daysTraining(s)>=1095},
  {id:'time5y',    icon:'medal',   name:'5 Anos de Treinos',    desc:'5 anos! Você é um atleta de verdade.',                  cat:'tempo',    cond:s=>daysTraining(s)>=1825},
  {id:'time10y',   icon:'star',    name:'10 Anos de Treinos',   desc:'Uma década de ferro. Lenda absoluta!',                  cat:'tempo',    cond:s=>daysTraining(s)>=3650},
];

function daysTraining(stats) {
  if(!stats.firstWorkoutDate) return 0;
  const diff = Date.now() - new Date(stats.firstWorkoutDate).getTime();
  return Math.floor(diff / 86400000);
}

/* ── STORAGE ── */
const DB = {
  _g(k,fb=null){try{const v=localStorage.getItem(k);return v?JSON.parse(v):fb}catch{return fb}},
  _s(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){console.error(e)}},
  getWorkouts(){return normalizeWorkoutExercises(this._g('ppl_v3_workouts',DEFAULT_WORKOUTS))},
  saveWorkouts(w){this._s('ppl_v3_workouts',normalizeWorkoutExercises(w))},
  getHistory(){return this._g('ppl_v3_history',[])},
  saveHistory(h){this._s('ppl_v3_history',h)},
  getStats(){return this._g('ppl_v3_stats',{totalWorkouts:0,totalVolumeKg:0,totalPRs:0,streak:0,lastDate:null,weekWorkouts:0,weekStart:null,xp:0,firstWorkoutDate:null})},
  saveStats(s){this._s('ppl_v3_stats',s)},
  getPRs(){return this._g('ppl_v3_prs',{})},
  savePRs(p){this._s('ppl_v3_prs',p)},
  getNotes(){return this._g('ppl_v3_notes',[])},
  saveNotes(n){this._s('ppl_v3_notes',n)},
  getWeights(){return this._g('ppl_v3_weights',[])},
  saveWeights(w){this._s('ppl_v3_weights',w)},
  getPhotos(){return this._g('ppl_v3_photos',[])},
  savePhotos(p){this._s('ppl_v3_photos',p)},
  getAchs(){return this._g('ppl_v3_achs',[])},
  saveAchs(a){this._s('ppl_v3_achs',a)},
  getSchedule(){return this._g('ppl_v3_schedule',DEFAULT_SCHEDULE)},
  saveSchedule(s){this._s('ppl_v3_schedule',s)},
  getGoals(){return this._g('ppl_v3_goals',DEFAULT_VOLUME_GOALS)},
  saveGoals(g){this._s('ppl_v3_goals',g)},
  getWeeklyGoal(){return this._g('ppl_v3_weekly_goal',5)},
  saveWeeklyGoal(n){this._s('ppl_v3_weekly_goal',Math.max(1,Math.min(14,parseInt(n)||5)))},
  // Metas de séries semanais por grupo muscular (editor de metas do card
  // "Volume Semanal"). Guarda só o que o usuário personalizou; grupos não
  // salvos aqui continuam usando o padrão de MUSCLE_WEEKLY_TARGET.
  getMuscleTargets(){return this._g('ppl_v3_muscle_targets',{})},
  saveMuscleTargets(t){this._s('ppl_v3_muscle_targets',t)},
  // Lista completa e editável de metas de "Volume Semanal": cada item é
  // {name, target}. Na primeira leitura é semeada a partir dos 11 grupos
  // musculares padrão (MUSCLE_GROUPS/MUSCLE_WEEKLY_TARGET) e de qualquer
  // valor já personalizado em ppl_v3_muscle_targets (migração automática,
  // sem perder metas que o usuário já tinha ajustado).
  getVolumeGoals(){
    const saved=this._g('ppl_v3_volume_goals',null);
    if(Array.isArray(saved)&&saved.length) return saved;
    const legacy=this._g('ppl_v3_muscle_targets',{});
    const list=MUSCLE_GROUPS.map(m=>{
      const v=parseInt(legacy[m]);
      return {name:m, target:(v>0?v:(MUSCLE_WEEKLY_TARGET[m]||10))};
    });
    Object.keys(legacy).forEach(k=>{
      if(!MUSCLE_GROUPS.includes(k)){
        const v=parseInt(legacy[k]);
        list.push({name:k, target:(v>0?v:10)});
      }
    });
    this._s('ppl_v3_volume_goals',list);
    return list;
  },
  saveVolumeGoals(list){this._s('ppl_v3_volume_goals',list)},
  // Metas de peso corporal — lista livre de {id, label, target(kg)} que o
  // usuário cria/edita/remove no Editor de Metas (aba Biometria).
  getWeightGoals(){return this._g('ppl_v3_weight_goals',[])},
  saveWeightGoals(list){this._s('ppl_v3_weight_goals',list)},
  exportAll(){return JSON.stringify({workouts:this.getWorkouts(),history:this.getHistory(),stats:this.getStats(),prs:this.getPRs(),notes:this.getNotes(),weights:this.getWeights(),achs:this.getAchs(),schedule:this.getSchedule(),at:new Date().toISOString()},null,2)},
  importAll(str){const d=JSON.parse(str);['workouts','history','stats','prs','notes','weights','achs','schedule'].forEach(k=>{if(d[k])this._s('ppl_v3_'+k,d[k])})},
  // Active (in-progress) workout session — persists across app close/reopen
  getActiveSession(){return this._g('ppl_v3_active_session',null)},
  saveActiveSession(s){this._s('ppl_v3_active_session',s)},
  clearActiveSession(){localStorage.removeItem('ppl_v3_active_session')},
};

/* ── UTILS ── */
const $  = (s,c=document)=>c.querySelector(s);
const $$ = (s,c=document)=>[...c.querySelectorAll(s)];
function fmtTime(s){return`${Math.floor(s/60).toString().padStart(2,'0')}:${(s%60).toString().padStart(2,'0')}`}
// CORREÇÃO (bug da "linha de evolução" no Volume Semanal): todo o app usava
// `date.toISOString().slice(0,10)` para pegar a data "de hoje"/de uma semana.
// `toISOString()` converte para UTC antes de formatar — e o Brasil está em
// UTC-3. Resultado: qualquer treino finalizado à noite, entre ~21h e 23h59
// (horário de pico de academia!), era salvo com a data de AMANHÃ, e o
// cálculo do início da semana (weekStart) podia "pular" para o dia seguinte
// dependendo da hora em que o app era aberto — fazendo sessões da semana
// atual serem contadas como se fossem da semana passada (ou vice-versa).
// Isso fazia o total/gráfico de "Volume Semanal" parecer estagnado mesmo
// depois de treinar. `localDateStr` usa os componentes de data LOCAIS
// (getFullYear/getMonth/getDate), que nunca sofrem esse desvio de fuso.
function localDateStr(d){
  const y=d.getFullYear(), m=String(d.getMonth()+1).padStart(2,'0'), day=String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}
function today(){return localDateStr(new Date())}
function fmtDate(iso){return new Date(iso+'T12:00:00').toLocaleDateString('pt-BR',{day:'2-digit',month:'short',year:'numeric'})}
function calc1RM(w,r){if(!w||!r||r<1)return 0;return Math.round(parseFloat(w)*(1+parseInt(r)/30))}
function greeting(){const h=new Date().getHours();return h<12?'Bom dia, Atleta! ☀️':h<18?'Boa tarde, Atleta! 👋':'Boa noite, Atleta! 🌙'}

function showToast(msg,ms=2600){
  let t=$('#app-toast');
  if(!t){t=document.createElement('div');t.id='app-toast';t.className='toast';document.body.appendChild(t)}
  t.textContent=msg;t.classList.add('show');clearTimeout(t._t);
  t._t=setTimeout(()=>t.classList.remove('show'),ms);
}

// weekStart() defined below with optional refDate param

// Info icon button
function infoBtn(cardKey){
  return `<button class="card-info-btn" data-card="${cardKey}" title="Saiba mais">${ICONS.question}</button>`;
}

/* ── XP SYSTEM ── */
const LEVELS=[
  {lvl:1,title:'Iniciante',need:100},{lvl:2,title:'Consistente',need:250},
  {lvl:3,title:'Dedicado',need:500},{lvl:4,title:'Avançado',need:900},
  {lvl:5,title:'Elite',need:1500},{lvl:6,title:'Mestre PPL',need:2500},
  {lvl:7,title:'Campeão',need:4000},{lvl:8,title:'Lendário',need:6000},
  {lvl:9,title:'Imortal',need:9000},{lvl:10,title:'PPL God',need:Infinity},
];
function xpConfig(totalXP){
  let acc=0;
  for(let i=0;i<LEVELS.length;i++){
    const{lvl,title,need}=LEVELS[i];
    if(i===LEVELS.length-1||totalXP<acc+need){
      const inLvl=totalXP-acc;
      return{lvl,title,cur:inLvl,next:need===Infinity?'∞':need,pct:need===Infinity?100:Math.min(100,(inLvl/need)*100)};
    }
    acc+=need;
  }
}
function addXP(n){const s=DB.getStats();s.xp=(s.xp||0)+n;DB.saveStats(s)}

function updateStreak(){
  const s=DB.getStats(),td=today();
  if(s.lastDate===td)return;
  const yd=new Date();yd.setDate(yd.getDate()-1);
  s.streak=s.lastDate===localDateStr(yd)?(s.streak||0)+1:1;
  s.lastDate=td;
  if(!s.firstWorkoutDate)s.firstWorkoutDate=td;
  const ws=weekStart();
  if(s.weekStart!==ws){s.weekStart=ws;s.weekWorkouts=0}
  s.weekWorkouts=(s.weekWorkouts||0)+1;
  DB.saveStats(s);
}

/* ── STATE ── */
const S={
  view:'home',activeWorkout:null,previewWorkoutId:null,
  workoutInterval:null,restInterval:null,
  restRemaining:0,restTotal:0,restRunning:false,
  editingWid:null,editingMode:'edit',editingWorkout:null,selectedRPE:null,
  expandedExIdx:null, // which exercise row is expanded in the edit-workout modal
};

/* ── ROUTER ── */
function go(view){
  $$('.view').forEach(v=>v.classList.remove('active'));
  $$('.nav-item').forEach(n=>n.classList.remove('active'));
  $(`#view-${view}`)?.classList.add('active');
  $(`.nav-item[data-view="${view}"]`)?.classList.add('active');
  S.view=view;
  const sub={home:'Pronto para superar seus limites?',workouts:'Sua rotina PPL completa',start:'Selecione e comece',history:'Seus registros de treino',more:'Biometria · Notas · Conquistas'};
  $('#header-subtitle').textContent=sub[view]||'';
  if(view==='home')renderHome();
  else if(view==='workouts')renderWorkouts();
  else if(view==='start')renderStart();
  else if(view==='history')renderHistory('all');
  else if(view==='more')renderMore();
}

/* ── HOME ── */
function renderHome(){
  const stats=DB.getStats(),hist=DB.getHistory();
  $('#greeting-text').textContent=greeting();
  const xp=xpConfig(stats.xp||0);
  $('#xp-level').textContent=xp.lvl;$('#xp-title').textContent=xp.title;
  $('#xp-level-badge').textContent=xp.lvl;$('#xp-cur').textContent=xp.cur;
  $('#xp-nxt').textContent=xp.next;$('#xp-bar-fill').style.width=`${xp.pct}%`;
  $('#streak-count').textContent=stats.streak||0;
  const totalVol=hist.reduce((a,h)=>a+(h.totalVolume||0),0);
  $('#stat-workouts').textContent=stats.totalWorkouts||0;
  $('#stat-volume').textContent=totalVol>=1000?`${(totalVol/1000).toFixed(1)}t`:`${totalVol}kg`;
  $('#stat-prs').textContent=stats.totalPRs||0;
  const _wg=DB.getWeeklyGoal();
  const _wb=$('#week-badge');
  if(_wb){
    _wb.textContent=`${stats.weekWorkouts||0}/${_wg}`;
    _wb.style.cursor='pointer';
    _wb.title='Clique para editar meta semanal';
    _wb.onclick=()=>{
      const v=prompt('Meta semanal de treinos (1–14):', _wg);
      if(v==null) return;
      const n=parseInt(v);
      if(!n||n<1||n>14){showToast('Meta inválida (1–14).');return}
      DB.saveWeeklyGoal(n);
      renderHome();
      showToast(`✅ Meta semanal: ${n} treinos`);
    };
  }
  renderTodayCard();renderWeekStrip();renderVolumeChart();renderHomeCards();renderHomeAchs();
}

function renderTodayCard(){
  const el=$('#today-workout-card');if(!el)return;
  const badge=$('#today-day-badge');
  const schedule=DB.getSchedule();
  const dayNames=['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
  const jsDay=new Date().getDay();
  const todayName=dayNames[jsDay];
  if(badge)badge.textContent=todayName;
  const wid=schedule[jsDay];
  if(!wid){
    el.innerHTML=`<div class="rest-day-card">
      <div class="rest-day-card__icon">${ICONS.sleep}</div>
      <div class="rest-day-card__text">
        <strong>Dia de Descanso 🛌</strong>
        <p>Hoje é ${todayName}. Aproveite para recuperar, dormir bem e nutrir o músculo. O crescimento acontece no descanso!</p>
      </div>
    </div>`;
    return;
  }
  const ws=DB.getWorkouts(),w=ws.find(x=>x.id===wid);
  if(!w){el.innerHTML='';return;}
  const hist=DB.getHistory();
  const doneToday=hist.some(h=>h.date===today()&&h.workoutId===wid);
  const shown=w.exercises.slice(0,4),extra=w.exercises.length-shown.length;
  el.innerHTML=`<div class="today-card">
    <div class="today-card__top">
      <div class="today-card__icon">${ICONS[w.icon]||ICONS.dumbbell}</div>
      <div class="today-card__info">
        <div class="today-card__name">${w.name}</div>
        <div class="today-card__day">${w.day}</div>
        <div class="today-card__count">${w.exercises.length} exercícios · ${w.exercises.reduce((a,e)=>a+e.sets,0)} séries</div>
      </div>
      ${doneToday?`<div class="done-badge">${ICONS.check} Feito!</div>`:''}
    </div>
    <div class="today-card__exercises">
      ${shown.map(e=>`<span class="today-ex-chip">${e.name}</span>`).join('')}
      ${extra>0?`<span class="today-ex-chip">+${extra} mais</span>`:''}
    </div>
    <div class="today-card__action">
      <button class="btn ${doneToday?'btn--done':'btn--primary'}" id="btn-today-start">
        ${doneToday?`${ICONS.check} Treinar Novamente`:`${ICONS.bolt} Iniciar Treino`}
      </button>
    </div>
  </div>`;
  $('#btn-today-start')?.addEventListener('click',()=>{go('start');setTimeout(()=>openWorkoutDetail(wid),80)});
}

function renderWeekStrip(){
  const hist=DB.getHistory();
  const schedule=DB.getSchedule();
  const ws=weekStart();
  const wsDate=new Date(ws+'T12:00:00');
  const lbls=['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'];
  // day offset: weekStart is Monday (idx 0 in lbls = JS day 1)
  const jsOrder=[1,2,3,4,5,6,0]; // Mon..Sun
  const el=$('#week-strip');el.innerHTML='';
  for(let i=0;i<7;i++){
    const d=new Date(wsDate);d.setDate(d.getDate()+i);
    const iso=d.toISOString().slice(0,10);
    const jsDay=jsOrder[i];
    const isRest=!schedule[jsDay];
    const done=isRest||hist.some(h=>h.date===iso);
    const isToday=iso===today();
    const div=document.createElement('div');
    div.className='week-day';
    div.innerHTML=`<div class="week-day__lbl">${lbls[i]}</div>
      <div class="week-dot${done?' done':''}${isToday&&!done?' today':''}${isRest?' rest':''}">${done?(isRest?'😴':ICONS.check):''}</div>`;
    el.appendChild(div);
  }
}

/* ── VOLUME GOALS (editable) ── */
const DEFAULT_VOLUME_GOALS = [
  {id:'g1', label:'Agachamento 80kg',  target:12800},
  {id:'g2', label:'Supino 100kg',      target:12800},
  {id:'g3', label:'Terra 120kg',       target:9600},
  {id:'g4', label:'100t acumuladas',   target:100000},
];

// Computes, for the CURRENT calendar week (Mon–Sun), how many completed
// series went to each muscle group — counted from real session history,
// matched per-exercise via id first (most accurate) and falling back to
// matching by exercise name (covers older sessions saved before ids were
// stored). This is what fixes the old bug where "Volume Semanal" only
// looked at a session's overall totalVolume number with no link at all
// to which exercise — let alone which muscle — actually produced it.
function computeWeeklyMuscleSeries(){
  const {byId, byName} = buildMuscleLookup();
  const hist = DB.getHistory();
  const ws = weekStart();
  const wsDate = new Date(ws+'T00:00:00');
  const weDate = new Date(wsDate); weDate.setDate(weDate.getDate()+7);

  const totals = {};
  getAllMuscleGroups().forEach(m=>totals[m]=0);

  // Per-workout breakdown too, so each workout's mini-chart only shows
  // the series IT contributed this week (used by the per-workout view).
  const perWorkout = {}; // workoutId -> { muscle -> series }

  hist.forEach(session=>{
    const d = new Date(session.date+'T00:00:00');
    if(d < wsDate || d >= weDate) return; // outside current week

    if(!perWorkout[session.workoutId]) perWorkout[session.workoutId] = {};
    const pw = perWorkout[session.workoutId];

    (session.exercises||[]).forEach(ex=>{
      const muscles = getExerciseMuscles(ex.muscle || (ex.id && byId[ex.id]) || byName[(ex.name||'').trim()]);
      const seriesCount = (ex.series||[]).length; // each completed set = 1 series
      // Exercícios que trabalham 2 grupos musculares (ex: Stiff = Glúteos +
      // Posterior de Coxa) contam a série INTEIRA para cada grupo — não
      // divide entre eles, já que ambos recebem o estímulo completo.
      muscles.forEach(muscle=>{
        totals[muscle] = (totals[muscle]||0) + seriesCount;
        pw[muscle] = (pw[muscle]||0) + seriesCount;
      });
    });
  });

  return {totals, perWorkout};
}

/* ══════════════════════════════════════════════════════════════════════
   VOLUME SEMANAL — Painel Profissional com Chart.js
   Redesenhado do zero: gráficos reais, stats, comparação, filtros,
   detalhes por músculo. Inspirado no design Kalo (imagem 2).
══════════════════════════════════════════════════════════════════════ */

// Active filter state for the volume panel
let _volFilter = 'todos';       // 'todos' | workoutId
let _volMuscleFilter = 'todos'; // 'todos' | muscle-group-name
let _volActiveTab = 'barras';   // 'barras' | 'linha'
let _volDetailMuscle = null;    // which muscle detail panel is open
let _barChartInst = null;       // Chart.js bar instance
let _lineChartInst = null;      // Chart.js line instance

// Mapping of display-filter-name -> array of MUSCLE_GROUPS it covers
const MUSCLE_CATEGORY_MAP = {
  'Peito':              ['Peito'],
  'Costas':             ['Costas'],
  'Ombros':             ['Ombros'],
  'Bíceps':             ['Bíceps'],
  'Tríceps':            ['Tríceps'],
  'Antebraços':         ['Antebraços'],
  'Quadríceps':         ['Quadríceps'],
  'Posterior de Coxa':  ['Posterior de Coxa'],
  'Glúteos':            ['Glúteos'],
  'Panturrilhas':       ['Panturrilhas'],
  'Abdômen':            ['Abdômen'],
};

// Colors per status level — used by Chart.js and inline bars alike
function barColor(count, target){
  const r = count / (target||10);
  if(count === 0)   return {bar:'rgba(180,50,50,.7)',  glow:'rgba(220,60,60,.25)'};
  if(r < 0.5)       return {bar:'rgba(220,60,60,.85)', glow:'rgba(220,60,60,.3)'};
  if(r < 0.8)       return {bar:'rgba(230,160,0,.85)', glow:'rgba(230,160,0,.3)'};
  if(r <= 1.0)      return {bar:'rgba(0,200,83,.9)',   glow:'rgba(0,200,83,.35)'};
  return             {bar:'rgba(60,140,255,.9)',        glow:'rgba(60,140,255,.3)'};  // over target
}

function statusIcon(count, target){
  const r = count / (target||10);
  if(count===0)  return {svg:'<svg viewBox="0 0 20 20" fill="none" stroke="#e05555" stroke-width="2.2"><circle cx="10" cy="10" r="8"/><line x1="7" y1="7" x2="13" y2="13"/><line x1="13" y1="7" x2="7" y2="13"/></svg>', label:'Sem séries'};
  if(r < 0.5)   return {svg:'<svg viewBox="0 0 20 20" fill="none" stroke="#e05555" stroke-width="2"><path d="M10 3L10 11"/><circle cx="10" cy="14.5" r="1.2" fill="#e05555"/></svg>', label:'Volume baixo'};
  if(r < 0.8)   return {svg:'<svg viewBox="0 0 20 20" fill="none" stroke="#e6a200" stroke-width="2"><path d="M3 16h14M10 4l5 9H5z"/></svg>', label:'Em progresso'};
  if(r <= 1.0)  return {svg:'<svg viewBox="0 0 20 20" fill="none" stroke="#00c853" stroke-width="2.2"><circle cx="10" cy="10" r="8"/><path d="M6.5 10.5l2.5 2.5 4.5-5"/></svg>', label:'Meta atingida'};
  return         {svg:'<svg viewBox="0 0 20 20" fill="none" stroke="#3c8cff" stroke-width="2"><path d="M10 16V4"/><path d="M6 8l4-4 4 4"/></svg>', label:'Acima da meta'};
}

// Returns last 6 weekly totals (in kg·sets, i.e. totalVolume per session)
// grouped by calendar week, for the line chart
function getWeeklyTrend(){
  const hist = DB.getHistory();
  const weeks = [];
  for(let i=5;i>=0;i--){
    const d = new Date();
    d.setDate(d.getDate() - i*7);
    const ws = weekStart(d);
    weeks.push({label:`Sem -${i}`, ws});
  }
  weeks[5].label = 'Atual';
  return weeks.map(({label,ws})=>{
    const wsDate = new Date(ws+'T00:00:00');
    const weDate = new Date(wsDate); weDate.setDate(weDate.getDate()+7);
    const vol = hist
      .filter(s=>{ const d=new Date(s.date+'T00:00:00'); return d>=wsDate&&d<weDate; })
      .reduce((a,s)=>a+(s.totalVolume||0),0);
    return {label, vol};
  });
}

// weekStart helper that accepts an optional Date parameter so the trend
// function can call it for historical weeks too
function weekStart(refDate){
  const d = refDate ? new Date(refDate) : new Date();
  const day = d.getDay();
  const diff = d.getDate() - day + (day===0?-6:1);
  const monday = new Date(d);monday.setDate(diff);
  // CORREÇÃO: era `.toISOString().slice(0,10)`, que converte para UTC antes
  // de formatar. Como isso usava a hora ATUAL (não meia-noite), chamar essa
  // função à noite (UTC-3) podia devolver o dia seguinte como "segunda-feira
  // da semana", empurrando a semana inteira um dia para frente — só à noite.
  // Resultado: a mesma semana tinha limites diferentes dependendo da hora em
  // que o app era aberto, fazendo treinos "sumirem" da semana atual no
  // Volume Semanal. `localDateStr` usa a data local diretamente, sem
  // conversão de fuso, então o resultado não muda mais com a hora do dia.
  return localDateStr(monday);
}

// Calculates PREVIOUS week totals for comparison
function getPrevWeekTotals(){
  const {byId,byName}=buildMuscleLookup();
  const hist=DB.getHistory();
  const today = new Date();
  const thisMon = new Date(today);
  thisMon.setDate(today.getDate()-today.getDay()+(today.getDay()===0?-6:1));
  thisMon.setHours(0,0,0,0);
  const lastMon = new Date(thisMon); lastMon.setDate(lastMon.getDate()-7);
  const totals={};
  getAllMuscleGroups().forEach(m=>totals[m]=0);
  hist.forEach(session=>{
    const d=new Date(session.date+'T00:00:00');
    if(d<lastMon||d>=thisMon)return;
    (session.exercises||[]).forEach(ex=>{
      const muscles=getExerciseMuscles(ex.muscle || (ex.id&&byId[ex.id]) || byName[ex.name]);
      const seriesCount=(ex.series||[]).length;
      muscles.forEach(muscle=>{ totals[muscle]=(totals[muscle]||0)+seriesCount; });
    });
  });
  return totals;
}

/* ── MAIN RENDER ── */
function renderVolumeChart(){
  const root=$('#volume-card-root');if(!root)return;

  // Destroy existing Chart.js instances before re-render to avoid
  // "Canvas already in use" errors when switching tabs/filters
  if(_barChartInst){_barChartInst.destroy();_barChartInst=null;}
  if(_lineChartInst){_lineChartInst.destroy();_lineChartInst=null;}

  const {totals,perWorkout}=computeWeeklyMuscleSeries();
  const prevTotals=getPrevWeekTotals();
  const workouts=DB.getWorkouts();
  const trend=getWeeklyTrend();
  const _volLu=buildMuscleLookup(); // calculado uma vez e reaproveitado abaixo

  // Apply workout filter
  const baseTotals = _volFilter==='todos'
    ? totals
    : (perWorkout[_volFilter]||{});

  // Apply muscle-category filter
  const allMuscleGroups = getAllMuscleGroups();
  let visibleMuscles = allMuscleGroups;
  if(_volMuscleFilter!=='todos'){
    visibleMuscles = MUSCLE_CATEGORY_MAP[_volMuscleFilter] || allMuscleGroups;
  }

  const aggregateMuscleTotals = Object.fromEntries(allMuscleGroups.map(m=>[m, baseTotals[m]||0]));
  const baseTotalsForDisplay = _volMuscleFilter==='todos'
    ? aggregateMuscleTotals
    : Object.fromEntries(visibleMuscles.map(m=>[m, aggregateMuscleTotals[m]||0]));

  // Stats
  const totalSeries = visibleMuscles.reduce((a,m)=>a+(baseTotalsForDisplay[m]||0),0);
  const totalVolumeKg = DB.getHistory().filter(s=>{
    const d=new Date(s.date+'T00:00:00');
    const ws=new Date(weekStart()+'T00:00:00');
    const we=new Date(ws);we.setDate(we.getDate()+7);
    return d>=ws&&d<we;
  }).reduce((a,s)=>a+(s.totalVolume||0),0);
  const musclesTrained = visibleMuscles.filter(m=>(baseTotalsForDisplay[m]||0)>0).length;
  const musclesComplete = visibleMuscles.filter(m=>(baseTotalsForDisplay[m]||0)>=getMuscleTarget(m)).length;
  const totalTarget = visibleMuscles.reduce((a,m)=>a+getMuscleTarget(m),0);
  const metaPct = totalTarget>0 ? Math.round((totalSeries/totalTarget)*100) : 0;
  const bestMuscle = visibleMuscles.reduce((best,m)=>(baseTotalsForDisplay[m]||0)>(baseTotalsForDisplay[best]||0)?m:best, visibleMuscles[0]||'—');
  const worstMuscle = visibleMuscles.reduce((worst,m)=>(baseTotalsForDisplay[m]||0)<(baseTotalsForDisplay[worst]||0)?m:worst, visibleMuscles[0]||'—');

  // Prev week comparison total
  const prevTotal = visibleMuscles.reduce((a,m)=>a+(prevTotals[m]||0),0);
  const diffSeries = totalSeries - prevTotal;
  const diffPct = prevTotal>0 ? Math.round(((totalSeries-prevTotal)/prevTotal)*100) : 0;

  // Which workout session was most voluminous this week?
  const weekSessions = DB.getHistory().filter(s=>{
    const d=new Date(s.date+'T00:00:00');
    const ws=new Date(weekStart()+'T00:00:00');
    const we=new Date(ws);we.setDate(we.getDate()+7);
    return d>=ws&&d<we;
  });
  const bestSession = weekSessions.reduce((best,s)=>
    (s.totalVolume||0)>(best.totalVolume||0)?s:best, weekSessions[0]||{});

  root.innerHTML=`
<!-- ══ VOLUME PANEL ══════════════════════════════════════════════════ -->
<div class="vp-card">

  <!-- Header -->
  <div class="vp-header">
    <div class="vp-header__left">
      <div class="vp-header__icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="20" height="20">
          <rect x="2" y="10" width="4" height="10" rx="1"/><rect x="9" y="6" width="4" height="14" rx="1"/><rect x="16" y="2" width="4" height="18" rx="1"/>
        </svg>
      </div>
      <div>
        <div class="vp-header__title">Volume Semanal</div>
        <div class="vp-header__sub">Séries por grupo muscular</div>
      </div>
    </div>
    <div style="display:flex;align-items:center;gap:6px">
      <button class="card-info-btn" id="btn-edit-meta-vol" title="Editor de Metas">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
      </button>
      <button class="card-info-btn" data-card="volume">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      </button>
    </div>
  </div>

  <!-- Quick Stats Row -->
  <div class="vp-stats-row">
    <div class="vp-stat">
      <div class="vp-stat__val">${totalSeries}</div>
      <div class="vp-stat__label">Total séries</div>
    </div>
    <div class="vp-stat-div"></div>
    <div class="vp-stat">
      <div class="vp-stat__val">${totalVolumeKg>=1000?(totalVolumeKg/1000).toFixed(1)+'t':totalVolumeKg+'kg'}</div>
      <div class="vp-stat__label">Volume total</div>
    </div>
    <div class="vp-stat-div"></div>
    <div class="vp-stat">
      <div class="vp-stat__val">${musclesTrained}/${visibleMuscles.length}</div>
      <div class="vp-stat__label">Músculos</div>
    </div>
    <div class="vp-stat-div"></div>
    <div class="vp-stat">
      <div class="vp-stat__val ${metaPct>=100?'vp-stat__val--good':metaPct>=70?'vp-stat__val--warn':'vp-stat__val--low'}">${totalSeries}/${totalTarget}</div>
      <div class="vp-stat__label">Meta geral (${metaPct}%)</div>
    </div>
  </div>

  <!-- Comparison badge -->
  ${prevTotal>0 ? `
  <div class="vp-compare">
    <div class="vp-compare__label">vs semana passada</div>
    <div class="vp-compare__chips">
      <span class="vp-chip ${diffSeries>=0?'vp-chip--up':'vp-chip--down'}">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12">
          ${diffSeries>=0?'<path d="M8 12V4M4 8l4-4 4 4"/>':'<path d="M8 4v8M4 8l4 4 4-4"/>'}
        </svg>
        ${Math.abs(diffSeries)} séries
      </span>
      <span class="vp-chip ${diffPct>=0?'vp-chip--up':'vp-chip--down'}">${diffPct>=0?'+':''}${diffPct}%</span>
    </div>
  </div>` : ''}

  <!-- Workout filter pills -->
  <div class="vp-filter-row" id="vp-workout-pills">
    <button class="vp-pill${_volFilter==='todos'?' active':''}" data-vwid="">Todos</button>
    ${workouts.map(w=>`<button class="vp-pill${_volFilter===w.id?' active':''}" data-vwid="${w.id}">${w.name}</button>`).join('')}
  </div>

  <!-- Muscle category filter -->
  <div class="vp-filter-row" id="vp-muscle-pills">
    <button class="vp-pill vp-pill--sm${_volMuscleFilter==='todos'?' active':''}" data-vcat="">Todos</button>
    ${Object.keys(MUSCLE_CATEGORY_MAP).map(cat=>`<button class="vp-pill vp-pill--sm${_volMuscleFilter===cat?' active':''}" data-vcat="${cat}">${cat}</button>`).join('')}
  </div>

  <!-- Tab switcher: Barras vs Linha -->
  <div class="vp-tabs">
    <button class="vp-tab${_volActiveTab==='barras'?' active':''}" data-vtab="barras">
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="14" height="14"><rect x="2" y="10" width="3" height="7" rx="1"/><rect x="7" y="6" width="3" height="11" rx="1"/><rect x="12" y="3" width="3" height="14" rx="1"/><rect x="17" y="8" width="3" height="9" rx="1"/></svg>
      Barras
    </button>
    <button class="vp-tab${_volActiveTab==='linha'?' active':''}" data-vtab="linha">
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="14" height="14"><polyline points="2 14 6 8 10 11 14 5 18 9"/></svg>
      Evolução
    </button>
  </div>

  <!-- ── BAR CHART TAB ── -->
  <div id="vp-tab-barras" style="display:${_volActiveTab==='barras'?'block':'none'}">
    <div class="vp-chart-wrap">
      <canvas id="vp-bar-canvas" height="220"></canvas>
    </div>

    <!-- Detailed muscle rows below the chart -->
    <div class="vp-muscle-detail-list">
      ${visibleMuscles.map(muscle=>{
        const count=baseTotalsForDisplay[muscle]||0;
        const target=getMuscleTarget(muscle);
        const pct=Math.min(100,Math.round((count/target)*100));
        const col=barColor(count,target);
        const icon=statusIcon(count,target);
        const prev=prevTotals[muscle]||0;
        const delta=count-prev;
        const isOpen=_volDetailMuscle===muscle;

        // Find which exercises contributed to this muscle this week
        const contrib=[];
        weekSessions.forEach(s=>{
          (s.exercises||[]).forEach(ex=>{
            const muscles=getExerciseMuscles(ex.muscle || (ex.id&&_volLu.byId[ex.id]) || _volLu.byName[(ex.name||'').trim()]);
            if(muscles.includes(muscle)&&(ex.series||[]).length>0){
              const existing=contrib.find(c=>c.name===ex.name);
              if(existing) existing.sets+=(ex.series||[]).length;
              else contrib.push({name:ex.name,sets:(ex.series||[]).length,workout:s.workoutName});
            }
          });
        });

        return `
        <div class="vp-mrow" data-muscle="${muscle}">
          <div class="vp-mrow__main">
            <div class="vp-mrow__icon">${icon.svg}</div>
            <div class="vp-mrow__info">
              <div class="vp-mrow__name">${muscle}</div>
              <div class="vp-mrow__bar-wrap">
                <div class="vp-mrow__bar"><div class="vp-mrow__fill" style="width:${pct}%;background:${col.bar};box-shadow:0 0 6px ${col.glow}"></div></div>
              </div>
            </div>
            <div class="vp-mrow__right">
              <div class="vp-mrow__count">${count}<span class="vp-mrow__target">/${target}</span></div>
              ${prev>0?`<div class="vp-mrow__delta ${delta>=0?'up':'down'}">${delta>=0?'+':''}${delta}</div>`:''}
            </div>
            <div class="vp-mrow__chevron${isOpen?' open':''}">${ICONS.arrow_r}</div>
          </div>
          ${isOpen?`
          <div class="vp-detail-panel">
            <div class="vp-detail-row"><span>Meta semanal</span><strong>${target} séries</strong></div>
            <div class="vp-detail-row"><span>Séries feitas</span><strong>${count}</strong></div>
            <div class="vp-detail-row"><span>Volume restante</span><strong>${Math.max(0,target-count)} séries</strong></div>
            ${weekSessions.length>0?`<div class="vp-detail-row"><span>Último treino</span><strong>${weekSessions[0]?.workoutName||'—'}</strong></div>`:''}
            ${contrib.length>0?`
            <div class="vp-detail-exlist">
              <div class="vp-detail-exlist__title">Exercícios esta semana</div>
              ${contrib.map(c=>`<div class="vp-detail-ex"><span>${c.name}</span><span class="vp-detail-ex__sets">${c.sets} séries · ${c.workout}</span></div>`).join('')}
            </div>`:''}
          </div>`:''}</div>`;
      }).join('')}
    </div>

    <!-- Indicator legend -->
    <div class="vp-legend">
      <div class="vp-legend__item">
        <div class="vp-legend__dot" style="background:#e03333"></div><span>Abaixo de 50%</span>
      </div>
      <div class="vp-legend__item">
        <div class="vp-legend__dot" style="background:#e6a200"></div><span>50–80%</span>
      </div>
      <div class="vp-legend__item">
        <div class="vp-legend__dot" style="background:#00c853"></div><span>Meta ✓</span>
      </div>
      <div class="vp-legend__item">
        <div class="vp-legend__dot" style="background:#3c8cff"></div><span>Acima</span>
      </div>
    </div>
  </div>

  <!-- ── LINE CHART TAB ── -->
  <div id="vp-tab-linha" style="display:${_volActiveTab==='linha'?'block':'none'}">
    <div class="vp-chart-wrap" style="height:200px">
      <canvas id="vp-line-canvas"></canvas>
    </div>
    <div class="vp-trend-stats">
      <div class="vp-tstat">
        <div class="vp-tstat__val">${trend[5].vol>=1000?(trend[5].vol/1000).toFixed(1)+'t':trend[5].vol+'kg'}</div>
        <div class="vp-tstat__label">Esta semana</div>
      </div>
      <div class="vp-tstat">
        <div class="vp-tstat__val">${trend[4].vol>=1000?(trend[4].vol/1000).toFixed(1)+'t':trend[4].vol+'kg'}</div>
        <div class="vp-tstat__label">Semana passada</div>
      </div>
      <div class="vp-tstat">
        <div class="vp-tstat__val">${trend.reduce((a,w)=>a+w.vol,0)>=1000?((trend.reduce((a,w)=>a+w.vol,0))/1000).toFixed(1)+'t':trend.reduce((a,w)=>a+w.vol,0)+'kg'}</div>
        <div class="vp-tstat__label">Últimas 6 sem.</div>
      </div>
    </div>
  </div>

  <!-- Highlights footer -->
  <div class="vp-highlights">
    ${musclesComplete>0?`<div class="vp-hl vp-hl--good">
      <svg viewBox="0 0 20 20" fill="none" stroke="#00c853" stroke-width="2"><circle cx="10" cy="10" r="8"/><path d="M6.5 10.5l2.5 2.5 4.5-5"/></svg>
      <span>${musclesComplete} músculo(s) com meta atingida</span>
    </div>`:''}
    ${bestSession?.workoutName?`<div class="vp-hl vp-hl--info">
      <svg viewBox="0 0 20 20" fill="none" stroke="#3c8cff" stroke-width="2"><path d="M10 2l2.5 5 5.5.8-4 3.9.95 5.5L10 14.8l-4.95 2.4.95-5.5L2 7.8l5.5-.8z"/></svg>
      <span>Melhor treino: ${bestSession.workoutName} (${bestSession.totalVolume||0}kg)</span>
    </div>`:''}
    ${worstMuscle&&(baseTotals[worstMuscle]||0)<getMuscleTarget(worstMuscle)?`<div class="vp-hl vp-hl--warn">
      <svg viewBox="0 0 20 20" fill="none" stroke="#e6a200" stroke-width="2"><path d="M10 2l8 15H2z"/><line x1="10" y1="8" x2="10" y2="12"/><circle cx="10" cy="15" r="1" fill="#e6a200"/></svg>
      <span>Atenção: ${worstMuscle} com apenas ${baseTotalsForDisplay[worstMuscle]||0} séries</span>
    </div>`:''}
  </div>
</div>`;

  // ── Wire filter pills ──
  root.querySelectorAll('[data-vwid]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      _volFilter = btn.dataset.vwid || 'todos';
      renderVolumeChart();
    });
  });
  root.querySelectorAll('[data-vcat]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      _volMuscleFilter = btn.dataset.vcat || 'todos';
      renderVolumeChart();
    });
  });
  root.querySelectorAll('[data-vtab]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      _volActiveTab = btn.dataset.vtab;
      renderVolumeChart();
    });
  });

  // ── Muscle row expand/collapse ──
  root.querySelectorAll('.vp-mrow').forEach(row=>{
    row.querySelector('.vp-mrow__main').addEventListener('click',()=>{
      const muscle = row.dataset.muscle;
      _volDetailMuscle = (_volDetailMuscle===muscle) ? null : muscle;
      renderVolumeChart();
    });
  });

  // ── Draw Chart.js bar chart ──
  if(_volActiveTab==='barras'){
    const canvas = document.getElementById('vp-bar-canvas');
    if(canvas && typeof Chart !== 'undefined'){
      const labels = visibleMuscles;
      const data   = visibleMuscles.map(m=>baseTotals[m]||0);
      const targets= visibleMuscles.map(m=>getMuscleTarget(m));
      const bgColors = data.map((v,i)=>barColor(v,targets[i]).bar);
      const borderColors = data.map((v,i)=>barColor(v,targets[i]).bar.replace(/[\d.]+\)$/,'1)'));

      _barChartInst = new Chart(canvas, {
        type:'bar',
        data:{
          labels,
          datasets:[
            {
              label:'Séries feitas',
              data,
              backgroundColor: bgColors,
              borderColor: borderColors,
              borderWidth:0,
              borderRadius:6,
              borderSkipped:false,
            },
            {
              label:'Meta',
              data: targets,
              backgroundColor:'rgba(255,255,255,0.08)',
              borderColor:'rgba(255,255,255,0.18)',
              borderWidth:1,
              borderRadius:6,
              borderSkipped:false,
              borderDash:[4,4],
              type:'bar',
            }
          ]
        },
        options:{
          responsive:true,
          maintainAspectRatio:false,
          animation:{duration:600,easing:'easeOutQuart'},
          plugins:{
            legend:{display:false},
            tooltip:{
              backgroundColor:'rgba(10,20,10,.92)',
              titleColor:'#00ff88',
              bodyColor:'#cccccc',
              borderColor:'#fff',
              borderWidth:1,
              padding:10,
              cornerRadius:8,
              callbacks:{
                label(ctx){
                  if(ctx.datasetIndex===0) return ` ${ctx.raw} séries feitas`;
                  return ` Meta: ${ctx.raw} séries`;
                }
              }
            }
          },
          scales:{
            x:{
              grid:{color:'rgba(255,255,255,.08)'},
              ticks:{color:'#a9b5af',font:{size:10,family:"'Inter',sans-serif"},maxRotation:35,minRotation:25},
            },
            y:{
              grid:{color:'rgba(255,255,255,.08)'},
              ticks:{color:'#a9b5af',font:{size:10},stepSize:2},
              beginAtZero:true,
            }
          }
        }
      });
    }
  }

  // ── Draw Chart.js line chart ──
  if(_volActiveTab==='linha'){
    const canvas = document.getElementById('vp-line-canvas');
    if(canvas && typeof Chart !== 'undefined'){
      _lineChartInst = new Chart(canvas, {
        type:'line',
        data:{
          labels: trend.map(t=>t.label),
          datasets:[{
            label:'Volume (kg)',
            data: trend.map(t=>t.vol),
            borderColor:'#00c853',
            backgroundColor:'rgba(0,200,83,.1)',
            borderWidth:2.5,
            pointBackgroundColor:'#00ff88',
            pointBorderColor:'rgba(0,200,83,.5)',
            pointRadius:5,
            pointHoverRadius:7,
            tension:0.4,
            fill:true,
          }]
        },
        options:{
          responsive:true,
          maintainAspectRatio:false,
          animation:{duration:700,easing:'easeOutQuart'},
          plugins:{
            legend:{display:false},
            tooltip:{
              backgroundColor:'rgba(10,20,10,.92)',
              titleColor:'#00ff88',
              bodyColor:'#cccccc',
              borderColor:'#fff',
              borderWidth:1,
              padding:10,
              cornerRadius:8,
            }
          },
          scales:{
            x:{grid:{display:false},ticks:{color:'#a9b5af',font:{size:11}}},
            y:{grid:{color:'rgba(255,255,255,.08)'},ticks:{color:'#a9b5af',font:{size:10}},beginAtZero:true}
          }
        }
      });
    }
  }
}
function renderHomeCards(){
  const ws=DB.getWorkouts();const el=$('#home-wcard-list');el.innerHTML='';
  ws.forEach(w=>{
    const d=document.createElement('div');d.className=`wcard ${w.colorClass}`;
    d.innerHTML=`<div class="wcard__icon">${ICONS[w.icon]||ICONS.dumbbell}</div>
      <div class="wcard__name">${w.name}</div><div class="wcard__day">${w.day}</div>
      <div class="wcard__count">${w.exercises.length} exercícios</div>`;
    d.addEventListener('click',()=>{go('start');setTimeout(()=>openWorkoutDetail(w.id),80)});
    el.appendChild(d);
  });
}

function renderHomeAchs(){
  const unlocked=DB.getAchs();const el=$('#home-ach-row');el.innerHTML='';
  ACHIEVEMENTS.slice(0,6).forEach(a=>{
    const ok=unlocked.includes(a.id);
    const d=document.createElement('div');d.className=`ach-chip ${ok?'unlocked':'locked'}`;
    d.innerHTML=`<div class="ach-chip__icon">${ICONS[a.icon]||ICONS.star}</div><div class="ach-chip__name">${a.name}</div>`;
    d.title=a.desc;el.appendChild(d);
  });
}

/* ── WORKOUTS TAB ── */
// Brings back any of the 5 default PPL workouts that are missing from
// the user's saved list (e.g. accidentally deleted) WITHOUT touching or
// duplicating workouts that are still present — only adds what's gone.
function restoreMissingWorkouts(){
  const current = DB.getWorkouts();
  const currentIds = new Set(current.map(w=>w.id));
  const missing = DEFAULT_WORKOUTS.filter(w=>!currentIds.has(w.id));
  if(missing.length===0){
    showToast('✅ Todos os treinos padrão já estão presentes.');
    return;
  }
  // Re-insert missing workouts in their original PPL order (push1, legs1,
  // pull1, push2, pull2) rather than just appending at the end.
  const merged = DEFAULT_WORKOUTS
    .filter(dw => currentIds.has(dw.id) || missing.some(m=>m.id===dw.id))
    .map(dw => current.find(c=>c.id===dw.id) || dw);
  DB.saveWorkouts(merged);
  renderWorkouts();
  renderHome();
  showToast(`✅ ${missing.length} treino(s) restaurado(s): ${missing.map(m=>m.name).join(', ')}`);
}

function renderWorkouts(){
  const ws=DB.getWorkouts();const el=$('#workout-list');el.innerHTML='';

  // "Novo Treino" — lets the user create a brand-new workout card that
  // behaves exactly like the built-in ones (can be started, edited,
  // deleted, contributes to history/stats/volume). Reuses the existing
  // edit modal (openEditModal(null)) so there's no duplicated UI.
  const newBtnWrap=document.createElement('div');
  newBtnWrap.className='new-workout-btn-wrap';
  newBtnWrap.style.cssText='margin-bottom:var(--sp-md);display:flex;justify-content:flex-end';
  newBtnWrap.innerHTML=`<button class="btn btn--primary" id="btn-new-workout" style="display:inline-flex;align-items:center;gap:6px;padding:10px 18px;font-size:var(--fs-sm);font-weight:600">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
    Novo Treino
  </button>`;
  el.appendChild(newBtnWrap);
  newBtnWrap.querySelector('#btn-new-workout').addEventListener('click',()=>openEditModal(null));

  // If any default PPL workout is missing, surface a restore banner so
  // it's obvious (and one tap) to get the full 5-day split back.
  const currentIds = new Set(ws.map(w=>w.id));
  const missingCount = DEFAULT_WORKOUTS.filter(w=>!currentIds.has(w.id)).length;
  if(missingCount>0){
    const banner=document.createElement('div');
    banner.className='restore-banner';
    banner.innerHTML=`
      <div class="restore-banner__text">
        ${ICONS.info} ${missingCount} treino(s) da rotina PPL não está(ão) na sua lista.
      </div>
      <button class="btn btn--primary" id="btn-restore-workouts" style="padding:7px 16px;font-size:var(--fs-xs)">Restaurar</button>`;
    el.appendChild(banner);
    banner.querySelector('#btn-restore-workouts').addEventListener('click', restoreMissingWorkouts);
  }

  ws.forEach(w=>{
    const block=document.createElement('div');block.className='wblock';
    block.innerHTML=`
      <div class="wblock__hdr">
        <div class="wblock__icon">${ICONS[w.icon]||ICONS.dumbbell}</div>
        <div class="wblock__info">
          <div class="wblock__name">${w.name}</div>
          <div class="wblock__day">${w.day}</div>
          <div class="wblock__cnt">${w.exercises.length} exercícios</div>
        </div>
        <button class="wblock__edit-btn" data-wid="${w.id}" title="Editar treino">${ICONS.edit}</button>
        <button class="wblock__del-btn" data-wid="${w.id}" title="Apagar treino">${ICONS.trash}</button>
        <div class="wblock__chevron">${ICONS.arrow_r}</div>
      </div>
      <div class="wblock__exlist">
        ${w.exercises.map(e=>`
          <div class="ex-row">
            <div class="ex-row__info">
              <div class="ex-row__name">${e.name}</div>
              <div class="ex-row__meta">${e.sets} séries · ${e.reps} reps · ${muscleLabel(e.muscle)}</div>
            </div>
            <button class="tip-btn" data-tip="${encodeURIComponent(e.tip)}" data-name="${encodeURIComponent(e.name)}">${ICONS.info}</button>
          </div>`).join('')}
      </div>`;
    block.querySelector('.wblock__hdr').addEventListener('click',function(e){
      if(e.target.closest('.wblock__edit-btn')||e.target.closest('.wblock__del-btn'))return;
      block.classList.toggle('expanded');
    });
    block.querySelectorAll('.tip-btn').forEach(b=>b.addEventListener('click',()=>openTip(decodeURIComponent(b.dataset.name),decodeURIComponent(b.dataset.tip))));
    block.querySelector('.wblock__edit-btn').addEventListener('click',e=>{e.stopPropagation();openEditModal(w.id)});
    // Deleting an entire workout always asks for confirmation first —
    // this removes the whole routine (every exercise inside it), so an
    // accidental tap here is far more costly than deleting one exercise.
    block.querySelector('.wblock__del-btn').addEventListener('click',e=>{
      e.stopPropagation();
      openDeleteWorkoutConfirm(w.name, ()=>{
        const wsCur=DB.getWorkouts();
        const filtered=wsCur.filter(x=>x.id!==w.id);
        DB.saveWorkouts(filtered);
        renderWorkouts();
        renderHome();
        showToast(`🗑️ Treino "${w.name}" apagado.`);
      });
    });
    el.appendChild(block);
  });
}

/* ── START SCREEN ── */
function renderStart(){
  if(S.activeWorkout){showActiveScreen();return}
  if(S.previewWorkoutId){showDetailScreen(S.previewWorkoutId);return}
  showPreStartScreen();
}

function showPreStartScreen(){
  $('#pre-start').classList.remove('hidden');
  $('#workout-detail-screen').classList.add('hidden');
  $('#active-workout-screen').classList.add('hidden');
  const ws=DB.getWorkouts();const el=$('#start-picker');el.innerHTML='';
  ws.forEach(w=>{
    const card=document.createElement('div');card.className='start-card';
    card.innerHTML=`<div class="start-card__icon">${ICONS[w.icon]||ICONS.dumbbell}</div>
      <div class="start-card__info"><div class="start-card__name">${w.name}</div>
      <div class="start-card__day">${w.day}</div><div class="start-card__cnt">${w.exercises.length} exercícios</div></div>
      <div class="start-card__arrow">${ICONS.arrow_r}</div>`;
    card.addEventListener('click',()=>openWorkoutDetail(w.id));
    el.appendChild(card);
  });
  const hist=DB.getHistory();
  if(hist.length>0){
    const qs=$('#qs-card');qs.classList.remove('hidden');
    $('#qs-name').textContent=hist[0].workoutName;
    $('#btn-quick-start').onclick=()=>openWorkoutDetail(hist[0].workoutId);
  }
}

/* ── WORKOUT DETAIL (preview) ── */
function openWorkoutDetail(wid){
  const w=DB.getWorkouts().find(x=>x.id===wid);if(!w)return;
  S.previewWorkoutId=wid;showDetailScreen(wid);
}

function showDetailScreen(wid){
  const w=DB.getWorkouts().find(x=>x.id===wid);if(!w)return;
  $('#pre-start').classList.add('hidden');
  $('#workout-detail-screen').classList.remove('hidden');
  $('#active-workout-screen').classList.add('hidden');
  $('#detail-workout-name').textContent=w.name;
  const el=$('#detail-exercise-preview');el.innerHTML='';
  // Info card
  const ic=document.createElement('div');ic.className='glass-card';ic.style='margin:var(--sp-md)';
  ic.innerHTML=`<div style="display:flex;align-items:center;gap:var(--sp-md);margin-bottom:var(--sp-md)">
    <div style="width:48px;height:48px;border-radius:50%;background:rgba(0,200,83,.08);border:1px solid rgba(0,200,83,.2);display:flex;align-items:center;justify-content:center">${ICONS[w.icon]||ICONS.dumbbell}</div>
    <div><div style="font-family:var(--ff-display);font-size:var(--fs-lg);font-weight:700;color:var(--c-accent-2)">${w.name}</div>
    <div style="font-size:var(--fs-xs);color:var(--c-text-2)">${w.day} · ${w.exercises.length} exercícios</div></div></div>
    ${w.note?`<div style="font-size:var(--fs-xs);color:var(--c-text-2);padding:var(--sp-sm);background:rgba(0,200,83,.04);border-radius:var(--r-sm);border:1px solid rgba(0,200,83,.1);line-height:1.6;color:var(--c-text-2)">${w.note}</div>`:''}`;
  el.appendChild(ic);
  w.exercises.forEach((ex,i)=>{
    const row=document.createElement('div');
    row.style='display:flex;align-items:center;padding:10px var(--sp-md);border-bottom:1px solid rgba(255,255,255,.08);background:var(--c-surface-2)';
    row.innerHTML=`<div style="width:28px;height:28px;border-radius:50%;background:rgba(0,200,83,.06);border:1px solid rgba(0,200,83,.15);display:flex;align-items:center;justify-content:center;font-size:var(--fs-xs);font-weight:700;color:var(--c-accent);margin-right:var(--sp-md);flex-shrink:0;font-family:var(--ff-mono)">${i+1}</div>
      <div style="flex:1"><div style="font-size:var(--fs-sm);font-weight:600;color:var(--c-text)">${ex.name}</div>
      <div style="font-size:var(--fs-xs);color:var(--c-text-2)">${ex.sets} séries · ${ex.reps} reps · ${muscleLabel(ex.muscle)}</div></div>
      <button class="tip-btn" data-tip="${encodeURIComponent(ex.tip)}" data-name="${encodeURIComponent(ex.name)}" style="flex-shrink:0">${ICONS.info}</button>`;
    row.querySelector('.tip-btn').addEventListener('click',b=>{const btn=b.currentTarget;openTip(decodeURIComponent(btn.dataset.name),decodeURIComponent(btn.dataset.tip))});
    el.appendChild(row);
  });
}

/* ── ACTIVE WORKOUT ── */
function beginWorkout(wid){
  const w=DB.getWorkouts().find(x=>x.id===wid);if(!w)return;
  S.activeWorkout={wid,wname:w.name,startTime:Date.now(),
    exercises:w.exercises.map(e=>({...e,series:Array.from({length:e.sets},(_,i)=>({idx:i+1,weight:'',reps:'',done:false}))})),
    rpe:null,sleep:null,notes:'',
    restEndAt:null,restTotal:0}; // restEndAt = absolute timestamp when rest finishes (survives app close)
  S.previewWorkoutId=null;S.selectedRPE=null;
  persistActiveWorkout();
  showActiveScreen();
  clearInterval(S.workoutInterval);
  S.workoutInterval=setInterval(tickWorkout,1000);
}

// Saves the entire in-progress workout (incl. rest timer absolute end-time)
// to localStorage so it survives the app/tab being closed and reopened.
function persistActiveWorkout(){
  if(!S.activeWorkout){ DB.clearActiveSession(); return; }
  DB.saveActiveSession({
    activeWorkout: S.activeWorkout,
    selectedRPE: S.selectedRPE,
    sleepVal: $('#sleep-input')?.value || '',
    notesVal: $('#session-notes')?.value || '',
  });
}

// Restores an in-progress workout on app load (e.g. after closing the app
// or device sleeping). Timer resumes from the real elapsed wall-clock time,
// and the rest timer resumes correctly using the saved absolute end-time.
function restoreActiveWorkoutIfAny(){
  const saved = DB.getActiveSession();
  if(!saved || !saved.activeWorkout) return;
  S.activeWorkout = saved.activeWorkout;
  S.selectedRPE = saved.selectedRPE || null;
  S.previewWorkoutId = null;

  go('start'); // navigate to the Iniciar tab
  showActiveScreen();

  // Restore RPE selection visually
  if(S.selectedRPE){
    const btn = $$('.rpe-btn').find(b=>parseInt(b.textContent)===S.selectedRPE);
    if(btn) btn.classList.add('selected');
  }
  if($('#sleep-input') && saved.sleepVal) $('#sleep-input').value = saved.sleepVal;
  if($('#session-notes') && saved.notesVal) $('#session-notes').value = saved.notesVal;

  clearInterval(S.workoutInterval);
  S.workoutInterval = setInterval(tickWorkout, 1000);

  // Restore rest timer using the absolute end timestamp (works even if
  // the app was fully closed — we just compute remaining = end - now).
  if(S.activeWorkout.restEndAt){
    const remaining = Math.ceil((S.activeWorkout.restEndAt - Date.now())/1000);
    if(remaining > 0){
      resumeRest(remaining, S.activeWorkout.restTotal || remaining);
    } else {
      // Rest already finished while app was closed
      S.restRemaining = 0;
      updateRestUI();
      const a=$('#rest-alert'); if(a) a.classList.remove('hidden');
    }
  }

  showToast('▶️ Treino em andamento restaurado');
}

function showActiveScreen(){
  $('#pre-start').classList.add('hidden');
  $('#workout-detail-screen').classList.add('hidden');
  $('#active-workout-screen').classList.remove('hidden');
  if(!S.activeWorkout)return;
  $('#active-workout-name').textContent=S.activeWorkout.wname;
  renderActiveExercises();renderRPE();tickWorkout();
  $('#view-start').scrollTop=0;
}

function tickWorkout(){
  if(!S.activeWorkout)return;
  const el=$('#active-timer');
  if(el)el.textContent=fmtTime(Math.floor((Date.now()-S.activeWorkout.startTime)/1000));
}

function getPreviousSeriesReference(ex){
  const history = DB.getHistory();
  const targetName=(ex.name||'').trim().toLowerCase();
  const targetId=(ex.id||'').trim();
  for(const session of history){
    const match=(session.exercises||[]).find(item=>{
      const itemName=(item.name||'').trim().toLowerCase();
      return (targetId && item.id===targetId) || (!!itemName && itemName===targetName);
    });
    if(match && match.series && match.series.length){
      // Return the previous session's series as an array positioned by the
      // ORIGINAL series index (idx). If the last session used idx to mark
      // series 1/2/3, row `si` in the current workout reads slot `si+1`.
      // Falls back to array order for legacy history without `idx`.
      const out=[];
      match.series.forEach((s,i)=>{
        const pos = (typeof s.idx === 'number' && s.idx>0) ? (s.idx-1) : i;
        out[pos] = {weight:s.weight ?? '', reps:s.reps ?? ''};
      });
      return out;
    }
  }
  return null;
}

function renderActiveExercises(){
  if(!S.activeWorkout)return;
  const el=$('#active-exercises');el.innerHTML='';
  const prs=DB.getPRs();
  S.activeWorkout.exercises.forEach((ex,ei)=>{
    const allDone=ex.series.every(s=>s.done);
    const bestRM=ex.series.filter(s=>s.done&&s.weight&&s.reps).map(s=>calc1RM(s.weight,s.reps)).sort((a,b)=>b-a)[0];
    const isPR=bestRM&&bestRM>(prs[ex.id]||0);
    const prevRef=getPreviousSeriesReference(ex);
    const progHint=getProgressionSuggestion(ex, prevRef);
    const card=document.createElement('div');
    card.className=`aec${allDone?' completed':''}`;
    card.innerHTML=`<div class="aec__hdr">
        <div class="aec__num"><span class="num-txt">${ei+1}</span>${ICONS.check}</div>
        <div class="aec__info"><div class="aec__name">${ex.name}</div><div class="aec__meta">${ex.sets} séries · ${ex.reps} reps · ${muscleLabel(ex.muscle)}</div></div>
        <button class="tip-btn" data-tip="${encodeURIComponent(ex.tip)}" data-name="${encodeURIComponent(ex.name)}">${ICONS.info}</button>
      </div>
      ${bestRM?`<div class="aec__1rm">1RM estimado: ~${bestRM}kg${isPR?' 🏆 NOVO PR!':''}</div>`:''}
      ${progHint?`<div class="aec__prog-hint" style="margin:4px 0 8px;padding:6px 10px;border-radius:8px;background:rgba(0,200,83,.10);border:1px solid rgba(0,200,83,.25);font-size:12px;color:var(--c-accent-2);display:flex;align-items:center;gap:6px">💡 <span>${progHint}</span></div>`:''}
      <div class="aec__series-hdr"><span>#</span><span>Peso (kg)</span><span>Reps</span><span>✓</span></div>
      ${ex.series.map((s,si)=>{
        // prevRef is an array of the previous session's series, indexed by
        // position. If there's no history for this exercise, or no data for
        // this specific series slot, show "—" (never fabricate a value).
        const prevAt = Array.isArray(prevRef) ? prevRef[si] : null;
        const hasPrev = !!(prevAt && (prevAt.weight !== '' || prevAt.reps !== ''));
        const refW = hasPrev ? (prevAt.weight !== '' ? `${prevAt.weight}kg` : '—') : '—';
        const refR = hasPrev ? (prevAt.reps   !== '' ? `${prevAt.reps}`     : '—') : '—';
        return `
        <div class="aec__series-row${s.done?' done':''}${!s.done && ex.series.findIndex(x=>!x.done)===si?' is-active':''}">
          <div class="s-num">${s.idx}</div>
          <div class="series-field">
            <input class="s-inp" type="number" value="${s.weight}" placeholder="—" data-ei="${ei}" data-si="${si}" data-f="weight" inputmode="decimal" step="0.5"/>
            <div class="series-ref">${refW}</div>
          </div>
          <div class="series-field">
            <input class="s-inp" type="number" value="${s.reps}" placeholder="—" data-ei="${ei}" data-si="${si}" data-f="reps" inputmode="numeric"/>
            <div class="series-ref">${refR}</div>
          </div>
          <label class="gl-checkbox">
            <input class="gl-checkbox__input" type="checkbox" ${s.done?'checked':''} data-ei="${ei}" data-si="${si}"/>
            <span class="gl-checkbox__box"><svg class="gl-checkbox__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></span>
          </label>
        </div>`;}).join('')}`;
    card.querySelector('.tip-btn').addEventListener('click',b=>{const btn=b.currentTarget;openTip(decodeURIComponent(btn.dataset.name),decodeURIComponent(btn.dataset.tip))});
    const syncSeriesRefs = (inp)=>{
      const ref=inp.closest('.series-field')?.querySelector('.series-ref');
      if(ref) ref.classList.toggle('hidden', inp.value.trim() !== '');
    };
    card.querySelectorAll('.s-inp').forEach(inp=>{
      syncSeriesRefs(inp);
      inp.addEventListener('input',()=>{
        syncSeriesRefs(inp);
        S.activeWorkout.exercises[+inp.dataset.ei].series[+inp.dataset.si][inp.dataset.f]=inp.value;
        updateProgress();persistActiveWorkout();
      });
      inp.addEventListener('change',()=>{
        S.activeWorkout.exercises[+inp.dataset.ei].series[+inp.dataset.si][inp.dataset.f]=inp.value;
        updateProgress();renderActiveExercises();persistActiveWorkout();
      });
    });
    card.querySelectorAll('.gl-checkbox__input').forEach(chk=>{
      chk.addEventListener('change',()=>{
        const ei2=+chk.dataset.ei,si2=+chk.dataset.si;
        const exercise=S.activeWorkout.exercises[ei2];
        exercise.series[si2].done=chk.checked;
        if(chk.checked){
          // Regra: NÃO reordenar séries. Manter ordem fixa da lista.
          // Apenas atualizar estado (done) — o "is-active" salta para a próxima pendente
          // seguindo a ordem original via findIndex em renderActiveExercises().
        }
        renderActiveExercises();updateProgress();persistActiveWorkout();
        if(chk.checked)startRest(90);
      });
    });

    el.appendChild(card);
  });
  updateProgress();
}

function updateProgress(){
  if(!S.activeWorkout)return;
  const exs=S.activeWorkout.exercises;
  const total=exs.reduce((a,e)=>a+e.series.length,0);
  const done=exs.reduce((a,e)=>a+e.series.filter(s=>s.done).length,0);
  const pct=total>0?(done/total)*100:0;
  $('#progress-track')?.style.setProperty('--p',`${pct}%`);
  const pl=$('#progress-lbl');if(pl)pl.textContent=`${done} / ${total}`;
}

function renderRPE(){
  const el=$('#rpe-selector');if(!el)return;el.innerHTML='';
  for(let i=1;i<=10;i++){
    const b=document.createElement('button');b.className='rpe-btn';b.textContent=i;
    b.addEventListener('click',()=>{S.selectedRPE=i;$$('.rpe-btn').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');persistActiveWorkout()});
    el.appendChild(b);
  }
}

function finishWorkout(){
  if(!S.activeWorkout)return;
  clearInterval(S.workoutInterval);clearInterval(S.restInterval);
  const elapsed=Math.floor((Date.now()-S.activeWorkout.startTime)/1000);
  const exs=S.activeWorkout.exercises;
  let totalVol=0;const newPRs=[];const prs=DB.getPRs();
  exs.forEach(ex=>{
    ex.series.filter(s=>s.done).forEach(s=>{
      const w=parseFloat(s.weight)||0,r=parseInt(s.reps)||0;totalVol+=w*r;
      const oneRM=calc1RM(w,r);
      if(oneRM>(prs[ex.id]||0)){prs[ex.id]=oneRM;newPRs.push(`${ex.name}: ~${oneRM}kg`)}
    });
  });
  DB.savePRs(prs);
  const session={id:Date.now().toString(),workoutId:S.activeWorkout.wid,workoutName:S.activeWorkout.wname,
    date:today(),duration:elapsed,totalVolume:Math.round(totalVol),
    setsCompleted:exs.reduce((a,e)=>a+e.series.filter(s=>s.done).length,0),
    // Persist each completed series with its original position (idx) so the
    // "Preview Anterior" can line up each row with the same slot in the
    // previous session — never showing a value from a different series.
    exercises:exs.map(e=>({id:e.id,name:e.name,muscle:getExerciseMuscles(e.muscle),series:e.series.filter(s=>s.done).map(s=>({idx:s.idx,weight:s.weight,reps:s.reps}))})),
    rpe:S.selectedRPE,sleep:parseFloat($('#sleep-input')?.value)||null,notes:$('#session-notes')?.value||'',prs:newPRs};
  const hist=DB.getHistory();hist.unshift(session);DB.saveHistory(hist);
  const stats=DB.getStats();
  stats.totalWorkouts=(stats.totalWorkouts||0)+1;
  stats.totalVolumeKg=(stats.totalVolumeKg||0)+Math.round(totalVol);
  stats.totalPRs=(stats.totalPRs||0)+newPRs.length;
  if(!stats.firstWorkoutDate)stats.firstWorkoutDate=today();
  DB.saveStats(stats);
  addXP(50+newPRs.length*20);updateStreak();checkAchs();
  openFinishModal(session,newPRs);
  S.activeWorkout=null;S.previewWorkoutId=null;S.selectedRPE=null;
  DB.clearActiveSession(); // workout is done — nothing left to restore
  // Auto-close: fecha o modal e volta para a tela de treinos automaticamente.
  setTimeout(()=>{
    const m=$('#modal-finish'); if(m) m.classList.add('hidden');
    showPreStartScreen();
    go('workouts');
  }, 2500);
}

// Verifica se há pelo menos 1 série marcada como feita em todo o treino.
// Sem isso, não faz sentido finalizar (nada foi registrado).
function hasAnyCompletedSeries(){
  if(!S.activeWorkout) return false;
  return S.activeWorkout.exercises.some(ex=>ex.series.some(s=>s.done));
}

// Lista tudo que falta preencher antes de poder finalizar o treino:
// pelo menos 1 série feita + as Métricas da Sessão (RPE, Sono, Anotações),
// que agora são obrigatórias.
function getMissingRequiredFields(){
  const missing=[];
  if(!hasAnyCompletedSeries()) missing.push('pelo menos 1 série feita');
  if(!S.selectedRPE) missing.push('RPE');
  const sleepVal=$('#sleep-input')?.value;
  if(!sleepVal || sleepVal.trim()==='') missing.push('Sono');
  const notesVal=$('#session-notes')?.value;
  if(!notesVal || notesVal.trim()==='') missing.push('Anotações');
  return missing;
}

// Clique em "Finalizar": valida campos obrigatórios antes de sequer
// perguntar a confirmação. Se estiver tudo ok, pede confirmação;
// só chama finishWorkout() de fato se o usuário confirmar.
function handleFinishClick(){
  if(!S.activeWorkout) return;
  const missing=getMissingRequiredFields();
  if(missing.length){
    showToast('⚠️ Preencha antes de finalizar: '+missing.join(', ')+'.');
    return;
  }
  $('#modal-finish-confirm').classList.remove('hidden');
}

function cancelWorkout(){
  $('#modal-cancel-confirm').classList.remove('hidden');
}
function doCancel(){
  clearInterval(S.workoutInterval);clearInterval(S.restInterval);
  S.activeWorkout=null;S.previewWorkoutId=null;
  DB.clearActiveSession(); // user explicitly chose not to count this session
  $('#modal-cancel-confirm').classList.add('hidden');
  showPreStartScreen();
}

/* ── GENERIC DELETE CONFIRMATION ──
   Opens a yes/no confirmation modal before any destructive delete action
   (single exercise, whole workout, etc). The actual deletion only runs
   if the user explicitly taps "Sim, apagar" — protects against losing
   data from an accidental tap on a trash icon. */
let _pendingDeleteAction = null;

function openDeleteConfirm(message, onConfirm){
  $('#delete-confirm-text').textContent = message;
  _pendingDeleteAction = onConfirm;
  $('#modal-delete-confirm').classList.remove('hidden');
}

function openDeleteExerciseConfirm(exerciseName, onConfirm){
  openDeleteConfirm(`Tem certeza que deseja apagar "${exerciseName}"? Esta ação não pode ser desfeita.`, onConfirm);
}

function openDeleteWorkoutConfirm(workoutName, onConfirm){
  openDeleteConfirm(`Tem certeza que deseja apagar o treino "${workoutName}" inteiro? Todos os exercícios dele serão perdidos. Esta ação não pode ser desfeita.`, onConfirm);
}

function openDeleteHistoryConfirm(session, onConfirm){
  openDeleteConfirm(`Tem certeza que deseja apagar o registro de "${session.workoutName}" de ${fmtDate(session.date)}? Esta ação não pode ser desfeita.`, onConfirm);
}

/* ── REST TIMER ── */
// ── REST TIMER — uses an ABSOLUTE end timestamp (restEndAt) instead of
// just decrementing a counter. This is what allows the countdown to stay
// accurate even if the phone screen turns off, the browser tab is
// suspended, or the app is fully closed and reopened later: we always
// recompute "remaining = restEndAt - Date.now()" rather than trusting
// a setInterval that may have been paused by the OS.
function startRest(secs){
  clearInterval(S.restInterval);
  const endAt = Date.now() + secs*1000;
  S.restRemaining = secs;
  S.restTotal = secs;
  S.restRunning = true;
  if(S.activeWorkout){ S.activeWorkout.restEndAt = endAt; S.activeWorkout.restTotal = secs; persistActiveWorkout(); }
  $('#rest-alert')?.classList.add('hidden');
  updateRestUI();setRestPlayIcon(true);
  tickRest(); // immediate sync, then every second
  S.restInterval=setInterval(tickRest,1000);
}

// Resumes a rest timer that was already running before the app was
// closed/reopened. `remaining` and `total` come from the persisted
// absolute end-time, so the countdown picks up exactly where it should.
function resumeRest(remaining, total){
  clearInterval(S.restInterval);
  S.restRemaining = remaining;
  S.restTotal = total;
  S.restRunning = true;
  updateRestUI();setRestPlayIcon(true);
  S.restInterval=setInterval(tickRest,1000);
}

// Single tick: always recompute remaining from the absolute end-time
// when one is set (active workout), falling back to plain decrement
// otherwise (manual pause state still uses restRemaining directly).
function tickRest(){
  if(!S.restRunning)return;
  if(S.activeWorkout && S.activeWorkout.restEndAt){
    S.restRemaining = Math.max(0, Math.ceil((S.activeWorkout.restEndAt - Date.now())/1000));
  } else {
    S.restRemaining--;
  }
  updateRestUI();
  if(S.restRemaining<=0){
    clearInterval(S.restInterval);S.restRunning=false;setRestPlayIcon(false);
    if(S.activeWorkout){ S.activeWorkout.restEndAt=null; persistActiveWorkout(); }
    const a=$('#rest-alert');if(a){a.classList.remove('hidden');a.classList.add('neon-pulse');setTimeout(()=>a.classList.remove('neon-pulse'),3000)}
  }
}

function updateRestUI(){
  const d=$('#rest-display');if(!d)return;
  d.textContent=fmtTime(S.restRemaining);
  d.classList.toggle('urgent',S.restRemaining>0&&S.restRemaining<=10);
  const total = S.restTotal || Math.max(S.restRemaining, 1);
  const pct = total > 0 ? Math.max(0, Math.min(100, ((total - S.restRemaining) / total) * 100)) : 0;
  const ring=$('#rest-float-ring');
  if(ring) ring.style.setProperty('--progress', pct.toFixed(2));
  const btn=$('#rest-float-btn');
  if(btn) btn.classList.toggle('active', S.restRemaining > 0 && S.restRunning);
  const panel=$('#rest-float-panel');
  if(panel && !panel.classList.contains('hidden') && S.restRemaining<=0){ panel.classList.add('is-done'); setTimeout(()=>panel.classList.remove('is-done'), 1400); }
}
function setRestPlayIcon(running){
  S.restRunning=running;
  $('#rest-play-icon')?.classList.toggle('hidden',running);
  $('#rest-pause-icon')?.classList.toggle('hidden',!running);
  const lb=$('#rest-btn-lbl');if(lb)lb.textContent=running?'Pause':'Play';
  const panel=$('#rest-float-panel');
  if(panel && !panel.classList.contains('hidden')) panel.classList.toggle('is-running', running);
}

function toggleRestPanel(force){
  const panel=$('#rest-float-panel');
  if(!panel)return;
  const shouldOpen = typeof force === 'boolean' ? force : panel.classList.contains('hidden');
  panel.classList.toggle('hidden', !shouldOpen);
  if(shouldOpen) panel.classList.remove('is-done');
}

/* ── HISTORY ── */
function renderHistory(filter){
  const hist=DB.getHistory();const el=$('#history-list');el.innerHTML='';
  $$('.ftab').forEach(t=>t.classList.toggle('active',t.dataset.f===filter));
  const filtered=filter==='all'?hist:hist.filter(h=>h.workoutName?.toLowerCase().includes(filter.toLowerCase()));
  const ws=DB.getWorkouts();
  if(!filtered.length){
    el.innerHTML=`<div class="empty-state"><div class="empty-state__icon">${ICONS.dumbbell}</div><div class="empty-state__text">Nenhum treino ainda.<br>Inicie seu primeiro treino!</div></div>`;return;
  }
  filtered.forEach(h=>{
    const w=ws.find(x=>x.id===h.workoutId);
    const card=document.createElement('div');card.className='hist-card';
    card.innerHTML=`<div class="hist-card__hdr">
        <div class="hist-card__icon">${ICONS[w?.icon||'dumbbell']||ICONS.dumbbell}</div>
        <div class="hist-card__info"><div class="hist-card__name">${h.workoutName}</div><div class="hist-card__date">${fmtDate(h.date)}</div></div>
        ${h.prs?.length?`<span class="section-badge">${ICONS.trophy} PR</span>`:''}
        <button class="wblock__del-btn" data-hid="${h.id}" title="Apagar registro">${ICONS.trash}</button>
      </div>
      <div class="hist-card__stats">
        <div class="hstat"><div class="hstat__val">${fmtTime(h.duration)}</div><div class="hstat__lbl">Duração</div></div>
        <div class="hstat"><div class="hstat__val">${h.totalVolume||0}kg</div><div class="hstat__lbl">Volume</div></div>
        <div class="hstat"><div class="hstat__val">${h.setsCompleted||0}</div><div class="hstat__lbl">Séries</div></div>
        ${h.rpe?`<div class="hstat"><div class="hstat__val">RPE ${h.rpe}</div><div class="hstat__lbl">Esforço</div></div>`:''}
      </div>`;
    card.addEventListener('click',()=>openHistDetail(h));
    // Apaga só esta sessão (diferente de "Apagar Histórico", que zera tudo).
    // stopPropagation evita que o clique no lixeira também abra o modal de detalhe.
    card.querySelector('.wblock__del-btn').addEventListener('click',e=>{
      e.stopPropagation();
      openDeleteHistoryConfirm(h,()=>{
        DB.saveHistory(DB.getHistory().filter(x=>x.id!==h.id));
        // Reverte só o que esta sessão específica somou (mesmos campos que
        // finishWorkout() incrementa), sem mexer em streak/PRs/conquistas.
        const stats=DB.getStats();
        stats.totalWorkouts=Math.max(0,(stats.totalWorkouts||0)-1);
        stats.totalVolumeKg=Math.max(0,(stats.totalVolumeKg||0)-(h.totalVolume||0));
        stats.totalPRs=Math.max(0,(stats.totalPRs||0)-(h.prs?.length||0));
        stats.xp=Math.max(0,(stats.xp||0)-(50+(h.prs?.length||0)*20));
        DB.saveStats(stats);
        renderHistory($('.ftab.active')?.dataset.f||'all');
        renderHome();
        showToast(`🗑️ Registro de "${h.workoutName}" apagado.`);
      });
    });
    el.appendChild(card);
  });
}

/* ── MORE TAB ── */
function renderMore(){renderWeightChart();renderPhotos();renderNotes();renderAllAchs();renderMonthCompare();}

function switchSubTab(tab){
  // Remove both 'active' and 'hidden' from all panels so CSS .subtab-panel{display:none} takes over
  $$('.subtab-panel').forEach(p=>{p.classList.remove('active');p.classList.remove('hidden')});
  $$('.stab').forEach(b=>b.classList.remove('active'));
  const panel=$(`#panel-${tab}`);
  if(panel){panel.classList.add('active');panel.classList.remove('hidden')}
  $(`.stab[data-tab="${tab}"]`)?.classList.add('active');
  // Re-render panel content when switching
  if(tab==='bio'){renderWeightChart();renderPhotos()}
  else if(tab==='notes'){renderNotes()}
  else if(tab==='ach'){renderAllAchs()}
}

function renderWeightChart(){
  const canvas=$('#weight-chart');if(!canvas)return;
  const ctx=canvas.getContext('2d');const weights=DB.getWeights();
  if(weights.length<2){
    canvas.width=canvas.offsetWidth||320;ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle='rgba(232,238,255,0.2)';ctx.font='13px Inter';ctx.textAlign='center';
    ctx.fillText('Registre ao menos 2 pesos para o gráfico.',canvas.width/2,canvas.height/2);
    renderWeightGoals();
    return;
  }
  const recent=weights.slice(-12);
  drawLine(ctx,canvas,recent.map(w=>w.weight),recent.map(w=>w.date.slice(5)));
  renderWeightGoals();
}

// Mostra as metas de peso corporal (criadas/editadas no Editor de Metas)
// logo abaixo do gráfico de peso, com o progresso em relação ao último
// peso registrado — sem presumir se a meta é de ganho ou perda de peso,
// apenas a diferença restante até o alvo.
function renderWeightGoals(){
  const el=$('#weight-goals-list');if(!el)return;
  const goals=DB.getWeightGoals();
  if(!goals.length){el.innerHTML='';return}
  const weights=DB.getWeights();
  const current = weights.length ? weights[weights.length-1].weight : null;
  el.innerHTML=`
    <div style="margin-top:var(--sp-md);padding-top:var(--sp-md);border-top:1px solid var(--c-border)">
      <div class="edit-days-title" style="margin-bottom:8px">Metas de Peso</div>
      ${goals.map(g=>{
        const label=(g.label&&g.label.trim())?g.label.trim():'Meta';
        let status;
        if(current==null){
          status='<span style="color:var(--c-text-3)">Registre seu peso para ver o progresso</span>';
        }else{
          const diff=+(Math.abs(current-g.target)).toFixed(1);
          status = diff<0.5
            ? '<span style="color:var(--c-success);font-weight:700">✅ Meta atingida</span>'
            : `<span style="color:var(--c-text-2)">Atual ${current}kg · faltam ${diff}kg</span>`;
        }
        return `<div style="display:flex;align-items:center;justify-content:space-between;gap:var(--sp-sm);padding:8px 0;border-bottom:1px solid var(--c-border)">
          <div>
            <div style="font-weight:600;font-size:var(--fs-sm)">${label}</div>
            <div style="font-size:var(--fs-xs);color:var(--c-text-3)">Meta: ${g.target}kg</div>
          </div>
          <div style="font-size:var(--fs-xs);text-align:right">${status}</div>
        </div>`;
      }).join('')}
    </div>`;
}

function drawLine(ctx,canvas,data,labels){
  const W=canvas.offsetWidth||320,H=canvas.height;canvas.width=W;ctx.clearRect(0,0,W,H);
  const minV=Math.min(...data)-2,maxV=Math.max(...data)+2,range=maxV-minV||1;
  const pad={t:12,b:28,l:40,r:12},cW=W-pad.l-pad.r,cH=H-pad.t-pad.b;
  const step=data.length>1?cW/(data.length-1):cW;
  const pts=data.map((v,i)=>({x:pad.l+i*step,y:pad.t+cH-((v-minV)/range)*cH}));
  ctx.strokeStyle='rgba(232,238,255,0.05)';ctx.lineWidth=1;
  for(let i=0;i<=4;i++){const y=pad.t+(cH/4)*i;ctx.beginPath();ctx.moveTo(pad.l,y);ctx.lineTo(W-pad.r,y);ctx.stroke()}
  const g=ctx.createLinearGradient(0,pad.t,0,H-pad.b);
  g.addColorStop(0,'rgba(232,238,255,0.15)');g.addColorStop(1,'rgba(232,238,255,0)');
  ctx.beginPath();ctx.moveTo(pts[0].x,H-pad.b);pts.forEach(p=>ctx.lineTo(p.x,p.y));ctx.lineTo(pts[pts.length-1].x,H-pad.b);
  ctx.closePath();ctx.fillStyle=g;ctx.fill();
  ctx.strokeStyle='rgba(232,238,255,0.8)';ctx.lineWidth=2;ctx.lineJoin='round';
  ctx.shadowBlur=6;ctx.shadowColor='rgba(232,238,255,0.4)';
  ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.stroke();ctx.shadowBlur=0;
  pts.forEach((p,i)=>{
    ctx.beginPath();ctx.arc(p.x,p.y,4,0,Math.PI*2);ctx.fillStyle='rgba(232,238,255,0.9)';ctx.fill();
    ctx.fillStyle='rgba(232,238,255,0.25)';ctx.font='9px Inter';ctx.textAlign='center';ctx.fillText(labels[i],p.x,H-8);
  });
  ctx.fillStyle='rgba(232,238,255,0.25)';ctx.font='10px Inter';ctx.textAlign='right';
  for(let i=0;i<=4;i++){const v=minV+(range/4)*(4-i);ctx.fillText(v.toFixed(1),pad.l-4,pad.t+(cH/4)*i+4)}
}

function renderPhotos(){
  const photos=DB.getPhotos();const el=$('#photos-grid');if(!el)return;el.innerHTML='';
  photos.forEach((p,i)=>{
    const d=document.createElement('div');d.className='photo-thumb';
    d.innerHTML=`<img src="${p.data}" loading="lazy"/>
      <div class="photo-thumb__date">${fmtDate(p.date)}</div>
      <button class="photo-thumb__del">${ICONS.x}</button>`;
    d.querySelector('.photo-thumb__del').addEventListener('click',()=>{
      if(!confirm('Remover foto?'))return;const ph=DB.getPhotos();ph.splice(i,1);DB.savePhotos(ph);renderPhotos();
    });
    el.appendChild(d);
  });
}

function renderNotes(){
  const notes=DB.getNotes();const el=$('#notes-list');if(!el)return;el.innerHTML='';
  if(!notes.length){el.innerHTML=`<div class="empty-state"><div class="empty-state__icon">${ICONS.note}</div><div class="empty-state__text">Nenhuma anotação ainda.</div></div>`;return}
  notes.forEach((n,i)=>{
    const card=document.createElement('div');card.className='note-card';
    card.innerHTML=`<div class="note-card__hdr">
        <span class="note-card__date">${fmtDate(n.date)}</span>
        <button class="note-card__del">${ICONS.trash}</button>
      </div><div class="note-card__text">${n.text}</div>`;
    card.querySelector('.note-card__del').addEventListener('click',()=>{const ns=DB.getNotes();ns.splice(i,1);DB.saveNotes(ns);renderNotes()});
    el.appendChild(card);
  });
}

function renderAllAchs(){
  const unlocked=DB.getAchs();const el=$('#all-ach-list');if(!el)return;el.innerHTML='';
  const cats={inicio:'Início',volume:'Frequência',streak:'Sequência',evolucao:'Evolução',consistencia:'Consistência',tempo:'Metas de Tempo'};
  const byCat={};
  ACHIEVEMENTS.forEach(a=>{if(!byCat[a.cat])byCat[a.cat]=[];byCat[a.cat].push(a)});
  Object.entries(cats).forEach(([cat,label])=>{
    if(!byCat[cat])return;
    const sec=document.createElement('div');sec.className='ach-cat-section';
    sec.innerHTML=`<div class="ach-cat-title">${label}</div>`;
    byCat[cat].forEach(a=>{
      const ok=unlocked.includes(a.id);
      const card=document.createElement('div');card.className=`ach-full ${ok?'unlocked':'locked'}`;
      card.innerHTML=`<div class="ach-full__icon">${ICONS[a.icon]||ICONS.star}</div>
        <div><div class="ach-full__name">${a.name}</div><div class="ach-full__desc">${a.desc}</div></div>
        <div class="ach-full__status">${ok?'✅':'🔒'}</div>`;
      sec.appendChild(card);
    });
    el.appendChild(sec);
  });
}

/* ── ACHIEVEMENTS CHECK ── */
function checkAchs(){
  const stats=DB.getStats();const unlocked=DB.getAchs();const newOnes=[];
  ACHIEVEMENTS.forEach(a=>{if(!unlocked.includes(a.id)&&a.cond(stats)){unlocked.push(a.id);newOnes.push(a)}});
  if(newOnes.length){DB.saveAchs(unlocked);setTimeout(()=>openAchPopup(newOnes[0]),900)}
}

/* ── SCHEDULE EDITOR ── */
function openScheduleEditor(){
  const schedule=DB.getSchedule();
  const ws=DB.getWorkouts();
  const dayNames=['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
  const body=$('#schedule-editor-body');
  body.innerHTML=`<p style="font-size:var(--fs-sm);color:var(--c-text-2);margin-bottom:var(--sp-md)">Defina o treino para cada dia da semana. Deixe "Descanso" para dias livres.</p>
    ${[0,1,2,3,4,5,6].map(day=>`
      <div style="display:flex;align-items:center;gap:var(--sp-md);margin-bottom:var(--sp-sm)">
        <span style="font-weight:700;font-family:var(--ff-mono);color:var(--c-accent-2);width:32px">${dayNames[day]}</span>
        <select class="schedule-select meta-inp" data-day="${day}" style="flex:1;cursor:pointer">
          <option value="">😴 Descanso</option>
          ${ws.map(w=>`<option value="${w.id}" ${schedule[day]===w.id?'selected':''}>${w.name}</option>`).join('')}
        </select>
      </div>`).join('')}`;
  $('#modal-schedule').classList.remove('hidden');
}

function saveSchedule(){
  const schedule={};
  $$('.schedule-select').forEach(sel=>{
    schedule[sel.dataset.day]=sel.value||null;
  });
  DB.saveSchedule(schedule);
  $('#modal-schedule').classList.add('hidden');
  renderHome();showToast('✅ Programação salva!');
}

/* ── EDITOR DE METAS (Volume Semanal por grupo muscular + Peso Corporal) ──
   Editor unificado, acessível pelo ícone de lápis no card "Volume Semanal"
   e pelo ícone de lápis no card "Peso Corporal" (aba Biometria). Permite
   adicionar, renomear, alterar a meta e excluir qualquer grupo muscular,
   além de criar, editar e excluir metas de peso corporal — tudo salvo de
   uma vez só pelo botão "Salvar Metas". */
let _metaDraft = null; // {volume:[{name,target}], weight:[{id,label,target}]}

function openMetaEditor(){
  _metaDraft = {
    volume: DB.getVolumeGoals().map(g=>({...g})),
    weight: DB.getWeightGoals().map(g=>({...g})),
  };
  renderMetaEditorBody();
  $('#modal-meta-vol').classList.remove('hidden');
}

function renderMetaEditorBody(){
  const body=$('#meta-vol-body');if(!body||!_metaDraft)return;
  const {volume,weight}=_metaDraft;
  const esc=(s)=>(s||'').toString().replace(/"/g,'&quot;');
  body.innerHTML=`
    <p style="font-size:var(--fs-sm);color:var(--c-text-2);margin-bottom:var(--sp-md)">Gerencie todas as suas metas: séries semanais por grupo muscular e metas de peso corporal. Adicione, renomeie ou exclua quantas quiser.</p>

    <div class="edit-days-header">
      <div class="edit-days-title">Volume Semanal (séries por grupo muscular)</div>
      <button class="btn" type="button" id="btn-add-vol-goal" style="padding:6px 10px;font-size:11px">+ Novo Grupo</button>
    </div>
    <div id="meta-vol-list">
      ${volume.length ? volume.map((g,i)=>`
        <div class="edit-day-row" data-vol-idx="${i}">
          <input class="ppl-input goal-vol-name" type="text" value="${esc(g.name)}" placeholder="Nome do grupo muscular" data-idx="${i}" style="flex:2"/>
          <input class="ppl-input goal-vol-target" type="number" min="1" max="99" step="1" value="${g.target}" data-idx="${i}" style="width:64px;text-align:center;flex:none"/>
          <button class="edit-day-del goal-vol-del" data-idx="${i}" title="Remover meta">${ICONS.trash}</button>
        </div>`).join('') : '<div class="edit-day-empty">Nenhuma meta de volume. Adicione uma acima.</div>'}
    </div>

    <div class="edit-days-header" style="margin-top:var(--sp-lg)">
      <div class="edit-days-title">Metas de Peso Corporal</div>
      <button class="btn" type="button" id="btn-add-weight-goal" style="padding:6px 10px;font-size:11px">+ Nova Meta</button>
    </div>
    <div id="meta-weight-list">
      ${weight.length ? weight.map((g,i)=>`
        <div class="edit-day-row" data-weight-idx="${i}">
          <input class="ppl-input goal-weight-name" type="text" value="${esc(g.label)}" placeholder="Nome (ex: Meta de Verão)" data-idx="${i}" style="flex:2"/>
          <input class="ppl-input goal-weight-target" type="number" min="1" max="500" step="0.1" value="${g.target}" data-idx="${i}" style="width:72px;text-align:center;flex:none"/>
          <span style="font-size:var(--fs-xs);color:var(--c-text-2);flex:none">kg</span>
          <button class="edit-day-del goal-weight-del" data-idx="${i}" title="Remover meta">${ICONS.trash}</button>
        </div>`).join('') : '<div class="edit-day-empty">Nenhuma meta de peso ainda. Adicione uma acima.</div>'}
    </div>`;
}

// Lê os valores atualmente digitados nas linhas do editor (nome/meta) e
// grava de volta no _metaDraft, sem perder o que o usuário já digitou,
// antes de qualquer operação que force um re-render (adicionar/excluir
// uma linha) — mesmo padrão já usado no editor de treino/exercícios.
function syncMetaDraftFromDOM(){
  if(!_metaDraft) return;
  $$('.goal-vol-name').forEach(inp=>{
    const idx=parseInt(inp.dataset.idx,10);
    if(_metaDraft.volume[idx]) _metaDraft.volume[idx].name=inp.value;
  });
  $$('.goal-vol-target').forEach(inp=>{
    const idx=parseInt(inp.dataset.idx,10);
    if(_metaDraft.volume[idx]) _metaDraft.volume[idx].target=inp.value;
  });
  $$('.goal-weight-name').forEach(inp=>{
    const idx=parseInt(inp.dataset.idx,10);
    if(_metaDraft.weight[idx]) _metaDraft.weight[idx].label=inp.value;
  });
  $$('.goal-weight-target').forEach(inp=>{
    const idx=parseInt(inp.dataset.idx,10);
    if(_metaDraft.weight[idx]) _metaDraft.weight[idx].target=inp.value;
  });
}

function saveMetaEditor(){
  syncMetaDraftFromDOM();

  // Metas de Volume Semanal: descarta linhas sem nome, garante meta
  // dentro de 1–99 séries, e funde duplicatas (o último valor digitado
  // para o mesmo nome prevalece).
  const volMap={};
  (_metaDraft?.volume||[]).forEach(g=>{
    const name=(g.name||'').toString().trim();
    if(!name) return;
    const n=Math.max(1,Math.min(99,parseInt(g.target)||10));
    volMap[name]=n;
  });
  const volumeGoals=Object.entries(volMap).map(([name,target])=>({name,target}));
  DB.saveVolumeGoals(volumeGoals);

  // Metas de Peso Corporal: mantém apenas linhas com um valor de peso
  // válido; nome é opcional (a exibição usa "Meta" como padrão).
  const weightGoals=[];
  (_metaDraft?.weight||[]).forEach((g,i)=>{
    const target=parseFloat(g.target);
    if(!target||target<=0) return;
    weightGoals.push({
      id: g.id || `wg_${Date.now()}_${i}`,
      label: (g.label||'').toString().trim(),
      target: Math.max(1,Math.min(500,target)),
    });
  });
  DB.saveWeightGoals(weightGoals);

  _metaDraft=null;
  $('#modal-meta-vol').classList.add('hidden');
  renderHome();
  renderWeightGoals();
  showToast('✅ Metas atualizadas!');
}

/* ── MODALS ── */
function openTip(name,tip){$('#tip-title').textContent=name;$('#tip-body').textContent=tip;$('#modal-tip').classList.remove('hidden')}

function persistEditingWorkoutToStore(){
  const wsCur=DB.getWorkouts();
  const existing=wsCur.find(x=>x.id===S.editingWid);
  if(existing && S.editingWorkout){
    Object.assign(existing, S.editingWorkout);
  } else if(S.editingWorkout){
    wsCur.push(S.editingWorkout);
  }
  DB.saveWorkouts(wsCur);
  return wsCur;
}

function openEditModal(wid){
  const ws=DB.getWorkouts();
  let w;
  if(wid){
    w=ws.find(x=>x.id===wid) || {id:wid,name:'Novo treino',day:'',icon:'dumbbell',colorClass:'push',note:'',exercises:[]};
    S.editingMode='edit';
    S.editingWid=wid;
  } else {
    w={id:`custom_${Date.now()}`,name:'Novo treino',day:'',icon:'dumbbell',colorClass:'push',note:'',exercises:[]};
    S.editingMode='new';
    S.editingWid=w.id;
  }
  if(!Array.isArray(w.days)){
    const dayValues = (w.day || '').toString().trim();
    w.days = dayValues ? [dayValues] : [];
  }
  S.editingWorkout=w;
  S.expandedExIdx=null; // tracks which exercise row is currently expanded for editing
  $('#edit-modal-title').textContent=S.editingMode==='new' ? 'Novo treino' : `Editar: ${w.name}`;
  renderEditModalBody(w);
  $('#modal-edit').classList.remove('hidden');
}

function normalizeWorkoutDays(workout){
  if(!workout) return [];
  if(Array.isArray(workout.days)) return workout.days.map(d=>(d||'').toString().trim()).filter(Boolean);
  const single=(workout.day||'').toString().trim();
  return single ? [single] : [];
}

function getWorkoutDayLabel(workout){
  const days=normalizeWorkoutDays(workout);
  return days[0] || (workout?.day||'').toString().trim() || '';
}

function commitWorkoutDayEdits(workout){
  if(!workout) return;
  const rows=Array.from($('#edit-days-list')?.querySelectorAll('.edit-day-row') || []);
  const values=rows.map(row=>row.querySelector('.edit-day-inp')?.value?.trim()||'').filter(Boolean);
  workout.days=values;
  workout.day=values[0]||'';
}

// Renders the edit modal: workout name + a COMPACT, mobile-friendly
// exercise list. Each exercise is collapsed to a single short row by
// default (name + ▲▼ reorder buttons + apagar). Tapping a row expands
// it in place to reveal the séries/reps/dica fields — this avoids the
// long, hard-to-scroll vertical list that plagued the old drag version
// on small phone screens, since only one exercise is "open" at a time.
function renderEditModalBody(w){
  const workout = S.editingWorkout || w;
  const body=$('#edit-modal-body');
  const days=normalizeWorkoutDays(workout);
  body.innerHTML=`
    <input class="ppl-input edit-wname" id="edit-wname-inp" value="${workout.name}" placeholder="Nome do treino"/>
    <input class="ppl-input edit-wname" id="edit-wday-inp" value="${getWorkoutDayLabel(workout)}" placeholder="Nome do dia (ex.: Segunda-feira)"/>
    <textarea class="ppl-input meta-textarea" id="edit-wnote-inp" placeholder="Observações do treino" style="min-height:70px;margin-bottom:var(--sp-md)">${workout.note||''}</textarea>
    <div class="edit-days-section">
      <div class="edit-days-header">
        <div class="edit-days-title">Dias do treino</div>
        <button class="btn" type="button" id="btn-add-day" style="padding:6px 10px;font-size:11px">+ Novo Dia de Treino</button>
      </div>
      <div id="edit-days-list">
        ${days.length ? days.map((day,i)=>`
          <div class="edit-day-row" data-day-idx="${i}">
            <button class="reorder-btn" data-day-move="up" data-day-idx="${i}" ${i===0?'disabled':''} title="Mover para cima">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
            </button>
            <input class="ppl-input edit-day-inp" type="text" value="${day}" data-day-idx="${i}" placeholder="Nome do dia"/>
            <button class="edit-day-del" data-day-del="${i}" title="Remover dia">${ICONS.trash}</button>
          </div>`).join('') : '<div class="edit-day-empty">Adicione um dia para o treino.</div>'}
      </div>
    </div>
    <p class="edit-hint">${ICONS.info} Use <strong>▲ ▼</strong> para reordenar. Toque no card para editar séries, reps, peso, descanso, grupo muscular e dica.</p>
    <div id="edit-ex-list">
      ${(workout.exercises||[]).map((e,i)=>{
        const isOpen = S.expandedExIdx===i;
        const muscles = getExerciseMuscles(e.muscle);
        return `
        <div class="edit-ex-row${isOpen?' open':''}" data-i="${i}">
          <div class="edit-ex-row__compact" data-toggle="${i}">
            <div class="reorder-btns">
              <button class="reorder-btn" data-move="up" data-idx="${i}" ${i===0?'disabled':''} title="Mover para cima">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
              </button>
              <button class="reorder-btn" data-move="down" data-idx="${i}" ${i===((workout.exercises||[]).length-1)?'disabled':''} title="Mover para baixo">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
            </div>
            <div class="edit-ex-row__summary">
              <div class="edit-ex-row__name-display">${e.name}</div>
              <div class="edit-ex-row__meta-display">${e.sets} séries · ${e.reps} reps · ${muscleLabel(e.muscle)}${e.weight?` · ${e.weight}kg`:''}</div>
            </div>
            <button class="edit-ex-del" data-del="${i}" title="Apagar exercício">${ICONS.trash}</button>
            <div class="expand-chevron">${ICONS.arrow_r}</div>
          </div>
          <div class="edit-ex-row__expanded">
            <div class="edit-field-group">
              <label>Nome do exercício</label>
              <input class="ppl-input edit-ex-inp" type="text" value="${e.name}" data-f="name" data-idx="${i}" placeholder="Nome do exercício"/>
            </div>
            <div class="edit-ex-row__fields">
              <div class="edit-field-group"><label>Séries</label><input class="ppl-input edit-ex-inp" type="number" min="1" max="10" value="${e.sets}" data-f="sets" data-idx="${i}"/></div>
              <div class="edit-field-group"><label>Reps</label><input class="ppl-input edit-ex-inp" type="text" value="${e.reps}" data-f="reps" data-idx="${i}"/></div>
            </div>
            <div class="edit-ex-row__fields">
              <div class="edit-field-group"><label>Peso (kg)</label><input class="ppl-input edit-ex-inp" type="number" min="0" step="0.5" value="${e.weight ?? ''}" data-f="weight" data-idx="${i}" placeholder="0"/></div>
              <div class="edit-field-group"><label>Descanso (s)</label><input class="ppl-input edit-ex-inp" type="number" min="0" step="5" value="${e.rest ?? ''}" data-f="rest" data-idx="${i}" placeholder="90"/></div>
            </div>
            <div class="edit-ex-row__fields">
              <div class="edit-field-group">
                <label>Grupo Muscular</label>
                <select class="ppl-input edit-ex-inp" data-f="muscle1" data-idx="${i}">
                  ${getAllMuscleGroups().map(group=>`<option value="${group}" ${muscles[0]===group?'selected':''}>${group}</option>`).join('')}
                </select>
              </div>
              <div class="edit-field-group">
                <label>2º Grupo (opcional)</label>
                <select class="ppl-input edit-ex-inp" data-f="muscle2" data-idx="${i}">
                  <option value="">— Nenhum —</option>
                  ${getAllMuscleGroups().map(group=>`<option value="${group}" ${muscles[1]===group?'selected':''}>${group}</option>`).join('')}
                </select>
              </div>
            </div>
            <p class="edit-hint" style="margin-top:6px">${ICONS.info} Use o 2º grupo quando o exercício trabalha duas partes do corpo com estímulo completo (ex: Stiff = Glúteos + Posterior de Coxa). A maioria dos exercícios só precisa do primeiro.</p>
            <div class="edit-field-group" style="margin-top:var(--sp-sm)">
              <label>Dica / Observação</label>
              <textarea class="ppl-input edit-ex-inp edit-ex-tip-inp" data-f="tip" data-idx="${i}" placeholder="Dica científica ou observação...">${e.tip||''}</textarea>
            </div>
          </div>
        </div>`;
      }).join('')}
    </div>`;

  body.querySelectorAll('.edit-day-inp').forEach(inp=>{
    inp.addEventListener('input',()=>{
      const idx=parseInt(inp.dataset.dayIdx,10);
      if(!Array.isArray(workout.days)) workout.days=[];
      workout.days[idx]=inp.value;
      workout.day=workout.days.find(Boolean)||'';
      persistEditingWorkoutToStore();
    });
  });

  body.querySelectorAll('.edit-day-del').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const idx=parseInt(btn.dataset.dayDel,10);
      commitWorkoutDayEdits(workout);
      const next=normalizeWorkoutDays(workout).filter((_,di)=>di!==idx);
      workout.days=next;
      workout.day=next[0]||'';
      persistEditingWorkoutToStore();
      renderEditModalBody(workout);
      renderWorkouts();
      renderHome();
    });
  });

  body.querySelectorAll('[data-day-move]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const idx=parseInt(btn.dataset.dayIdx,10);
      const dir=btn.dataset.dayMove;
      commitWorkoutDayEdits(workout);
      const swapWith=dir==='up' ? idx-1 : idx+1;
      const days=normalizeWorkoutDays(workout);
      if(swapWith<0 || swapWith>=days.length) return;
      [days[idx], days[swapWith]] = [days[swapWith], days[idx]];
      workout.days=days;
      workout.day=days[0]||'';
      persistEditingWorkoutToStore();
      renderEditModalBody(workout);
      renderWorkouts();
      renderHome();
    });
  });

  body.querySelector('#btn-add-day')?.addEventListener('click',()=>{
    commitWorkoutDayEdits(workout);
    const days=normalizeWorkoutDays(workout);
    days.push('');
    workout.days=days;
    workout.day=days[0]||'';
    persistEditingWorkoutToStore();
    renderEditModalBody(workout);
  });

  // Tap the compact row to expand/collapse it. Only one row open at a
  // time keeps the list short and easy to scroll on small screens.
  body.querySelectorAll('[data-toggle]').forEach(el=>{
    el.addEventListener('click', (ev)=>{
      if(ev.target.closest('.edit-ex-del') || ev.target.closest('.reorder-btn')) return;
      const idx = parseInt(el.dataset.toggle);
      // Before collapsing, persist any edits the user made in the open row
      if(S.expandedExIdx!==null && S.expandedExIdx!==idx){
        commitExpandedRowEdits(workout);
      }
      S.expandedExIdx = (S.expandedExIdx===idx) ? null : idx;
      renderEditModalBody(workout);
    });
  });

  // Reorder via simple, reliable ▲▼ buttons — no drag/touch coordinate
  // math needed, which is what made the previous version feel janky on
  // phones. Swapping two array items is instant and always correct.
  body.querySelectorAll('.reorder-btn').forEach(btn=>{
    if(btn.disabled) return;
    btn.addEventListener('click', (ev)=>{
      ev.stopPropagation();
      const idx = parseInt(btn.dataset.idx);
      const dir = btn.dataset.move;
      commitExpandedRowEdits(workout);
      const swapWith = dir==='up' ? idx-1 : idx+1;
      if(swapWith<0 || swapWith>=workout.exercises.length) return;
      [workout.exercises[idx], workout.exercises[swapWith]] = [workout.exercises[swapWith], workout.exercises[idx]];
      // Keep the row the user was looking at "following" its content
      if(S.expandedExIdx===idx) S.expandedExIdx=swapWith;
      else if(S.expandedExIdx===swapWith) S.expandedExIdx=idx;
      persistEditingWorkoutToStore();
      renderEditModalBody(workout);
      renderWorkouts();
      renderHome();
    });
  });

  // Delete buttons now ask for confirmation first — protects against
  // accidental taps wiping out an exercise with no way back.
  body.querySelectorAll('.edit-ex-del').forEach(btn=>{
    btn.addEventListener('click', (ev)=>{
      ev.stopPropagation();
      const idx=parseInt(btn.dataset.del);
      const exName = workout.exercises[idx]?.name || 'este exercício';
      openDeleteExerciseConfirm(exName, ()=>{
        workout.exercises.splice(idx,1);
        persistEditingWorkoutToStore();
        if(S.expandedExIdx===idx) S.expandedExIdx=null;
        else if(S.expandedExIdx>idx) S.expandedExIdx--;
        renderEditModalBody(workout);
        renderWorkouts();
        renderHome();
        showToast('🗑️ Exercício removido.');
      });
    });
  });
}

// Reads the inputs of whichever row is currently expanded back into the
// in-memory workout object, so toggling to another row (or reordering)
// never silently discards what was just typed.
function commitExpandedRowEdits(w){
  const workout = S.editingWorkout || w;
  if(S.expandedExIdx===null) return;
  const row = $(`.edit-ex-row[data-i="${S.expandedExIdx}"]`);
  if(!row) return;
  const nameInp = row.querySelector('[data-f="name"]');
  const setsInp = row.querySelector('[data-f="sets"]');
  const repsInp = row.querySelector('[data-f="reps"]');
  const weightInp = row.querySelector('[data-f="weight"]');
  const restInp = row.querySelector('[data-f="rest"]');
  const muscle1Inp = row.querySelector('[data-f="muscle1"]');
  const muscle2Inp = row.querySelector('[data-f="muscle2"]');
  const tipInp  = row.querySelector('[data-f="tip"]');
  const ex = workout.exercises[S.expandedExIdx];
  if(!ex) return;
  if(nameInp) ex.name = nameInp.value || ex.name;
  if(setsInp) ex.sets = parseInt(setsInp.value) || ex.sets;
  if(repsInp) ex.reps = repsInp.value || ex.reps;
  if(weightInp) ex.weight = weightInp.value === '' ? '' : parseFloat(weightInp.value);
  if(restInp) ex.rest = restInp.value === '' ? '' : parseInt(restInp.value,10);
  if(muscle1Inp){
    const m2 = muscle2Inp?.value || '';
    ex.muscle = getExerciseMuscles(m2 ? [muscle1Inp.value, m2] : muscle1Inp.value);
  }
  if(tipInp)  ex.tip  = tipInp.value;
}
function saveEdit(){
  const wid=S.editingWid;const ws=DB.getWorkouts();let workout=S.editingWorkout;
  if(!workout){
    workout=ws.find(x=>x.id===wid);
  }
  if(!workout)return;
  workout.name=$('#edit-wname-inp').value||workout.name;
  workout.day=$('#edit-wday-inp').value||'';
  workout.note=$('#edit-wnote-inp').value||'';
  commitWorkoutDayEdits(workout);
  workout.days=normalizeWorkoutDays(workout);
  workout.day=workout.days[0]||$('#edit-wday-inp').value||'';
  commitExpandedRowEdits(workout); // capture any unsaved edits in the open row
  const existing=ws.find(x=>x.id===wid);
  if(existing){
    Object.assign(existing, workout);
  } else {
    ws.push(workout);
  }
  DB.saveWorkouts(ws);$('#modal-edit').classList.add('hidden');renderWorkouts();renderHome();showToast('✅ Treino salvo!');
}

// Add exercise with proper form fields
function addExerciseForm(){
  const body=$('#modal-add-ex-body');
  body.innerHTML=`
    <div class="meta-row"><label class="meta-lbl">Nome do Exercício</label>
      <input class="ppl-input" id="new-ex-name" placeholder="ex: Supino Reto com Barra" style="width:100%"/></div>
    <div style="display:flex;gap:var(--sp-sm)">
      <div class="meta-row" style="flex:1"><label class="meta-lbl">Séries</label>
        <input class="ppl-input" id="new-ex-sets" type="number" min="1" max="10" value="3" style="width:100%"/></div>
      <div class="meta-row" style="flex:1"><label class="meta-lbl">Repetições</label>
        <input class="ppl-input" id="new-ex-reps" value="8–12" style="width:100%"/></div>
    </div>
    <div style="display:flex;gap:var(--sp-sm)">
      <div class="meta-row" style="flex:1"><label class="meta-lbl">Peso (kg)</label>
        <input class="ppl-input" id="new-ex-weight" type="number" min="0" step="0.5" placeholder="0" style="width:100%"/></div>
      <div class="meta-row" style="flex:1"><label class="meta-lbl">Descanso (s)</label>
        <input class="ppl-input" id="new-ex-rest" type="number" min="0" step="5" value="90" style="width:100%"/></div>
    </div>
    <div style="display:flex;gap:var(--sp-sm)">
      <div class="meta-row" style="flex:1"><label class="meta-lbl">Grupo Muscular</label>
        <select class="ppl-input" id="new-ex-muscle" style="width:100%">
          ${getAllMuscleGroups().map(group=>`<option value="${group}">${group}</option>`).join('')}
        </select></div>
      <div class="meta-row" style="flex:1"><label class="meta-lbl">2º Grupo (opcional)</label>
        <select class="ppl-input" id="new-ex-muscle2" style="width:100%">
          <option value="">— Nenhum —</option>
          ${getAllMuscleGroups().map(group=>`<option value="${group}">${group}</option>`).join('')}
        </select></div>
    </div>
    <p class="edit-hint">${ICONS.info} Use o 2º grupo quando o exercício trabalha duas partes do corpo com estímulo completo (ex: Stiff = Glúteos + Posterior de Coxa). A maioria dos exercícios só precisa do primeiro.</p>
    <div class="meta-row"><label class="meta-lbl">Dica / Observação</label>
      <textarea class="ppl-input meta-textarea" id="new-ex-tip" placeholder="Dica científica ou observação sobre o exercício..." style="min-height:70px"></textarea></div>`;
  $('#modal-add-ex').classList.remove('hidden');
}

function confirmAddExercise(){
  const name=$('#new-ex-name')?.value.trim();
  if(!name){showToast('⚠️ Informe o nome do exercício.');return}
  const sets=parseInt($('#new-ex-sets')?.value)||3;
  const reps=$('#new-ex-reps')?.value||'8–12';
  const weightVal=$('#new-ex-weight')?.value;
  const weight=weightVal === '' ? '' : parseFloat(weightVal);
  const rest=parseInt($('#new-ex-rest')?.value,10)||90;
  const muscle1=$('#new-ex-muscle')?.value||'Peito';
  const muscle2=$('#new-ex-muscle2')?.value||'';
  const muscle=getExerciseMuscles(muscle2 ? [muscle1, muscle2] : muscle1);
  const tip=$('#new-ex-tip')?.value||'Execute com boa técnica e amplitude completa.';
  const ws=DB.getWorkouts();
  let workout=S.editingWorkout || ws.find(x=>x.id===S.editingWid);
  if(!workout){
    workout={id:`custom_${Date.now()}`,name:'Novo treino',day:'',icon:'dumbbell',colorClass:'push',note:'',exercises:[]};
    S.editingWorkout=workout;S.editingWid=workout.id;
  }
  workout.exercises.push({id:`cx_${Date.now()}`,name,sets,reps,weight,muscle,rest,tip});
  persistEditingWorkoutToStore();
  renderEditModalBody(workout);
  renderWorkouts();
  renderHome();
  $('#modal-add-ex').classList.add('hidden');showToast('✅ Exercício adicionado!');
}

function openFinishModal(session,newPRs){
  const body=$('#finish-body');
  body.innerHTML=`<div class="finish-stat"><div class="finish-stat__val">${fmtTime(session.duration)}</div><div class="finish-stat__lbl">Duração</div></div>
    <div class="finish-stat"><div class="finish-stat__val">${session.totalVolume}kg</div><div class="finish-stat__lbl">Volume</div></div>
    <div class="finish-stat"><div class="finish-stat__val">${session.setsCompleted}</div><div class="finish-stat__lbl">Séries</div></div>
    <div class="finish-stat"><div class="finish-stat__val">+${50+newPRs.length*20}</div><div class="finish-stat__lbl">XP</div></div>
    ${newPRs.length?`<div class="finish-pr">${ICONS.trophy} ${newPRs.length} novo(s) PR(s)!</div>`:''}`;
  $('#modal-finish').classList.remove('hidden');
}

function openHistDetail(session){
  $('#hist-modal-title').textContent=`${session.workoutName} · ${fmtDate(session.date)}`;
  const body=$('#hist-modal-body');
  body.innerHTML=`<div class="detail-sec"><div class="detail-sec-title">Resumo</div>
      <div class="detail-row"><span>Duração</span><span>${fmtTime(session.duration)}</span></div>
      <div class="detail-row"><span>Volume Total</span><span>${session.totalVolume}kg</span></div>
      <div class="detail-row"><span>Séries</span><span>${session.setsCompleted}</span></div>
      ${session.rpe?`<div class="detail-row"><span>RPE</span><span>${session.rpe}/10</span></div>`:''}
      ${session.sleep?`<div class="detail-row"><span>Sono</span><span>${session.sleep}h</span></div>`:''}</div>
    ${session.exercises?.length?`<div class="detail-sec"><div class="detail-sec-title">Exercícios</div>
      ${session.exercises.map(e=>`<div class="detail-row"><span>${e.name}</span><span>${e.series.map(s=>`${s.weight||'?'}×${s.reps||'?'}`).join(', ')}</span></div>`).join('')}</div>`:''}
    ${session.notes?`<div class="detail-sec"><div class="detail-sec-title">Anotações</div><p style="font-size:var(--fs-sm);color:var(--c-text-2);line-height:1.6">${session.notes}</p></div>`:''}
    ${session.prs?.length?`<div class="detail-sec"><div class="detail-sec-title">PRs</div>${session.prs.map(p=>`<div class="detail-row"><span>${ICONS.trophy} ${p}</span></div>`).join('')}</div>`:''}`;
  $('#modal-hist').classList.remove('hidden');
}

function openAchPopup(ach){
  const iconEl=$('#ach-popup-icon');
  if(iconEl)iconEl.innerHTML=`<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">${ICONS[ach.icon]?.match(/<svg[^>]*>(.*?)<\/svg>/s)?.[1]||''}</svg>`;
  const nm=$('#ach-popup-name');if(nm)nm.textContent=ach.name;
  const ds=$('#ach-popup-desc');if(ds)ds.textContent=ach.desc;
  $('#modal-ach').classList.remove('hidden');addXP(50);
}

function openCardInfo(cardKey){
  const info=CARD_INFO[cardKey];if(!info)return;
  $('#card-info-title').textContent=info.title;$('#card-info-body').textContent=info.text;
  $('#modal-card-info').classList.remove('hidden');
}

/* ── EXPORT / IMPORT ── */
function exportData(){
  const blob=new Blob([DB.exportAll()],{type:'application/json'});
  const url=URL.createObjectURL(blob);const a=document.createElement('a');
  a.href=url;a.download=`ppl-backup-${today()}.json`;a.click();URL.revokeObjectURL(url);showToast('📦 Backup exportado!');
}
function importData(file){
  const r=new FileReader();
  r.onload=e=>{try{DB.importAll(e.target.result);showToast('✅ Importado! Recarregando...');setTimeout(()=>location.reload(),1200)}catch{showToast('❌ Arquivo inválido.')}};
  r.readAsText(file);
}

/* ── SW ── */
function regSW(){
  if('serviceWorker' in navigator)
    navigator.serviceWorker.register('./service-worker.js').then(r=>console.log('SW:',r.scope)).catch(()=>{});
}

/* ── INSTALL ── */
let deferredPrompt=null;
function setupInstall(){
  window.addEventListener('beforeinstallprompt',e=>{
    e.preventDefault();deferredPrompt=e;
    const b=$('#install-banner');b.classList.remove('hidden');setTimeout(()=>b.classList.add('visible'),100);
  });
  $('#btn-install')?.addEventListener('click',()=>{
    if(!deferredPrompt)return;deferredPrompt.prompt();
    deferredPrompt.userChoice.then(c=>{if(c.outcome==='accepted')showToast('✅ App instalado!');deferredPrompt=null;$('#install-banner').classList.remove('visible')});
  });
  $('#btn-dismiss-install')?.addEventListener('click',()=>$('#install-banner').classList.remove('visible'));
}


/* ── GOALS EDITOR ── */

/* ── EVENTS ── */
function setupEvents(){
  $$('.nav-item').forEach(btn=>btn.addEventListener('click',()=>go(btn.dataset.view)));
  // Toggle expand/collapse all workout blocks
  $('#btn-expand-all')?.addEventListener('click',()=>{
    const blocks=$$('.wblock');
    const allExpanded=blocks.every(b=>b.classList.contains('expanded'));
    blocks.forEach(b=>b.classList.toggle('expanded',!allExpanded));
    const btn=$('#btn-expand-all');
    if(btn){
      btn.innerHTML=allExpanded
        ? '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg> Expandir'
        : '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg> Recolher';
    }
  });
  $('#btn-back-from-detail')?.addEventListener('click',()=>{S.previewWorkoutId=null;showPreStartScreen()});
  $('#btn-begin-workout')?.addEventListener('click',()=>{if(S.previewWorkoutId)beginWorkout(S.previewWorkoutId)});
  // Cancel workout — open confirmation modal
  $('#btn-cancel-workout')?.addEventListener('click',cancelWorkout);
  $('#btn-confirm-cancel')?.addEventListener('click',doCancel);
  $('#btn-deny-cancel')?.addEventListener('click',()=>$('#modal-cancel-confirm').classList.add('hidden'));
  $('#btn-finish-workout')?.addEventListener('click',handleFinishClick);
  $('#btn-confirm-finish')?.addEventListener('click',()=>{
    $('#modal-finish-confirm').classList.add('hidden');
    finishWorkout();
  });
  $('#btn-deny-finish')?.addEventListener('click',()=>{
    $('#modal-finish-confirm').classList.add('hidden');
  });
  // Generic delete confirmation modal — runs the pending callback only
  // if the user explicitly confirms.
  $('#btn-confirm-delete')?.addEventListener('click',()=>{
    $('#modal-delete-confirm').classList.add('hidden');
    if(typeof _pendingDeleteAction==='function') _pendingDeleteAction();
    _pendingDeleteAction=null;
  });
  $('#btn-deny-delete')?.addEventListener('click',()=>{
    $('#modal-delete-confirm').classList.add('hidden');
    _pendingDeleteAction=null;
  });
  // Rest timer
  $('#rest-float-btn')?.addEventListener('click',()=>toggleRestPanel());
  $('#btn-rest-close')?.addEventListener('click',()=>toggleRestPanel(false));
  $('#btn-rest-toggle')?.addEventListener('click',()=>{
    if(S.restRemaining<=0){startRest(60);toggleRestPanel(true);return}
    if(S.restRunning){
      clearInterval(S.restInterval);setRestPlayIcon(false);
      if(S.activeWorkout){ S.activeWorkout.restEndAt=null; persistActiveWorkout(); }
    } else {
      const endAt = Date.now() + S.restRemaining*1000;
      if(S.activeWorkout){ S.activeWorkout.restEndAt=endAt; persistActiveWorkout(); }
      S.restRunning=true;
      S.restInterval=setInterval(tickRest,1000);
      setRestPlayIcon(true);
    }
  });
  $('#btn-rest-reset')?.addEventListener('click',()=>{
    clearInterval(S.restInterval);S.restRemaining=S.restTotal||60;S.restRunning=false;
    if(S.activeWorkout){ S.activeWorkout.restEndAt=null; persistActiveWorkout(); }
    $('#rest-alert')?.classList.add('hidden');setRestPlayIcon(false);updateRestUI();
  });
  $('#btn-rest-skip')?.addEventListener('click',()=>{
    clearInterval(S.restInterval);S.restRemaining=0;S.restRunning=false;setRestPlayIcon(false);
    if(S.activeWorkout){ S.activeWorkout.restEndAt=null; persistActiveWorkout(); }
    updateRestUI();
    const a=$('#rest-alert');if(a){a.classList.remove('hidden');a.classList.add('neon-pulse');setTimeout(()=>a.classList.remove('neon-pulse'),3000)}
  });
  $$('.sc-btn').forEach(btn=>btn.addEventListener('click',()=>{
    $$('.sc-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');startRest(parseInt(btn.dataset.s));
  }));
  // Close modals
  const closeMap={'btn-close-edit':'modal-edit','btn-close-tip':'modal-tip','btn-close-hist':'modal-hist','btn-close-ach':'modal-ach','btn-close-card-info':'modal-card-info','btn-close-schedule':'modal-schedule','btn-close-add-ex':'modal-add-ex'};
  Object.entries(closeMap).forEach(([btn,modal])=>$(`#${btn}`)?.addEventListener('click',()=>$(`#${modal}`).classList.add('hidden')));
  $('#btn-close-finish')?.addEventListener('click',()=>{$('#modal-finish').classList.add('hidden');S.previewWorkoutId=null;showPreStartScreen();go('home')});
  $$('.modal-overlay').forEach(o=>o.addEventListener('click',e=>{if(e.target===o)o.classList.add('hidden')}));
  // Edit
  $('#btn-save-edit')?.addEventListener('click',saveEdit);
  $('#btn-add-ex')?.addEventListener('click',addExerciseForm);
  $('#btn-confirm-add-ex')?.addEventListener('click',confirmAddExercise);
  // Schedule
  $('#btn-edit-schedule')?.addEventListener('click',openScheduleEditor);
  // Goals
  document.addEventListener('click',e=>{
    if(e.target.closest('#btn-open-goals'))openGoalsEditor();
  });
  $('#btn-close-goals')?.addEventListener('click',()=>$('#modal-goals').classList.add('hidden'));
  $('#btn-save-goals')?.addEventListener('click',saveGoals);
  $('#btn-add-goal')?.addEventListener('click',addNewGoal);
  $('#btn-save-schedule')?.addEventListener('click',saveSchedule);
  // History filters
  $$('.ftab').forEach(t=>t.addEventListener('click',()=>renderHistory(t.dataset.f)));
  // Export / Import
  $('#btn-export')?.addEventListener('click',exportData);
  $('#btn-import')?.addEventListener('click',()=>$('#import-file').click());
  // Reset history — clears sessions, stats, XP, PRs and achievements but
  // keeps workouts and schedule untouched so the user keeps their routine.
  $('#btn-reset-history')?.addEventListener('click',()=>{
    openDeleteConfirm(
      'Isso vai apagar TODO o histórico de treinos, estatísticas, XP, conquistas e PRs. Os treinos e exercícios em si serão mantidos. Esta ação não pode ser desfeita.',
      ()=>{
        DB.saveHistory([]);
        DB.saveStats({totalWorkouts:0,totalVolumeKg:0,totalPRs:0,streak:0,lastDate:null,weekWorkouts:0,weekStart:null,xp:0,firstWorkoutDate:null});
        DB.savePRs({});
        DB.saveAchs([]);
        DB.saveNotes([]);
        DB.clearActiveSession();
        S.activeWorkout=null;
        clearInterval(S.workoutInterval);
        clearInterval(S.restInterval);
        renderHistory('all');
        renderHome();
        showToast('🗑️ Histórico limpo. Treinos mantidos!');
      }
    );
  });
  $('#import-file')?.addEventListener('change',e=>{if(e.target.files[0])importData(e.target.files[0])});
  // Sub tabs
  $$('.stab').forEach(t=>t.addEventListener('click',()=>switchSubTab(t.dataset.tab)));
  // Weight
  $('#btn-add-weight')?.addEventListener('click',()=>{
    const v=parseFloat($('#weight-inp').value);
    if(!v||v<30||v>300){showToast('Peso inválido (30–300kg).');return}
    const w=DB.getWeights();w.push({date:today(),weight:v});DB.saveWeights(w);
    $('#weight-inp').value='';renderWeightChart();showToast(`✅ ${v}kg registrado!`);
  });
  $('#btn-clear-weights')?.addEventListener('click',()=>{
    if(!DB.getWeights().length){showToast('Nenhum peso registrado ainda.');return}
    openDeleteConfirm('Apagar todo o histórico de peso corporal? Esta ação não pode ser desfeita.', ()=>{
      DB.saveWeights([]);renderWeightChart();showToast('🗑️ Histórico de peso apagado.');
    });
  });
  // Photo
  $('#photo-input')?.addEventListener('change',e=>{
    const f=e.target.files[0];if(!f)return;
    const r=new FileReader();
    r.onload=ev=>{const p=DB.getPhotos();p.unshift({date:today(),data:ev.target.result});DB.savePhotos(p);renderPhotos();showToast('📸 Foto salva!')};
    r.readAsDataURL(f);e.target.value='';
  });
  // Notes
  $('#btn-save-note')?.addEventListener('click',()=>{
    const txt=$('#free-note')?.value.trim();if(!txt){showToast('Escreva algo antes de salvar.');return}
    const ns=DB.getNotes();ns.unshift({date:today(),text:txt});DB.saveNotes(ns);
    if($('#free-note'))$('#free-note').value='';renderNotes();showToast('📝 Anotação salva!');
  });
  $('#btn-see-all-ach')?.addEventListener('click',()=>{go('more');setTimeout(()=>switchSubTab('ach'),100)});
  // Card info buttons (delegated)
  document.addEventListener('click',e=>{
    const btn=e.target.closest('.card-info-btn');
    if(btn&&btn.dataset.card)openCardInfo(btn.dataset.card);
  });
  // Editor de metas (delegado porque o botão é recriado a cada renderVolumeChart)
  document.addEventListener('click',e=>{
    if(e.target.closest('#btn-edit-meta-vol'))openMetaEditor();
  });
  // Mesmo Editor de Metas, acessível também pelo card "Peso Corporal"
  // (este botão é estático no HTML, não precisa de delegação, mas usar o
  // mesmo padrão de listener direto do btn-clear-weights logo abaixo).
  $('#btn-edit-meta-weight')?.addEventListener('click',openMetaEditor);
  // Linhas do Editor de Metas são recriadas a cada renderMetaEditorBody(),
  // então adicionar/excluir metas (volume e peso) usa delegação.
  document.addEventListener('click',e=>{
    if(!_metaDraft) return;
    if(e.target.closest('#btn-add-vol-goal')){
      syncMetaDraftFromDOM();
      _metaDraft.volume.push({name:'', target:10});
      renderMetaEditorBody();
      const inputs=$$('.goal-vol-name'); inputs[inputs.length-1]?.focus();
      return;
    }
    if(e.target.closest('#btn-add-weight-goal')){
      syncMetaDraftFromDOM();
      const lastWeight = DB.getWeights().slice(-1)[0]?.weight;
      _metaDraft.weight.push({id:`wg_${Date.now()}`, label:'', target: lastWeight||70});
      renderMetaEditorBody();
      const inputs=$$('.goal-weight-name'); inputs[inputs.length-1]?.focus();
      return;
    }
    const delVol=e.target.closest('.goal-vol-del');
    if(delVol){
      const idx=parseInt(delVol.dataset.idx,10);
      syncMetaDraftFromDOM();
      const name=(_metaDraft.volume[idx]?.name||'').trim()||'este grupo muscular';
      openDeleteConfirm(`Tem certeza que deseja excluir a meta de "${name}"? Esta ação não pode ser desfeita depois de salvar.`,()=>{
        _metaDraft.volume.splice(idx,1);
        renderMetaEditorBody();
      });
      return;
    }
    const delWeight=e.target.closest('.goal-weight-del');
    if(delWeight){
      const idx=parseInt(delWeight.dataset.idx,10);
      syncMetaDraftFromDOM();
      const label=(_metaDraft.weight[idx]?.label||'').trim()||'esta meta de peso';
      openDeleteConfirm(`Tem certeza que deseja excluir "${label}"? Esta ação não pode ser desfeita depois de salvar.`,()=>{
        _metaDraft.weight.splice(idx,1);
        renderMetaEditorBody();
      });
    }
  });
  $('#btn-close-meta-vol')?.addEventListener('click',()=>{_metaDraft=null;$('#modal-meta-vol').classList.add('hidden');});
  $('#btn-save-meta-vol')?.addEventListener('click',saveMetaEditor);

  // Persist sleep/notes fields as the user types, so they survive an
  // app close mid-workout just like everything else in the session.
  $('#sleep-input')?.addEventListener('input',()=>persistActiveWorkout());
  $('#session-notes')?.addEventListener('input',()=>persistActiveWorkout());
}

/* ── INIT ── */
function init(){
  setupEvents();setupInstall();regSW();

  setTimeout(()=>{
    $('#loading-screen').classList.add('hidden');
    $('#app').classList.remove('hidden');

    // If there's an in-progress workout saved from before the app was
    // closed (or the phone was locked/restarted), restore it instead of
    // landing on Home. Otherwise just go Home as normal.
    const saved = DB.getActiveSession();
    if(saved && saved.activeWorkout){
      restoreActiveWorkoutIfAny();
    } else {
      go('home');
    }
  },1700);

  // Extra safety net: persist immediately whenever the page is about to be
  // hidden (app backgrounded, tab switched, phone locked) or unloaded
  // (app fully closed). This guarantees the very latest state — including
  // the exact rest-timer end timestamp — is on disk even if the app never
  // gets a chance to run its normal periodic saves again.
  document.addEventListener('visibilitychange', ()=>{
    if(document.visibilityState === 'hidden' && S.activeWorkout){
      persistActiveWorkout();
    }
  });
  window.addEventListener('pagehide', ()=>{
    if(S.activeWorkout) persistActiveWorkout();
  });
  window.addEventListener('beforeunload', ()=>{
    if(S.activeWorkout) persistActiveWorkout();
  });
}
document.addEventListener('DOMContentLoaded',init);

/* ═══════════════════════════════════════════════
   PHASE 2 MODULE — progressão, comparação mensal,
   histórico por exercício
═══════════════════════════════════════════════ */

/* ── Sugestão de progressão de carga ──
   Analisa a última sessão do exercício: se todas as séries feitas atingiram
   o topo (ou acima) do rep range prescrito, sugere +2.5kg. Caso contrário,
   sugere manter/consolidar. Retorna string (ou null se sem histórico). */
function getProgressionSuggestion(ex, prevRef){
  if(!Array.isArray(prevRef)) return null;
  const done = prevRef.filter(s=>s && s.weight!=='' && s.reps!=='');
  if(done.length===0) return null;
  // Rep range parsing: "8-12", "8–12", "10"
  const m=(ex.reps||'').toString().match(/(\d+)\s*[–-]\s*(\d+)/);
  const topRep = m ? parseInt(m[2]) : parseInt(ex.reps)||0;
  const bottomRep = m ? parseInt(m[1]) : topRep;
  const weights = done.map(s=>parseFloat(s.weight)).filter(w=>w>0);
  const reps = done.map(s=>parseInt(s.reps)||0);
  if(!weights.length) return null;
  const maxW = Math.max(...weights);
  const minReps = Math.min(...reps);
  const step = maxW < 20 ? 1 : (maxW < 40 ? 2 : 2.5);
  if(topRep && minReps >= topRep){
    return `Da última vez você atingiu o topo (${minReps} reps @ ${maxW}kg). Tente <b>${(maxW+step).toFixed(step%1?1:0)}kg</b> hoje.`;
  }
  if(bottomRep && minReps < bottomRep){
    return `Última: mín ${minReps} reps @ ${maxW}kg (abaixo da faixa ${ex.reps}). Mantenha <b>${maxW}kg</b> e busque completar a faixa.`;
  }
  return `Última: ${minReps}–${Math.max(...reps)} reps @ ${maxW}kg. Consolide a carga e progrida quando bater ${topRep||ex.reps} reps em todas as séries.`;
}

/* ── Comparação entre meses ── */
function _monthKey(dateStr){ return (dateStr||'').slice(0,7); } // YYYY-MM
function computeMonthStats(monthKey){
  const hist=DB.getHistory().filter(h=>_monthKey(h.date)===monthKey);
  const workouts=hist.length;
  const volume=hist.reduce((a,h)=>a+(h.totalVolume||0),0);
  const sets=hist.reduce((a,h)=>a+(h.setsCompleted||0),0);
  const prs=hist.reduce((a,h)=>a+((h.prs||[]).length),0);
  const dur=hist.reduce((a,h)=>a+(h.duration||0),0);
  const avgDur = workouts ? Math.round(dur/workouts) : 0;
  return {workouts,volume,sets,prs,avgDur};
}
function renderMonthCompare(){
  const el=$('#month-compare-body'); if(!el) return;
  const now=new Date();
  const curKey=localDateStr(now).slice(0,7);
  const prev=new Date(now.getFullYear(), now.getMonth()-1, 1);
  const prevKey=localDateStr(prev).slice(0,7);
  const cur=computeMonthStats(curKey), old=computeMonthStats(prevKey);
  const monthNames=['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
  const curLbl=`${monthNames[now.getMonth()]}/${now.getFullYear().toString().slice(2)}`;
  const prevLbl=`${monthNames[prev.getMonth()]}/${prev.getFullYear().toString().slice(2)}`;
  const diff=(a,b)=>{
    if(b===0) return a>0?'<span style="color:var(--c-accent-2)">+∞%</span>':'—';
    const p=Math.round(((a-b)/b)*100);
    const c=p>0?'var(--c-accent-2)':(p<0?'#ff5b5b':'var(--c-text-2)');
    const s=p>0?'+':'';
    return `<span style="color:${c};font-weight:600">${s}${p}%</span>`;
  };
  const row=(lbl,a,b,fmt)=>`<tr><td style="padding:8px 4px;color:var(--c-text-2)">${lbl}</td><td style="padding:8px 4px;text-align:right">${fmt(a)}</td><td style="padding:8px 4px;text-align:right;opacity:.7">${fmt(b)}</td><td style="padding:8px 4px;text-align:right">${diff(a,b)}</td></tr>`;
  const fmtVol=v=>v>=1000?`${(v/1000).toFixed(1)}t`:`${v}kg`;
  const fmtDur=s=>s?`${Math.floor(s/60)}min`:'—';
  el.innerHTML=`
    <table style="width:100%;border-collapse:collapse;font-size:13px">
      <thead><tr style="color:var(--c-text-2);font-size:11px;text-transform:uppercase;letter-spacing:.06em">
        <th style="text-align:left;padding:6px 4px">Métrica</th>
        <th style="text-align:right;padding:6px 4px">${curLbl}</th>
        <th style="text-align:right;padding:6px 4px;opacity:.7">${prevLbl}</th>
        <th style="text-align:right;padding:6px 4px">Δ</th>
      </tr></thead>
      <tbody>
        ${row('Treinos',cur.workouts,old.workouts,v=>v)}
        ${row('Volume',cur.volume,old.volume,fmtVol)}
        ${row('Séries',cur.sets,old.sets,v=>v)}
        ${row('PRs',cur.prs,old.prs,v=>v)}
        ${row('Duração média',cur.avgDur,old.avgDur,fmtDur)}
      </tbody>
    </table>
    ${cur.workouts===0&&old.workouts===0?'<div style="text-align:center;padding:20px;color:var(--c-text-2);font-size:12px">Sem treinos registrados nos últimos meses.</div>':''}
  `;
}

/* ── Histórico completo por exercício ── */
function _allExercisesSummary(){
  const hist=DB.getHistory();
  const map={}; // name -> {name,muscle,sessions:[{date,series:[...]}], count, lastDate}
  hist.forEach(session=>{
    (session.exercises||[]).forEach(ex=>{
      const key=(ex.name||'').trim(); if(!key) return;
      if(!map[key]) map[key]={name:key, muscle:muscleLabel(ex.muscle||''), sessions:[], count:0, lastDate:session.date};
      map[key].sessions.push({date:session.date, series:ex.series||[]});
      map[key].count += (ex.series||[]).length;
      if(session.date > map[key].lastDate) map[key].lastDate = session.date;
    });
  });
  return Object.values(map).sort((a,b)=>b.lastDate.localeCompare(a.lastDate));
}
