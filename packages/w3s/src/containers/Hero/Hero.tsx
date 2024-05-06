import React, { FC } from "react"
import { useTranslation } from "react-i18next"

import "./Hero.scss"

const Hero: FC = () => {
  const { t } = useTranslation("global")

  return (
    <React.Fragment>
      <section className={"hero__section"}>
        <div className={"hero__container"}>
          <div className={"hero__main-wrapper"}>
            <div className={"hero__main hero__main--start"}>
              From <span>idea</span>
            </div>
            <div className={"hero__main hero__main--to"}>to</div>
            <div className={"hero__main hero__main--end"}>release</div>
          </div>
          <div className={"hero__bottom"}>
            <div className={"hero__intro-the-company"}>{t("main.hero.introTheCompany")}</div>
            <div className={"hero__scroll"}>
              <span>{t("main.hero.scroll")}</span>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Hero
