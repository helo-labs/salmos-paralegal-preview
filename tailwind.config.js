/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Tema claro: fundo branco, destaques em dourado + azul (tonalidade
        // da Salmos Contabilidade). Os nomes dos tokens (forest/green/sage)
        // ficaram do template original — hoje eles apontam pra azul, não verde.
        // Azul = #1F3856 (tom "surface" da Salmos Contabilidade), dourado
        // #e1ba4e. Um único azul (escuro) no projeto todo, sem azul claro
        // adicional. `blue2` é um azul vivo/saturado (mesma família de matiz,
        // mais aberto) usado no gradiente do Hero e em destaques de título.
        bg: '#ffffff',
        bg2: '#f7f4ec',
        bg3: '#ffffff',
        surface: '#eef1f5',
        forest: '#1F3856',
        green: '#0e2a4d',
        gold: '#e1ba4e',
        sage: '#1F3856',
        blue: '#1F3856',
        hi: '#1F3856',
        blue2: '#1C569C',
        mid: 'rgba(31,56,86,.68)',
        lo: 'rgba(31,56,86,.52)',
        xlo: 'rgba(31,56,86,.34)',
        border: 'rgba(31,56,86,.10)',
        border2: 'rgba(31,56,86,.06)',
        wa: '#178a48',
        waDark: '#126b38',
        waBright: '#2fdb6f',
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        body: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        accent: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 12px 32px rgba(31,56,86,.12), 0 0 0 1px rgba(31,56,86,.04)',
      },
    },
  },
  plugins: [],
}
