import React from "react";
import { BlueText, Heading, PaddingContainer } from "../styles/Global.styled";
import { projectDetails } from "../utils/Data";
import Project from "./Layout/Project";
import { motion } from "framer-motion";
import { fadeInTopVariant } from "../utils/Variants";

const MyProjects = () => {
  return (
    <PaddingContainer id="Projects" top="5%" bottom="5%" 
    responsiveTop='20%'
    responsiveLeft='1rem'
    responsiveRight='1rem'

    >
      <Heading as={motion.h4} variants={fadeInTopVariant} initial='hidden' whileInView='visible' size="h4">
        MY PROJECTS
      </Heading>
      <Heading as={motion.h2} variants={fadeInTopVariant} initial='hidden' whileInView='visible'size="h2">
        What <BlueText>I have built</BlueText>
      </Heading>
      {projectDetails.map((project, index) => (
        <PaddingContainer top="5rem" bottom="5rem" key={index}>
          <Project
            ProjectName={project.project_name}
            Description={project.project_des}
            Tech={project.tech_stack}
            ProjectImg={project.project_image}
            reverse={project.reverse}
            ProjectUrl = {project.project_url}
          />
        </PaddingContainer>
      ))}
    </PaddingContainer>
  );
};

export default MyProjects;
