import React from "react";
import {
  MenuIcon,
  MenuItem,
  NavMenuContainer,
} from "../../styles/Navbar.styled";
import { FlexContainer, PaddingContainer } from "../../styles/Global.styled";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { slideInLeft } from "../../utils/Variants";
const NavMenu = ({ setOpenMenu }) => {
  return (
    <NavMenuContainer
      as={motion.div}
      variants={slideInLeft}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <PaddingContainer left="5%" right="5%" top="2rem">
        <FlexContainer justify="flex-end" responsiveFlex>
          <MenuIcon
            as={motion.a}
            whileHover={{ scale: 1.2 }}
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            <AiOutlineClose />
          </MenuIcon>
        </FlexContainer>
      </PaddingContainer>

      <PaddingContainer top="8%">
        <FlexContainer direction="column" align="center" responsiveFlex>
          <MenuItem
            as={motion.a}
            whileHover={{ scale: 1.2 }}
            href="#Home"
            onClick={() => setOpenMenu(false)}
          >
            Home
          </MenuItem>
          <MenuItem
            as={motion.a}
            whileHover={{ scale: 1.2 }}
            href="#Skills"
            onClick={() => setOpenMenu(false)}
          >
            Skills
          </MenuItem>
          <MenuItem
            as={motion.a}
            whileHover={{ scale: 1.2 }}
            href="#Projects"
            onClick={() => setOpenMenu(false)}
          >
            Projects
          </MenuItem>
          <MenuItem
            as={motion.a}
            whileHover={{ scale: 1.2 }}
            href="#Contact"
            onClick={() => setOpenMenu(false)}
          >
            Contact Me
          </MenuItem>
        </FlexContainer>
      </PaddingContainer>
    </NavMenuContainer>
  );
};

export default NavMenu;
