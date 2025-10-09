import type { AppProps } from 'next/app';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          paddingTop: '6rem',
          paddingBottom: '2rem',
        }}
      >
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
