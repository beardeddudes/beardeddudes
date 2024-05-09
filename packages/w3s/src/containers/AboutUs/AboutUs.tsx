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

import PersonCard, { IPerson } from "./../../components/PersonCard/PersonCard"

import noImage from "./../../assets/images/no-image-placeholder.png"

import "./AboutUs.scss"

interface IPrinciple {
  title: string
  description: string
}

const AboutUs: FC = () => {
  const { isTablet } = useBreakpoints()

  //prettier-ignore
  const team = [
  const team: IPerson[] = [
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
  const principles: IPrinciple[] = [
    {
      title: "Quality",
      description:
        "Discover outstanding websites that cater to online businesses, showcasing a wide range of products and services across diverse",
    },
    {
      title: "Time",
      description:
        "Discover outstanding websites that cater to online businesses, showcasing a wide range of products and services across diverse Discover outstanding websites that cater to online businesses, showcasing a wide range of products and services across diverse",
    },
    {
      title: "Money",
      description:
        "Discover outstanding websites that cater to online businesses, showcasing a wide range of products and services across diverse",
    },
    {
      title: "Other",
      description:
        "Discover outstanding websites that cater to online businesses, showcasing a wide range of products and services across diverse Discover outstanding websites that cater to online businesses, showcasing a wide range of products and services across diverse",
    },
  ] as const

  return (
    <React.Fragment>
      <section className={"about-us__section"}>
        <div className={"about-us__container"}>
          <h2 className={"about-us__title"}>About Us</h2>
          <div className={"about-us__describe-the-company"}>
            <div></div>
            <div className={"about-us__description"}>
              <div className={"about-us__text"}>
                <p>
                  Gleam is a clean and modern photography WordPress theme for creative photographers websites. You can
                  use it as a portfolio to showcase your work.
                </p>
                <p>WordPress theme for creative photographers websites...</p>
              </div>
              <div className={"about-us__statistic"}>
                <div className={"about-us__indicator"}>
                  <span>20</span>
                  <p>
                    Discover outstanding <br /> websites
                  </p>
                </div>
                <div className={"about-us__indicator"}>
                  <span>10</span>
                  <p>WordPress theme for creative photographers websites</p>
                </div>
              </div>
            </div>
          </div>
          <h4 className={"about-us__our-team-title"}>Our friendly team</h4>
          <div className={"about-us__our-team"}>
            {team.map((elt, key) => {
              return <PersonCard person={elt} key={key} />
            })}
          </div>
          <h4 className={"about-us__our-team-title"}>
            Quality is <br /> 100% basic
          </h4>
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
      </section>
    </React.Fragment>
  )
}

export default AboutUs
