/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Tema claro: fundo branco, destaques em dourado + azul (tonalidade
        // da Salmos Contabilidade). Os nomes dos tokens (forest/green/sage)
        // ficaram do template original — hoje eles apontam pra azul, não verde.
        bg: '#ffffff',
        bg2: '#f7f4ec',
        bg3: '#ffffff',
        surface: '#eef3fb',
        forest: '#1f3856',
        green: '#16283f',
        gold: '#cba552',
        sage: '#3b82f6',
        blue: '#3b82f6',
        hi: '#10203a',
        mid: 'rgba(16,32,58,.68)',
        lo: 'rgba(16,32,58,.52)',
        xlo: 'rgba(16,32,58,.34)',
        border: 'rgba(16,32,58,.10)',
        border2: 'rgba(16,32,58,.06)',
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
        card: '0 12px 32px rgba(16,32,58,.12), 0 0 0 1px rgba(16,32,58,.04)',
      },
      backgroundImage: {
        dotgrid:
          'radial-gradient(circle, rgba(59,130,246,.16) 1px, transparent 1px)',
      },
      backgroundSize: {
        dotgrid: '34px 34px',
      },
    },
  },
  plugins: [],
}
