import React from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import Education from "./education/Education";
import Footer from "./footer/Footer";
import NavBar from "./navBar/NavBar";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import { useState } from "react";

function withScrollToTarget(WrappedComponent) {
  class WithScroll extends React.Component {
    componentDidMount() {
      const {
        match: {
          params: { section },
        },
      } = this.props;
      // Remember we had 2 <Route/>s, so if `section` is provided...
      if (section) {
        const scrollToTarget = document.getElementById(section);
        // And just in case the item was removed or there was an ID mismatch
        if (scrollToTarget) {
          scrollToTarget.scrollIntoView();
        }
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return WithScroll;
}

const Portfolio = (props) => {
  let [disable, setDisable] = useState(false);

  const disableFunc = (d) => {
    if (!d) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };

  return (
    <>
      <NavBar disabled={disable} />
      <About />
      <Education />
      <Skills />
      <Projects disableFunc={disableFunc} props={props} />
      <Contact />
      <Footer />
    </>
  );
};

export default withScrollToTarget(Portfolio);
