// ─────────────────────────────────────────────────────────
// Configuração central da landing page.
// Troque aqui o número do WhatsApp (com DDI) e os textos.
// ─────────────────────────────────────────────────────────

const WHATSAPP_NUMBER = '5511999990000'

function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WA = {
  default: waLink('Olá! Gostaria de solicitar uma consulta para regularizar/abrir minha empresa.'),
  service: (name) =>
    waLink(`Olá! Tenho interesse no serviço de ${name} e gostaria de mais informações.`),
}

export const NAV_LINKS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Por que nós', href: '#por-que-nos' },
  { label: 'Dúvidas', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

// Placeholder até o cliente confirmar os perfis reais — ver BACKLOG.md.
export const SOCIAL = {
  instagram: '#',
  linkedin: '#',
}

export const HERO_BADGES = [
  { label: 'Segurança', sub: 'e Conformidade', icon: 'shield' },
  { label: 'Agilidade', sub: 'nos Processos', icon: 'clock' },
  { label: 'Atendimento', sub: 'Personalizado', icon: 'users' },
  { label: 'Atendimento', sub: 'em todo o Brasil', icon: 'map' },
]

export const SERVICES = [
  {
    icon: 'building',
    title: 'Abertura de Empresas',
    desc: 'Constituição de empresas de forma rápida e segura, do zero ao CNPJ ativo.',
  },
  {
    icon: 'edit',
    title: 'Alterações Contratuais e/ou Estatutárias',
    desc: 'Atualização de contrato social, quadro societário, atividades, endereço e demais alterações legais.',
  },
  {
    icon: 'folder',
    title: 'Baixa de Empresa',
    desc: 'Encerramento da empresa com toda a documentação e baixas necessárias junto aos órgãos competentes.',
  },
]

export const HOW_IT_WORKS = [
  {
    title: 'Você chama no WhatsApp',
    desc: 'Explique rapidamente sua necessidade — abertura, regularização ou alteração da sua empresa.',
  },
  {
    title: 'Fazemos o diagnóstico',
    desc: 'Avaliamos sua situação e explicamos, sem juridiquês, exatamente o que precisa ser feito.',
  },
  {
    title: 'Cuidamos da documentação',
    desc: 'Preparamos e protocolamos tudo junto aos órgãos competentes, mantendo você informado durante todo o processo.',
  },
  {
    title: 'Empresa em dia',
    desc: 'Você recebe a confirmação e a documentação pronta.',
  },
]

export const FAQ_ITEMS = [
  {
    q: 'Preciso ir até a junta comercial ou algum órgão público?',
    a: 'Na grande maioria dos casos — cerca de 90% — não. Conduzimos o processo online e você só precisa nos enviar os documentos solicitados pelo WhatsApp ou e-mail. Existem situações específicas em que a presença é exigida por lei; nesses casos avisamos com antecedência e te acompanhamos em cada etapa.',
  },
  {
    q: 'Quanto tempo leva para abrir ou regularizar minha empresa?',
    a: 'Depende do tipo de serviço: aberturas costumam sair em até 7 dias úteis, enquanto regularizações com pendências mais complexas podem levar até 30 dias. Após a análise inicial do seu caso, damos um prazo específico.',
  },
  {
    q: 'Atendem qualquer tipo de empresa (MEI, LTDA, S.A.)?',
    a: 'Sim. Atendemos MEI, EIRELI, LTDA, S.A. e demais enquadramentos, tanto para abertura quanto para regularização e alterações contratuais.',
  },
  {
    q: 'Vocês atendem empresas fora de São Paulo?',
    a: 'Sim, atendemos empresas em todo o Brasil. Temos experiência com juntas comerciais de todos os estados, sem exceção — o processo acontece online, então a localização da sua empresa não é um problema.',
  },
]

export const WHY_US_ITEMS = [
  'Atendimento consultivo do início ao fim',
  'Comunicação direta com o responsável pelo seu processo',
  'Processos totalmente digitais na maioria dos casos',
  'Documentação revisada antes de cada protocolo',
  'Experiência com juntas comerciais de todo o Brasil',
]

export const TRUST_STATS = [
  { label: 'Conformidade Legal', icon: 'shield' },
  { label: 'Redução de Riscos', icon: 'trend-down' },
  { label: 'Credibilidade no Mercado', icon: 'badge' },
  { label: 'Crescimento Sustentável', icon: 'trend-up' },
]

export const FOOTER_STRIP_ITEMS = [
  'Atendimento online',
  'Todo o Brasil',
  'Orçamento transparente',
  'Suporte direto com o especialista',
]
