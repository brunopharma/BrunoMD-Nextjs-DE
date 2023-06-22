import '@/styles/globals.css'
import Layout from "@/componets/Layout"
import { RouteGuard } from '@/componets/RouteGuard'
export default function App({ Component, pageProps }) {
  const version = 'EU'
  if (Component?.hideLayout) {
    return (
      <RouteGuard version={version}>
      <Component {...pageProps} version={version}/>
      </RouteGuard>
    )
  } else {
    return (
      <RouteGuard version={version}>
      <Layout version={version}>
        <Component {...pageProps} version={version}/>
      </Layout>
      </RouteGuard>
    )
  }
}
