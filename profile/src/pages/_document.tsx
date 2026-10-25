import { Html, Head, Main, NextScript } from 'next/document';

const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var t=s==='light'||s==='dark'?s:(d?'dark':'light');document.documentElement.setAttribute('data-theme',t);var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content',t==='dark'?'#0B0D10':'#F3F5F7');}catch(e){}})();`;

const motionScript = `(function(){try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js-motion');}}catch(e){}})();`;

export default function Document() {
  return (
    <Html lang="pt-BR" suppressHydrationWarning>
      <Head>
        <meta name="theme-color" content="#0B0D10" />
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
