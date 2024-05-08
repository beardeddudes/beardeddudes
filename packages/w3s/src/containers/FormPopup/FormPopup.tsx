import { FC } from "react"
import { useApp } from "./../../contexts/App"

import { Field, Form, Formik, FormikHelpers } from "formik"
import * as Yup from "yup"
import { SvgIcon } from "./../../components/elements/Icon"
import "./FormPopup.scss"

const FormPopup: FC = () => {
  const { setFormPopupVisibility } = useApp()

  const Schema = Yup.object().shape({
    aboutProject: Yup.string().required(),
    company: Yup.string().required(),
    email: Yup.string().email().required(),
    hearAbout: Yup.string().required(),
    name: Yup.string().required(),
  })

  interface IValuesForm {
    aboutProject: string
    company: string
    email: string
    hearAbout: string
    name: string
  }

  const initialFormValues: IValuesForm = {
    aboutProject: "",
    company: "",
    email: "",
    hearAbout: "",
    name: "",
  }

  const handleSubmit = (values: IValuesForm, actions: FormikHelpers<IValuesForm>) => {
    alert(JSON.stringify(values))
    actions.resetForm()

    setTimeout(() => setFormPopupVisibility(false), 1000)
  }

  return (
    <div className={"form-popup__body"}>
      <button className={"form-popup__close-btn"} type={"button"} onClick={() => setFormPopupVisibility(false)}>
        <SvgIcon name={"close-btn"} />
      </button>
      <div className={"form-popup__container"}>
        <h2 className={"form-popup__title"}>Let&apos;s get started</h2>
        <h3 className={"form-popup__sut-title"}>Fill in the blanks and we&apos;ll respond in one business day</h3>
        <Formik
          validationSchema={Schema}
          initialValues={initialFormValues}
          onSubmit={(values, actions) => handleSubmit(values, actions)}
        >
          {({ values, errors }) => (
            <Form>
              <div className={"form-popup__form-wrapper"}>
                <div className={"form-popup__input form-popup-input"}>
                  <Field name={"name"} id={"name"} className={"form-popup-input__field"} />
                  <label htmlFor={"name"} className={`form-popup-input__label ${values.name && "label-top"}`}>
                    What&apos;s your name?
                  </label>
                  {errors.name && <div className={"form-popup-input__error"}>{errors.name}</div>}
                </div>
                <div className={"form-popup__input form-popup-input"}>
                  <Field name={"company"} id={"company"} className={"form-popup-input__field"} />
                  <label htmlFor={"company"} className={`form-popup-input__label ${values.company && "label-top"}`}>
                    Name of your company / organization?
                  </label>
                  <div className={"form-popup-input__error"}>{errors.company}</div>
                </div>
                <div className={"form-popup__input form-popup-input"}>
                  <Field name={"email"} id={"email"} className={"form-popup-input__field"} />
                  <label htmlFor={"email"} className={`form-popup-input__label ${values.email && "label-top"}`}>
                    What&apos;s your Email?
                  </label>
                  <div className={"form-popup-input__error"}>{errors.email}</div>
                </div>
                <div className={"form-popup__input form-popup-input"}>
                  <Field name={"hearAbout"} id={"hearAbout"} className={"form-popup-input__field"} />
                  <label htmlFor={"hearAbout"} className={`form-popup-input__label ${values.hearAbout && "label-top"}`}>
                    How did you hear about us?
                  </label>
                  <div className={"form-popup-input__error"}>{errors.hearAbout}</div>
                </div>
                <div className={"form-popup__input form-popup-input form-popup-input--big"}>
                  <Field name={"aboutProject"} id={"aboutProject"} className={"form-popup-input__field"} />
                  <label
                    htmlFor={"aboutProject"}
                    className={`form-popup-input__label ${values.aboutProject && "label-top"}`}
                  >
                    Tell us about the project
                  </label>
                  <div className={"form-popup-input__error"}>{errors.aboutProject}</div>
                </div>
              </div>
              <button className={"form-popup__submit-btn"} type={"submit"}>
                <span>Submit</span>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default FormPopup
