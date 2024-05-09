import React, { FC } from "react"

import WorkCard, { EWorkCardTheme, IWork } from "../../components/WorkCard/WorkCard"

import noImage from "./../../assets/images/no-image-placeholder.png"

import "./Works.scss"

const Works: FC = () => {
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

  return (
    <React.Fragment>
      <section className={"works__section"}>
        <h2 className={"works__ticker"}>
          <span></span>
          works<span></span>
          works<span></span>
          works<span></span>
          works<span></span>
          works<span></span>
          <span></span>
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
