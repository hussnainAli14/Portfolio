import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/Theme";
import { Container, MainBody } from "./styles/Global.styled";
import Introduction from "./components/Introduction";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProjects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <ThemeProvider theme={theme} >
      <ToastContainer/>
      <MainBody>
        <Navbar/>
        <Container>
          <Introduction/>
          <MySkills/>
          <MyProjects/>
          <Footer/>
        </Container>
      </MainBody>
    </ThemeProvider>
  );
}

export default App;
