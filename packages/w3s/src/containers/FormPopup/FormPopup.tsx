import { FC } from "react"
import { useApp } from "./../../contexts/App"

import { SvgIcon } from "./../../components/elements/Icon"
import "./FormPopup.scss"

const FormPopup: FC = () => {
  const { setFormPopupVisibility } = useApp()
  return (
    <div className={"form-popup__body"}>
      <button className={"form-popup__close-btn"} type={"button"} onClick={() => setFormPopupVisibility(false)}>
        <SvgIcon name={"close-btn"} />
      </button>
      <div className={"form-popup__container"}>
        <h2 className={"form-popup__title"}>Let&apos;s get started</h2>
        <h3 className={"form-popup__sut-title"}>Fill in the blanks and we&apos;ll respond in one business day</h3>
        <button className={"form-popup__submit-btn"} onClick={() => setFormPopupVisibility(false)}>
          <span>Submit</span>
        </button>
      </div>
    </div>
  )
}

export default FormPopup
