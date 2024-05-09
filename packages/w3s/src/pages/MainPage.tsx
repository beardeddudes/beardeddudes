import React, { FC } from "react"

import AboutUs from "./../containers/AboutUs/AboutUs"
import Hero from "./../containers/Hero/Hero"
import LetsGetStartedForm from "./../containers/LetsStartedForm/LetsStartedForm"
import Process from "./../containers/Process/Process"
import Technologies from "./../containers/Technologies/Technologies"
import WeDo from "./../containers/WeDo/WeDo"
import Works from "./../containers/Works/Works"

import { useApp } from "./../contexts/App"

const MainPage: FC = () => {
  const { isLetsStartedFormVisibile } = useApp()

  return (
    <React.Fragment>
      <Hero />
      <WeDo />
      <Technologies />
      <Process />
      <Works />
      <AboutUs />
      {isLetsStartedFormVisibile && <LetsGetStartedForm />}
    </React.Fragment>
  )
}

export default MainPage
