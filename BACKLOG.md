| Tarefa | Status | Prioridade |
|---|---|---|
| Confirmar número de WhatsApp real | 🔴 Bloqueado | Alta |
| Confirmar email de contato real | 🔴 Bloqueado | Alta |
| Confirmar URLs de Instagram e LinkedIn | 🔴 Bloqueado | Média |
| Decidir novo texto do H1/eyebrow do Hero | 🔴 Bloqueado | Média |
| Revisar title/meta/JSON-LD do index.html | 🔴 Bloqueado | Média |
| Centralizar texto/botão do card "Não sabe qual serviço precisa?" no mobile | ⚪ A fazer | Média |
| Rodar revisão de SEO (aqui e no GPT) | ⚪ A fazer | Média |
| Botão "Falar com um especialista" do painel do Hero (desktop) com texto invisível | ⚪ A fazer | Alta |
| Publicar no GitHub Pages | 🟢 Concluído | — |
| Tema claro (branco + dourado + azul) | 🟢 Concluído | — |
| Rename para Salmos Consultoria Paralegal | 🟢 Concluído | — |
| Lista de 3 serviços (Abertura, Alterações, Baixa) | 🟢 Concluído | — |
| FAQ: junta comercial (90%) + remover pergunta de pagamento | 🟢 Concluído | — |
| Ícones de Instagram/LinkedIn no header e footer | 🟢 Concluído | — |
| Corrigir azul: usar o tom escuro da Salmos Contabilidade | 🟢 Concluído | — |
| Corrigir responsividade do Hero no mobile | 🟢 Concluído | — |
| Remover anel decorativo do Hero e refazer o fundo | 🟢 Concluído | — |
| Recolorir destaques dos títulos das seções | 🟢 Concluído | — |

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

### Corrigir azul: usar o tom escuro da Salmos Contabilidade
O azul-marinho `#07172f` (extraído por pixel do samuel-logo.jpeg) ficou quase preto — não gostou. O azul mais claro `#3b82f6` também não gostou. Voltado pro azul escuro já usado no projeto Salmos Contabilidade (`#1F3856`, cor `surface` de lá). Trocado em `tailwind.config.js` (tokens `forest`/`sage`/`blue`/`hi` e as variantes `rgba` de `mid`/`lo`/`xlo`/`border`/`border2`/sombra/dotgrid) e nos dois glows do Hero em `Hero.jsx`.

### Corrigir responsividade do Hero no mobile
Causa raiz identificada: o container do Hero usa `display: grid` (`lg:grid-cols-2`), e o item da coluna esquerda tinha o `min-width: auto` padrão do CSS Grid — isso impedia o item de encolher pra caber no viewport, esticando o Hero além da largura das outras seções (por isso parecia puxado pra direita/desalinhado). Corrigido com `min-w-0` no item (`Hero.jsx`).
Efeito colateral: com o container corretamente contido em ~335px (mobile), a palavra "regularização" em 34px (~371px de largura) não cabe mais numa linha. Testado `hyphens-auto` pra hifenização automática, mas o Chrome usado no teste não tinha dicionário pt-BR disponível — suporte é inconsistente entre navegadores, não confiável. Reduzida a fonte do H1 no mobile (34px → 28px) pra a palavra caber inteira, sem quebrar no meio — confirmado por pedido explícito da Heloisa. Mantido `break-words` como rede de segurança pra telas muito estreitas (≤~340px).
Um segundo overflow do mesmo tipo apareceu depois em telas de notebook (1024-1279px, breakpoint `lg`): o painel de 2 colunas espremia a coluna de texto pra ~456-520px, mas o H1 saltava pra 54px (~589px), quebrando a palavra de novo. Corrigido limitando o H1 a 46px no máximo e adiando o layout de 2 colunas (painel de serviços à direita) de `lg` (1024px) pra `xl` (1280px) — confirmado com a Heloisa antes de aplicar.
Verificado sem overflow horizontal em 320px, 375px, 1024px, 1152px, 1280px, 1440px e full-page.

### Remover anel decorativo do Hero e refazer o fundo
Anel removido. Depois de algumas iterações (pedido inicial de mesh gradient + flow lines ficou "embaçado"/"horrível" nas duas primeiras tentativas — bolinhas desfocadas isoladas em vez de gradiente contínuo, e fitas com curvas soltas), a Heloisa pediu pra simplificar: parar com linhas/malhas e fazer só um gradiente suave nos moldes da OpenAI/Supabase. Versão final: dois `radial-gradient` grandes e bem diluídos (`transparent` a 78%) num único `div`, sem blur — azul vivo no canto superior direito, dourado no canto inferior esquerdo, sem bordas visíveis. Também removido o dot grid de fundo (`bg-dotgrid`), a pedido dela, e as classes/tokens correspondentes tirados do `tailwind.config.js` por não terem mais uso.
Nesse processo surgiu um segundo azul — `blue2` (`#1C569C`), vivo/saturado, mesma família de matiz do azul-marinho `#1F3856` — confirmado pela Heloisa (hex passado por ela) pra usar como cor complementar no lugar do verde-sálvia descartado.

### Recolorir destaques dos títulos das seções
Os `<span>` de destaque dentro dos `<h2>` de cada seção usavam a classe `text-blue`, que aponta pra mesma cor de `text-hi` (o navy principal) — por isso os títulos pareciam todos de uma cor só, sem destaque nenhum. Recolorido (só a cor, texto/copy intocado) alternando `blue2` e `gold`: Serviços, Como funciona, Segurança jurídica e Dúvidas ficaram em azul vivo (`blue2`); Cuidamos da burocracia (banner) e Por que nós ("Salmos?") ficaram em dourado (`gold`).

### Centralizar texto/botão do card "Não sabe qual serviço precisa?" no mobile
No mobile, o texto e o botão dentro do card (seção Services, strip inferior) deveriam ficar centralizados — usar como referência o botão "Começar agora" da seção "Cuidamos da burocracia" (GrowthBanner), que já está centralizado corretamente no mobile.

### Rodar revisão de SEO (aqui e no GPT)
Heloisa vai rodar a revisão de SEO tanto aqui quanto no GPT (ChatGPT) — comparar resultados antes de aplicar mudanças.

### Botão "Falar com um especialista" do painel do Hero (desktop) com texto invisível
Notado de passagem ao revisar o Hero — não é do escopo do que foi pedido, só registrando. No painel de "Áreas de atuação" (visível a partir de `xl`, 1280px), o botão inferior usa `bg-forest text-sage` — como os tokens `forest` e `sage` apontam pra exatamente o mesmo navy (`#1F3856`), o texto do botão fica invisível (navy sobre navy). Provavelmente um resíduo de quando a paleta era verde (antes da troca pro azul da Salmos Contabilidade).

### Publicar no GitHub Pages
~~Depende de pelo menos o WhatsApp real estar definido antes de ir ao ar~~ — publicado em 2026-07-08 a pedido da Heloisa: o Pages serve pra o cliente aprovar visual e testar, não precisa dos dados reais ainda.
