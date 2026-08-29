import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Achievements from "../../containers/achievements/Achievements";
import Experience from "../../containers/experience/Experience";
import Skills from "../../containers/skills/Skills";
import Education from "../../containers/education/Education";
import Footer from "../../components/footer/Footer";

function Home(props) {
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
      <Achievements theme={props.theme} />
      <Experience theme={props.theme} />
      <Skills theme={props.theme} />
      <Education theme={props.theme} />
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;
