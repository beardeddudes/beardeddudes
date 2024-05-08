import React, { FC } from "react"
import { useTranslation } from "react-i18next"
import { useApp } from "./../../contexts/App"

import "./Footer.scss"

const Footer: FC = () => {
  const { t } = useTranslation("global")
  const { setFormPopupVisibility } = useApp()

  return (
    <React.Fragment>
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
            <button className={"footer__start-project-btn"} onClick={() => setFormPopupVisibility(true)}>
              <span>Start a project</span>
            </button>
            <div className={"footer__links footer__links--write-up"}>
              <a className={"footer__link"}>hey@cactus.io</a>
              <a className={"footer__link"}>Telegram</a>
            </div>
          </div>
          <div className={"footer__all-rights-reserved"}>
            ©{new Date().getFullYear()}, Cactus. All rights reserved.
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer
