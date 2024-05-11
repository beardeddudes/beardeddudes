import { FC } from "react"

interface IBurgerDrawerProps {}

import { SvgIcon } from "./../../../components/elements/Icon"
import { useApp } from "./../../../contexts/App"
import { useScrollLock } from "./../../../hooks/useScrollLock"
import "./BurgerDrawer.scss"

const BurgerDrawer: FC<IBurgerDrawerProps> = () => {
  const { isDrawerVisible, setDrawerVisibility, setLetsStartedFormVisibility } = useApp()

  useScrollLock(isDrawerVisible)

  return (
    <div className={`burger-drawer__menu ${isDrawerVisible ? "_isVisible" : ""}`}>
      <div className={"burger-drawer__container"}>
        <button className={"burger-drawer__close-btn"} onClick={() => setDrawerVisibility(false)}>
          <SvgIcon name={"close-burger-btn"} />
        </button>
        <div className={"burger-drawer__navigation"}>
          <button className={"burger-drawer__navigation-btn"} onClick={() => setDrawerVisibility(false)}>
            We do!
          </button>
          <button className={"burger-drawer__navigation-btn"} onClick={() => setDrawerVisibility(false)}>
            Technologies
          </button>
          <button className={"burger-drawer__navigation-btn"} onClick={() => setDrawerVisibility(false)}>
            Process
          </button>
          <button className={"burger-drawer__navigation-btn"} onClick={() => setDrawerVisibility(false)}>
            Works
          </button>
          <button className={"burger-drawer__navigation-btn"} onClick={() => setDrawerVisibility(false)}>
            About Us
          </button>
          <button className={"burger-drawer__navigation-btn"} onClick={() => setDrawerVisibility(false)}>
            Contacts
          </button>
        </div>
        <button
          className={"burger-drawer__start-project-btn"}
          onClick={() => {
            setDrawerVisibility(false)
            setLetsStartedFormVisibility(true)
          }}
        >
          <span>Start a project</span>
        </button>
      </div>
    </div>
  )
}

export default BurgerDrawer
