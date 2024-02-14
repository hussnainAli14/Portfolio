import React from "react";
import {
  BlueText,
  FlexContainer,
  Heading,
  IconContainer,
  PaddingContainer,
  ParaText,
} from "../styles/Global.styled";
import {
  Particle,
  ShowCaseParticleContainer,
  ShowImageCard,
} from "../styles/Showcase.styled";
import ShowcaseImage from "../assets/showcase-img.png";
import BackgroundImage from "../assets/particle.png";
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const Introduction = () => {
  return (
    <PaddingContainer
      id="Home"
      left="3%"
      right="10%"
      top="15%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
      responsiveTop="8rem"
    >
      <FlexContainer fullwidthchild>
        <motion.div
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
          transition="transition"
        >
          <Heading as="h4" size="h4">
            Hello!
          </Heading>
          <Heading as="h1" size="h1" top="0.5rem" bottom="1rem">
            {" "}
            I'm <BlueText>Raja Hussnain Ali</BlueText>{" "}
          </Heading>
          <Heading as="h3" size="h3">
            {" "}
            I'm <BlueText>Frontend Developer</BlueText>{" "}
          </Heading>
          <ParaText as="p" top="2rem" bottom="4rem">
            Hello, my name is Raja Hussnain Ali and I'm a front-end developer
            with 1+ year of experience in creating and designing user-friendly
            websites and web applications.
          </ParaText>
          <FlexContainer gap="20px">
            <IconContainer onClick={()=>window.open('https://www.linkedin.com/in/raja-hussnain-721ba11ba/','_blank')} color="white" size="1.5rem">
              {" "}
              <BsLinkedin />{" "}
            </IconContainer>
            <IconContainer onClick={()=>window.open('https://github.com/hussnainAli14','_blank')} color="white" size="1.5rem">
              {" "}
              <FaGithub />{" "}
            </IconContainer>
          </FlexContainer>
        </motion.div>
        <FlexContainer
          justify="flex-end"
          as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          transition="transition"
        >
          <ShowCaseParticleContainer>
            <ShowImageCard>
              <img src={ShowcaseImage} alt="showCaseImage" />
            </ShowImageCard>
            <Particle
              as={motion.img}
              animate={{
                x: [0, 100, 0],
                rotate: 360,
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
              }}
              src={BackgroundImage}
              alt="particle"
              top="-80px"
              left="20px"
              rotate="60deg"
            />
            <Particle
              as={motion.img}
              animate={{
                x: [0, 100, 0],
                rotate: 360,
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
              }}
              src={BackgroundImage}
              alt="particle"
              top="50px"
              right="-70px"
              rotate="0deg"
            />{" "}
            <Particle
              as={motion.img}
              animate={{
                y: [0, -100, 0],
                rotate: 360,
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
              }}
              src={BackgroundImage}
              alt="particle"
              bottom="10px"
              left="-70px"
              rotate="50deg"
            />
          </ShowCaseParticleContainer>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default Introduction;
