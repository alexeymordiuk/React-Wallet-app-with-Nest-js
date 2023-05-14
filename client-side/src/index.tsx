import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import GlobalStyle from "./wrraper/Global.styled";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/theme";
import { ResponsiveProvider } from "./components/responsive/ResponsiveProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <ResponsiveProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </ResponsiveProvider>
    </ThemeProvider>
  </HashRouter>
);
