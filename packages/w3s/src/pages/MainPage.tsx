import React, { FC } from "react"

import DevelopmentProcess from "./../containers/DevelopmentProcess/DevelopmentProcess"
import Hero from "./../containers/Hero/Hero"
import Technologies from "./../containers/Technologies/Technologies"
import WeDo from "./../containers/WeDo/WeDo"

const MainPage: FC = () => {
  return (
    <React.Fragment>
      <Hero />
      <WeDo />
      <Technologies />
      <DevelopmentProcess />
    </React.Fragment>
  )
}

export default MainPage
