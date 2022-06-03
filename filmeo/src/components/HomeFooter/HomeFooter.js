import React from "react";
import {
  DevelopedBy,
  Footer,
  Contact,
} from "../../assets/styles/Home/HomeFooter";
import Logo from "../../assets/images/logo.png";
import GitHub from "../../assets/images/logo-do-github.png";
import Linkedin from "../../assets/images/logo-do-linkedin.png";

const HomeFooter = () => {
  return (
    <Footer>
      <DevelopedBy>
        <img src={Logo} alt="Filmeo Logo Icon" />
      </DevelopedBy>
      <Contact>
        <p>Desenvolvido por @Danilo G. Silvério</p>
        <a
          href="https://github.com/Danilo-Silverio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHub} alt="GitHub Logo Icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/danilogsilverio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Linkedin} alt="Linkedin Logo Icon" />
        </a>
      </Contact>
    </Footer>
  );
};

export default HomeFooter;
