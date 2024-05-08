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
  jobTitle: string
  experience: number
}

const AboutUs: FC = () => {
  const { isTablet } = useBreakpoints()

  //prettier-ignore
  const team = [
    {
      photo: noImage,
      name: "Jaroslav",
      jobTitle: "Founder, Teamlead Backend developer",
      experience: 15,
    },
    {
      photo: noImage,
      name: "Dmytro",
      jobTitle: "Co-founder Frontand developer",
      experience: 5,
    },
    {
      photo: noImage,
      name: "Julia",
      jobTitle: "Content manager",
      experience: 9,
    },
    {
      photo: noImage,
      name: "Lubov",
      jobTitle: "Data analyst",
      experience: 4,
    },
    {
      photo: noImage,
      name: "Oleh",
      jobTitle: "UX/UI designer",
      experience: 8,
    },
    {
      photo: noImage,
      name: "Viktor",
      jobTitle: "Manager",
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
        <h2 className={"about-us__title"}>about us</h2>
        <div className={"about-us__info"}>
          <div></div>
          <div className={"about-us__description"}>
            <div className={"about-us__text"}>
              <p>
                Gleam is a clean and modern photography WordPress theme for creative photographers websites. You can use
                it as a portfolio to showcase your work.
              </p>
              <p>WordPress theme for creative photographers websites</p>
            </div>
            <div className={"about-us__indicators"}>
              <div className={"about-us__indicator"}>
                <span>20</span>
                <p>
                  Discover outstanding <br />
                  websites
                </p>
              </div>
              <div className={"about-us__indicator"}>
                <span>10</span>
                <p>WordPress theme for creative photographers websites</p>
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
        <h4 className={"about-us__sub-title"}>
          Quality is <br /> 100% basic
        </h4>
        <ul className={"about-us__principles principles"}>
          <li className={"principles__item"}>
            <h5 className={"principles__heading"}>Quality</h5>
            <p className={"principles__text"}>
              Discover outstanding websites that cater to online businesses, showcasing a wide range of products and
              services across diverse
            </p>
          </li>
          <li className={"principles__item"}>
            <h5 className={"principles__heading"}>Time</h5>
            <p className={"principles__text"}>
              Discover outstanding websites that cater to online businesses, showcasing a wide range of products and
              services across diverse Discover outstanding websites that cater to online businesses, showcasing a wide
              range of products and services across diverse
            </p>
          </li>
          <li className={"principles__item"}>
            <h5 className={"principles__heading"}>Money</h5>
            <p className={"principles__text"}>
              Discover outstanding websites that cater to online businesses, showcasing a wide range of products and
              services across diverse
            </p>
          </li>
          <li className={"principles__item"}>
            <h5 className={"principles__heading"}>Other</h5>
            <p className={"principles__text"}>Discover outstanding websites that cater to online businesses.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AboutUs
