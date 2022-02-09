import React from "react";
import { saveAs } from "file-saver";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => {
  const handleClick = () => {
    saveAs(
      "https://drive.google.com/file/d/1pASF9IcugrW23p8NvXNThy8u4V2rQSev/view?usp=sharing",
      "My resume.pdf"
    );
  };
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hi, I'm Saad.{" "}
          <span
            style={{
              textDecoration: "underline",
              textDecorationColor: "#AAA",
              textUnderlineOffset: "6px ",
            }}
          >
            A Full Stack MERN Developer & UI/UX Designer{" "}
          </span>{" "}
          based in Karachi, Pakistan.
        </SectionText>
        <Button onClick={handleClick}>View Resume</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
