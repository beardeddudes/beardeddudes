import React, { FC, useRef } from "react"

import WorkCard, { EWorkCardTheme, IWork } from "../../components/WorkCard/WorkCard"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import noImage from "./../../assets/images/no-image-placeholder.png"
import "./Works.scss"

const Works: FC = () => {
  //prettier-ignore
  const works: IWork[] = [
    {
      awesomeGraphic: noImage,
      title: "VYROBY 22",
      description: [
        "Gleam is a clean and modern photography WordPress theme for creative photographers websites. You can use it as a portfolio to showcase your work",
        "WordPress theme for creative photographers websites. You can use it as a portfolio to showcase your work",
      ],
      whatWeDid: ["Ux/Ui", "Frontend", "Backend", "Data-analysis"],
      toolsUsed: ["react", "react", "react", "react", "react"],
    },
    {
      awesomeGraphic: noImage,
      title: "Maje",
      description: [
        "Gleam is a clean and modern photography WordPress theme for creative photographers websites. You can use it as a portfolio to showcase your work",
        "WordPress theme for creative photographers websites. You can use it as a portfolio to showcase your work",
      ],
      whatWeDid: ["Frontend"],
      toolsUsed: ["react", "react", "react"],
    },
  ]

  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    if (textRef.current) {
      gsap.fromTo(
        containerRef.current,
        { x: 0 },
        { x: -textRef.current.clientWidth + "px", duration: 5, repeat: -1, ease: "none" }
      )
    }
  })

  return (
    <React.Fragment>
      <section className={"works__section"}>
        <h2 className={"works__ticker"} ref={containerRef}>
          <span ref={textRef}>works</span>
          {Array.from({ length: 10 }, (_, key) => (
            <span key={key}>works</span>
          ))}
        </h2>
        <div className={"works__container"}>
          <div className={"works__works"}>
            {works.map((work, key) => {
              const isEven = key % 2 === 0
              return <WorkCard work={work} theme={!isEven ? EWorkCardTheme.Light : EWorkCardTheme.Dark} key={key} />
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Works
