import React, { FC } from "react"

import "./Header.scss"
const Header: FC = () => {
  return (
    <div className={"header__container"}>
      <a href={"/"} className={"header__logo"}>
        cactus
      </a>
      <div className={"header__navigation"}>
        <button className={"header__navigation-btn"}>Services</button>
        <button className={"header__navigation-btn"}>Technologies</button>
        <button className={"header__navigation-btn"}>Process</button>
        <button className={"header__navigation-btn"}>Works</button>
        <button className={"header__navigation-btn"}>About</button>
        <button className={"header__navigation-btn"}>Contacts</button>
      </div>
      <button className={"header__project-btn"}>
        <span>Start a project</span>
      </button>
    </div>
  )
}

export default Header
