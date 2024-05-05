import React, { FC } from "react"
import { useTranslation } from "react-i18next"

import "./Footer.scss"

const Footer: FC = () => {
  const { t } = useTranslation("global")

  return (
    <React.Fragment>
      <div className={"footer__section"}>
        <div className={"footer__container"}>
          <div className={"footer__collaborate"}>
            <div className={"footer__questions"}>{t("footer.questions")}</div>
            <div className={"footer__title"}>{t("footer.title")}</div>
          </div>
          <div className={"footer__navigation"}>
            <div className={"footer__links footer__links--social"}>
              <a className={"footer__link"}>LinkedIn</a>
              <a className={"footer__link"}>Instagram</a>
            </div>
            <div className={"footer__start-project-btn"}>
              <span>Start a project</span>
            </div>
            <div className={"footer__links footer__links--write-up"}>
              <a className={"footer__link"}>hey@cactus.io</a>
              <a className={"footer__link"}>Telegram</a>
            </div>
          </div>
          <div className={"footer__all-rights-reserved"}>
            ©{new Date().getFullYear()}, Cactus. {t("footer.allRightsReserved")}.
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer
