import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR" suppressHydrationWarning>
      <Head />
      <body>
        {/* Aplica o tema antes da hidratação para evitar flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',s||(d?'dark':'light'));})();`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
