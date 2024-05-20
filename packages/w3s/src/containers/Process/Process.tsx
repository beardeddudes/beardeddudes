import gsap from "gsap"
import { FC } from "react"

import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./Process.scss"

const Process: FC = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const steps = gsap.utils.toArray(".process__step") as HTMLElement[]
    const stickDistance = 0

    const lastCardST = ScrollTrigger.create({
      trigger: steps[steps.length - 1],
      start: "center center",
    })

    steps.forEach((step, index) => {
      const scale = 1 - (steps.length - index) * 0.025

      const scaleDown = gsap.to(step, {
        scale: scale,
        backgroundColor: "#e2e2e2",
        color: "#151515",
      })

      ScrollTrigger.create({
        trigger: step,
        start: "center center",
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        animation: scaleDown,
        toggleActions: "restart none none reverse",
      })
    })
  })

  return (
    <section className={"process__section"}>
      <div className={"process__container"}>
        <h2 className={"process__title"}>Our full development process is proceeding as usual</h2>
        <ol className={"process__steps"}>
          <li className={"process__step process__step--1"}>
            <span>01.</span>
            <p>Is the ideal showcase for your business or personal brand, a trusted directory</p>
          </li>
          <li className={"process__step process__step--2"}>
            <span>02.</span>
            <p>Is the ideal showcase for your business or personal brand, a trusted directory</p>
          </li>
          <li className={"process__step process__step--3"}>
            <span>03.</span>
            <p>Is the ideal showcase for your business or personal brand, a trusted directory</p>
          </li>
          <li className={"process__step process__step--4"}>
            <span>04.</span>
            <p>Is the ideal showcase for your business or personal brand, a trusted directory</p>
          </li>
        </ol>
      </div>
    </section>
  )
}

export default Process
