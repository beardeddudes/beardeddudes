import { FC } from "react"

import { ReactTyped } from "react-typed"
import "./Hero.scss"

const Hero: FC = () => {
  return (
    <section className={"hero__section"}>
      <div className={"hero__container"}>
        <div className={"hero__main-wrapper"}>
          <div className={"hero__main hero__main--start"}>
            From{" "}
            <p>
              <ReactTyped strings={["idea"]} startDelay={100} typeSpeed={150} backSpeed={100} showCursor={false} />
            </p>
          </div>
          <div className={"hero__main hero__main--to"}>to</div>
          <div className={"hero__main hero__main--end"}>
            <ReactTyped strings={["release"]} backSpeed={100} typeSpeed={150} startDelay={1200} showCursor={false} />
          </div>
        </div>
        <div className={"hero__stretch"} />
        <div className={"hero__bottom"}>
          <div className={"hero__intro-the-company"}>
            Team of creative minds with more than 15 years of experience in the field. In this complex world...
          </div>
          <div className={"hero__scroll"}>
            <span>scroll down</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
