import React from 'react'
import { BlueText, FlexContainer, Heading, IconContainer, PaddingContainer, ParaText } from '../styles/Global.styled'
import { SkillsCard, SkillsCardContainer } from '../styles/MySkills.styled'
import { skills } from '../utils/Data'
import { motion } from 'framer-motion'
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants'

const MySkills = () => {
  return (
    <PaddingContainer 
    id='Skills'
    top='10%'
    bottom='10%'
    responsiveLeft='1rem'
    responsiveRight='1rem'
    >
    <FlexContainer responsiveFlex fullwidthchild responsiveDirection='column-reverse' >
      <SkillsCardContainer
      as={motion.div}
      variants={fadeInLeftVariant}
      initial='hidden'
      whileInView='visible'
      transition='transition'
      >
        {
            skills.map((skill,index)=>{
                return (
                <SkillsCard key={index} >
                    <IconContainer size='5rem' color='blue' >
                        { skill.icon }
                    </IconContainer>
                    <Heading as='h4' size='h4'>
                        {skill.tech}
                    </Heading>
                </SkillsCard>    
            )})
        }
      </SkillsCardContainer>
      <motion.div  variants={fadeInRightVariant}
      initial='hidden'
      whileInView='visible'
      transition='transition' >
        <Heading as='h4' size='h4' > MY SKILLS</Heading>
        <Heading as='h2' size='h2' >
            What <BlueText>I can do</BlueText>
        </Heading>
        <ParaText top='2rem' bottom='1.5rem' >
            As a Developer, I have a wide range of experience in front-end development. I'm proficient in JavaScript, React Js, Next Js, Redux, Material UI, Ant Design, Tailwind CSS, CSS, SASS, SCSS. My strong experience in building responsive and dynamic user interfaces has allowed me to create engaging and interacting web applications.
        </ParaText>
        <ParaText>
            I have experience in React and Next for building scalable and maintainable applications. This has allowed me to create efficient and sustainable code that can adept to the changing needs of business.
        </ParaText>
      </motion.div>
    </FlexContainer>
    </PaddingContainer>
  )
}

export default MySkills
