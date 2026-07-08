| Tarefa | Status | Prioridade |
|---|---|---|
| Confirmar número de WhatsApp real | 🔴 Bloqueado | Alta |
| Confirmar email de contato real | 🔴 Bloqueado | Alta |
| Confirmar URLs de Instagram e LinkedIn | 🔴 Bloqueado | Média |
| Decidir novo texto do H1/eyebrow do Hero | 🔴 Bloqueado | Média |
| Revisar title/meta/JSON-LD do index.html | 🔴 Bloqueado | Média |
| Corrigir logo quebrado no GitHub Pages | ⚪ A fazer | Alta |
| Corrigir azul: usar o tom escuro da Salmos Contabilidade | ⚪ A fazer | Alta |
| Corrigir responsividade do Hero no mobile | ⚪ A fazer | Alta |
| Revisar/remover anel decorativo do Hero ("parece cabelo") | ⚪ A fazer | Média |
| Centralizar texto/botão do card "Não sabe qual serviço precisa?" no mobile | ⚪ A fazer | Média |
| Rodar revisão de SEO (aqui e no GPT) | ⚪ A fazer | Média |
| Publicar no GitHub Pages | 🟢 Concluído | — |
| Tema claro (branco + dourado + azul) | 🟢 Concluído | — |
| Rename para Salmos Consultoria Paralegal | 🟢 Concluído | — |
| Lista de 3 serviços (Abertura, Alterações, Baixa) | 🟢 Concluído | — |
| FAQ: junta comercial (90%) + remover pergunta de pagamento | 🟢 Concluído | — |
| Ícones de Instagram/LinkedIn no header e footer | 🟢 Concluído | — |

## Detalhes

### Confirmar número de WhatsApp real
O código ainda tem o placeholder `5511999990000` (`src/data/content.js`, `WHATSAPP_NUMBER`) — usado no botão principal do site inteiro. Cliente ainda não definiu. **Não publicar no Pages com esse valor** — o CTA principal ficaria quebrado/enganoso pra quem visitar o site.

### Confirmar email de contato real
Domínio antigo (`atendimento@samuelbueno.com.br`) foi trocado por um placeholder consistente com a marca nova (`atendimento@salmosconsultoriaparalegal.com.br`), mas ainda não é o email real — aparece em `Footer.jsx` e precisa ser replicado em `index.html` (meta tags e JSON-LD) quando confirmado.

### Confirmar URLs de Instagram e LinkedIn
Ícones já estão no header e no footer (`SOCIAL` em `content.js`), apontando pra `#` como placeholder. Cliente quer pelo menos essas duas redes, mas ainda não passou os perfis.

### Decidir novo texto do H1/eyebrow do Hero
O texto atual ("Registros e regularização de empresas") é o que o cliente aprovou originalmente e por isso **não foi alterado**. Mas ele cita serviços que saíram da lista nova (regularização, registros na junta comercial). Fica pendente decisão da Heloisa sobre se/como ajustar — não decidir isso sem confirmação dela.

### Revisar title/meta/JSON-LD do index.html
`index.html` (title, meta description, Open Graph, Twitter Card, JSON-LD) tem a mesma situação do Hero: description/title inteiros construídos em cima de "abertura, regularização e alteração... Registros na Junta Comercial, licenças e assessoria empresarial", e o JSON-LD `hasOfferCatalog` ainda lista os 6 serviços antigos. Não foi tocado — precisa da Heloisa pra decidir o texto novo antes de mexer. `theme-color` também ainda está escuro (`#0a0c0a`), tecnicamente desatualizado desde a troca de tema, mas deixei junto pra revisar tudo de uma vez.

### Corrigir logo quebrado no GitHub Pages
A imagem do logo não está aparecendo no site publicado (helo-labs.github.io/salmos-paralegal-preview/). Investigar — provavelmente o `base: '/salmos-paralegal-preview/'` do `vite.config.js` não está resolvendo o caminho `/logo.png` corretamente no build, ou o arquivo não foi incluído no `dist` publicado.

### Corrigir azul: usar o tom escuro da Salmos Contabilidade
O azul-marinho `#07172f` (extraído por pixel do samuel-logo.jpeg) ficou quase preto — não gostou. O azul mais claro `#3b82f6` também não gostou. Voltar pro azul escuro já usado no projeto Salmos Contabilidade (`#1F3856`, cor `surface` de lá) — nem um nem outro dos dois extremos que já tentamos.

### Corrigir responsividade do Hero no mobile
Está péssima — não detalhado ainda o que exatamente quebra, revisar com calma na próxima sessão.

### Revisar/remover anel decorativo do Hero ("parece cabelo")
O anel decorativo (`border border-blue/[0.20]`) ficou com aparência ruim — descrito como "parece um cabelo na tela". Repensar esse elemento (opacidade, espessura, ou remover).

### Centralizar texto/botão do card "Não sabe qual serviço precisa?" no mobile
No mobile, o texto e o botão dentro do card (seção Services, strip inferior) deveriam ficar centralizados — usar como referência o botão "Começar agora" da seção "Cuidamos da burocracia" (GrowthBanner), que já está centralizado corretamente no mobile.

### Rodar revisão de SEO (aqui e no GPT)
Heloisa vai rodar a revisão de SEO tanto aqui quanto no GPT (ChatGPT) — comparar resultados antes de aplicar mudanças.

### Publicar no GitHub Pages
~~Depende de pelo menos o WhatsApp real estar definido antes de ir ao ar~~ — publicado em 2026-07-08 a pedido da Heloisa: o Pages serve pra o cliente aprovar visual e testar, não precisa dos dados reais ainda.
