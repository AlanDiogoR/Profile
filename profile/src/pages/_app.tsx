import type { AppProps } from 'next/app';
import { Space_Grotesk } from 'next/font/google';
import '../styles/globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${spaceGrotesk.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
