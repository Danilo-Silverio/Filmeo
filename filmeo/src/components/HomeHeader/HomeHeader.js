import React from "react";
import {
  Header,
  HeaderButtons,
  LoginButton,
  NavigationBar,
  SignUpButton,
} from "../../assets/styles/Home/HomeHeaderStyle";
import Logo from "../../assets/images/logo.png";

const HomeHeader = () => {
  return (
    <Header>
      <div>
        <img src={Logo} alt="Filmeo logo" />
      </div>
      <NavigationBar>
        <nav>
          <ul>
            <li>Início</li>
            <li>Sobre</li>
            <li>Contato</li>
          </ul>
        </nav>
      </NavigationBar>
      <HeaderButtons>
        <LoginButton>Login</LoginButton>
        <SignUpButton>Sign Up</SignUpButton>
      </HeaderButtons>
    </Header>
  );
};

export default HomeHeader;
