import { FC } from "react"

import "./Process.scss"

const Process: FC = () => {
  return (
    <section className={"process__section"}>
      <div className={"process__container"}>
        <h2 className={"process__title"}>Our full development process is proceeding as usual</h2>
        <ol className={"process__steps"}>
          <li className={"process__step process__step--1"}>
            <span>01.</span>
            <p>Is the ideal showcase for your business or personal brand, a trusted directory</p>
          </li>
          <li className={"process__step process__step--2"}>
            <span>02.</span>
            <p>Is the ideal showcase for your business or personal brand, a trusted directory</p>
          </li>
          <li className={"process__step process__step--3"}>
            <span>03.</span>
            <p>Is the ideal showcase for your business or personal brand, a trusted directory</p>
          </li>
          <li className={"process__step process__step--4"}>
            <span>04.</span>
            <p>Is the ideal showcase for your business or personal brand, a trusted directory</p>
          </li>
        </ol>
      </div>
    </section>
  )
}

export default Process
