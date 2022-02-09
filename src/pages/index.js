import { useEffect, useRef, useState } from "react";
import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import GoTopButton from "../components/GoTop/GoTopButton";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  //States
  const [showGoTop, setshowGoTop] = useState("goTopHidden");
  const [scrollPosition, setSrollPosition] = useState(0);

  //Ref for the ScrollUp action
  const refScrollUp = useRef();

  //HANDLER FUNCTIONS

  //Scroll position show/hide "top" button
  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);

    if (scrollPosition > 50) {
      window.removeEventListener("scroll", handleVisibleButton);
      console.log(position);
      return setshowGoTop("goTop");
    } else if (scrollPosition < 50) {
      return setshowGoTop("goTopHidden");
    }
  };

  //Scroll Up Handler
  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behavior: "smooth" });
  };

  //Scroll Listener
  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });
  return (
    <>
      <div ref={refScrollUp}> </div>
      <Layout>
        <GoTopButton showGoTop={showGoTop} scrollUp={handleScrollUp} />
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Technologies />
        <Timeline />
        <Acomplishments />
      </Layout>
    </>
  );
};

export default Home;
