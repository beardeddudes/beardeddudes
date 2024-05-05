import React, { FC } from "react"

import "./DevelopmentProcess.scss"
const DevelopmentProcess: FC = () => {
  return (
    <section className={"development__section"}>
      <div className={"development__container"}>
        <h2 className={"development__title"}>Our full development process is proceeding as usual</h2>
        <ol className={"development__steps"}>
          <li className={"development__step development__step--1"}>
            <span>01.</span>
            <p>Is the ideal showcase for your business or personal brand, a trusted directory</p>
          </li>
          <li className={"development__step development__step--2"}>
            <span>02.</span>
            <p>Is the ideal showcase for your business or personal brand, a trusted directory</p>
          </li>
          <li className={"development__step development__step--3"}>
            <span>03.</span>
            <p>Is the ideal showcase for your business or personal brand, a trusted directory</p>
          </li>
          <li className={"development__step development__step--4"}>
            <span>04.</span>
            <p>Is the ideal showcase for your business or personal brand, a trusted directory</p>
          </li>
        </ol>
      </div>
    </section>
  )
}

export default DevelopmentProcess
