# Portfólio — Alan Diogo

Portfólio de **Alan Diogo**, desenvolvedor full stack júnior e estudante de Engenharia de Software na UTFPR. Feito para recrutadores: projetos com código público, stack, trajetória e currículo em PDF.

**Site:** https://alandiogo.vercel.app

<p align="center">
  <img src="profile/public/og.png" alt="Prévia do portfólio (imagem Open Graph)" width="720"/>
</p>

## Stack

- **Next.js 14** (Pages Router, páginas estáticas) + **React 18** + **TypeScript 5** (strict)
- **Tailwind CSS 3** com tokens de cor em CSS variables (tema claro/escuro)
- **next/font** (Space Grotesk, Inter e JetBrains Mono, sem bloqueio de render) e **next/image** (WebP, lazy loading, `sizes` responsivo)
- **react-icons**, **ESLint** (`eslint-config-next`), **pnpm**
- Deploy na **Vercel**

## Projetos em destaque

| Projeto | O que é | Links |
|---|---|---|
| Mood Sharing | App React Native/Expo + API Node.js/Express/MongoDB | [código](https://github.com/AlanDiogoR/Mood-Sharing) |
| Grivy | Controle financeiro: Spring Boot + Nuxt/Vue | [site](https://grivy.netlify.app) · [vídeo](https://youtu.be/ZRDuhOfDv9A) · [código](https://github.com/AlanDiogoR/Desafio-Astrocode) |
| CodeLeap Network | Rede social (teste técnico): React, Redux Toolkit, Firebase | [site](https://code-leap-test-tau.vercel.app) · [código](https://github.com/AlanDiogoR/CodeLeap-test) |
| Verdan (TCC) | E-commerce full stack com painel em Electron | [código](https://github.com/AlanDiogoR/TCC) |
| Controle Financeiro | Entradas, saídas e busca (React, Vite, json-server), commit `a05ce48` | [código](https://github.com/AlanDiogoR/Controle-finaceiro/tree/a05ce48631f37accf88168a31a995b1e09de5b34) |
| IShop | Loja com checkout Stripe em Next.js | [código](https://github.com/AlanDiogoR/IShop) |
| Todo List | Lista de tarefas do Ignite | [código](https://github.com/AlanDiogoR/Rocketseat-challenge/tree/main/todo%20list) |
| Coffee Delivery | Cabeçalho da loja de cafés do Ignite | [código](https://github.com/AlanDiogoR/Rocketseat-challenge/tree/main/Coffe%20Delivery) |
| Pomodoro | Timer Ignite Time | [código](https://github.com/AlanDiogoR/Ignite-Ts-02/tree/main/Ignite-time) |
| UTF-Projetos | Trabalhos da graduação, com o site Horizon Studio | [site](https://alandiogor.github.io/UTF-Projetos/) · [código](https://github.com/AlanDiogoR/UTF-Projetos) |
| Spring User | CRUD de usuários em Spring Boot | [código](https://github.com/AlanDiogoR/Spring-User) |
| ICall | Design system em monorepo | [código](https://github.com/AlanDiogoR/ICall) |
| Backend Receitas | API de receitas | [código](https://github.com/AlanDiogoR/backend-receitas) |
| API Node.js | Estudo de API e front | [código](https://github.com/AlanDiogoR/API-nodejs) |
| Node.js | Exercícios de Express | [código](https://github.com/AlanDiogoR/nodejs) |
| Exercícios PDF | Lógica de programação em HTML | [código](https://github.com/AlanDiogoR/Exercicios-pdf) |

A API do Grivy está temporariamente fora do ar; o front continua publicado.

## Estrutura

```
profile/
├── public/            # imagens (WebP), og.png, favicon, robots.txt, sitemap.xml, cv/
└── src/
    ├── components/    # Header, Hero, ProjectCard, Projects, About, Skills, Timeline, Contact, Footer, Button, Tag
    ├── contexts/      # ThemeContext (tema claro/escuro salvo no localStorage)
    ├── data/          # conteúdo: bio, projetos, skills, timeline, contato
    ├── pages/         # _app (fontes), _document (lang pt-BR), index (SEO/meta)
    └── styles/        # globals.css (tokens e foco visível)
```

O conteúdo fica em `src/data/`: para adicionar um projeto, basta incluir um item em `projects.ts`.

## Como rodar

Requer Node 18+ e pnpm.

```bash
cd profile
pnpm install
pnpm dev          # http://localhost:3000
pnpm lint         # ESLint
pnpm exec tsc --noEmit
pnpm build && pnpm start
```

`NEXT_PUBLIC_SITE_URL` (opcional) define a URL usada em canonical, Open Graph e JSON-LD.

## Qualidade

- **SEO:** title e description, Open Graph e Twitter Card, canonical, JSON-LD `Person`, `sitemap.xml`, `robots.txt`, `lang="pt-BR"`
- **Acessibilidade:** HTML semântico (`header`, `nav`, `main`, `section`, `article`), link "Pular para o conteúdo", foco visível, `aria-label` em botões de ícone, texto alternativo nas imagens, alvos de toque de 44 px
- **Responsivo:** de 320 px a 1440 px sem rolagem horizontal

## Contato

- E-mail: alandiogor@gmail.com
- GitHub: [AlanDiogoR](https://github.com/AlanDiogoR)
