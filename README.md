# Portfolio - Alan Diogo

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwind-css)

Portfólio profissional desenvolvido em Next.js 14 (Pages Router), TypeScript e Tailwind CSS.

## Sobre o projeto

Site pessoal/portfólio com apresentação da trajetória, habilidades e projetos em desenvolvimento de software.

## Pré-requisitos

- Node.js 18+
- pnpm (`corepack enable` para habilitar)

## Comandos

Use **pnpm** em todos os comandos:

```bash
cd profile
pnpm install
pnpm run dev      # Desenvolvimento
pnpm run build    # Build de produção
pnpm start       # Servir build
pnpm run lint    # Lint
```

Acesse [http://localhost:3000](http://localhost:3000) em desenvolvimento.

## Deploy na Vercel

1. Conecte o repositório à Vercel
2. Configure:
   - **Framework Preset:** Next.js
   - **Root Directory:** `profile`
   - **Build Command:** `pnpm build`
   - **Output Directory:** `.next`
   - **Install Command:** `pnpm install`
3. Opcional: `NEXT_PUBLIC_SITE_URL` = URL do site
4. Deploy

## Links

- [GitHub](https://github.com/AlanDiogoR)
- [LinkedIn](https://www.linkedin.com/in/alandiogor/)
- [Instagram](https://www.instagram.com/alandiogorb/)
- [Repositório do portfólio](https://github.com/AlanDiogoR/Profile)

## Estrutura do projeto

```
profile/
├── src/
│   ├── components/     # Header, Hero, About, Skills, ProjectCard, etc.
│   ├── data/          # bio, skills, projects, contact — fácil de editar
│   ├── pages/
│   └── styles/
├── public/
└── package.json
```

## Licença

Uso pessoal.
