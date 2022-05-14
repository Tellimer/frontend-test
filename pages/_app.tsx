import Script from 'next/script'
import Layout from '../components/Layout'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="/analytics.js" />
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </>
  )
}
