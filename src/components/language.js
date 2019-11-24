import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "English",
  fr: "Français",
}

const Language = () => (
  <div>
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) =>
        languages.map(language => (
          <a
            key={language}
            onClick={() => changeLocale(language)}
            style={{
              color: currentLocale === language ? `yellow` : `white`,
              margin: 10,
              textDecoration: `underline`,
              cursor: `pointer`,
            }}
          >
            {languageName[language]}
          </a>
        ))
      }
    </IntlContextConsumer>
  </div>
)

export default Language
