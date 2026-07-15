| Tarefa | Status | Prioridade |
|---|---|---|
| Confirmar número de WhatsApp real | 🔴 Bloqueado | Alta |
| Confirmar email de contato real | 🔴 Bloqueado | Alta |
| Confirmar URLs de Instagram e LinkedIn | 🔴 Bloqueado | Média |
| Decidir novo texto do H1/eyebrow do Hero | 🔴 Bloqueado | Média |
| Centralizar texto/botão do card "Não sabe qual serviço precisa?" no mobile | ⚪ A fazer | Média |
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
| Botão "Falar com um especialista" do painel do Hero (desktop) com texto invisível | 🟢 Concluído | — |
| Padronizar import da logo (public/ → src/assets/, mesmo padrão do s27) | 🟢 Concluído | — |
| Corrigir ícone dos stats de segurança com contraste ruim (Trust.jsx) | 🟢 Concluído | — |
| Trocar logo do header/footer/card de áreas de atuação e favicon pela logo1 (ícone novo) | 🟢 Concluído | — |
| Remover logo do card de áreas de atuação; logo da seção final maior e quadrada | 🟢 Concluído | — |
| Revisar title/meta/JSON-LD do index.html | 🟢 Concluído | — |
| Rodar revisão de SEO/copy e revisão crítica/criativa | 🟢 Concluído | — |

## Detalhes

### Confirmar número de WhatsApp real
O código ainda tem o placeholder `5511999990000` (`src/data/content.js`, `WHATSAPP_NUMBER`) — usado no botão principal do site inteiro. Cliente ainda não definiu. **Não publicar no Pages com esse valor** — o CTA principal ficaria quebrado/enganoso pra quem visitar o site. (O Pages já está no ar mesmo assim, a pedido da Heloisa — ver "Publicar no GitHub Pages" — mas o número segue pendente.)

### Confirmar email de contato real
Domínio antigo (`atendimento@samuelbueno.com.br`) foi trocado por um placeholder consistente com a marca nova (`atendimento@salmosconsultoriaparalegal.com.br`), mas ainda não é o email real. Esse placeholder já está replicado em `Footer.jsx` e também no JSON-LD do `index.html` — quando o email real for confirmado, atualizar nos dois lugares.

### Confirmar URLs de Instagram e LinkedIn
Ícones já estão no header e no footer (`SOCIAL` em `content.js`), apontando pra `#` como placeholder. Cliente quer pelo menos essas duas redes, mas ainda não passou os perfis.

### Decidir novo texto do H1/eyebrow do Hero
O texto atual ("Registros e regularização de empresas") é o que o cliente aprovou originalmente e por isso **não foi alterado**. Mas ele cita serviços que saíram da lista nova (regularização, registros na junta comercial). Fica pendente decisão da Heloisa sobre se/como ajustar — não decidir isso sem confirmação dela.

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

### Botão "Falar com um especialista" do painel do Hero (desktop) com texto invisível
No painel de "Áreas de atuação" (visível a partir de `xl`, 1280px), o botão inferior usava `bg-forest text-sage` — como os tokens `forest` e `sage` apontavam pra exatamente o mesmo navy (`#1F3856`), o texto do botão ficava invisível (navy sobre navy). Resíduo de quando a paleta era verde (antes da troca pro azul da Salmos Contabilidade). Corrigido trocando `text-sage` por `text-gold` (`Hero.jsx`).

### Padronizar import da logo (public/ → src/assets/, mesmo padrão do s27)
Logo movida de `public/logo.jpg` pra `src/assets/logo.jpg` e importada como módulo em `Logo.jsx`, em vez de referenciada por caminho de string (`/logo.jpg`) — mesmo padrão adotado no projeto s27 e no salmos-contabilidade-preview, pra manter o jeito de incluir imagens consistente entre os projetos.

