import { FC } from "react"

import WorkCard from "../../components/WorkCard/WorkCard"
import "./Works.scss"

export interface IWork {
  title: string
  description: string[]
  technologies: {
    technologiesTitle: string
    technologiesList: string[]
  }
  tools: {
    toolsTitle: string
    toolsList: []
  }
}

const Works: FC = () => {
  const works: IWork[] = [
    {
      title: "Vyroby-22",
      description: [
        "Gleam is a clean and modern photography WordPress theme for creative photographers websites. You can use it as a portfolio to showcase your work",
        "WordPress theme for creative photographers websites. You can use it as a portfolio to showcase your work",
      ],
      technologies: {
        technologiesTitle: "We did in the project",
        technologiesList: ["Ux/Ui", "Frontend", "Backend", "Data-analysis"],
      },
      tools: {
        toolsTitle: "Used tools:",
        toolsList: [],
      },
    },
    {
      title: "Maje",
      description: [
        "Gleam is a clean and modern photography WordPress theme for creative photographers websites. You can use it as a portfolio to showcase your work",
        "WordPress theme for creative photographers websites. You can use it as a portfolio to showcase your work",
      ],
      technologies: {
        technologiesTitle: "We did in the project",
        technologiesList: ["Frontend", "Backend"],
      },
      tools: {
        toolsTitle: "Used tools:",
        toolsList: [],
      },
    },
  ]

  return (
    <section className={"works__section"}>
      <h2 className={"works__title"}>
        <span></span>
        works<span></span>
        works<span></span>
        works<span></span>
        works<span></span>
        works<span></span>
      </h2>
      <div className={"works__container"}>
        <div className={"works__works"}>
          {works.map((work, key) => {
            const isEven = key % 2 === 0
            return <WorkCard key={key} work={work} theme={`${isEven ? "dark" : "light"}`} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Works
