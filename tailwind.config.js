/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Tema claro: fundo branco, destaques em dourado + azul (tonalidade
        // da Salmos Contabilidade). Os nomes dos tokens (forest/green/sage)
        // ficaram do template original — hoje eles apontam pra azul, não verde.
        // Azul e dourado extraídos por amostragem de pixel do logo aprovado
        // (samuel-logo.jpeg): navy #07172f, dourado #e1ba4e. Um único azul
        // (escuro) no projeto todo, sem azul claro adicional.
        bg: '#ffffff',
        bg2: '#f7f4ec',
        bg3: '#ffffff',
        surface: '#eef1f5',
        forest: '#07172f',
        green: '#0e2a4d',
        gold: '#e1ba4e',
        sage: '#07172f',
        blue: '#07172f',
        hi: '#07172f',
        mid: 'rgba(7,23,47,.68)',
        lo: 'rgba(7,23,47,.52)',
        xlo: 'rgba(7,23,47,.34)',
        border: 'rgba(7,23,47,.10)',
        border2: 'rgba(7,23,47,.06)',
        wa: '#178a48',
        waDark: '#126b38',
        waBright: '#2fdb6f',
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        body: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        card: '0 12px 32px rgba(7,23,47,.12), 0 0 0 1px rgba(7,23,47,.04)',
      },
      backgroundImage: {
        dotgrid:
          'radial-gradient(circle, rgba(7,23,47,.16) 1px, transparent 1px)',
      },
      backgroundSize: {
        dotgrid: '34px 34px',
      },
    },
  },
  plugins: [],
}
