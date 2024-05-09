import { FC } from "react"

import "./PersonCard.scss"

export interface IPerson {
  photo: string
  name: string
  position: string
  experience: number
}

interface IPersonCardProps {
  person: IPerson
}

const PersonCard: FC<IPersonCardProps> = ({ person }) => {
  return (
    <article className={"person-card__article"}>
      <div className={"person-card__body"}>
        <div className={"person-card__photo"}>
          <img src={person.photo} alt={`The ${person.name} photo`} />
        </div>
        <div className={"person-card__name"}>{person.name}</div>
        <div className={"person-card__position"}>
          <p>{person.position}</p>
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
