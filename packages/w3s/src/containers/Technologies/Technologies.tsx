import React, { FC, useState } from "react"

import { ReactTyped } from "react-typed"
import "./Technologies.scss"

const Technologies: FC = () => {
  type IToggle = "design" | "frontend" | "backend"

  const [toggle, setToggle] = useState<IToggle>("design")

  return (
    <section className={"technologies__section"}>
      <div className={"technologies__container"}>
        <h2 className={"technologies__title"}>technologies</h2>
        <div className={"technologies__content"}>
          <div className={"technologies__content-main content-main"}>
            <div className={"content-main__buttons"}>
              <button
                className={`content-main__btn ${toggle === "design" ? "_active" : ""}`}
                onClick={() => setToggle("design")}
              >
                <span>Design</span>
              </button>
              <button
                className={`content-main__btn ${toggle === "frontend" ? "_active" : ""}`}
                onClick={() => setToggle("frontend")}
              >
                <span>Frontend</span>
              </button>
              <button
                className={`content-main__btn ${toggle === "backend" ? "_active" : ""}`}
                onClick={() => setToggle("backend")}
              >
                <span>Backend</span>
              </button>
            </div>
            <div className={"content-main__text"}>
              {toggle === "design" && (
                <React.Fragment>
                  <p>
                    Gleam is a clean and modern photography WordPress theme for creative photographers websites. You can
                    use it as a portfolio to showcase your work.
                  </p>
                  <p>Make your profile page stand out from the crowd, highlight your submissions</p>
                </React.Fragment>
              )}
              {toggle === "frontend" && (
                <React.Fragment>
                  <p>
                    Gleam is a clean and modern photography WordPress theme for creative photographers websites. You can
                    use it as a portfolio to showcase your work.
                  </p>
                  <p>
                    Gleam is a clean and modern photography WordPress theme for creative photographers websites. You can
                    use it as a portfolio to showcase your work.
                  </p>
                </React.Fragment>
              )}
              {toggle === "backend" && (
                <React.Fragment>
                  <p>
                    Gleam is a clean and modern photography WordPress theme for creative photographers websites. You can
                    use it as a portfolio to showcase your work.
                  </p>
                  <p>Make your profile page stand out from the crowd, highlight your submissions</p>
                  <p>Make your profile page stand out from the crowd, highlight your submissions</p>
                </React.Fragment>
              )}
            </div>
            <h3 className={"content-main__heading"}>
              {toggle === "design" && (
                <ReactTyped
                  strings={["design"]}
                  startDelay={100}
                  typeSpeed={150}
                  backSpeed={100}
                  startWhenVisible={true}
                  showCursor={false}
                />
              )}
              {toggle === "frontend" && (
                <ReactTyped
                  strings={["frontend"]}
                  startDelay={100}
                  typeSpeed={150}
                  backSpeed={100}
                  startWhenVisible={true}
                  showCursor={false}
                />
              )}
              {toggle === "backend" && (
                <ReactTyped
                  strings={["backend"]}
                  startDelay={100}
                  typeSpeed={150}
                  backSpeed={100}
                  startWhenVisible={true}
                  showCursor={false}
                />
              )}
            </h3>
          </div>
          <div className={"technologies__content-icons"}>
            {toggle === "design" && (
              <React.Fragment>
                <div className={"technologies__content-icon technologies__content-icon--1"}></div>
                <div className={"technologies__content-icon technologies__content-icon--2"}></div>
                <div className={"technologies__content-icon technologies__content-icon--3"}></div>
                <div className={"technologies__content-icon technologies__content-icon--4"}></div>
                <div className={"technologies__content-icon technologies__content-icon--5"}></div>
                <div className={"technologies__content-icon technologies__content-icon--6"}></div>
              </React.Fragment>
            )}
            {toggle === "frontend" && (
              <React.Fragment>
                <div className={"technologies__content-icon technologies__content-icon--1"}></div>
                <div className={"technologies__content-icon technologies__content-icon--2"}></div>
                <div className={"technologies__content-icon technologies__content-icon--3"}></div>
                <div className={"technologies__content-icon technologies__content-icon--4"}></div>
                <div className={"technologies__content-icon technologies__content-icon--5"}></div>
              </React.Fragment>
            )}
            {toggle === "backend" && (
              <React.Fragment>
                <div className={"technologies__content-icon technologies__content-icon--1"}></div>
                <div className={"technologies__content-icon technologies__content-icon--2"}></div>
                <div className={"technologies__content-icon technologies__content-icon--3"}></div>
                <div className={"technologies__content-icon technologies__content-icon--4"}></div>
                <div className={"technologies__content-icon technologies__content-icon--4"}></div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies
