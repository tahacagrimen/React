import logo from "./logo.svg";
import "./App.css";
import { IntlProvider, FormattedMessage } from "react-intl";
import React, { useState, useEffect } from "react";

const messages = {
  "tr-TR": {
    title: "Merhaba Dünya",
    description: "Bu bir test metini",
  },
  "en-US": {
    title: "Hello World",
    description: "This is a test text",
  },
};

function App() {
  const defaultLocale = localStorage.getItem("locale") || navigator.language;
  // Browserın default dilini bulmaya yarıyor.
  // Local storage varsa onu kullanıyor yoksa browserın default dilini kullanıyor.

  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <div className="App">
      <br />
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id="title" />
        <p>
          <FormattedMessage id="description" />
        </p>
        <br />
        <br />
        <button onClick={() => setLocale("tr-TR")}>TR</button>
        <button onClick={() => setLocale("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
