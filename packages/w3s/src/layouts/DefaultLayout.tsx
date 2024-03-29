import React, { FC } from "react"
import { Outlet } from "react-router-dom"

import Footer from "./Footer/Footer"
import Header from "./Header/Header"

import "./DefaultLayout.scss"

const DefaultLayout: FC = () => {
  return (
    <React.Fragment>
      <header className={"header"}>
        <Header />
      </header>
      <main className={"main"}>
        <Outlet />
      </main>
      <footer className={"footer"}>
        <Footer />
      </footer>
    </React.Fragment>
  )
}

export default DefaultLayout
