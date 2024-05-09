import React, { FC } from "react"

import "./Hero.scss"

const Hero: FC = () => {
  return (
    <React.Fragment>
      <section className={"hero__section"}>
        <div className={"hero__container"}>
          <div className={"hero__main-wrapper"}>
            <div className={"hero__main hero__main--start"}>
              From <span>idea</span>
            </div>
            <div className={"hero__main hero__main--to"}>to</div>
            <div className={"hero__main hero__main--end"}>release</div>
          </div>
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
    </React.Fragment>
  )
}

export default Hero
