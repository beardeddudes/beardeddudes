import { FC } from "react"

import "./WeDo.scss"
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

interface IWeDo {
  scope: string
  branches: { title: string; description: string }[]
}

const WeDo: FC = () => {
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
    gsap.set(".wedo__branch-hover", { height: "0%", pointerEvents: "none", opacity: 0, zIndex: 0 });
  
    gsap.utils.toArray(".wedo__branch-wrapper").forEach((wrapp) => {
      const wrapperElement = wrapp as HTMLElement;
      const branchHover = wrapperElement.querySelector(".wedo__branch-hover") as HTMLElement;
  
      const tl = gsap.timeline({ paused: true, defaults: { duration: 0.5 } });
  
      gsap.set(branchHover, { backgroundColor: "#e2e2e2", color: "#151515" });
  
      tl.to(branchHover, { height: "100%", opacity: 1 });
  
      wrapperElement.addEventListener("mouseenter", () => tl.timeScale(1).play());
      wrapperElement.addEventListener("mouseleave", () => tl.timeScale(3).reverse());
    });
  });

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
                      <div className="wedo__branch-hover">
                        <div className="wedo__branch-hover-container">
                            <p className="wedo__branch-description">{elt.description}</p>
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
