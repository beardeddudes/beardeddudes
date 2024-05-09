import React, { FC } from "react"

import { IconName, SvgIcon } from "../elements/Icon"

import "./WorkCard.scss"

export enum EWorkCardTheme {
  Light = 0x00_00_00_01,
  Dark,
}

export interface IWork {
  awesomeGraphic: string
  title: string
  description: string[]
  whatWeDid: string[]
  toolsUsed: IconName[]
}

interface IWorkCardProps {
  theme?: EWorkCardTheme
  work: IWork
}

const WorkCard: FC<IWorkCardProps> = ({ theme = EWorkCardTheme.Light, work }) => {
  return (
    <React.Fragment>
      <article className={`work-card__article ${theme === EWorkCardTheme.Light ? "_light" : "_dark"}`}>
        <div className={"work-card__body"}>
          <div className={"work-card__awesome-graphic"}>
            <img src={work.awesomeGraphic} alt={"The project awesome graphic"} />
          </div>
          <div className={"work-card__content"}>
            <div className={"work-card__header"}>
              <a href={"/"} className={"work-card__link"}>
                <SvgIcon name={`${theme === EWorkCardTheme.Light ? "view-dark" : "view-light"}`} />
              </a>
            </div>
            <h3 className={"work-card__title"}>{work.title}</h3>
            <div className={"work-card__description"}>
              {work.description.map((elt, key) => {
                return <p key={key}>{elt}</p>
              })}
            </div>
            <h4 className={"work-card__what-we-did-title"}>We did in the project</h4>
            <ul className={"work-card__what-we-did"}>
              {work.whatWeDid.map((elt, key) => {
                return <li key={key}>{elt}</li>
              })}
            </ul>
            <div className={"work-card__tools-wrapper"}>
              <p className={"work-card__tools-title"}>The tools used</p>
              <div className={"work-card__tools-used"}>
                {work.toolsUsed.map((elt, key) => {
                  return (
                    <span key={key}>
                      <SvgIcon name={elt} />
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </article>
    </React.Fragment>
  )
}

export default WorkCard
