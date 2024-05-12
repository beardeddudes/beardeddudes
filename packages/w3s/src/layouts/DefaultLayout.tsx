import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { FC, useRef } from "react"
import { Outlet } from "react-router-dom"

import { useBreakpoints } from "./../hooks/useBreakpoints"

import Footer from "./Footer/Footer"
import Header from "./Header/Header"

import "./DefaultLayout.scss"

const DefaultLayout: FC = () => {
  const container = useRef<HTMLDivElement>(null)
  const { isNonTouchable } = useBreakpoints()

  // prettier-ignore
  let  mouseX: number = 0,
       mouseY: number = 0,
    positionX: number = 0,
    positionY: number = 0;

  useGSAP(
    (context, contextSafe) => {
      const cursor = context.selector && context.selector(".cursor")
      const cursorFollower = context.selector && context.selector(".cursor-follower")

      gsap.to({}, 0.016, {
        repeat: -1,
        onRepeat: () => {
          positionX += (mouseX - positionX) / 9
          positionY += (mouseY - positionY) / 9

          // prettier-ignore
          gsap.set(cursorFollower, {
          left: positionX - 12,
           top: positionY - 12
        });

          // prettier-ignore
          gsap.set(cursor, {
          left: mouseX,
           top: mouseY
        });
        },
      })

      // prettier-ignore
      const onMouseMove = contextSafe && contextSafe((event: MouseEvent) => {
        mouseX = event.pageX
        mouseY = event.pageY
      })
      container.current?.addEventListener("mousemove", onMouseMove!)

      return () => {
        container.current?.removeEventListener("mousemove", onMouseMove!)
      }
    },
    { scope: container }
  )

  return (
    <React.Fragment>
      <div ref={container}>
        {isNonTouchable && (
          <React.Fragment>
            <div className={"cursor"} style={{ zIndex: Number.MAX_SAFE_INTEGER - 1_000 }} />
            <div className={"cursor-follower"} style={{ zIndex: Number.MAX_SAFE_INTEGER - 1_000 }} />
          </React.Fragment>
        )}
        <header className={"header"}>
          <Header />
        </header>
        <main className={"main"}>
          <Outlet />
        </main>
        <footer className={"footer"}>
          <Footer />
        </footer>
      </div>
    </React.Fragment>
  )
}

export default DefaultLayout
