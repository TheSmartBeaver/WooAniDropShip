import Head from "next/head"
import { AppProvider } from "./context/AppContext"
import Header from "./Header"
// import "../styles/Style.css"

const Layout = (props) => {
  return (
    <AppProvider>
      <div>
        <Head>
          <title>Commerce du castor</title>
          <link
            rel="stylesheet"
            href="https://bootswatch.com/5/sketchy/bootstrap.min.css"
          ></link>
          <link
            rel="shortcut icon"
            href="h ttps://image.flaticon.com/icons/png/512/58/58598.png"
          ></link>
        </Head>
        <Header />
        {props.children}
      </div>
    </AppProvider>
  )
}

export default Layout
