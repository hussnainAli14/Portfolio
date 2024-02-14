import React from 'react'
import { Button, FlexContainer, Heading, IconContainer, PaddingContainer, ParaText } from '../../styles/Global.styled'
import { FaGithub } from 'react-icons/fa'
import { ProjectImage, ProjectImageContainer, TechStackCard } from '../../styles/MyProjects.styled'
import {motion} from 'framer-motion'
import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants'
const Project = ({ProjectName,Description,Tech,ProjectImg,reverse,ProjectUrl}) => {
  return (
    <FlexContainer
    direction={reverse?'row-reverse':false}
    fullwidthchild>
      <motion.div
      variants={reverse?fadeInLeftVariant:fadeInRightVariant}
      initial='hidden'
      whileInView='visible'
      >
        <FlexContainer  gap='1rem'  >
            <Heading as='h3' size='h3' bottom='1rem' >
                {ProjectName}
            </Heading>
            <IconContainer color='blue' size='2rem' >
            <FaGithub/>
            </IconContainer>
         </FlexContainer>
            <PaddingContainer top='1rem' >
                <FlexContainer gap='1.5rem' >
                   { Tech.map((tech,index)=>{
                    return(
                        <TechStackCard key={index} >
                        {tech}
                    </TechStackCard>
                    )
                   })
                    }
                </FlexContainer>
            </PaddingContainer>
            <ParaText top='1.5rem' bottom='2rem' >
                {Description}
            </ParaText>
            <Button onClick={()=>window.open(ProjectUrl,'_blank')} >View Code</Button>
        </motion.div>
            <ProjectImageContainer 
            as={motion.div}
             variants={reverse?fadeInLeftVariant:fadeInRightVariant}
             initial='hidden'
             whileInView='visible'
            justify={reverse?"flex-start":"flex-end"}
            
            >
                <ProjectImage src={ProjectImg} />
            </ProjectImageContainer>
    </FlexContainer>
  )
}

export default Project
