import React, { FC } from "react"

import { useApp } from "./../../contexts/App"
import { useBreakpoints } from "./../../hooks/useBreakpoints"

import { useMediaQuery } from "react-responsive"
import BurgerDrawer from "./BurgerDrawer/BurgerDrawer"
import "./Header.scss"

const Header: FC = () => {
  const { isDrawerVisible, setDrawerVisibility, setLetsStartedFormVisibility } = useApp()

  const { sizes } = useBreakpoints()
  const isXL = useMediaQuery({ minWidth: sizes.XL })

  return (
    <div className={"header__container"}>
      <a href={"/"} className={"header__logo"}>
        cactus
      </a>
      {
        //prettier-ignore
        isXL 
        ? (
          <React.Fragment>
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
          </React.Fragment>
        ) 
        : (
         <React.Fragment>
            <button className={`header__burger-btn ${isDrawerVisible ?"_isActive" :""}`} onClick={()=>setDrawerVisibility(true)}/>
            <BurgerDrawer/>
         </React.Fragment>
        )
      }
    </div>
  )
}

export default Header
