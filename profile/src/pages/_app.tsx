import type { AppProps } from 'next/app';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import '../styles/globals.css';
import { ThemeProvider } from '../contexts/ThemeContext';
import RevealObserver from '../components/RevealObserver';

const display = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['500', '700'],
});

const sans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '600'],
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: '500',
  preload: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className={`${display.variable} ${sans.variable} ${mono.variable} font-sans`}>
        <Component {...pageProps} />
        <RevealObserver />
      </div>
    </ThemeProvider>
  );
}
