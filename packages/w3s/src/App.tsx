import i18next from "i18next"
import { FC } from "react"
import { I18nextProvider } from "react-i18next"
import { RouterProvider } from "react-router-dom"

import { AppProvider } from "./contexts/App"
import Router from "./pages/Router"

import globalEn from "./locales/en/global.json"

i18next.init({
  fallbackLng: "en",
  lng: "auto",
  interpolation: { escapeValue: false },
  resources: {
    en: {
      global: globalEn,
    },
  },
})

const App: FC = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <AppProvider>
        <RouterProvider router={Router} />
      </AppProvider>
    </I18nextProvider>
  )
}

export default App
