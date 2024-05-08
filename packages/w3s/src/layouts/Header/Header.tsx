import React, { FC } from "react"
import { useTranslation } from "react-i18next"
import { useApp } from "./../../contexts/App"

import "./Header.scss"

const Header: FC = () => {
  const { t } = useTranslation("global")
  const { setFormPopupVisibility } = useApp()

  return (
    <React.Fragment>
      <div className={"header__container"}>
        <a href={"/"} className={"header__logo"}>
          cactus
        </a>
        <div className={"header__navigation"}>
          <button className={"header__navigation-btn"}>We do!</button>
          <button className={"header__navigation-btn"}>Technologies</button>
          <button className={"header__navigation-btn"}>Process</button>
          <button className={"header__navigation-btn"}>Works</button>
          <button className={"header__navigation-btn"}>About Us</button>
          <button className={"header__navigation-btn"}>Contacts</button>
        </div>
        <button className={"header__start-project-btn"} onClick={() => setFormPopupVisibility(true)}>
          <span>{t("header.startProject")}</span>
        <button className={"header__start-project-btn"}>
          <span>Start a project</span>
        </button>
      </div>
    </React.Fragment>
  )
}

export default Header
