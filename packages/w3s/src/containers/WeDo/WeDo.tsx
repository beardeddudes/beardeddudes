import React, { FC } from "react"
import { useTranslation } from "react-i18next"

import "./WeDo.scss"

interface IWeDo {
  scope: string
  branches: { branchTitle: string; branchDescription: string }[]
}

const WeDo: FC = () => {
  const { t } = useTranslation("global")

  const exactlyWhatWeDo: IWeDo[] = t("main.weDo.exactlyWhatWeDo", { returnObjects: true })

  return (
    <React.Fragment>
      <section className={"wedo__section"}>
        <div className={"wedo__heading"}>
          <div className={"wedo__heading-phrase"} dangerouslySetInnerHTML={{ __html: t("main.weDo.phrase") }}></div>
          <h2 className={"wedo__heading-title"}>{t("main.weDo.title")}</h2>
        </div>
        <div className={"wedo__content"}>
          {exactlyWhatWeDo.map((wedo, key) => {
            return (
              <article key={key} className={"wedo__item"}>
                <h3 className={"wedo__scope"}>{wedo.scope}</h3>
                <ul className={"wedo__branches"}>
                  {wedo.branches.map((elt, key) => {
                    return (
                      <li className={"wedo__branch-wrapper"} key={key}>
                        <div className={"wedo__branch"}>
                          <h4 className={"wedo__branch-title"}>{elt.branchTitle}</h4>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </article>
            )
          })}
        </div>
      </section>
    </React.Fragment>
  )
}

export default WeDo
