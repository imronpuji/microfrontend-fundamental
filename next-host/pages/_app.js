import '@/styles/globals.css'
import '@module-federation/nextjs-mf/src/include-defaults';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
