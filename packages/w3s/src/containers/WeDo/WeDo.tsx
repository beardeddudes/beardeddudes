import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { FC } from "react"

import "./WeDo.scss"

interface IWeDo {
  scope: string
  branches: { title: string; description: string }[]
}

const WeDo: FC = () => {
  //prettier-ignore
  const exactlyWhatWeDo: IWeDo[] = [
    {
      scope: "Sites",
      branches: [
        {
          title: "Landing Page",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
        {
          title: "Corporate",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
        {
          title: "Online Store",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
        {
          title: "Admin Panel",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
        {
          title: "Blog",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
      ],
    },
    {
      scope: "Design",
      branches: [
        {
          title: "User Experience",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
        {
          title: "User Interface",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
      ],
    },
    {
      scope: "Coding",
      branches: [
        {
          title: "Frontend Apps",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
        {
          title: "Server Apps",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
        {
          title: "Bots",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
      ],
    },
  ] as const

  useGSAP(() => {
    gsap.set(".wedo__branch-hover", { height: "0%", pointerEvents: "none", zIndex: 0, overflow: "hidden" })

    gsap.utils.toArray(".wedo__branch-wrapper").forEach(wrapp => {
      const wrapperElement = wrapp as HTMLElement
      const branchHover = wrapperElement.querySelector(".wedo__branch-hover") as HTMLElement

      gsap.set(branchHover, { backgroundColor: "#e2e2e2", color: "#151515" })

      const tlEnter = gsap.timeline({ paused: true, delay: 0 })
      const tlLeave = gsap.timeline({ paused: true, delay: 0 })

      tlEnter.to(branchHover, { height: "100%", delay: 0, duration: 0.3 })
      tlLeave.to(branchHover, { height: "0%", duration: 0.2, delay: 0.1 })

      wrapperElement.addEventListener("mouseenter", () => {
        tlLeave.pause()
        tlEnter.restart()
      })

      wrapperElement.addEventListener("mouseleave", () => {
        tlEnter.pause()
        tlLeave.restart()
      })
    })
  })

  return (
    <section className={"wedo__section"}>
      <div className={"wedo__heading"}>
        <div className={"wedo__heading-little-inspire-phrase"}>
          Everything
          <br />
          your business needs on the web
        </div>
        <h2 className={"wedo__heading-title"}>We do</h2>
      </div>
      <div className={"wedo__content"}>
        {exactlyWhatWeDo.map((wedo, key) => {
          return (
            <article className={"wedo__item"} key={key}>
              <h3 className={"wedo__scope"}>{wedo.scope}</h3>
              <ul className={"wedo__branches"}>
                {wedo.branches.map((elt, key) => {
                  return (
                    <li className={"wedo__branch-wrapper"} key={key}>
                      <div className={"wedo__branch"}>
                        <h4 className={"wedo__branch-title"}>{elt.title}</h4>
                      </div>
                      <div className={"wedo__branch-hover"}>
                        <div className={"wedo__branch-hover-container"}>
                          <p className={"wedo__branch-description"}>{elt.description}</p>
                          <h4 className={"wedo__branch-hover-title wedo__branch-title"}>{elt.title}</h4>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default WeDo
