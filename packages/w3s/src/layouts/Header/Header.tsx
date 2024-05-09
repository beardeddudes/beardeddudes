import { FC } from "react"

import { useApp } from "./../../contexts/App"

import "./Header.scss"

const Header: FC = () => {
  const { setLetsStartedFormVisibility } = useApp()

  return (
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
      <button className={"header__start-project-btn"} onClick={() => setLetsStartedFormVisibility(true)}>
        <span>Start a project</span>
      </button>
    </div>
  )
}

export default Header
