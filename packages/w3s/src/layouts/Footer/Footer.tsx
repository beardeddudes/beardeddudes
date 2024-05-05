import { FC } from "react"

import "./Footer.scss"
const Footer: FC = () => {
  return (
    <div className={"footer__section"}>
      <div className={"footer__container"}>
        <div className={"footer__collaborate"}>
          <div className={"footer__questions"}>Got a project? Want to collaborate?</div>
          <div className={"footer__title"}>GET IN TOUCH</div>
        </div>
        <div className={"footer__navigate"}>
          <div className={"footer__links footer__links--social"}>
            <a className={"footer__link"}>LINKEDIN</a>
            <a className={"footer__link"}>instagram</a>
          </div>
          <div className={"footer__button"}>
            <span>Start a project</span>
          </div>
          <div className={"footer__links footer__links--mail"}>
            <a className={"footer__link"}>hello@cactus.io</a>
            <a className={"footer__link"}>Telegram</a>
          </div>
        </div>
        <div className={"footer__rights"}>© 2023 Cactus. All rights reserved.</div>
      </div>
    </div>
  )
}

export default Footer
