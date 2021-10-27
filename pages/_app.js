
import '../styles/globals.css'
import '../styles/styleGlobal.css'
import { Router } from 'next/dist/client/router'

import { GlobalProvider } from '../store/contextApi'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import Layout from '../components/layout';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart',() => {
  NProgress.start()
})

Router.events.on('routeChangeComplete',() => {
  NProgress.done()
})

Router.events.on('routeChangeError',() => {
  NProgress.done()
})

function MyApp({ Component, pageProps }) {
  return (
      <GlobalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalProvider>
  )
}

export default MyApp
