# Samuel Bueno — Landing Page

Landing page de conversão para WhatsApp, para "Registros e Regularização de Empresas".

## Stack
React 18 + Vite 5 + Tailwind CSS v3 (sem dependências extras de UI/ícones)

## Como rodar
```bash
npm install
npm run dev       # ambiente de desenvolvimento
npm run build     # gera a pasta dist/ pronta para publicar
npm run preview   # visualiza o build de produção localmente
```

## O que editar
Praticamente todo o conteúdo do site (número de WhatsApp, textos, lista de
serviços, diferenciais, etc.) está centralizado em:

```
src/data/content.js
```

Troque `WHATSAPP_NUMBER` (com DDI, sem espaços/símbolos) no topo do arquivo
para atualizar o número em todos os botões do site de uma vez.

## Cores e fontes
Definidas em `tailwind.config.js` (paleta aprovada: fundo verde-escuro quase
preto, dourado `#cba552` e sálvia `#abb557`) e carregadas via Google Fonts
em `index.html` (Syne + Space Grotesk).

## Estrutura de seções
- `Navbar` — menu + CTA fixo
- `Hero` — headline, badges de confiança, painel de serviços
- `Services` — grade com os 6 serviços
- `GrowthBanner` — faixa de destaque com skyline
- `Process` — "do plano ao registro"
- `WhyUs` — diferenciais
- `Trust` — segurança jurídica / selos
- `FinalCta` — faixa final de valores + CTA
- `Footer` — rodapé
- `WhatsAppFloat` — botão flutuante
