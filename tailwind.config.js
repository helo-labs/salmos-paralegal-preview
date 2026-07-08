/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0c0a',
        bg2: '#0f120f',
        bg3: '#141814',
        surface: '#1a1f1a',
        forest: '#192518',
        green: '#1c2d1b',
        gold: '#cba552',
        sage: '#abb557',
        hi: '#f0ede6',
        mid: 'rgba(240,237,230,.78)',
        lo: 'rgba(240,237,230,.56)',
        xlo: 'rgba(240,237,230,.30)',
        border: 'rgba(255,255,255,.10)',
        border2: 'rgba(255,255,255,.06)',
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
        card: '0 20px 48px rgba(0,0,0,.45), 0 0 0 1px rgba(255,255,255,.04)',
      },
      backgroundImage: {
        dotgrid:
          'radial-gradient(circle, rgba(203,165,82,.16) 1px, transparent 1px)',
      },
      backgroundSize: {
        dotgrid: '34px 34px',
      },
    },
  },
  plugins: [],
}
