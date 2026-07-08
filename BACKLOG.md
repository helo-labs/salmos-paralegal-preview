| Tarefa | Status | Prioridade |
|---|---|---|
| Confirmar número de WhatsApp real | 🔴 Bloqueado | Alta |
| Confirmar email de contato real | 🔴 Bloqueado | Alta |
| Confirmar URLs de Instagram e LinkedIn | 🔴 Bloqueado | Média |
| Decidir novo texto do H1/eyebrow do Hero | 🔴 Bloqueado | Média |
| Revisar title/meta/JSON-LD do index.html | 🔴 Bloqueado | Média |
| Publicar no GitHub Pages | ⚪ A fazer | Alta |
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

### Publicar no GitHub Pages
Depende de pelo menos o WhatsApp real estar definido antes de ir ao ar — combinar com a Heloisa se publica mesmo assim com o placeholder ou espera confirmação do cliente.
