import React, { FC } from "react"

import "swiper/css"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "./AboutUs.scss"

import noImage from "./../../assets/images/no-image-placeholder.png"
import PersonCard from "./../../components/PersonCard/PersonCard"
import { useBreakpoints } from "./../../hooks/useBreakpoints"

export interface IPerson {
  photo: string
  name: string
  position: string
  experience: number
}

interface IPrinciple {
  title: string
  description: string
}

const AboutUs: FC = () => {
  const { isTablet } = useBreakpoints()

  //prettier-ignore
  const team = [
    {
      photo: noImage,
      name: "Jaroslav",
      position: "Founder & Principal Backend Developer",
      experience: 15,
    },
    {
      photo: noImage,
      name: "Dmytro",
      position: "Co-founder & Frontend Developer",
      experience: 5,
    },
    {
      photo: noImage,
      name: "Julia",
      position: "Content Manager",
      experience: 9,
    },
    {
      photo: noImage,
      name: "Liubov",
      position: "Data Analyst",
      experience: 4,
    },
    {
      photo: noImage,
      name: "Oleh",
      position: "UX/UI Designer",
      experience: 8,
    },
    {
      photo: noImage,
      name: "Victor",
      position: "Project Manager",
      experience: 7,
    },
  ]

  const swiperOptions = {
    breakpoints: {
      680: { spaceBetween: 20, slidesPerView: 2.2 },
      320: { spaceBetween: 20, slidesPerView: 1.4 },
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    speed: 1000,
    modules: [Autoplay],
    loop: true,
    simulateTouch: true,
  }
  return (
    <section className={"about-us__section"}>
      <div className={"about-us__container"}>
        <h2 className={"about-us__title"}>{t("main.aboutUs.title")}</h2>
        <div className={"about-us__describe-the-company"}>
          <div></div>
          <div className={"about-us__description"}>
            <div className={"about-us__text"}>
              {description.map((elt, key) => {
                return <p key={key}>{elt}</p>
              })}
            </div>
            <div className={"about-us__statistic"}>
              <div className={"about-us__indicator"}>
                <span>20</span>
                <p dangerouslySetInnerHTML={{ __html: t("main.aboutUs.firstCuriousIndicator") }}></p>
              </div>
              <div className={"about-us__indicator"}>
                <span>10</span>
                <p>{t("main.aboutUs.secondCuriousIndicator")}</p>
              </div>
            </div>
          </div>
        </div>
        <h4 className={"about-us__sub-title"}>Our friendly team</h4>
        <div className={"about-us__team-list"}>
          {
            //prettier-ignore
            isTablet 
            ? (
            <Swiper {...swiperOptions} className={"about-us__swiper"}>
              {team.map((person, key) => {
                return (
                  <SwiperSlide key={key}>
                    <PersonCard person={person} />
                  </SwiperSlide>
                )
              })}
            </Swiper>
            ) 
            : (
               team.map((person, key) => {
               return <PersonCard key={key} person={person} />
               })
            )
          }
        </div>
        <h4
          className={"about-us__our-team-title"}
          dangerouslySetInnerHTML={{ __html: t("main.aboutUs.ourTeamPrincipleTitle") }}
        ></h4>
        <ul className={"about-us__principles principles"}>
          {principles.map((elt, key) => {
            return (
              <li className={"principles__item"} key={key}>
                <h5 className={"principles__title"}>{elt.title}</h5>
                <p className={"principles__description"}>{elt.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default AboutUs
