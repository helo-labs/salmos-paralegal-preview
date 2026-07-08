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
    title: 'Alterações Contratuais',
    desc: 'Alterações de contrato social, ativo, sócios, endereço e muito mais.',
  },
  {
    icon: 'shield',
    title: 'Regularização Empresarial',
    desc: 'Regularizamos pendências e mantemos sua empresa em dia com os órgãos competentes.',
  },
  {
    icon: 'folder',
    title: 'Registros na Junta Comercial',
    desc: 'Arquivamentos de atos societários com total segurança e agilidade.',
  },
  {
    icon: 'list',
    title: 'Licenças e Inscrições',
    desc: 'Obtenção de alvarás, licenças e inscrições para o seu negócio funcionar.',
  },
  {
    icon: 'chart',
    title: 'Assessoria Empresarial',
    desc: 'Suporte estratégico para o crescimento e proteção da sua empresa.',
  },
]

export const HOW_IT_WORKS = [
  {
    title: 'Você chama no WhatsApp',
    desc: 'Conte rapidamente o que precisa — abertura, regularização ou alteração da sua empresa.',
  },
  {
    title: 'Fazemos o diagnóstico',
    desc: 'Avaliamos sua situação e explicamos, sem juridiquês, exatamente o que precisa ser feito.',
  },
  {
    title: 'Cuidamos da documentação',
    desc: 'Preparamos e protocolamos tudo junto aos órgãos competentes, com você acompanhando cada etapa.',
  },
  {
    title: 'Empresa em dia',
    desc: 'Você recebe a confirmação e a documentação pronta — sem sair de casa.',
  },
]

export const FAQ_ITEMS = [
  {
    q: 'Preciso ir até um cartório ou órgão público?',
    a: 'Não. Todo o processo é conduzido 100% online — você só precisa nos enviar os documentos solicitados pelo WhatsApp ou e-mail.',
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
    q: 'Como funciona o pagamento pelos serviços?',
    a: 'Após avaliarmos o seu caso, enviamos um orçamento claro e fechado, sem taxas escondidas. O pagamento pode ser combinado diretamente com o especialista.',
  },
  {
    q: 'Vocês atendem empresas fora de São Paulo?',
    a: 'Sim, atendemos empresas em todo o Brasil — todo o processo acontece online, então a localização não é um problema.',
  },
]

export const WHY_US_ITEMS = [
  'Mais de 10 anos cuidando de registros e regularização empresarial',
  'Equipe especializada, sempre atualizada com a legislação vigente',
  'Cada etapa documentada e validada antes de seguir para a próxima',
  'Um único ponto de contato do início ao encerramento do processo',
]

export const TRUST_STATS = [
  { label: 'Conformidade Legal', icon: 'shield' },
  { label: 'Redução de Riscos', icon: 'trend-down' },
  { label: 'Credibilidade no Mercado', icon: 'badge' },
  { label: 'Crescimento Sustentável', icon: 'trend-up' },
]

export const FOOTER_STRIP_ITEMS = [
  '100% online',
  'Todo o Brasil',
  'Orçamento sem surpresas',
  'Suporte direto com o especialista',
]
