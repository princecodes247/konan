import '../styles/globals.css'
import type { AppProps } from 'next/app'

function Konan({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Konan
