import { whatsappLink } from '../config';

export interface Service {
  id: string;
  title: string;
  forWho: string;
  from: string;
  deadline: string;
  items: string[];
  whatsapp: string;
}

/** Valores "a partir de" = preço de entrada de /workspace/retorno/ofertas-dev.md. Escopo final é combinado por escrito. */
export const services: Service[] = [
  {
    id: 'landing',
    title: 'Landing page + botão WhatsApp',
    forWho: 'Loja, clínica, oficina ou bicicletaria que precisa de uma página para anúncio, Instagram e Google.',
    from: 'R$ 497',
    deadline: '5 dias úteis',
    items: [
      'Página única responsiva, pensada primeiro para o celular',
      'Botão de WhatsApp fixo com mensagem pré-preenchida',
      'SEO básico e publicação em URL pública',
    ],
    whatsapp: whatsappLink(
      'Olá, Alan! Vi seu portfólio e quero saber mais sobre a Landing page + botão WhatsApp (a partir de R$ 497, 5 dias úteis). Podemos conversar?',
    ),
  },
  {
    id: 'portfolio',
    title: 'Portfólio / Linktree profissional',
    forWho: 'Autônomos e estudantes que precisam de um link único, próprio e profissional para a bio.',
    from: 'R$ 197',
    deadline: '2 a 3 dias úteis',
    items: [
      'Página de links ou portfólio sem depender de plataforma de terceiros',
      'Bio, serviços/projetos, WhatsApp e links das suas redes',
      'Publicação em URL pública e orientação para usar na bio',
    ],
    whatsapp: whatsappLink(
      'Olá, Alan! Vi seu portfólio e quero saber mais sobre o Portfólio / Linktree (a partir de R$ 197, 2 a 3 dias úteis). Podemos conversar?',
    ),
  },
  {
    id: 'automacao',
    title: 'Automação de WhatsApp Business',
    forWho: 'Negócio que responde todo dia as mesmas perguntas: preço, horário, endereço.',
    from: 'R$ 297',
    deadline: '3 dias úteis',
    items: [
      'Perfil, horário, endereço e catálogo configurados',
      'Saudação, ausência e respostas rápidas para as dúvidas mais comuns',
      'Link wa.me com mensagem pronta e QR Code para balcão e Instagram',
    ],
    whatsapp: whatsappLink(
      'Olá, Alan! Vi seu portfólio e quero saber mais sobre a Automação de WhatsApp Business (a partir de R$ 297, 3 dias úteis). Podemos conversar?',
    ),
  },
];

export const serviceTerms = [
  'Escopo e preço confirmados por escrito no WhatsApp antes de começar.',
  'Entrada de 50% para iniciar; saldo na entrega.',
  'Até 2 rodadas de ajuste dentro do escopo.',
  'Entrega técnica combinada, sem promessa de resultado de vendas.',
];