### Corrigir ícone dos stats de segurança com contraste ruim (Trust.jsx)
O círculo de ícone dos stats (seção "Segurança jurídica") usava `bg-forest text-blue` — mesmo problema de cor idêntica do botão do painel do Hero (`forest` e `blue` são o mesmo navy `#1F3856`), deixando o ícone invisível dentro do próprio círculo. Corrigido trocando `text-blue` por `text-gold`.

### Trocar logo do header/footer/card de áreas de atuação e favicon pela logo1 (ícone novo)
Nova logo (screenshot do monograma "SC" dourado sobre navy, sem o texto "Salmos Consultoria Paralegal" por baixo) salva em `src/assets/logo1.png`. `Logo.jsx` ganhou a prop `variant` (`"icon"` = logo1, padrão; `"full"` = logo completa antiga com o texto, mantida só na seção "Cuidamos da burocracia"). Favicon trocado de `favicon.svg` pra `favicon.png` com a mesma imagem.

### Remover logo do card de áreas de atuação; logo da seção final maior e quadrada
A pedido da Heloisa: tirada a logo do cabeçalho do card "Áreas de atuação" (Hero, painel desktop) — ficou só o texto. Na seção "Cuidamos da burocracia...", `Logo.jsx` ganhou a prop `shape` (`"circle"` padrão, `"square"` com cantos arredondados) e o tamanho ali passou de 40px pra 72px.

### Revisar title/meta/JSON-LD do index.html
`index.html` (title, meta description, canonical, Open Graph, Twitter Card, JSON-LD) ainda tinha os metadados do projeto original "Samuel Bueno" — marca, domínio (`samuelbueno.com.br`) e `hasOfferCatalog` com os 6 serviços antigos, tudo desatualizado desde a virada pra Salmos. Reescrito: title e description pros 3 serviços reais (Abertura, Alterações Contratuais e/ou Estatutárias, Baixa de Empresa); canonical/og:url/robots.txt/sitemap.xml pro domínio `salmosconsultoriaparalegal.com.br` (confirmado pela Heloisa — reservado pro cliente); JSON-LD com `telephone` removido (era o placeholder de WhatsApp de teste — dado falso em structured data é pior que ausente) e `email` alinhado ao placeholder já usado no Footer.
`og:image`/`twitter:image` **não foram mexidos** — continuam apontando pro domínio/arquivo errado (`samuelbueno.com.br/logo.png`, que nem existe mais). Não estava no escopo pedido e depende de decidir uma imagem própria pra compartilhamento em redes sociais.
`theme-color` (`#0a0c0a`) também segue desatualizado — ainda escuro, não bate com o tema claro atual.

### Rodar revisão de SEO/copy e revisão crítica/criativa
Revisão feita aqui (não em paralelo no GPT, como o plano original previa) — revisão crítica (bugs/UX), revisão criativa (ideias de melhoria) e checklist de SEO/copywriting. Achados acionáveis (title/meta/canonical/JSON-LD) já aplicados — ver item acima. Achados que ficaram só registrados, sem ação ainda:
- `og:image`/`twitter:image` quebrados (ver nota acima).
- Links de Instagram/LinkedIn (header/footer) sem `aria-label`, só `title` — resolver junto quando as URLs reais forem confirmadas.
- Claim "Mais de 10 anos cuidando de registros..." (`content.js`, `WHY_US_ITEMS`) não tem confirmação explícita registrada — checar com o cliente.
- FAQ pressupõe sede em São Paulo ("atendem empresas fora de São Paulo?") — confirmar se procede.
- Ideias de melhoria (prova social real, rastreamento de conversão, `FAQPage` JSON-LD pro FAQ, captura de contato fora do WhatsApp, destaque pra "orçamento sem surpresas", foto/rosto humano) — nenhuma aplicada, só sugeridas.

### Publicar no GitHub Pages
~~Depende de pelo menos o WhatsApp real estar definido antes de ir ao ar~~ — publicado em 2026-07-08 a pedido da Heloisa: o Pages serve pra o cliente aprovar visual e testar, não precisa dos dados reais ainda.
