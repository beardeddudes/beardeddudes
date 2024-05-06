import React, { FC } from "react"
import { IPerson } from "./../../containers/AboutUs/AboutUs"

interface IPersonCardProps {
  person: IPerson
}

import "./PersonCard.scss"

const PersonCard: FC<IPersonCardProps> = ({ person }) => {
  return (
    <article className={"person-card__article"}>
      <div className={"person-card__body"}>
        <div className={"person-card__photo"}>
          <img src={person.photo} alt={`${person.name} photo`} />
        </div>
        <div className={"person-card__name"}>{person.name}</div>
        <div className={"person-card__job-title"}>
          <p>{person.jobTitle}</p>
        </div>
        <div className={"person-card__experience"}>
          <p>
            <span>{person.experience}</span> years <br /> of experience
          </p>
        </div>
      </div>
    </article>
  )
}

export default PersonCard
