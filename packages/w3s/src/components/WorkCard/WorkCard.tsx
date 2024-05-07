import { FC } from "react"

import { SvgIcon } from "../elements/Icon"

import { IWork } from "../../containers/Works/Works"
import noImage from "./../../assets/images/no-image-placeholder.png"
import "./WorkCard.scss"

interface IWorkCardProps {
  theme?: "light" | "dark"
  work: IWork
}

const WorkCard: FC<IWorkCardProps> = ({ theme = "dark", work }) => {
  return (
    <article className={`work-card__article ${theme === "light" ? "_light" : "_dark"}`}>
      <div className={"work-card__body"}>
        <div className={"work-card__image"}>
          <img src={noImage} alt={"project image"} />
        </div>
        <div className={"work-card__content"}>
          <div className={"work-card__header"}>
            <a href={"/"} className={"work-card__link"}>
              <SvgIcon name={`${theme === "light" ? "view-dark" : "view-light"}`} />
            </a>
          </div>
          <h3 className={"work-card__title"}>{work.title}</h3>
          <div className={"work-card__description"}>
            {work.description.map((paragraph, key) => {
              return <p key={key}>{paragraph}</p>
            })}
          </div>
          <h4 className={"work-card__technologies-title"}>{work.technologies.technologiesTitle}</h4>
          <ul className={"work-card__technologies"}>
            {work.technologies.technologiesList.map((el, key) => {
              return <li key={key}>{el}</li>
            })}
          </ul>
          <div className={"work-card__tools"}>
            <p className={"work-card__tools-title"}>{work.tools.toolsTitle}</p>
            <div className={"work-card__tools-list"}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default WorkCard
