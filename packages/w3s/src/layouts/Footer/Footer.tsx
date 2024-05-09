import { FC } from "react"

import { useApp } from "./../../contexts/App"

import "./Footer.scss"

const Footer: FC = () => {
  const { setLetsStartedFormVisibility } = useApp()

  return (
    <div className={"footer__section"}>
      <div className={"footer__container"}>
        <div className={"footer__collaborate"}>
          <div className={"footer__questions"}>Got a project? Want to collaborate?</div>
          <div className={"footer__title"}>Get in touch</div>
        </div>
        <div className={"footer__navigation"}>
          <div className={"footer__links footer__links--social"}>
            <a className={"footer__link"}>LinkedIn</a>
            <a className={"footer__link"}>Instagram</a>
          </div>
          <button className={"footer__start-project-btn"} onClick={() => setLetsStartedFormVisibility(true)}>
            <span>Start a project</span>
          </button>
          <div className={"footer__links footer__links--write-up"}>
            <a className={"footer__link"}>hey@cactus.io</a>
            <a className={"footer__link"}>Telegram</a>
          </div>
        </div>
        <div className={"footer__all-rights-reserved"}>©{new Date().getFullYear()}, Cactus. All rights reserved.</div>
      </div>
    </div>
  )
}

export default Footer
