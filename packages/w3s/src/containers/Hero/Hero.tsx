import { FC } from "react"

import "./Hero.scss"

const Hero: FC = () => {
  return (
    <section className={"hero__section"}>
      <div className={"hero__container"}>
        <div className={"hero__main"}>
          <div className={"hero__block-main hero__block-main--start"}>
            From <span>idea</span>
          </div>
          <div className={"hero__block-main hero__block-main--to"}>to</div>
          <div className={"hero__block-main hero__block-main--end"}>release</div>
        </div>
        <div className={"hero__bottom"}>
          <div className={"hero__quote"}>
            Team of creative minds with more than 15 years of experience in the field. In this complex world
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
