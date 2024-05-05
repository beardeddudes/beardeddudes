import React, { FC } from "react"

import "./WeDo.scss"

const WeDo: FC = () => {
  interface IWorksList {
    categoryName: string
    list: { serviceName: string; description: string }[]
  }

  //prettier-ignore
  const servicesList: IWorksList[] = [
    {
      categoryName: "Sites",
      list: [
        {
          serviceName: "Landing page",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
        {
          serviceName: "Corporate",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
        {
          serviceName: "Online Store",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
        {
          serviceName: "Admin Panels",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
        {
          serviceName: "Blog",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
      ],
    },
    {
      categoryName: "Design",
      list: [
        {
          serviceName: "User Experience",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
        {
          serviceName: "User Interface",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
      ],
    },
    {
      categoryName: "coding",
      list: [
        {
          serviceName: "Frontend App",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
        {
          serviceName: "Server App",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
        {
          serviceName: "Bots",
          description: "Aenean eleifend sem nec enim egestas blandit. Aenean aliquet quam sed venenatis",
        },
      ],
    },
  ]

  return (
    <section className={"we-do__section"}>
      <div className={"we-do__heading"}>
        <div className={"we-do__heading-text"}>
          Everything <br /> your business needs on the web
        </div>
        <h2 className={"we-do__heading-title"}>we do</h2>
      </div>
      <div className={"we-do__content"}>
        {servicesList.map((category, key) => {
          return (
            <article key={key} className={"we-do__item"}>
              <h3 className={"we-do__category-name"}>{category.categoryName}</h3>
              <ul className={"we-do__services"}>
                {category.list.map((el, key) => {
                  return (
                    <li className={"we-do__service"} key={key}>
                      <div className={"we-do__service-container"}>
                        <h4 className={"we-do__service-title"}>{el.serviceName}</h4>
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
  )
}

export default WeDo
