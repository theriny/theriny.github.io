import React from "react";
import ReactDOM from "react-dom/client";
// Styles
import "./custom.scss";
// State
import { Provider } from "react-redux";
import { store } from "./app/store";
// Context
import { AppProvider } from "./appContext"; // ✅ Add this line
// Config
import { filteredProjects, projectCardImages } from "./config";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <AppProvider> {/* ✅ Wrap App in your custom context */}
      <App
        filteredProjects={filteredProjects}
        projectCardImages={projectCardImages}
      />
    </AppProvider>
  </Provider>
);

serviceWorkerRegistration.register();
