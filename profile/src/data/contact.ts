import { whatsappLink } from '../config';

export const portfolioRepoUrl = 'https://github.com/AlanDiogoR/Profile';

export const contact = {
  email: 'alandiogor@gmail.com',
  mailto: 'mailto:alandiogor@gmail.com',
  whatsappGeneral: whatsappLink(
    'Olá, Alan! Vi seu portfólio e gostaria de conversar sobre um projeto.',
  ),
  links: [
    { name: 'GitHub', url: 'https://github.com/AlanDiogoR', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/alandiogor/', icon: 'linkedin' },
    { name: 'Instagram', url: 'https://www.instagram.com/alandiogorb/', icon: 'instagram' },
  ],
} as const;
