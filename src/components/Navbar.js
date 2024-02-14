import React, { useEffect, useState } from 'react'
import { Logo, MenuIcon, NavbarContainer } from '../styles/Navbar.styled'
import { BlueText, Container, FlexContainer, PaddingContainer } from '../styles/Global.styled'
import {GiHamburgerMenu} from 'react-icons/gi'
import NavMenu from './Layout/NavMenu'
import { theme } from '../utils/Theme'
import { AnimatePresence, motion } from 'framer-motion'
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [sticky,setSticky] = useState(false)

    useEffect(()=>{
        const onScroll = ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        }
        window.addEventListener('scroll',onScroll)

        return ()=>window.removeEventListener('scroll',onScroll)
    },[])

  return (

    <NavbarContainer bgColor={sticky ? theme.colors.primary : 'transparent'} >
      <PaddingContainer
      top='1.2rem'
      bottom='1.2rem'
      responsiveLeft='1rem'
      responsiveRight='1rem'
      >
      <Container>
        <FlexContainer justify='space-between' responsiveFlex >
            <Logo>
                Raja Hussnain <BlueText> Ali</BlueText>
            </Logo>
            <MenuIcon
            as={motion.a}
            whileHover={{scale:1.2}}
            onClick={()=>{setOpenMenu(!openMenu)}}
            >
            <GiHamburgerMenu/>
            </MenuIcon>
        </FlexContainer>
      </Container>
      <AnimatePresence>
      {
        openMenu &&
        <NavMenu setOpenMenu={setOpenMenu} />
      }
      </AnimatePresence>
      </PaddingContainer>
    </NavbarContainer>
  )
}

export default Navbar
