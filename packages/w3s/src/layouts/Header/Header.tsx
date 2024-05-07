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
          <button className={"header__navigation-btn"}>{t("header.navigation.weDo")}</button>
          <button className={"header__navigation-btn"}>{t("header.navigation.technologies")}</button>
          <button className={"header__navigation-btn"}>{t("header.navigation.process")}</button>
          <button className={"header__navigation-btn"}>{t("header.navigation.works")}</button>
          <button className={"header__navigation-btn"}>{t("header.navigation.about")}</button>
          <button className={"header__navigation-btn"}>{t("header.navigation.contacts")}</button>
        </div>
        <button className={"header__start-project-btn"} onClick={() => setFormPopupVisibility(true)}>
          <span>{t("header.startProject")}</span>
        </button>
      </div>
    </React.Fragment>
  )
}

export default Header
