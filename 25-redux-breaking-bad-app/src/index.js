import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// İlk önce redux klasörüne store.js dosyasını ekleyin. Sonra aşağıdakileri index.js e import ediyoruz.

// Provider componenti ile redux kullanımını sağlayan kütüphane.
// store kullanımı için import edilir.
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
