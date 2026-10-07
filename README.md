# Portfólio — Alan Diogo

Site pessoal e portfólio de Alan Diogo, estudante de Engenharia de Software na UTFPR. Reúne projetos, habilidades, trajetória e serviços, com contato direto pelo WhatsApp.

**Site publicado:** https://profile-peach-one-26.vercel.app

<p align="center">
  <img src="profile/public/og.png" alt="Prévia do portfólio (imagem Open Graph)" width="720"/>
</p>

## Stack

- **Next.js 14** (Pages Router) + **React 18** + **TypeScript 5**
- **Tailwind CSS 3** (PostCSS + Autoprefixer)
- **react-icons**
- **ESLint** (`eslint-config-next`)
- **pnpm** como gerenciador de pacotes
- Deploy na **Vercel** (`vercel.json` com cache longo para `/_next/static` e `/images`)

## Funcionalidades

Verificadas em `profile/src`:

- **Seções:** Hero, Projetos, Habilidades, Linha do tempo, Serviços e Contato, com header e footer
- **Conteúdo separado do layout:** textos, projetos, skills, timeline, serviços e contatos ficam em `src/data/`, então dá para atualizar sem mexer nos componentes
- **Projetos** com imagem otimizada (`next/image`) e links para o site e o código
- **Tema claro/escuro** com preferência salva no `localStorage`
- **Botão flutuante de WhatsApp** e links com mensagem pré-preenchida
- **SEO:** meta tags Open Graph e Twitter Card, URL canônica, JSON-LD (`Person`), `sitemap.xml` e `robots.txt`
- **Acessibilidade:** link "Pular para o conteúdo" e ícones decorativos com `aria-hidden`

## Como rodar

Requisitos: Node.js 18+ (o `.nvmrc` indica Node 24) e pnpm (`corepack enable`).

```bash
cd profile
pnpm install
pnpm run dev      # http://localhost:3000
pnpm run build    # build de produção
pnpm start        # serve o build
pnpm run lint     # ESLint
```

### Variável de ambiente

- `NEXT_PUBLIC_SITE_URL` (opcional): URL base usada em canonical, Open Graph e JSON-LD. Sem ela, o site usa a URL publicada na Vercel.

## Deploy na Vercel

1. Conecte o repositório à Vercel.
2. Configure **Root Directory** como `profile` (framework Next.js; build, install e output já definidos em `vercel.json`).
3. Opcional: defina `NEXT_PUBLIC_SITE_URL`.

## Estrutura

```
profile/
├── src/
│   ├── components/   # Header, Hero, Projects, Skills, Timeline, Services, Contact, Footer, WhatsAppFab
│   ├── contexts/     # ThemeContext (tema claro/escuro)
│   ├── data/         # bio, projects, skills, timeline, services, contact
│   ├── pages/        # index, _app, _document
│   ├── styles/       # globals.css
│   └── config.ts     # URL do site e helper de links do WhatsApp
├── public/           # Imagens dos projetos, og.png, favicon, sitemap e robots
└── vercel.json
```

## Links

- [GitHub](https://github.com/AlanDiogoR)

## Licença

Uso pessoal.
