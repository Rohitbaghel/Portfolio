import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";

function getBasename() {
  const base = import.meta.env.BASE_URL;
  if (!base || base === "/") {
    return undefined;
  }
  return base.replace(/\/$/, "");
}

function Main(props) {
  const pageProps = { theme: props.theme, setTheme: props.setTheme };

  const renderPage = (Component) => (routeProps) => (
    <Component {...routeProps} {...pageProps} />
  );

  return (
    <BrowserRouter basename={getBasename()}>
      <Switch>
        {settings.isSplash ? (
          <>
            <Route path="/" exact render={renderPage(Splash)} />
            <Route path="/splash" render={renderPage(Splash)} />
            <Route path="/home" render={renderPage(Home)} />
          </>
        ) : (
          <>
            <Route path="/" exact render={renderPage(Home)} />
            <Route path="/home" render={renderPage(Home)} />
            <Redirect from="/splash" to="/" />
          </>
        )}
        <Route path="/projects" render={renderPage(Projects)} />
        <Route path="/contact" render={renderPage(Contact)} />
        <Redirect from="/project" to="/projects" />
      </Switch>
    </BrowserRouter>
  );
}

export default Main;
