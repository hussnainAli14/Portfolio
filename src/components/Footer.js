import React, { useRef, useState } from "react";
import {
  BlueText,
  Button,
  ErrorMessage,
  FlexContainer,
  Heading,
  PaddingContainer,
} from "../styles/Global.styled";
import { ContactForm, FormInput, FormLabel } from "../styles/Footer.styled";
import { motion } from "framer-motion";
import { fadeInBottomVariant } from "../utils/Variants";
import emailjs from "@emailjs/browser";
import { handleChange, validateForm } from "../utils/Functions";
import { toast } from "react-toastify";
const Footer = () => {
  const form = useRef();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
const [errorMessage, setErrorMessage] = useState('')
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_r6wol5e", "template_q4i9na7", form.current, {
        publicKey: "8zi4kksHkHAnjAGeJ",
        name:userName,
        email:email,
        message:message
      })
      .then(
        () => {
         toast.success('Sent Successfully!')
        },
        (error) => {
          toast.error('Oops! Something went wrong')

        }
      );
  };



  return (
    <PaddingContainer id="Contact" top="5%" bottom="10%">
      <Heading
        as={motion.h4}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
        align="center"
      >
        MY CONTACT
      </Heading>
      <Heading
        as={motion.h2}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
        align="center"
        top="0.5rem"
      >
        Contact <BlueText>Me Here</BlueText>
      </Heading>
      <PaddingContainer top="3rem">
        <FlexContainer justify="center">
          <ContactForm
            as={motion.form}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible"
            ref={form}
          >
            <PaddingContainer bottom="2rem">
              <FormLabel>Name:</FormLabel>
              <FormInput
                type="text"
                placeholder="Enter your name"
                name="userName"
                value={userName}
                onChange={(e) => {
                  handleChange(e, setUserName);
                }}
              />
            </PaddingContainer>
            <PaddingContainer bottom="2rem">
              <FormLabel>Email:</FormLabel>
              <FormInput
                type="email"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => {
                  handleChange(e, setEmail);
                }}
              />
            </PaddingContainer>
            <PaddingContainer bottom="2rem">
              <FormLabel>Message:</FormLabel>
              <FormInput
                as="textarea"
                placeholder="Enter your message"
                name="message"
                value={message}
                onChange={(e) => {
                  handleChange(e, setMessage);
                }}
              />
            </PaddingContainer>
            {
              errorMessage &&
              <PaddingContainer bottom='5%' >
               <ErrorMessage> {errorMessage} </ErrorMessage>
               </PaddingContainer>

            }
            <FlexContainer justify="center" responsiveFlex>
              <Button
                onClick={(e) => {
                  validateForm(userName,email,message,setErrorMessage,sendEmail,e)
                }}
              >
                Send Message
              </Button>
            </FlexContainer>
          </ContactForm>
        </FlexContainer>
      </PaddingContainer>
    </PaddingContainer>
  );
};

export default Footer;
