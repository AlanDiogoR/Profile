# Alan Diogo | Portfólio

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwind-css)

Portfólio profissional desenvolvido em Next.js 14 (Pages Router), TypeScript e Tailwind CSS.

## Sobre o projeto

Site pessoal/portfólio com apresentação da trajetória, habilidades e projetos em desenvolvimento de software.

## Pré-requisitos

- Node.js 18+
- pnpm (recomendado — `corepack enable` e `pnpm install`)

## Comandos

Use **pnpm** em todos os comandos:

```bash
# Instalar dependências
pnpm install

# Desenvolvimento
pnpm run dev

# Build de produção
pnpm run build

# Servir build
pnpm start

# Lint
pnpm run lint
```

Acesse [http://localhost:3000](http://localhost:3000) em desenvolvimento.

## Deploy na Vercel

1. Conecte o repositório à Vercel
2. Configure o projeto:
   - **Framework Preset:** Next.js
   - **Root Directory:** `profile` (se o repositório tiver profile como subpasta)
   - **Build Command:** `pnpm build` ou `next build`
   - **Output Directory:** `.next`
   - **Install Command:** `pnpm install`
3. Variáveis de ambiente (opcional): `NEXT_PUBLIC_SITE_URL` = URL do site (ex: `https://seu-dominio.vercel.app`) para OG e sitemap
4. Deploy

## Estrutura do projeto

```
profile/
├── src/
│   ├── components/   # Header, Hero, About, Skills, Timeline, FeaturedProjects, Contact
│   ├── data/        # bio, skills, projects, contact, timeline
│   ├── hooks/       # useInView
│   ├── pages/
│   ├── styles/
│   ├── types/       # Tipos compartilhados
│   └── utils/       # socialIcons, etc.
├── public/
│   ├── images/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
└── package.json
```

## Links

- [GitHub](https://github.com/AlanDiogoR)
- [LinkedIn](https://www.linkedin.com/in/alandiogor/)
- [Instagram](https://www.instagram.com/alandiogorb/)
- [Repositório do portfólio](https://github.com/AlanDiogoR/Profile)

## Licença

Uso pessoal.
