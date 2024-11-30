import "@/styles/globals.css"
import "react-toastify/dist/ReactToastify.css"

import { Page } from "@/types/page"
import type { AppProps } from "next/app"
import { Fragment, ReactElement } from "react"
import { ToastContainer } from "react-toastify"

// this should give a better typing
type Props = AppProps & {
  Component: Page
}

export default function App({ Component, pageProps }: Props) {
  // adjust accordingly if you disabled a layout rendering option
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)
  const Layout = Component.layout ?? Fragment

  return (
    <Layout>
      <ToastContainer />
      {getLayout(<Component {...pageProps} />)}
    </Layout>
  )
}
