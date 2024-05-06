import React, { FC } from "react"

import AboutUs from "./../containers/AboutUs/AboutUs"
import DevelopmentProcess from "./../containers/DevelopmentProcess/DevelopmentProcess"
import Hero from "./../containers/Hero/Hero"
import Technologies from "./../containers/Technologies/Technologies"
import WeDo from "./../containers/WeDo/WeDo"
import Works from "./../containers/Works/Works"

const MainPage: FC = () => {
  return (
    <React.Fragment>
      <Hero />
      <WeDo />
      <Technologies />
      <DevelopmentProcess />
      <Works />
      <AboutUs />
    </React.Fragment>
  )
}

export default MainPage
