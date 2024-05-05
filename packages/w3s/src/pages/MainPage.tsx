import React, { FC } from "react"
import Hero from "./../containers/Hero/Hero"
import Technologies from "./../containers/Technologies/Technologies"
import WeDo from "./../containers/WeDo/WeDo"

const MainPage: FC = () => {
  return (
    <React.Fragment>
      <Hero />
      <WeDo />
      <Technologies />
    </React.Fragment>
  )
}

export default MainPage
