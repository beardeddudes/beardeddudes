import React, { FC } from "react"

import "./WeDo.scss"

interface IWeDo {
  scope: string
  branches: {
    title: string
    description: string
  }[]
}

const WeDo: FC = () => {
  const exactlyWhatWeDo: IWeDo[] = [
    {
      scope: "Sites",
      branches: [
        {
          title: "Landing Page",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
        {
          title: "Corporate",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
        {
          title: "Online Store",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
        {
          title: "Admin Panel",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
        {
          title: "Blog",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
      ],
    },
    {
      scope: "Design",
      branches: [
        {
          title: "User Experience",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
        {
          title: "User Interface",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
      ],
    },
    {
      scope: "Coding",
      branches: [
        {
          title: "Frontend Apps",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
        {
          title: "Server Apps",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
        {
          title: "Bots",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
      ],
    },
  ] as const

  return (
    <React.Fragment>
      <section className={"wedo__section"}>
        <div className={"wedo__heading"}>
          <div className={"wedo__heading-little-inspire-phrase"}>
            Everything
            <br />
            your business needs on the web
          </div>
          <h2 className={"wedo__heading-title"}>We do</h2>
        </div>
        <div className={"wedo__content"}>
          {exactlyWhatWeDo.map((wedo, key) => {
            return (
              <article className={"wedo__item"} key={key}>
                <h3 className={"wedo__scope"}>{wedo.scope}</h3>
                <ul className={"wedo__branches"}>
                  {wedo.branches.map((branch, key) => {
                    return (
                      <li className={"wedo__branch-wrapper"} key={key}>
                        <div className={"wedo__branch"}>
                          <h4 className={"wedo__branch-title"}>{branch.title}</h4>
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
