/* shows.js — Lixinho Tropical
   FONTE ÚNICA DE SHOWS.
   Edite apenas este arquivo para adicionar, remover ou atualizar shows.
   As mudanças aparecem automaticamente na Home e na Agenda.

   COMO ADICIONAR UM SHOW:
   {
     date: 'AAAA-MM-DD',        ← data no formato ano-mês-dia
     day: '20',                  ← dia (para exibição)
     month: 'Jun',               ← mês abreviado
     year: '2025',               ← ano
     venue: 'Nome do Local',     ← nome do local
     city: 'São Paulo, SP',      ← cidade
     time: 'Às 21h',            ← horário (opcional)
     tag: 'Show',                ← tag: 'Show', 'Gratuito', 'Especial', 'Privado'
     tagColor: 'red',            ← cor: 'red', 'cyan', 'white'
     url: 'shows/nome.html',     ← link da página do show (opcional)
     private: false,             ← true = não abre página, só aparece na lista
   }
*/

window.LT = window.LT || {};
window.LT.shows = [
  {
    date: '2026-06-20',
    day: '20', month: 'Jun', year: '2025',
    venue: 'Arraiá da Lixinho Tropical',
    city: 'São Paulo, SP',
    time: 'Das 14h às 22h · Ingressos Limitados',
    tag: 'Show', tagColor: 'red',
    url: 'shows/arraia-jun-2025.html',
    private: false,
  },
  {
    date: '2026-07-11',
    day: '11', month: 'Jul', year: '2026',
    venue: 'Festa Privada',
    city: 'São Paulo, SP',
    time: '',
    tag: 'Privado', tagColor: 'white',
    url: null,
    private: true,
  },
  {
    date: '2026-07-18',
    day: '18', month: 'Jul', year: '2026',
    venue: 'Baile Brega do Lobo',
    city: 'Jundiaí, SP',
    time: 'Das 14h às 22h · Entrada Gratuita',
    tag: 'Gratuito', tagColor: 'cyan',
    url: 'shows/baile-brega-lobo-jul-2025.html',
    private: false,
  },
  {
    date: '2026-07-23',
    day: '23', month: 'Jul', year: '2026',
    venue: 'Casa de Francisca',
    city: 'Sé, São Paulo, SP',
    time: 'Às 21h · Primeiras 100 pessoas: gratuito',
    tag: 'Show', tagColor: 'red',
    url: 'shows/casa-francisca-jul-2025.html',
    private: false,
  },
  // ── SHOWS PASSADOS ──
  {
    date: '2025-12-13',
    day: '13', month: 'Dec', year: '2025',
    venue: 'IBT — Instituto Brasileiro de Teatro',
    city: 'São Paulo, SP',
    time: '',
    tag: 'Realizado', tagColor: 'white',
    url: null, private: false,
  },
  {
    date: '2025-02-08',
    day: '08', month: 'Feb', year: '2025',
    venue: 'Cotoxó 1175',
    city: 'São Paulo, SP',
    time: '',
    tag: 'Realizado', tagColor: 'white',
    url: null, private: false,
  },
  {
    date: '2025-04-27',
    day: '27', month: 'Abr', year: '2025',
    venue: 'Casa de Francisca',
    city: 'São Paulo, SP',
    time: '',
    tag: 'Realizado', tagColor: 'white',
    url: null, private: false,
  },
  {
    date: '2025-06-07',
    day: '07', month: 'Jun', year: '2025',
    venue: 'Baile Caju Amazônico',
    city: 'São Paulo, SP',
    time: 'Com Manoel Cordeiro',
    tag: 'Especial', tagColor: 'red',
    url: null, private: false,
  },
  {
    date: '2025-02-01',
    day: '01', month: 'Feb', year: '2025',
    venue: 'Baiúca',
    city: 'São Paulo, SP',
    time: '',
    tag: 'Realizado', tagColor: 'white',
    url: null, private: false,
  },
  {
    date: '2025-05-15',
    day: '15', month: 'Mai', year: '2025',
    venue: 'Picles Bar',
    city: 'São Paulo, SP',
    time: '',
    tag: 'Realizado', tagColor: 'white',
    url: null, private: false,
  },
];
