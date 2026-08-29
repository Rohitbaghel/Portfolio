import React, { useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <div>
          <ErrorBoundary>
            <Main theme={themes[theme]} setTheme={setTheme} />
          </ErrorBoundary>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
